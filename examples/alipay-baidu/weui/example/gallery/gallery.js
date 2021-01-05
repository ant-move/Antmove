const _Page = require("/__antmove/component/componentClass.js")("Page");
_Page({
    openGallery: function() {
        this.setData({
            istrue: true
        });
    },
    closeGallery: function() {
        this.setData({
            istrue: false
        });
    }
});
