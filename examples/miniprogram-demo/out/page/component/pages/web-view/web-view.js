const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/web-view/web-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "webview",
            path: "page/component/pages/web-view/web-view"
        };
    },

    bindmessage(e) {
        console.log("bindmessage", e);
    },

    bindload(e) {
        console.log("bindload", e);
    },

    binderror(e) {
        console.log("binderror", e);
    }
});
