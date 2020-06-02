const path = require('path');
const fs = require('fs-extra');
const appJson = require('../config/jsonInfo/globalconfig');
var toHex = require('colornames');
/**
 * app config process
 */
const tabbarConfigMap = {};
const windowConfigMap = {};

/**
 * to hex color
 */
const colornames = {
    'titleBarColor': true,
    'backgroundColor': true,
    'backgroundImageColor': true
};

const windowProps = appJson.window.props;
const tabBarProps = appJson.tabBar.props;

mkJsonMap(windowProps, windowConfigMap);
mkJsonMap(tabBarProps, tabbarConfigMap);
mkJsonMap(tabBarProps.list.props, tabbarConfigMap);

function mkJsonMap (props, targetJson) {
    Object.keys(props)
        .forEach(function (prop) {
            let value = props[prop];
            if (value.type === 1) {
                targetJson[prop] = value.key;
            }
        });
}

function mkNewPage (newPath, newName) {
    let jsPath = newPath + '.js';
    let xmlPath = newPath + '.axml';
    let jsonPath = newPath + '.json';
    let cssPath = newPath + '.acss';
    let jsContent = `
        Page({})
    `;
    let xmlContent = `
        <view class="${newName}">
            <${newName}></${newName}>
        <view>
    `;
    let jsonContent = `
        {
            "usingComponents" : {
                "${newName}" : "./${newName}"
            }
        }
    `;
    let cssContent = `
        .${newName}{
            width: 100%
        }
    `;
    fs.outputFileSync(jsPath, jsContent);
    fs.outputFileSync(xmlPath, xmlContent);
    fs.outputFileSync(jsonPath, jsonContent);
    fs.outputFileSync(cssPath, cssContent);
}

module.exports = function (str, options) {
    let tabBar;
    let pages;
    let json = JSON.parse(str);
    let entry = options.entry
    tabBar = json.tabBar;
    pages = json.pages;
    if (pages) {
        pages.forEach ((p, i) => {
            let pagePath = path.join(entry, p + '.json');
            if (fs.existsSync(pagePath)) {
                let nodeJson = JSON.parse(fs.readFileSync(pagePath, 'utf8'));
                if (nodeJson.component) {
                    let newPage  = path.join(p, '../')
                    let newName = path.relative(newPage, p);
                    let _newName = newName  + '-component';
                    let newComponentPath = path.join(newPage, _newName)
                    let pagefillPath = path.join(options.dist, p);
                    options.componentPages = options.componentPages || {};
                    options.componentPages[p] = {
                        dir : newPage,
                        path: newComponentPath,
                        componentName : _newName,
                    }
                    mkNewPage(pagefillPath, _newName)
                }
            }
        })
    }
    if (tabBar) {
        let list = tabBar.list || [];
        delete tabBar.list;
        replaceTheKey(tabBar, tabbarConfigMap);
        tabBar.items = list;
        list.forEach(el => {
            for ( let key in el) {
                if (tabbarConfigMap[key]) {
                    el[tabbarConfigMap[key]] = el[key];
                    delete el[key];
                }
            }
            
        });
    }
    if (json.subpackages) {
        json.subPackages =json.subpackages;
        delete json.subpackages;

        if (json.preloadRule) {
            let subPackages = json.subPackages;
            let preloadRule = json.preloadRule;
            let nameToRoot = {};
            subPackages.forEach((sub) => {
                
                if (sub.name) {
                    nameToRoot[sub.name] = sub.root;
                }           
            })
            Object.keys(preloadRule)
                .forEach((rule) => {
                    preloadRule[rule].packages
                        .forEach((path, index) => {
                            if (nameToRoot[path]) {
                                preloadRule[rule].packages.splice(index, 1, nameToRoot[path]);
                            }                          
                    })
                })
        }
    }
    if (json.plugins) {
        delete json.plugins
    }
    replaceTheKey(json.window, windowConfigMap);

    return JSON.stringify(json);
};

/**
 * replace key of object
 */
function replaceTheKey (obj, configMap) {
    if (!obj) return false;
    Object.keys(obj)
        .forEach(function (key) {
            let _key = configMap[key];
            if (_key) {
                if (colornames[_key] && obj[key][0] !== '#') {
                    obj[key] = toHex(obj[key]);
                }
                obj[_key] = obj[key];
                delete obj[key];
            }
        });
    return obj;
}