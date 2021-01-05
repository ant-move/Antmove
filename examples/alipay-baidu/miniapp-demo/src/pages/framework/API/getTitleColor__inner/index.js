Page({
  data: {},
  onLoad() { },
  getTitleColor() {
    my.getTitleColor({
      success: (res) => {
        my.alert({ content: `title Color:${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `获取失败:${JSON.stringify(error)}` })
      },
    })
  },
})
