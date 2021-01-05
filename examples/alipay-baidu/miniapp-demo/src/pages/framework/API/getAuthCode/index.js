Page({
  onLoad() {},
  data: {},
  getAuthCode: () => {
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res)
        const { authCode } = res
        my.alert({
          content: authCode,
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
