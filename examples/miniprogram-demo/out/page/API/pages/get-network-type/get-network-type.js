const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/get-network-type/get-network-type"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "获取手机网络状态",
            path: "page/API/pages/get-network-type/get-network-type"
        };
    },

    data: {
        hasNetworkType: false
    },

    getNetworkType() {
        const that = this;

        _my.getNetworkType({
            success(res) {
                console.log(res);
                that.setData({
                    hasNetworkType: true,
                    networkType: res.subtype || res.networkType
                });
            }
        });
    },

    clear() {
        this.setData({
            hasNetworkType: false,
            networkType: ""
        });
    }
});
