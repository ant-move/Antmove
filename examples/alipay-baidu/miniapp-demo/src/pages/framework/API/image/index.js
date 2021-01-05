Page({
  chooseImage() {
    my.chooseImage({
      count: 2,
      success: (res) => {
        console.log('success')
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.showToast({
          content: `chooseImage/fail${JSON.stringify(err)}`, // 文字内容
        })
      },
      complete() {
        console.log('chooseImage/complete')
      },
    })
  },
  previewImage() {
    my.previewImage({
      current: 2,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg',
      ],
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: () => {
        my.showToast({
          content: 'previewImage/fail', // 文字内容
        })
      },
      complete() {
        console.log('previewImage/complete')
      },
    })
  },
  saveImage() {
    my.saveImage({
      url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: () => {
        my.alert({
          title: '保存成功',
        })
      },
      fail() {
        console.log('保存失败')
      },
      complete() {
        console.log('saveImage/complete')
      },
    })
  },
})
