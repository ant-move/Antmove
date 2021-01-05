Page({
  scan() {
    my.scan({
      type: 'qr',
      hideAlbum: false,
      success: (res) => {
        my.alert({ title: res.code })
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
