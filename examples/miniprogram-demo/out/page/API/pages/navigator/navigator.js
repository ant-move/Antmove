const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/navigator/navigator"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "页面跳转",
            path: "page/API/pages/navigator/navigator"
        };
    },

    navigateTo() {
        _my.navigateTo({
            url: "./navigator"
        });
    },

    navigateBack() {
        _my.navigateBack();
    },

    redirectTo() {
        _my.redirectTo({
            url: "./navigator"
        });
    },

    switchTab() {
        _my.switchTab({
            url: "/page/component/index"
        });
    },

    reLaunch() {
        _my.reLaunch({
            url: "/page/component/index?id=2"
        });
    }
});
