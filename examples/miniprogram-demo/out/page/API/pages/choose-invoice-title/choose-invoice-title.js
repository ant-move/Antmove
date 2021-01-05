const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/choose-invoice-title/choose-invoice-title"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "获取发票抬头",
            path: "page/API/pages/choose-invoice-title/choose-invoice-title"
        };
    },

    data: {
        type: "",
        title: "",
        taxNumber: "",
        companyAddress: "",
        telephone: "",
        bankName: "",
        bankAccount: ""
    },

    chooseInvoiceTitle() {
        _my.chooseInvoiceTitle({
            success: res => {
                this.setData({
                    type: res.type,
                    title: res.title,
                    taxNumber: res.taxNumber,
                    companyAddress: res.companyAddress,
                    telephone: res.telephone,
                    bankName: res.bankName,
                    bankAccount: res.bankAccount
                });
            },
            fail: err => {
                console.error(err);
            }
        });
    }
});
