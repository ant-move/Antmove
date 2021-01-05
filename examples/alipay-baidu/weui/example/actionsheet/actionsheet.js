const _Page = require("/__antmove/component/componentClass.js")("Page");
const _my = require("/__antmove/api/index.js")(my);
_Page({
    open: function() {
        _my.showActionSheet({
            itemList: ["A", "B", "C"],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex);
                }
            }
        });
    }
});
