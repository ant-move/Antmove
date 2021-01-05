const _conponentConstructorHandle = require("/__antmove/component/componentClass.js");
//logs.js
var util = require("/utils/util.js");

Page(
    _conponentConstructorHandle(
        {
            data: {
                navTab: ["通知", "赞与感谢", "关注"],
                currentNavtab: "0"
            },
            onLoad: function() {},
            switchTab: function(e) {
                this.setData({
                    currentNavtab: e.currentTarget.dataset.idx
                });
            }
        },
        "Page"
    )
);
