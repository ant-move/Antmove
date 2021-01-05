Page({
  getSetting() {
    my.getSetting({
      success: (res) => {
        console.log(res)
        my.alert({
          content: JSON.stringify(res),
        })
        /*
         * res.authSetting = {
         *   "location": true,
         *   "audioRecord": true,
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
