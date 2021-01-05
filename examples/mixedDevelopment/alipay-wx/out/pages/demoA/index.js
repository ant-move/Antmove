const WXPage = require("../../__antmove_wechat/component/componentClass.js")(
    "Page"
);

const _wx = require("../../__antmove_wechat/api/index.js")(wx);

WXPage({
    handleA() {
        console.log("这是个微信小程序");
    },

    handleB() {
        console.log("这是个微信小程序");
    },

    handleC() {
        console.log("这是个微信小程序");
    },

    handleD() {
        console.log("这是个微信小程序");
    }
});
