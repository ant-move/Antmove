const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/login/login"
    }
});
const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "微信登录",
            path: "page/API/pages/login/login"
        };
    },

    onLoad() {
        this.setData({
            hasLogin: app.globalData.hasLogin
        });
    },

    data: {},

    login() {
        const that = this;

        _my.login({
            success() {
                app.globalData.hasLogin = true;
                that.setData({
                    hasLogin: true
                });
            }
        });
    }
});
