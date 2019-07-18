// pages/LivePusher/LivePusher.js
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.LivePusherContext = wx.createLivePusherContext()
  },
  lstart(){
    this.LivePusherContext.start({
      success(res){
        console.log(123,res)
      }
    })
  },
/**
 *LivePusherContext.start()
播放推流

LivePusherContext.stop()
停止推流

LivePusherContext.pause()
暂停推流

LivePusherContext.resume()
恢复推流

LivePusherContext.switchCamera()
切换前后摄像头

LivePusherContext.snapshot()
快照

LivePusherContext.toggleTorch()
 */ 

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})