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
                targetJson[prop] = value.msg;
            }
        });
}

module.exports = function (str) {
    let tabBar;
    let json = JSON.parse(str);
    tabBar = json.tabBar;
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