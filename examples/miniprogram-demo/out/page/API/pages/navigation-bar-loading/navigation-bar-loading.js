const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/navigation-bar-loading/navigation-bar-loading"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "标题栏加载动画",
            path: "page/API/pages/navigation-bar-loading/navigation-bar-loading"
        };
    },

    showNavigationBarLoading() {
        _my.showNavigationBarLoading({
            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    hideNavigationBarLoading() {
        _my.hideNavigationBarLoading({
            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    }
});
