const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/navigator/navigator"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "redirectPage",
            path: "page/component/pages/navigator/redirect"
        };
    },

    onLoad(options) {
        console.log(options);
        this.setData({
            title: options.title
        });
    },

    back() {
        console.log(123);

        _my.navigateBack({
            delta: 2
        });
    }
});
