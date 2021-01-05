const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/make-phone-call/make-phone-call"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "打电话",
            path: "page/API/pages/make-phone-call/make-phone-call"
        };
    },

    data: {
        disabled: true
    },

    bindInput(e) {
        this.inputValue = e.detail.value;

        if (this.inputValue.length > 0) {
            this.setData({
                disabled: false
            });
        } else {
            this.setData({
                disabled: true
            });
        }
    },

    makePhoneCall() {
        _my.makePhoneCall({
            phoneNumber: this.inputValue,

            success() {
                console.log("成功拨打电话");
            },

            fail() {
                console.log("fail");
            },

            complete() {
                console.log("complete");
            }
        });
    }
});
