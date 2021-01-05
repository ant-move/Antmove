Page({
  data: {},
  onLoad() { },
  setKeepScreenOn() {
    my.setKeepScreenOn({
      keepScreenOn: true,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
  setScreenBrightness() {
    my.setScreenBrightness({
      brightness: 0.5,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
  getScreenBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
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
