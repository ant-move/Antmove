Page({
  openSetting() {
    my.openSetting({
      success: (res) => {
        console.log(res)
        /*
        * res.authSetting = {
        *   "scope.userInfo": true,
        *   "scope.location": true,
        *   ...
        * }
        */
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
