const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/screen-brightness/screen-brightness"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "屏幕亮度",
            path: "page/API/pages/screen-brightness/screen-brightness"
        };
    },

    data: {
        screenBrightness: 0
    },

    onLoad() {
        this._updateScreenBrightness();
    },

    changeBrightness(e) {
        const value = Number.parseFloat(e.detail.value.toFixed(1));
        console.log("value", value);

        _my.setScreenBrightness({
            value,
            success: () => {
                console.log(123);

                this._updateScreenBrightness();
            }
        });
    },

    _updateScreenBrightness() {
        _my.getScreenBrightness({
            success: res => {
                console.log("res", res);
                this.setData({
                    screenBrightness: Number.parseFloat(res.value.toFixed(1))
                });
            },

            fail(err) {
                console.error(err);
            }
        });
    }
});
