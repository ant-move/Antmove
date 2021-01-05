const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/component/pages/textarea/textarea"
    }
});

_Page({
    onShareAppMessage() {
        return {
            title: "textarea",
            path: "page/component/pages/textarea/textarea"
        };
    },

    data: {
        focus: false
    },

    bindTextAreaBlur(e) {
        console.log(e.detail.value);
    },

    onlinechange() {
        console.log("111");
    },

    bindfocus() {
        console.log("333");
    }
});
