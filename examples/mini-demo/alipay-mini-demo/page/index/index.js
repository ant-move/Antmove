const _Page = require("../../__antmove/component/componentClass.js")("Page");
const _my = require("../../__antmove/api/index.js")(my);
//index.js
//获取应用实例
const app = getApp();

_Page({
    data: {
        motto: "Hello World",
        userInfo: {},
        hasUserInfo: false,
        canIUse: _my.canIUse("button.open-type.getUserInfo")
    },
    //事件处理函数
    bindViewTap: function() {
        _my.navigateTo({
            url: "../logs/logs"
        });
    },
    onLoad: function() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            });
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                });
            };
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            _my.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function(e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
});
