const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/icon/icon"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "icon",
            path: "page/component/pages/icon/icon"
        };
    }
});
