const order = ['blue', 'red', 'green', 'yellow']

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    scrollY: true,
    isScrollText: '禁止滚动',
    isScroll: true,
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e.detail.scrollTop)
  },
  scrollToTop() {
    this.setData({
      scrollTop: 0,
    })
  },
  noScroll() {
    const { isScroll } = this.data
    if (isScroll) {
      this.setData({
        isScroll: false,
        isScrollText: '开启滚动',
      })
    } else {
      this.setData({
        isScroll: true,
        isScrollText: '禁止滚动',
      })
    }
    this.setData({
      scrollY: !this.data.scrollY,
    })
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length
        this.setData({
          toView: order[next],
          scrollTop: next * 200,
        })
        break
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    })
  },
  start() {
    console.log('start')
  },
  move() {
    console.log('move')
  },
  end() {
    console.log('end')
  },
  cancel() {
    console.log('cancel')
  },
})
