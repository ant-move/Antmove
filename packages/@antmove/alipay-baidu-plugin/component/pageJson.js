const Config = require('../config');
const appJson = require('../config/jsonInfo/globalconfig');
const pageJson = require('../config/jsonInfo/pageconfig');
const windowConfigMap = {};
const path = require('path');

mkJsonMap(appJson.window.props, windowConfigMap);
mkJsonMap(pageJson, windowConfigMap);

function mkJsonMap (props, targetJson) {
    Object.keys(props)
        .forEach(function (prop) {
            let value = props[prop];
            if (value.type === 1) {
                targetJson[prop] = value.key;
            }
        });
}

/**
 * replace key of object
 */
function replaceTheKey (obj, configMap) {
    if (!obj) return false;
    Object.keys(obj)
        .forEach(function (key) {
            let _key = configMap[key];
            if (_key) {
                obj[_key] = obj[key];
                delete obj[key];
            } 

            if (pageJson[key]&&pageJson[key].status===2) {
                delete obj[key];
            }

        });

    return obj;
}

module.exports = function (jsonStr, fileInfo, projectPath) {
    if (!jsonStr) return '';
    let json = JSON.parse(jsonStr);
    replaceTheKey(json, windowConfigMap);

    // process wrap components
    let tagsInfo = fileInfo.tagsInfo;

    if (json.usingComponents) {
        Object.keys(json.usingComponents).map( key => {
            if (/\w/g.test(json.usingComponents[key][0])||json.usingComponents[key][0]==='/') {
                let num = fileInfo.dist.split(projectPath)[1].split(path.sep).length - 3;
                const pathArr = [];
                if (num>0) {
                    for (let i=0; i<=num; i++) {
                        pathArr.push('..');
                    }
                } else {
                    pathArr.push(".");
                }
                if (json.usingComponents[key][0]==='/') {
                    json.usingComponents[key] = pathArr.join('/') + json.usingComponents[key];
                } else {
                    json.usingComponents[key] = pathArr.join('/') + '/node_modules/' + json.usingComponents[key];
                }
                
            }
        });
    }

    if (tagsInfo) {
        tagsInfo.forEach((tagInfo) => {
            if (tagInfo.type === 5) {
                Config.compile.customComponent[tagInfo.tagName] = true;
                // the __component directory will rename as component
                let componentPath = tagInfo.path.replace('__component', 'component');

                json.usingComponents = json.usingComponents || {};
            
                json.usingComponents[tagInfo.tagName] =Config.library.customComponentPrefix + componentPath;

            }
        });
    }
    
    
    // if (/\w/g.test(componentPath[0])) {
    //     console.log(componentPath);
    // }
    return JSON.stringify(json);
};
