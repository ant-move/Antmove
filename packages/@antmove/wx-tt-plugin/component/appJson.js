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

function mkJsonMap (props, targetJson) {
    Object.keys(props)
        .forEach(function (prop) {
            let value = props[prop];
            if (value.type === 1) {
                targetJson[prop] = value.key;
            }
        });
}

module.exports = function (str) {
    let json = JSON.parse(str);

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