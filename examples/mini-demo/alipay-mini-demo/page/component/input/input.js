const _Page = require("../../../__antmove/component/componentClass.js")("Page");
const _my = require("../../../__antmove/api/index.js")(my);
_Page({
    data: {
        focus: false,
        inputValue: ""
    },

    bindButtonTap() {
        // blur 事件和这个冲突
        setTimeout(() => {
            this.onFocus();
        }, 100);
    },

    onFocus() {
        this.setData({
            focus: true
        });
    },

    onBlur() {
        this.setData({
            focus: false
        });
    },

    bindKeyInput(e) {
        this.setData({
            inputValue: e.detail.value
        });
    },

    bindHideKeyboard(e) {
        if (e.detail.value === "123") {
            // 收起键盘
            _my.hideKeyboard();
        }
    },

    handleSearch(e) {
        console.log("search", e.detail.value);
        this.setData({
            search: e.detail.value
        });
    },

    doneSearch() {
        console.log("doneSearch", this.data.search);

        _my.hideKeyboard();
    },

    clearSearch() {
        console.log("clear search", this.data.search);
        this.setData({
            search: ""
        });
    }
});
