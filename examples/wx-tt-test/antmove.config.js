module.exports = {
    "env": "production",
    "platform": "alipay",
    "component2": true,
    "scope": true,
    "type": "wx2tt",
    "component": false,
    "error": false,
    "empty": false,
    "input": "./",
    "output": "../../dist/wx-tt-dist"
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