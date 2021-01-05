const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/button/button"
    }
});
const types = ["default", "primary", "warn"];
const pageObject = {
    data: {
        defaultSize: "default",
        primarySize: "default",
        warnSize: "default",
        disabled: false,
        plain: false,
        loading: false,
        hidden: true,
        actionSheetHidden: true,
        actionSheetItems: ["item1", "item2", "item3", "item4"]
    },

    onLoad() {
        console.log(_my.getLaunchOptionsSync());
    },

    onShareAppMessage() {
        return {
            title: "button",
            path: "page/component/pages/button/button"
        };
    },

    showLoading() {
        this.setData({
            hidden: false
        });
        setTimeout(() => {
            this.setData({
                hidden: true
            });
        }, 2000);
    },

    loadingChange(e) {
        console.log(11);
    },

    showactionsheet() {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        });
    },

    actionSheetChange(e) {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        });
        console.log(e);
    },

    bindItemTap(e) {
        console.log(e);
    },

    setDisabled() {
        this.setData({
            disabled: !this.data.disabled
        });
    },

    setPlain() {
        this.setData({
            plain: !this.data.plain
        });
    },

    setLoading() {
        this.setData({
            loading: !this.data.loading
        });
    },

    getuserinfo(e) {
        console.log(e);
    },

    onGetUserInfo(e) {
        console.log(e.detail.errMsg);
        console.log(e.detail.userInfo);
        console.log(e.detail.rawData);
    },

    onContact(e) {
        console.log(e);
    },

    onGetPhoneNumber(e) {
        console.log(e);
    },

    onError(e) {
        console.log(e);
    },

    onLanuchApp(e) {
        console.log(e);
    },

    onOpenSetting(e) {
        console.log(e);
    }
};

for (let i = 0; i < types.length; ++i) {
    (function(type) {
        pageObject[type] = function() {
            const key = type + "Size";
            const changedData = {};
            changedData[key] =
                this.data[key] === "default" ? "mini" : "default";
            this.setData(changedData);
        };
    })(types[i]);
}

_Page(pageObject);
