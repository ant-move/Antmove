const _Page = require("../../__antmove/component/componentClass.js")("Page");
const _my = require("../../__antmove/api/index.js")(my);
//logs.js
const util = require("../../utils/util.js");

_Page({
    data: {
        logs: []
    },
    onLoad: function() {
        this.setData({
            logs: (_my.getStorageSync("logs") || []).map(log => {
                return util.formatTime(new Date(log));
            })
        });
    }
});
