const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/vibrate/vibrate"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "振动",
            path: "page/API/pages/vibrate/vibrate"
        };
    },

    vibrateShort() {
        _my.vibrateShort({
            success(res) {
                console.log(res);
            },

            fail(err) {
                console.error(err);
            },

            complete() {
                console.log("completed");
            }
        });
    },

    vibrateLong() {
        _my.vibrateLong({
            success(res) {
                console.log(res);
            },

            fail(err) {
                console.error(err);
            },

            complete() {
                console.log("completed");
            }
        });
    }
});
