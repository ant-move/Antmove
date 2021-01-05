Page({
  data: {},
  onLoad() { },
  watchShake() {
    my.watchShake({
      success() {
        my.alert({ title: '动起来了 o.o' })
      },
      fail(err) {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
