const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/image/image"
    }
});

const config = require("../../../../config");

_Page({
    onShareAppMessage() {
        return {
            title: "image",
            path: "page/component/pages/image/image"
        };
    },

    data: {
        imageUrl: config.downloadExampleUrl
    },

    binderror(e) {
        console.log("binderror", e);
    },

    bindload(e) {
        console.log("bindload", e);
    }
});
