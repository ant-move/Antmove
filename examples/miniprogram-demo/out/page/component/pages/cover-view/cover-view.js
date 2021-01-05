const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/cover-view/cover-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "cover-view",
            path: "page/component/pages/cover-view/cover-view"
        };
    },

    data: {
        latitude: 23.099994,
        longitude: 113.32452
    }
});
