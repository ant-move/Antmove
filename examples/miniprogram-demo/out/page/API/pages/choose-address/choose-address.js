const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/choose-address/choose-address"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "收货地址",
            path: "page/API/pages/choose-address/choose-address"
        };
    },

    data: {
        addressInfo: null
    },

    chooseAddress() {
        _my.chooseAddress({
            success: res => {
                this.setData({
                    addressInfo: res
                });
            },

            fail(err) {
                console.log(err);
            }
        });
    }
});
