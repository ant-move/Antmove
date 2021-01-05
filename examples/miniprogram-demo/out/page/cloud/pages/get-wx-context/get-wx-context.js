const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/cloud/pages/get-wx-context/get-wx-context"
    }
}); // 参考文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/utils/getWXContext.html

_Page({
    onShareAppMessage() {
        return {
            title: "WXContext",
            path: "page/cloud/pages/get-wx-context/get-wx-context"
        };
    },

    data: {
        hasWXContext: false,
        wxContext: {},
        loading: false
    },

    getWXContext() {
        this.setData({
            loading: true
        });

        _my.cloud.callFunction({
            name: "wxContext",
            data: {},
            success: res => {
                console.log("[云函数] [wxContext] wxContext: ", res.result);
                this.setData({
                    hasWXContext: true,
                    wxContext: res.result,
                    loading: false
                });
            },
            fail: err => {
                console.error("[云函数] [wxContext] 调用失败", err);
            }
        });
    },

    clear() {
        this.setData({
            hasWXContext: false,
            wxContext: {}
        });
    }
});
