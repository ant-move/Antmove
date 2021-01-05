const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/toast/toast"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "消息提示框",
            path: "page/API/pages/toast/toast"
        };
    },

    toast1Tap() {
        _my.showToast({
            title: "默认",
            icon: "loading",
            image: "../../../../image/wechat.png",
            duration: 3000,
            mask: false,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            },

            complete(result) {
                console.log(result);
            }
        });
    },

    toast2Tap() {
        _my.showToast({
            title: "duration 3000",
            duration: 3000
        });
    },

    toast3Tap() {
        _my.showToast({
            title: "loading",
            icon: "loading",
            duration: 5000
        });
    },

    hideToast() {
        _my.hideToast();
    }
});
