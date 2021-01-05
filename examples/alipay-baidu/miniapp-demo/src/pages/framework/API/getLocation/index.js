import formatLocation from './format-location.js'

Page({
  data: {
    hasLocation: false,
  },
  getLocation() {
    const that = this
    my.showLoading()
    my.getLocation({
      cacheTimeout: 20,
      type: 3,
      success(res) {
        my.hideLoading()
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
        })
      },
      fail() {
        my.hideLoading()
        my.alert({ title: '定位失败' })
      },
      complete() {
        console.log('complete')
      },
    })
  },
  clear() {
    this.setData({
      hasLocation: false,
    })
  },
})
