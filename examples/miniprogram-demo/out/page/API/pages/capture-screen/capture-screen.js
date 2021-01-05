const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/capture-screen/capture-screen"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "用户截屏事件",
            path: "page/API/pages/capture-screen/capture-screen"
        };
    },

    data: {
        captured: false
    },

    onLoad() {
        _my.onUserCaptureScreen(() => {
            this.setData({
                captured: true
            });
            console.log("截屏了");
        });
    }
});
