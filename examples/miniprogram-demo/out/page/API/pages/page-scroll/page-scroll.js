const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/page-scroll/page-scroll"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "页面滚动",
            path: "page/API/pages/page-scroll/page-scroll"
        };
    },

    scrollToTop() {
        _my.pageScrollTo({
            scrollTop: 0,
            duration: 800,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });
    },

    scrollToBottom() {
        _my.pageScrollTo({
            scrollTop: 3000,
            duration: 300
        });
    }
});
