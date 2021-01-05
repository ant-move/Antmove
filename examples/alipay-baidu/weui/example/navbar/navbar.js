const _Page = require("/__antmove/component/componentClass.js")("Page");
const _my = require("/__antmove/api/index.js")(my);
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

_Page({
    data: {
        tabs: ["选项一", "选项二", "选项三"],
        activeIndex: 1,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function() {
        var that = this;

        _my.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft:
                        (res.windowWidth / that.data.tabs.length -
                            sliderWidth) /
                        2,
                    sliderOffset:
                        (res.windowWidth / that.data.tabs.length) *
                        that.data.activeIndex
                });
            }
        });
    },
    tabClick: function(e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    }
});
