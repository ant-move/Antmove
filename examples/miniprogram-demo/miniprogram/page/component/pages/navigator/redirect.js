Page({
  onShareAppMessage() {
    return {
      title: 'redirectPage',
      path: 'page/component/pages/navigator/redirect'
    }
  },

  onLoad(options) {
    console.log(options)
    this.setData({
      title: options.title
    })
  },
  back(){
    console.log(123)
    wx.navigateBack({
      delta: 2
    })
  }
})
