const fs = require('fs-extra');
const path = require('path');
const _componentMap = require('../config/componentsInfo/index').descObject;
const eventsMap = require('./eventsMap');
const generic = require('./generic');
const preProcessCustomComponent = require('./customComponent');
const processButton = require('./processButton.js');

module.exports = function (ast, fileInfo, renderAxml) {
    processButton(ast, fileInfo);
    let { type, props } = ast;
    if (props) {
        Object.keys(props).forEach( key => {
            if (key && !props[key].value[0]) {
                props[key] =  { type: 'double', value: [ ' ' ] };
            }

            if (key === 'src') {
                let rule = props[key].value[0];
                if ((rule[0] !== '/' && rule[0] !== '.' && rule[0] !== '{')) {
                    let tempPath = path.join(fileInfo.dirname, rule.replace(/\.axml'*/g, '.wxml'));
                    if (fs.pathExistsSync(tempPath)) {
                        rule = './' + rule;
                    } else {
                        rule = '/' + rule;
                    }
                }

                props[key].value[0] = rule;
            }
        });
    }   
   
    let originType = type;
    let tagInfo = _componentMap[type];
    /**
     * 自定义组件预处理 - 事件
     */
    processCustomComponent(ast, fileInfo);
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
};

function processEvents (obj = {}) {
    for (let key in obj) {
        if (eventsMap[key]) {
            obj[eventsMap[key]] = obj[key];
            delete obj[key];
        } else if (/^bind:(.+)/.test(key)) {
            let newKey = `on${RegExp.$1}`;

            obj[newKey] = obj[key];
            delete obj[key];
        } else if (generic[key]) {
            obj[generic[key]] = obj[key];
            delete obj[key];
        } else if (/^bind(.+)/.test(key)) {
            let newEvent = RegExp.$1;
            let uper = newEvent[0].toUpperCase();
            let eventKey = `on${uper}${newEvent.substring(1)}`;
            
            obj[eventKey] = obj[key];

            delete obj[key];

        }
    }

    return obj;
}

function processComponentMethodProp (astProps={}, propsInfo={}) {
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
    if (fileInfo.extname === '.wxml') {
        json = fileInfo.path.replace('.wxml', '.json');
        if (!fs.pathExistsSync(json)) return false;
        json = JSON.parse(fs.readFileSync(json, 'utf8'));
        if (json.usingComponents && json.usingComponents[tagName]) {
            bool = true;
        } else if (!tagName) {
            return json.usingComponents;
        }
    }

    return bool;
}


function processCustomComponent (ast, fileInfo) {
    /**
     * 自定义组件事件处理
     */
    if (!fileInfo.customComponents) {
        let customComponents = checkoutCustomComponent(fileInfo) || {};
        fileInfo.customComponents = customComponents;
    }

    if (fileInfo.customComponents[ast.type]) {
        preProcessCustomComponent(ast);

        if (ast.props) {
            Object.keys(ast.props)
                .forEach(function (prop) {
                    let value = ast.props[prop].value[0];
                    if (prop.match(/^(bind:*)(\w+)/) && !value.match(/\{/)) {
                        let newProp = prop.replace(/^(bind:*)\w+/, function ($, $1, $2, $3) {
                            let prop = $.substring($1.length);
                            return 'on' + prop[0].toUpperCase() + prop.substring(1);
                        });

                        ast.props[newProp] = ast.props[prop];
                        delete ast.props[prop];

                    }
                });
        }
    }
}