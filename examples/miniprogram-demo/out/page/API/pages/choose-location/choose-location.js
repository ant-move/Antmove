const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/choose-location/choose-location"
    }
});

const util = require("../../../../util/util.js");

const formatLocation = util.formatLocation;

_Page({
    onShareAppMessage() {
        return {
            title: "使用原生地图选择位置",
            path: "page/API/pages/choose-location/choose-location"
        };
    },

    data: {
        hasLocation: false
    },

    chooseLocation() {
        const that = this;

        _my.chooseLocation({
            success(res) {
                console.log(res);
                that.setData({
                    hasLocation: true,
                    location: formatLocation(res.longitude, res.latitude),
                    locationAddress: res.address
                });
            }
        });
    },

    clear() {
        this.setData({
            hasLocation: false
        });
    }
});
