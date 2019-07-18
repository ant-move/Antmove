//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const mapContext = wx.createMapContext("map", this);
    console.log(mapContext);
    // getCenterLocation
    mapContext.getCenterLocation({
      success(res) {
        console.log(12, res)
      }

    })
    mapContext.includePoints({
      points: [{ "latitude": 39.92, "longitude": 116.46 }, { "latitude": 39.92, "longitude": 116.96}],
      success(res) {
        console.log(21, res)
      }

    })
  },
  

})
