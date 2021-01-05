const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/movable-view/movable-view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "movable-view",
            path: "page/component/pages/movable-view/movable-view"
        };
    },

    data: {
        x: 0,
        y: 0,
        scale: 2 // isDisabled: false
    },

    tap() {
        this.setData({
            x: 30,
            y: 30
        });
    },

    tap2() {
        this.setData({
            scale: 3
        });
    },

    onChange(e) {
        console.log(e.detail);
    },

    onScale(e) {
        console.log(e.detail);
    },

    handletouch(e) {
        console.log(1, e);
    }
});
