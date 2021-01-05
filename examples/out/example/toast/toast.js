const _Page = require("../../__antmove/component/componentClass.js")("Page");

const _tt = require("../../__antmove/api/index.js")(tt);

_Page({
  openToast: function () {
    _tt.showToast({
      title: "已完成",
      icon: "success",
      duration: 3000
    });
  },
  openLoading: function () {
    _tt.showToast({
      title: "数据加载中",
      icon: "loading",
      duration: 3000
    });
  }
});