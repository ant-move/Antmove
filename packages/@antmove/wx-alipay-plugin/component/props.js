const fs = require("fs-extra");
const path = require("path");
let _componentMap = require("../config/componentsInfo/index").descObject;
const eventsMap = require("./eventsMap");
const generic = require("./generic");
const preProcessCustomComponent = require("./customComponent");
const processButton = require("./processButton.js");
const processDataSet = require("./processDataSet");
const { externalForWxFn } = require("@antmove/utils");
const Config = require('../config');

module.exports = function (ast, fileInfo, renderAxml) {

    let isComponentTag = false;
    processButton(ast, fileInfo);
    let { type, props } = ast;
    processExternalClasses(ast, fileInfo);
    if (props) {
        Object.keys(props).forEach(key => {
            if (key && !props[key].value[0]) {
                props[key] = { type: "double", value: [" "] };
            }
            key = processDataSet(key, props[key], props);
            if (key === 'src' && (type === 'include' || type === 'import')) {
                let rule = props[ key].value[0];
                if ((rule[0] !== '/' && rule[0] !== '.' && rule[0] !== '{')) {
                    let tempPath = path.join(fileInfo.dirname, rule.replace(/\.axml'*/g, '.wxml'));
                    if (fs.pathExistsSync(tempPath)) {
                        rule = "./" + rule;
                    } else {
                        rule = "/" + rule;
                    }
                }

                props[key].value[0] = rule;
            }

            if (key === "wx:for") {
                // relation ref collect
                if (!isNaN(Number(props[key].value[0]))) {
                    props[key].value[0] =
                        "{{[" + props[key].value[0].split("") + "]}}";
                }
                props["ref-numbers"] = props[key];
            }

            // 数字文本兼容 
            let val = props[key].value[0].trim();
            const matched = key.match(/^data-(.+)/)
            if (val && !isNaN(Number(val))&& !matched) {
                props[key].value[0] = `{{${val}}}`;
            }
        });
    }
  
    let originType = type;
    let tagInfo = _componentMap[type];
    if(tagInfo  && tagInfo.type === 0){
        console.log(`支付宝暂不支持${type}组件`);
    }
    /**
     * 自定义组件预处理 - 事件
     */
    isComponentTag = processCustomComponent(ast, fileInfo);
    /**
     * 检测是否已存在同名的组件
     */
    if (
        tagInfo &&
        tagInfo.type === 5 &&
        !checkoutCustomComponent(fileInfo, originType)
    ) {
        processComponentMethodProp(ast.props, tagInfo.props);
        type = ast.type = tagInfo.tagName || ast.type;
        /**
         * support mutipule custom tags
         */
        fileInfo.tagsInfo = fileInfo.tagsInfo || [];

        fileInfo.tagsInfo.push(tagInfo);
        if (tagInfo.hasChildren) {
            if (ast.children) {
                let _axml = renderAxml(ast.children[0], {});
                _axml = _axml.trim();
                if (_axml[_axml.length] === "\n") {
                    _axml = _axml.substring(0, _axml.length - 1);
                }

                ast.props = ast.props || {};
                ast.props.textContent = {
                    value: [_axml],
                    type: "unknown"
                };

                ast.children = [];
            } else {
                ast.props = ast.props || {};
                ast.props.textContent = {
                    value: [""],
                    type: "single"
                };

                ast.children = [];
            }
        }

        if (!tagInfo.props) {
            return false;
        }
    } else if (tagInfo && tagInfo.type === 6) {
        type = ast.type = tagInfo.tagName || ast.type;
    }

    if (tagInfo) {
        if (tagInfo.type !== undefined) {
            if (tagInfo.type === 1) {
                type = ast.type = tagInfo.tagName || ast.type;
            }
        }

        if (tagInfo.props) {
            for (let prop in tagInfo.props) {
                let propInfo = tagInfo.props[prop];
                if (!props[prop]) continue;
                // missing
                if (propInfo.type === 0) {
                    delete props[prop];
                } else if (propInfo.type === 1) {
                    let _value = props[prop];
                    delete props[prop];
                    props[propInfo.key] = _value;
                }
            }
        }
    }
    processEvents(props);

    return isComponentTag;
};

function processEvents (obj = {}) {
    const bindReg = /^(bind|catch):?/

    for (let key in obj) {
        if (eventsMap[key]) {
            obj[eventsMap[key]] = {
                value: ['antmoveAction']
            }
            obj[`data-antmove-${key.replace(bindReg, '')}`] = obj[key]
            delete obj[key];
        } else if (/^bind:(.+)/.test(key) || /^bind(.+)/.test(key)) {
            let newEvent = RegExp.$1;
            let uper = newEvent[0].toUpperCase();
            let eventKey = `on${uper}${newEvent.substring(1)}`;
            obj[eventKey] = obj[key];
            delete obj[key];
        } else if (generic[key]) {
            obj[generic[key]] = obj[key];
            delete obj[key];
        }
    }

    return obj;
}

function processComponentMethodProp (astProps = {}, propsInfo = {}) {
    Object.keys(astProps).forEach(function (prop) {
        if (propsInfo[prop] && propsInfo[prop].type === 1) {
            astProps[propsInfo[prop].key] = astProps[prop];
            delete astProps[prop];
        }
    });

    return astProps;
}

function checkoutCustomComponent (fileInfo, tagName) {
    let bool = false,
        json,
        appJson;
    if (fileInfo.extname === ".wxml") {
        json = fileInfo.path.replace(".wxml", ".json");
        if (!fs.pathExistsSync(json)) return false;

        if (!fileInfo.jsonUsingComponents) {
            json = JSON.parse(fs.readFileSync(json, "utf8")) || {};
            appJson =
                JSON.parse(
                    fs.readFileSync(
                        path.join(fileInfo.entry, "app.json"),
                        "utf8"
                    )
                ) || {};
        } else {
            json = fileInfo.jsonUsingComponents;
            appJson = fileInfo.appUsingComponents;
        }
        if (json.usingComponents && json.usingComponents[tagName]) {
            bool = true;
        } else if (
            appJson.usingComponents &&
            appJson.usingComponents[tagName]
        ) {
            bool = true;
        }

        if (!tagName) {
            fileInfo.jsonUsingComponents =
                fileInfo.jsonUsingComponents || json.usingComponents;
            fileInfo.appUsingComponents =
                fileInfo.appUsingComponents || appJson.usingComponents;
            return {
                component: json.usingComponents,
                app: appJson.usingComponents
            };
        }
    }

    return bool;
}

function processCustomComponent (ast, fileInfo) {
    let isComponentTag = false;
    /**
     * 自定义组件事件处理
     */

    if (!fileInfo.jsonUsingComponents) {
        let customComponents = checkoutCustomComponent(fileInfo) || {};
        fileInfo.jsonUsingComponents = customComponents.component || {};
    }
    fileInfo.appUsingComponents = fileInfo.appUsingComponents || {};
    if (
        fileInfo.jsonUsingComponents[ast.type] ||
        fileInfo.appUsingComponents[ast.type]
    ) {
        isComponentTag = true;
        let _type = ast.type;
        preProcessCustomComponent(ast);
        componentInTemplate(ast);
        if (fileInfo.appUsingComponents[ast.type]) {
            fileInfo.customAppUsingComponents =
                fileInfo.customAppUsingComponents || {};
            fileInfo.customAppUsingComponents[ast.type] =
                fileInfo.customAppUsingComponents[ast.type] ||
                fileInfo.appUsingComponents[_type];
        }

        if (ast.props) {
            Object.keys(ast.props).forEach(function (prop) {
                let value = ast.props[prop].value[0];
                if (prop.match(/^(bind:*)(\w+)/) && !value.match(/\{/)) {
                    let newProp = prop.replace(/^(bind:*)\w+/, function (
                        $,
                        $1,
                        $2,
                        $3
                    ) {
                        let prop = $.substring($1.length);
                        return "on" + prop[0].toUpperCase() + prop.substring(1);
                    });

                    ast.props[newProp] = ast.props[prop];
                    delete ast.props[prop];
                }

                // a:key
                if (prop.match(/:key$/)) {
                    ast.props[prop].value[0] = "*this";
                }

                if (!Config.component2) {
                    ast.props['_parent_ref'] = { type: "double", value: ["{{isMounted}}"] };
                }
            });
        }
    }
    return isComponentTag;
}

function  componentInTemplate (ast) {
    function deep (node) {
        if (node.parent) {
            if (node.parent.type === 'template') {
                console.warn('template模版中尽量不要插入自定义组件，会有渲染异常的风险');
            } else {
                deep(node.parent);
            }
        }
    }
    deep(ast);
}

function processExternalClasses (ast, fileInfo) {
    /**
     * external class 只支持字符常量，不支持表达式
     */
    if (!fileInfo.isComponent) return false;
    let opts = {
        externalClasses: []
    };

    fileInfo.jsFileCode = fileInfo.jsFileCode || "";

    if (!fileInfo.jsFileCode) {
        let jsFile = fileInfo.path.replace(".wxml", ".js");

        let code = fs.readFileSync(jsFile, "utf8");
        fileInfo.jsFileCode = code;
    }
    externalForWxFn(fileInfo.jsFileCode, opts);
    fileInfo.externalClasses = opts;

    if (ast.props) {
        if (ast.props.class) {
            let classInfo = ast.props.class;
            classInfo = _externalClass(classInfo);
            /**
             * 提取扩展类 -class 结尾 或者带 -class- 的命名
             * */
        }

        Object.keys(ast.props)
            .forEach(function (propName) {
                if (propName.match(/-class$/) || propName.match(/-class-/g)) {
                    ast.props[propName] = _externalClass(ast.props[propName]);
                }
            });
    }

    function _externalClass (classInfo = {}) {
        let _classes = classInfo.value[0].split(/\s+/);
        _classes = _classes.filter(function (className) {
            return className.match(/-class$/) || className.match(/-class-/g);
        });
        let temp = classInfo.value[0].split(/\s+/);
        let newClass = [];
        temp.forEach(function (str) {
            if (opts.externalClasses.includes(str) || _classes.includes(str)) {
                newClass.push('{{' + _transform(str) + '}}');
            } else {
                newClass.push(str);
            }
        });

        classInfo.value[0] = newClass.join(' ');
        return classInfo;
    }

    function _transform (str = "") {
        str = str.replace(/-(\w)/g, function (...$) {
            return $[1].toUpperCase();
        });

        return str;
    }
}

