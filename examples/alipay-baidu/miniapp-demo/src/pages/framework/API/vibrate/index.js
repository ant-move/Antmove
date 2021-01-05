Page({
  data: {},
  onLoad() {},
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
  vibrateShort() {
    my.vibrateShort({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
  vibrateLong() {
    my.vibrateLong({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
})
