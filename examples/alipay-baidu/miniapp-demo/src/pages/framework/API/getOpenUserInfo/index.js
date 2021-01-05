Page({
  data: {},
  onLoad() { },
  onGetAuthorize(data) {
    console.log(data)
    my.getOpenUserInfo({
      fail: (res) => {
        console.log('error', res)
      },
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      complete: (res) => {
        console.log('complete', res)
      },
    })
  },
})
