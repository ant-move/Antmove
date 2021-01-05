Page({
  data: {},
  onLoad() {},
  getImageInfo() {
    my.getImageInfo({
      src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
