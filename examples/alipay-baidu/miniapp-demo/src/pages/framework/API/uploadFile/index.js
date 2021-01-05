Page({
  uploadFile() {
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0]
        console.log(path)
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: () => {
            my.alert({ title: '上传成功' })
          },
          fail() {
            my.alert({ title: '上传失败' })
          },
          complete() {
            console.log('complete')
          },
        })
      },
    })
  },
})
