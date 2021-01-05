const _Page = require("/__antmove/component/componentClass.js")("Page");
_Page({
    data: {
        inputShowed: false,
        inputVal: ""
    },
    showInput: function() {
        console.log(123);
        this.setData({
            inputShowed: true
        });
    },
    abc: function() {
        console.log(789);
    },
    hideInput: function() {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function() {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function(e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
});
