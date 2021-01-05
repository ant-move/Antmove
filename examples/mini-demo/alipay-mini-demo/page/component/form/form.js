const _Page = require("../../../__antmove/component/componentClass.js")("Page");
const _my = require("../../../__antmove/api/index.js")(my);
_Page({
    data: {},

    onSubmit(e) {
        _my.showToast({
            title: `数据：${JSON.stringify(e.detail.value)}`
        });
    },

    onReset(e) {
        console.log(e);
    }
});
