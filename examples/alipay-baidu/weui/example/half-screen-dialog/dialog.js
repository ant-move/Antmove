const _Page = require("/__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        showDialog: false
    },
    openDialog: function() {
        this.setData({
            istrue: true
        });
    },
    closeDialog: function() {
        this.setData({
            istrue: false
        });
    }
});
