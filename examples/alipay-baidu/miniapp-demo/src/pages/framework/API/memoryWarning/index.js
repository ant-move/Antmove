Page({
  onLoad() {
    this.callback = (res) => {
      let levelString = 'iOS 设备, 无 level 传入.'
      switch (res.level) {
        case 10:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_LOW'
          break
        case 15:
          levelString = 'Android 设备, level = TRIM_MEMORY_RUNNING_CRITICAL'
          break
        default:
      }
      my.alert({
        title: '收到内存不足告警',
        content: levelString,
      })
    }
  },
  onMemoryWarning() {
    my.onMemoryWarning(this.callback)
  },
  onUnload() {
    my.offMemoryWarning(this.callback)
  },
})
