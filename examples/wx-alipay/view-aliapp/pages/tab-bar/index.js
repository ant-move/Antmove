const _Page = require("../../__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        current: "homepage"
    },

    handleChange({ detail }) {
        this.setData({
            current: detail.key
        });
    }
});
