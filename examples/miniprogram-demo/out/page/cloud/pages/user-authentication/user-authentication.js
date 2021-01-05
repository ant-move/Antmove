const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/user-authentication/user-authentication"
    }
});
const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "用户鉴权",
            path: "page/cloud/pages/user-authentication/user-authentication"
        };
    },

    data: {
        openid: "",
        loading: false
    },

    onGetOpenid() {
        this.setData({
            loading: true
        });
        app.getUserOpenIdViaCloud()
            .then(openid => {
                this.setData({
                    openid,
                    loading: false
                });
                return openid;
            })
            .catch(err => {
                console.error(err);
            });
    },

    clear() {
        this.setData({
            openid: ""
        });
    }
});
