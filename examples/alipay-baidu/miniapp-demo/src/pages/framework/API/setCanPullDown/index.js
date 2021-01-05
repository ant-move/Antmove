Page({
  data: {
    isSupport: '开启下拉功能',
    canPullDown: true,
  },
  onLoad() {
    my.setCanPullDown({
      canPullDown: false,
    })
  },
  pullDown() {
    const { canPullDown } = this.data
    if (canPullDown) {
      this.setData({
        isSupport: '开启下拉功能',
        canPullDown: false,
      })
      my.setCanPullDown({
        canPullDown: false,
      })
    } else {
      this.setData({
        isSupport: '关闭下拉功能',
        canPullDown: true,
      })
      my.setCanPullDown({
        canPullDown: true,
      })
    }
  },
})
