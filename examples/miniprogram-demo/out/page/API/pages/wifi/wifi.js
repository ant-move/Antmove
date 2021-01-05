const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/wifi/wifi"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "Wi-Fi",
            path: "page/API/pages/wifi/wifi"
        };
    },

    data: {
        wifiList: []
    },

    onUnload() {
        this.stopSearch();
    },

    startSearch() {
        const getWifiList = () => {
            _my.getWifiList({
                success: () => {
                    _my.onGetWifiList(res => {
                        const wifiList = res.wifiList
                            .sort((a, b) => b.signalStrength - a.signalStrength)
                            .map(wifi => {
                                const strength = Math.ceil(
                                    wifi.signalStrength * 4
                                );
                                return Object.assign(wifi, {
                                    strength
                                });
                            });
                        this.setData({
                            wifiList
                        });
                    });
                },

                fail(err) {
                    console.error(err);
                }
            });
        };

        const startWifi = () => {
            _my.startWifi({
                success: getWifiList,

                fail(err) {
                    console.error(err);
                }
            });
        };

        _my.getSystemInfo({
            success(res) {
                const isIOS = res.platform === "ios";

                if (isIOS) {
                    _my.showModal({
                        title: "提示",
                        content:
                            "由于系统限制，iOS用户请手动进入系统WiFi页面，然后返回小程序。",
                        showCancel: false,

                        success() {
                            startWifi();
                        }
                    });

                    return;
                }

                startWifi();
            }
        });
    },

    stopSearch() {
        _my.stopWifi({
            success(res) {
                console.log(res);
            },

            fail(err) {
                console.error(err);
            }
        });
    }
});
