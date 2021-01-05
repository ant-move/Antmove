const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/on-compass-change/on-compass-change"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "监听罗盘数据",
            path: "page/API/pages/on-compass-change/on-compass-change"
        };
    },

    data: {
        enabled: true,
        direction: 0
    },

    onReady() {
        const that = this;

        _my.onCompassChange(function(res) {
            that.setData({
                direction: parseInt(res.direction, 10)
            });
        });
    },

    startCompass() {
        if (this.data.enabled) {
            return;
        }

        const that = this;

        _my.startCompass({
            success() {
                that.setData({
                    enabled: true
                });
            }
        });
    },

    stopCompass() {
        if (!this.data.enabled) {
            return;
        }

        const that = this;

        _my.stopCompass({
            success() {
                that.setData({
                    enabled: false
                });
            }
        });
    }
});
