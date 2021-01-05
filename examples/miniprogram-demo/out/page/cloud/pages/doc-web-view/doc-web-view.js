const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/doc-web-view/doc-web-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "小程序云开发文档",
            path: "page/cloud/pages/doc-web-view/doc-web-view"
        };
    }
});
