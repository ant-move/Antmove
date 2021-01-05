Page({
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh() {
    my.stopPullDownRefresh({
      complete() {
        console.log(new Date())
      },
    })
  },
})
