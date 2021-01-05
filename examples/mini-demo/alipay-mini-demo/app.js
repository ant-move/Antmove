const _App = require("./__antmove/component/componentClass.js")("App");
const _my = require("./__antmove/api/index.js")(my);
//app.js
_App({
    onLaunch: function() {
        // 展示本地存储能力
        var logs = _my.getStorageSync("logs") || [];
        logs.unshift(Date.now());

        _my.setStorageSync("logs", logs); // 登录

        _my.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        }); // 获取用户信息

        _my.getSetting({
            success: res => {
                if (res.authSetting["scope.userInfo"]) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    _my.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况

                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {
        userInfo: null
    }
});
