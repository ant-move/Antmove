const { useReducer } = require("@amove/next");
const toHex = require("colornames");
// const config = require("../../config");
const appJson = require("../config/jsonInfo/globalconfig");
const fs = require("fs-extra");
const { prettierCode } = require("../utils/preProcessCode");
const { setAppName, getAppName } = require("../utils/jsonProcess");

/**
 * app config process
 */
const tabbarConfigMap = {};
const windowConfigMap = {};

/**
 * to hex color
 */
const colornames = {
    titleBarColor: true,
    backgroundColor: true,
    backgroundImageColor: true
};

const windowProps = appJson.window.props;
const tabBarProps = appJson.tabBar.props;

mkJsonMap(windowProps, windowConfigMap);
mkJsonMap(tabBarProps, tabbarConfigMap);
mkJsonMap(tabBarProps.list.props, tabbarConfigMap);

function mkJsonMap (props, targetJson) {
    Object.keys(props).forEach(function (prop) {
        let value = props[prop];
        if (value.type === 1) {
            targetJson[prop] = value.key;
        }
    });
}

function replaceTheKey (obj, configMap) {
    if (!obj) return false;
    Object.keys(obj).forEach(function (key) {
        let _key = configMap[key];
        if (_key) {
            if (colornames[_key] && obj[key][0] !== "#") {
                obj[key] = toHex(obj[key]);
            }
            obj[_key] = obj[key];
            delete obj[key];
        }
    });
    return obj;
}

module.exports = {
    ProcessAppJson (node, store) {
        let json = this.$node.content;
        if (json.window && json.window.navigationBarTitleText) {
            setAppName(json.window.navigationBarTitleText);
        } else {
            const appName = getAppName(
                json.pages,
                store.config.entry,
                "navigationBarTitleText"
            );
            setAppName(appName);
        }
        this.addChild({
            type: "ProcessAppPagesJson",
            body: {
                json
            }
        });
        this.addChild({
            type: "AppJsonTabbar",
            body: {
                tabBar: json.tabBar || {}
            }
        });
        this.addChild({
            type: "AppSubpackages",
            body: {
                json
            }
        });
        this.addChild({
            type: "AppPlugins",
            body: {
                json
            }
        });
        this.addChild({
            type: "AppJsonWindow",
            body: {
                window: json.window
            }
        });
    },

    AppJsonWindow (node) {
        this.addChild({
            type: "AppConfigWindow",
            jsonName: "app",
            body: {
                window: node.body.window
            }
        });
    },

    PageJsonWindow (node) {
        this.addChild({
            type: "AppConfigWindow",
            jsonName: "page",
            body: {
                json: node.body.json
            }
        });
    },

    AppConfigWindow (node) {
        if (node.jsonName === "app") {
            replaceTheKey(node.body.window, windowConfigMap);
        }
        if (node.jsonName === "page") {
            replaceTheKey(node.body.json, windowConfigMap);
        }
        this.$node.content = prettierCode(
            JSON.stringify(this.$node.content),
            "json",
            {
                useTabs: true,
                tabWidth: 4
            }
        );
    },

    AppJsonTabbar (node) {
        let tabBar = node.body.tabBar;
        if (tabBar) {
            let list = tabBar.list || [];
            delete tabBar.list;
            replaceTheKey(tabBar, tabbarConfigMap);
            tabBar.items = list;
            list.forEach(el => {
                for (let key in el) {
                    if (tabbarConfigMap[key]) {
                        el[tabbarConfigMap[key]] = el[key];
                        delete el[key];
                    }
                }
            });
        }
    },

    AppSubpackages (node) {
        let json = node.body.json;
        if (json.subPackages) {
            json.subPackages = json.subpackages;
            delete json.subpackages;
            if (json.preloadRule) {
                let subPackages = json.subPackages;
                let preloadRule = json.preloadRule;
                let nameToRoot = {};
                subPackages.forEach(sub => {
                    if (sub.name) {
                        nameToRoot[sub.name] = sub.root;
                    }
                });
                Object.keys(preloadRule).forEach(rule => {
                    preloadRule[rule].packages.forEach((path, index) => {
                        if (nameToRoot[path]) {
                            preloadRule[rule].packages.splice(
                                index,
                                1,
                                nameToRoot[path]
                            );
                        }
                    });
                });
                json.subPackages = subPackages;
                json.preloadRule = preloadRule;
            }
        }
        this.$node.content = json;
    },

    ProcessAppPagesJson (node, store) {
        const config = store.config.preAppData.config;
        let json = node.body.json;
        let componentDirName =
            config.log.runtime.dirname || "__runtime__logs__";
        if (config.env === "development") {
            json.pages.push("pages/" + componentDirName + "/index");
            json.pages.push("pages/" + componentDirName + "/specific/index");
        }
        this.$node.content = json;
    },

    AppPlugins (node) {
        let json = node.body.json;
        if (json.plugins) {
            delete json.plugins;
        }
        this.$node.content = json;
    }
};
