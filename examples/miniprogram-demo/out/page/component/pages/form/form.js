const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/form/form"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "form",
            path: "page/component/pages/form/form"
        };
    },

    data: {
        pickerHidden: true,
        chosen: ""
    },

    pickerConfirm(e) {
        this.setData({
            pickerHidden: true
        });
        this.setData({
            chosen: e.detail.value
        });
    },

    pickerCancel() {
        this.setData({
            pickerHidden: true
        });
    },

    pickerShow() {
        this.setData({
            pickerHidden: false
        });
    },

    formSubmit(e) {
        console.log("form发生了submit事件，携带数据为：", e.detail.value);
    },

    formReset() {
        console.log("form发生了reset事件");
        this.setData({
            chosen: ""
        });
    }
});
