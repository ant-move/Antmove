const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/on-network-status-change/on-network-status-change"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "监听手机网络变化",
            path:
                "page/API/pages/on-network-status-change/on-network-status-change"
        };
    },

    data: {
        isConnected: false
    },

    onLoad() {
        const that = this;

        _my.onNetworkStatusChange(function(res) {
            console.log("123", res);
            that.setData({
                isConnected: res.isConnected,
                networkType: res.networkType
            });
            console.log(that.data.networkType);
        });
    },

    onShow() {
        const that = this;

        _my.getNetworkType({
            success(res) {
                console.log(res);
                that.setData({
                    isConnected: res.networkType !== "none",
                    networkType: res.networkType
                });
            }
        });
    }
});
