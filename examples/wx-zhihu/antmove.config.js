module.exports = {
    "env": "production",
    "platform": "alipay",
    "component2": true,
    "scope": true,
    "type": "wx-alipay",
    "component": false,
    "error": false,
    "empty": false,
    "isReport": false,
    "input": "./",
    "output": "../out"
,
    "hooks": {
        "appJson": function plugin (appJson) {
                        return appJson;
                    }

    },
    "babel": {
        "plugins": []
    },
        "plugins": []
}