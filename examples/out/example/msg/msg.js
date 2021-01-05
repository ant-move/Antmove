const _Page = require("../../__antmove/component/componentClass.js")("Page");

const _tt = require("../../__antmove/api/index.js")(tt);

_Page({
  openSuccess: function () {
    _tt.navigateTo({
      url: "msg_success"
    });
  },
  openText: function () {
    _tt.navigateTo({
      url: "msg_text"
    });
  },
  openTextPrimary: function () {
    _tt.navigateTo({
      url: "msg_text_primary"
    });
  },
  openFail: function () {
    _tt.navigateTo({
      url: "msg_fail"
    });
  }
});