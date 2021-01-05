const _Page = require("../../__antmove/component/componentClass.js")("Page");

const _tt = require("../../__antmove/api/index.js")(tt);

_Page({
  open: function () {
    _tt.showActionSheet({
      itemList: ["A", "B", "C"],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex);
        }
      }
    });
  }
});