const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/intersection-observer/intersection-observer"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "WXML节点布局相交状态",
            path: "page/API/pages/intersection-observer/intersection-observer"
        };
    },

    data: {
        appear: false
    },

    onLoad() {
        this._observer = _my.createIntersectionObserver(this);

        this._observer.relativeTo(".scroll-view").observe(".ball", res => {
            console.log(res);
            this.setData({
                appear: res.intersectionRatio > 0
            });
        });
    },

    onUnload() {
        if (this._observer) this._observer.disconnect();
    }
});
