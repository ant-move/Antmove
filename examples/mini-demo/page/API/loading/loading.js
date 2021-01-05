// page/API/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showLoading: function() {
    wx.showLoading({
      title: "加载中。。。",
      mask: true,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    });
    setTimeout(function() {
      wx.hideLoading({
        success(res) {
          console.log(res)
        },
        fail(err) {
          console.log(err)
        }
      })
    },2000)
  }
})