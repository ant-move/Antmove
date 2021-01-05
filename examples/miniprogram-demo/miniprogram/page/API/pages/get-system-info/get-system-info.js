Page({
  onShareAppMessage() {
    return {
      title: '获取手机系统信息',
      path: 'page/API/pages/get-system-info/get-system-info'
    }
  },

  data: {
    systemInfo: {}
  },
  getSystemInfo() {
    const that = this
    const res = wx.getSystemInfoSync()
    console.log(res.model)
    console.log(res.pixelRatio)
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    console.log(res.language)
    console.log(res.version)
    console.log(res.SDKVersion)
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        console.log(res.SDKVersion)
        console.log(res.wifiEnabled)
        that.setData({
          systemInfo: res
        })
      }
    })
  }
})
