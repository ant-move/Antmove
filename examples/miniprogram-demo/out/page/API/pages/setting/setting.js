const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/setting/setting"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "设置",
            path: "page/API/pages/setting/setting"
        };
    },

    data: {
        setting: {}
    },

    getSetting() {
        _my.getSetting({
            success: res => {
                console.log(res);
                this.setData({
                    setting: res.authSetting
                });
            }
        });
    }
});
