const _conponentConstructorHandle = require("/__antmove/component/componentClass.js");
const _my = require("/__antmove/api/index.js")(my);
// app.js
App(
    _conponentConstructorHandle(
        {
            onLaunch: function() {
                // 调用API从本地缓存中获取数据
                const aName = "wx-space-hs";
                var logs = _my.getStorageSync("logs") || [];
                logs.unshift(Date.now());

                _my.setStorageSync("logs", logs);
            },
            getUserInfo: function(cb) {
                var that = this;

                if (this.globalData.userInfo) {
                    typeof cb === "function" && cb(this.globalData.userInfo);
                } else {
                    // 调用登录接口
                    _my.login({
                        success: function() {
                            _my.getUserInfo({
                                success: function(res) {
                                    that.globalData.userInfo = res.userInfo;
                                    typeof cb === "function" &&
                                        cb(that.globalData.userInfo);
                                }
                            });
                        }
                    });
                }
            },
            globalData: {
                userInfo: null
            }
        },
        "App"
    )
);
