const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/scan-code/scan-code"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "扫码",
            path: "page/API/pages/scan-code/scan-code"
        };
    },

    data: {
        result: ""
    },

    scanCode() {
        const that = this;

        _my.scanCode({
            success(res) {
                that.setData({
                    result: res.result
                });
            },

            fail() {}
        });
    }
});
