const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/doc-web-view/doc-web-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "小程序组件文档",
            path: "page/component/pages/doc-web-view/doc-web-view"
        };
    }
});
