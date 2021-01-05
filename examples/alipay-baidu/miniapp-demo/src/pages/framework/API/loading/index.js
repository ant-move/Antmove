Page({
  showLoading() {
    my.showLoading({
      content: '加载中...',
      delay: '1000',
    })
    const that = this
    setTimeout(() => {
      my.hideLoading({
        page: that,
      })
    }, 5000)
  },
})
