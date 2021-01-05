Page({
  data: {},
  onLoad() { },
  getBatteryInfoSync() {
    const res = my.getBatteryInfoSync()
    my.alert({ content: `系统信息：${JSON.stringify(res)}` })
    console.log({ content: `系统信息：${JSON.stringify(res)}` })
  },
})
