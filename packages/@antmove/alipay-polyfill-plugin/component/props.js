const fs = require('fs-extra');
const path = require('path');
const Config = require('../config.js')

module.exports = function (ast, fileInfo, renderAxml) {
    let isComponentTag = false;
    let { type, props } = ast;
    if (props) {
        Object.keys(props).forEach( key => {
            if (key && !props[key].value[0]) {
                props[key] =  { type: 'double', value: [ ' ' ] };
            }
        });
    }
   
    /**
     * 自定义组件预处理 - 事件
     */
    isComponentTag = processCustomComponent(ast, fileInfo);

    return isComponentTag;
};



function checkoutCustomComponent (fileInfo, tagName) {
    let bool = false, json, appJson;
    if (fileInfo.extname === '.axml') {
        json = fileInfo.path.replace('.axml', '.json');
        if (!fs.pathExistsSync(json)) return false;

        if (!fileInfo.jsonUsingComponents) {
            json = JSON.parse(fs.readFileSync(json, 'utf8')) || {};
        } else {
            json = fileInfo.jsonUsingComponents;
        }
        if (json.usingComponents && json.usingComponents[tagName]) {
            bool = true;
        }
        
        if (!tagName) {
            fileInfo.jsonUsingComponents = fileInfo.jsonUsingComponents || json.usingComponents;
            return {
                component: json.usingComponents
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
    if (fileInfo.jsonUsingComponents[ast.type]) {
        isComponentTag = true;
        if (ast.props && !Config.component2) {
            ast.props['_parent_ref'] = { type: "double", value: ["{{isMounted}}"] }
          
        }
    }

    return isComponentTag;
}
