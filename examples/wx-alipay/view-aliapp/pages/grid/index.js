const _Page = require("../../__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        isAdd: false
    },

    handleAdd() {
        this.setData({
            isAdd: !this.data.isAdd
        });
    }
});
