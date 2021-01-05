Page({
  data: {},
  onLoad() { },
  getRunScene() {
    my.getRunScene({
      success(result) {
        my.alert({
          title: '小程序版本',
          content: `${result.envVersion}`,
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
})
