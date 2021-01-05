const _Page = require("../../../__antmove/component/componentClass.js")("Page");
const _my = require("../../../__antmove/api/index.js")(my);
// page/API/loading/loading.js
_Page({
    /**
     * 页面的初始数据
     */
    data: {},
    showLoading: function() {
        _my.showLoading({
            title: "加载中。。。",
            mask: true,

            success(res) {
                console.log(res);
            },

            fail(err) {
                console.log(err);
            }
        });

        setTimeout(function() {
            _my.hideLoading({
                success(res) {
                    console.log(res);
                },

                fail(err) {
                    console.log(err);
                }
            });
        }, 2000);
    }
});
