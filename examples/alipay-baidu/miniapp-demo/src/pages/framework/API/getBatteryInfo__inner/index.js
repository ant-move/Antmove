Page({
  data: {},
  onLoad() { },
  getBatteryInfo() {
    my.getBatteryInfo({
      success: (res) => {
        my.alert({ content: `系统信息：${JSON.stringify(res)}` })
        console.log({ content: `系统信息：${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `获取失败${JSON.stringify(error)}` })
      },
      complete: () => {
        console.log('complete回调')
      },
    })
  },
})
