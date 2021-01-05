const _conponentConstructorHandle = require("/__antmove/component/componentClass.js");
const _my = require("/__antmove/api/index.js")(my);
//logs.js
var util = require("/utils/util.js");

var app = getApp();
Page(
    _conponentConstructorHandle(
        {
            data: {
                motto: "Hello World",
                userInfo: {}
            },
            //事件处理函数
            bindViewTap: function() {
                _my.navigateTo({
                    url: ""
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
            }
        },
        "Page"
    )
);
