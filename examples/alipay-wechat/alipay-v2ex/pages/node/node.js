const _Page = require("../../__antmove/component/componentClass.js")("Page");
const _my = require("../../__antmove/api/index.js")(my);
// latest.js
var Api = require("../../utils/api.js");

_Page({
    data: {
        title: "全部节点",
        nodes: [],
        hidden: false
    },
    fetchData: function() {
        var that = this;
        that.setData({
            hidden: false
        });

        _my.request({
            url: Api.getAllNode(),
            success: function(res) {
                console.log(res);
                that.setData({
                    nodes: res.data
                });
                setTimeout(function() {
                    that.setData({
                        hidden: true
                    });
                }, 300);
            }
        });
    },
    onLoad: function() {
        this.fetchData();
    }
});
