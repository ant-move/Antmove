const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/get-system-info/get-system-info"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "获取手机系统信息",
            path: "page/API/pages/get-system-info/get-system-info"
        };
    },

    data: {
        systemInfo: {}
    },

    getSystemInfo() {
        const that = this;

        const res = _my.getSystemInfoSync();

        console.log(res.model);
        console.log(res.pixelRatio);
        console.log(res.windowWidth);
        console.log(res.windowHeight);
        console.log(res.language);
        console.log(res.version);
        console.log(res.SDKVersion);

        _my.getSystemInfo({
            success(res) {
                console.log(res);
                console.log(res.SDKVersion);
                console.log(res.wifiEnabled);
                that.setData({
                    systemInfo: res
                });
            }
        });
    }
});
