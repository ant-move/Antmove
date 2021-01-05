const _Page = require("../../__antmove/component/componentClass.js")("Page");
const _my = require("../../__antmove/api/index.js")(my);
// latest.js
var Api = require("../../utils/api.js");

_Page({
    data: {
        title: "最新话题",
        latest: [],
        hidden: false
    },
    onPullDownRefresh: function() {
        this.fetchData();
        console.log("onPullDownRefresh", new Date());
    },
    // 事件处理函数
    redictDetail: function(e) {
        var id = e.currentTarget.id,
            url = "../detail/detail?id=" + id;

        _my.navigateTo({
            url: url
        });
    },
    fetchData: function() {
        var that = this;
        that.setData({
            hidden: false
        });

        _my.request({
            url: Api.getLatestTopic({
                p: 1
            }),
            header: {
                test: "ada"
            },
            success: function(res) {
                console.log(res.header);
                console.log(res);
                that.setData({
                    latest: res.data
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
