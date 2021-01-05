const requestUrl = require('../../../../config').requestUrl

const duration = 2000

Page({
  onShareAppMessage() {
    return {
      title: '网络请求',
      path: 'page/API/pages/request/request'
    }
  },

  makeRequest() {
    const self = this

    self.setData({
      loading: true
    })

    const task = wx.request({
      url: requestUrl,
      header:{
        content:'qqq'
      },
      responseType:"text",
      data: {
        noncestr: Date.now()
      },
      success(result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail({errMsg}) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
    task.onHeadersReceived(function(res) {
      console.log(res)
    })
  }
})
