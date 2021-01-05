const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/camera-scan-code/camera-scan-code"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "camera",
            path: "page/component/pages/camera-scan-code/camera-scan-code"
        };
    },

    data: {
        result: {}
    },

    onReady() {
        _my.showModal({
            title: "提示",
            content: "将摄像头对准一维码即可扫描",
            showCancel: false
        });
    },

    scanCode(e) {
        console.log("scanCode:", e);
        this.setData({
            result: e.detail
        });
    },

    navigateBack() {
        _my.navigateBack();
    },

    error(e) {
        console.log(e.detail);
    }
});
