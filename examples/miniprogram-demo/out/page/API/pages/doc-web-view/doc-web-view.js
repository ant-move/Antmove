const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/doc-web-view/doc-web-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "小程序接口文档",
            path: "page/API/pages/doc-web-view/doc-web-view"
        };
    }
});
