Page({
  data: {},
  onLoad() {},
  getAmapUserData() {
    my.getAmapUserData({
      success(res) {
        my.alert({
          content: `success，${JSON.stringify(res)}`,
        })
      },
      fail: (res) => {
        my.alert({
          content: `fail，${JSON.stringify(res)}`,
        })
      },
      complete: (res) => {
        my.alert({
          content: `complete：${JSON.stringify(res)}`,
        })
      },
    })
  },
})
