// pages/others/others.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  getExtConfigSync() {
    console.log(wx.getExtConfigSync)
    const ExtConfig = wx.getExtConfigSync({});
    console.log(ExtConfig)
  },
  getExtConfig(){
    wx.getExtConfig({
      success(res) {
        console.log(222, res)
      }
    })
  }
})