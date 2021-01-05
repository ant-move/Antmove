const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/get-location/get-location"
    }
});

const util = require("../../../../util/util.js");

const formatLocation = util.formatLocation;

_Page({
    onShareAppMessage() {
        return {
            title: "获取位置",
            path: "page/API/pages/get-location/get-location"
        };
    },

    data: {
        hasLocation: false
    },

    getLocation() {
        const that = this;

        _my.getLocation({
            altitude: false,

            success(res) {
                console.log(res);
                console.log(res.speed);
                that.setData({
                    hasLocation: true,
                    location: formatLocation(res.longitude, res.latitude)
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
