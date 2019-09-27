const fs = require('fs-extra');
const componentMap = require('../config/componentsInfo/index')['descObject'];
const eventsMap = require('./eventsMap');
const generic = require('./generic');

module.exports = function (ast, fileInfo, renderAxml) {
    let { type, props } = ast;
    // type = changeComponentName ( ast, type, fileInfo);
    let originType = type;
    let _componentMap = componentMap;
    let tagInfo = _componentMap[type];
    /**
     * 检测是否已存在同名的组件
     */
    if (tagInfo && tagInfo.type === 5 && !checkoutCustomComponent(fileInfo, originType)) {
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
                if (_axml[_axml.length] === '\n') {
                    _axml = _axml.substring(0, _axml.length - 1);
                }

                ast.props = ast.props || {};
                ast.props.textContent = {
                    value: [_axml],
                    type: 'unknown'
                };

                ast.children = [];
            } else {
                ast.props = ast.props || {};
                ast.props.textContent = {
                    value: [''],
                    type: 'single'
                };

                ast.children = [];
            }
        }

        if (!tagInfo.props) {
            return false;
        }
    }

    if (tagInfo && tagInfo.type === 6) {
        type = ast.type = tagInfo.tagName || ast.type;
    }
    processEvents(props);
    transformProps(props);
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

};

function processEvents (obj = {}) {
    for (let key in obj) {
        if (eventsMap[key]) {
            obj[eventsMap[key]] = obj[key];
            delete obj[key];
        } else if (generic[key]) {
            obj[generic[key]] = obj[key];
            delete obj[key];
        } else if (/^on(.+)/.test(key)) {
            let newEvent = RegExp.$1;
            let eventKey = `bind${newEvent.toLowerCase()}`;

            obj[eventKey] = obj[key];
            delete obj[key];
        }
        if (key==='a:if' || key==='wx:if') {
            if (obj[key].value[0].indexOf("$slot")!==-1) {
                obj[key].value[0] = '{{true}}';
            }
            
        }
    }

    return obj;
}

function transformProps (obj = {}) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        Object.values(obj).forEach(item => {
            let str = '';
            if (item) {
                const itemArr = item.value[0].split(' ');
                itemArr.forEach(i => {
                    i = i.trim();
                    str += i + ' ';
                });
                str = str.replace(/\s+/g, ' ').trim();
                item.value[0] = str;
            }
        });
    }
    return obj;
}

function processComponentMethodProp (astProps = {}, propsInfo = {}) {
    Object.keys(astProps)
        .forEach(function (prop) {
            if (propsInfo[prop] && propsInfo[prop].type === 1) {
                astProps[propsInfo[prop].key] = astProps[prop];
                delete astProps[prop];
            }
        });

    return astProps;
}


function checkoutCustomComponent (fileInfo, tagName) {
    let bool = false, json;
    if (fileInfo.extname === '.axml') {
        json = fileInfo.path.replace('.axml', '.json');
        json = JSON.parse(fs.readFileSync(json, 'utf8'));
        if (json.usingComponents && json.usingComponents[tagName]) {
            bool = true;
        }
    }

    return bool;
}