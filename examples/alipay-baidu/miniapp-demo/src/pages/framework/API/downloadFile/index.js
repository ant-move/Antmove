Page({
  download() {
    my.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success(res) {
        // console.log(res)
        const { apFilePath } = res
        my.previewImage({
          urls: [apFilePath],
        })
      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error,
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
