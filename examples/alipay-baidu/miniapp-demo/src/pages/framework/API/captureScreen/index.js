Page({
  data: {},
  onLoad() { },
  onUserCaptureScreen() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: '收到用户截屏事件',
      })
    })
  },
  offUserCaptureScreen() {
    my.offUserCaptureScreen()
  },
})
