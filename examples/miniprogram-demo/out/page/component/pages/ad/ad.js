const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/ad/ad"
    }
});

const info = _my.getSystemInfoSync();

_Page({
    onShareAppMessage() {
        return {
            title: "ad",
            path: "page/component/pages/ad/ad"
        };
    },

    data: {
        platform: info.platform
    }
});
