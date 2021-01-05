// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    port: "哈哈"
  },
  onLoad: function() {
    console.log("我是生命周期中page的onLoad");
  },
  getUserInfo: function() {},
  onResize: function() {
  },
  onTabItemTap: function() {
  },
  onport(e) {
    console.log('页面',e)
  }
});