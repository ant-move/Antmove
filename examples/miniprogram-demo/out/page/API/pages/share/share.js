const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/share/share"
    }
});

_Page({
    data: {
        shareData: {
            title: "自定义转发标题",
            desc: "自定义转发描述",
            path: "/page/API/pages/share/share"
        }
    },

    onShareAppMessage() {
        return this.data.shareData;
    }
});
