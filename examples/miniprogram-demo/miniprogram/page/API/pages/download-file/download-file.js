const downloadExampleUrl = require('../../../../config').downloadExampleUrl

Page({
  onShareAppMessage() {
    return {
      title: '下载文件',
      path: 'page/API/pages/download-file/download-file'
    }
  },

  downloadImage() {
    const self = this

    const task = wx.downloadFile({
      url: downloadExampleUrl,
      filePath:'',
      success(res) {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageSrc: res.tempFilePath
        })
      },
      fail({errMsg}) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
    task.onProgressUpdate(function(res) {
      console.log(res)
    })
  }
})
