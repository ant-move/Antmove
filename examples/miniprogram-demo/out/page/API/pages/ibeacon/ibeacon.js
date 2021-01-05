const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/ibeacon/ibeacon"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "iBeacon",
            path: "page/API/pages/ibeacon/ibeacon"
        };
    },

    data: {
        uuid: "",
        beacons: []
    },

    onUnload() {
        this.stopSearch();
    },

    enterUuid(e) {
        this.setData({
            uuid: e.detail.value
        });
    },

    startSearch() {
        if (this._searching) return;
        this._searching = true;

        _my.startBeaconDiscovery({
            uuids: [this.data.uuid],
            success: res => {
                console.log(res);

                _my.onBeaconUpdate(({ beacons }) => {
                    this.setData({
                        beacons
                    });
                });
            },
            fail: err => {
                console.error(err);
            }
        });
    },

    stopSearch() {
        this._searching = false;

        _my.stopBeaconDiscovery();
    }
});
