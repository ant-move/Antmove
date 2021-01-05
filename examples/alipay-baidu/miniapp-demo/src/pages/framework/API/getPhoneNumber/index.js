Page({
  data: {
    canIUseAuthButton: true,
  },
  onGetAuthorize() {
    console.log('onGetAuthorize')
    my.getPhoneNumber({
      success: (res) => {
        console.log('success', res)
        my.alert({
          content: res,
        })
      },
      fail: (res) => {
        console.log('fail', res)
        my.alert({
          content: res,
        })
      },
    })
  },
  onAuthError(err) {
    my.alert({
      content: err,
    })
  },
})
