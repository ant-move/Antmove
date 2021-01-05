const _conponentConstructorHandle = require("/__antmove/component/componentClass.js");
const _my = require("/__antmove/api/index.js")(my);
//answer.js
var util = require("/utils/util.js");

var app = getApp();
Page(
    _conponentConstructorHandle(
        {
            data: {
                motto: "知乎--微信小程序版",
                userInfo: {}
            },
            //事件处理函数
            bindItemTap: function() {
                _my.navigateTo({
                    url: "../answer/answer"
                });
            },
            onLoad: function() {
                console.log("onLoad");
                var that = this; //调用应用实例的方法获取全局数据

                app.getUserInfo(function(userInfo) {
                    //更新数据
                    that.setData({
                        userInfo: userInfo
                    });
                });
            },
            tapName: function(event) {
                console.log(event);
            }
        },
        "Page"
    )
);
