const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/view/view"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "view",
            path: "page/component/pages/view/view"
        };
    },

    getBatteryInfo() {
        console.log(123);

        _my.getBatteryInfo({
            success(res) {
                console.log(res);
            },

            fail(res) {
                console.log(res);
            }
        });

        _my.getBatteryInfoSync({
            success(res) {
                console.log(res);
            },

            fail(res) {
                console.log(res);
            }
        });
    }
});
