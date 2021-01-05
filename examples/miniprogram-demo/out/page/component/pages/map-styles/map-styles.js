const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/map-styles/map-styles"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "map底图样式",
            path: "page/component/pages/map-styles/map-styles"
        };
    }
});
