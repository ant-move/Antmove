Page({
  data: {},
  onLoad() {},
  getServerTime() {
    my.getServerTime({
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
      complete: () => {
        console.log('complete')
      },
    })
  },
})
