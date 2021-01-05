const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/get-user-info/get-user-info"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "获取用户信息",
            path: "page/API/pages/get-user-info/get-user-info"
        };
    },

    data: {
        hasUserInfo: false
    },

    getUserInfo(info) {
        const userInfo = info.detail.userInfo;
        this.setData({
            userInfo,
            hasUserInfo: true
        });
    },

    getUserInfoTap() {
        const that = this;

        _my.getSetting({
            success(res) {
                console.log("getSetting2", res.authSetting);

                if (!res.authSetting["scope.userInfo"]) {
                    console.log("333");

                    _my.authorize({
                        scope: "scope.userInfo",
                        success: res => {
                            console.log("getUserInfoTap", res);
                        }
                    });
                } else {
                    console.log("444");

                    _my.getUserInfo({
                        withCredentials: false,
                        lang: "en",

                        success(res) {
                            console.log(444, res.userInfo),
                                that.setData({
                                    userInfo: res.userInfo,
                                    hasUserInfo: true
                                });
                            console.log(that.data.userInfo);
                        },

                        fail(res) {
                            console.log(fail, res);
                        }
                    });
                }
            }
        });
    },

    clear() {
        this.setData({
            hasUserInfo: false,
            userInfo: {}
        });
    }
});
