module.exports = {
    "env": "production",
    "platform": "alipay",
    "component2": true,
    "scope": true,
    "type": "wx2my",
    "component": false,
    "error": false,
    "empty": false,
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
        }
    }