const appJson = require('../config/jsonInfo/globalconfig');
/**
 * app config process
 */
const tabbarConfigMap = {};
const windowConfigMap = {};

const windowProps = appJson.window.props;
const tabBarProps = appJson.tabBar.props;

mkJsonMap(windowProps, windowConfigMap);
mkJsonMap(tabBarProps, tabbarConfigMap);
if (tabbarConfigMap.items) {
    mkJsonMap(tabBarProps.items.props, tabbarConfigMap);
}
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
    let tabBar;
    let json = JSON.parse(str);
    const jsonkeys = Object.keys(json);
    jsonkeys.forEach( mykey =>{
        let flag = true;
        Object.keys(appJson).forEach( key => {
            if (mykey===key) {
                flag = false;
            }
        });
        if (flag) {
            delete json[mykey];
        }
    });
    tabBar = json.tabBar;
    if (tabBar) {
        let list = tabBar.items || [];
        tabBar.list = list;
        list.forEach(el => {
            for ( let key in el) {
                if (tabbarConfigMap[key]) {
                    el[tabbarConfigMap[key]] = el[key];
                    delete el[key];
                }
            }
            
        });
        delete tabBar.items;
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
                obj[_key] = obj[key];
                delete obj[key];
            }
        });
    return obj;
}