const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/set-navigation-bar-title/set-navigation-bar-title"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "设置页面标题",
            path:
                "page/API/pages/set-navigation-bar-title/set-navigation-bar-title"
        };
    },

    setNaivgationBarTitle(e) {
        const title = e.detail.value.title;
        console.log(title);

        _my.setNavigationBarTitle({
            title,

            success() {
                console.log("setNavigationBarTitle success");
            },

            fail(err) {
                console.log("setNavigationBarTitle fail, err is", err);
            }
        });

        return false;
    }
});
