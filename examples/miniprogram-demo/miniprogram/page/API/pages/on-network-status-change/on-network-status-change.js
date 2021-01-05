Page({
  onShareAppMessage() {
    return {
      title: '监听手机网络变化',
      path: 'page/API/pages/on-network-status-change/on-network-status-change'
    }
  },

  data: {
    isConnected: false,
  },
  onLoad() {
    const that = this
    wx.onNetworkStatusChange(function (res) {
      console.log("123", res)
      that.setData({
        isConnected: res.isConnected,
        networkType: res.networkType
      })
      console.log(that.data.networkType)
    })
  },
  
  onShow() {
    const that = this
    wx.getNetworkType({
      success(res) {
        console.log(res)
        that.setData({
          isConnected: res.networkType !== 'none',
          networkType: res.networkType
        })
      }
    })
  }
})
