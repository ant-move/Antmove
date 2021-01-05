const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/open-data/open-data"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "open-data",
            path: "page/component/pages/open-data/open-data"
        };
    }
});
