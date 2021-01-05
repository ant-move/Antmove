const _Page = require("/__antmove/component/componentClass.js")("Page");
const _my = require("/__antmove/api/index.js")(my);
_Page({
    openSuccess: function() {
        _my.navigateTo({
            url: "msg_success"
        });
    },
    openText: function() {
        _my.navigateTo({
            url: "msg_text"
        });
    },
    openTextPrimary: function() {
        _my.navigateTo({
            url: "msg_text_primary"
        });
    },
    openFail: function() {
        _my.navigateTo({
            url: "msg_fail"
        });
    }
});
