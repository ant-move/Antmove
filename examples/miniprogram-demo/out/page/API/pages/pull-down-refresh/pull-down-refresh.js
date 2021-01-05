const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/pull-down-refresh/pull-down-refresh"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "下拉刷新",
            path: "page/API/pages/pull-down-refresh/pull-down-refresh"
        };
    },

    onPullDownRefresh() {
        _my.showToast({
            title: "loading...",
            icon: "loading"
        });

        console.log("onPullDownRefresh", new Date());
    },

    stopPullDownRefresh() {
        _my.stopPullDownRefresh({
            complete(res) {
                _my.hideToast();

                console.log(res, new Date());
            }
        });
    }
});
