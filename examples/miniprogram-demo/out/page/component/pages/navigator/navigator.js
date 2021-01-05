const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/navigator/navigate"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "navigator",
            path: "page/component/pages/navigator/navigator"
        };
    }
});
