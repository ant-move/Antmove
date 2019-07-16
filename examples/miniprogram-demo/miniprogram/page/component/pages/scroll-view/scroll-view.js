const order = ['demo4', 'demo5', 'demo6']

Page({
  onShareAppMessage() {
    return {
      title: 'scroll-view',
      path: 'page/component/pages/scroll-view/scroll-view'
    }
  },

  data: {
    toView: 'demo4',
    scrollTop: 0
  },

  upper(e) {
    console.log('upper',e)
  },

  lower(e) {
    console.log('lower',e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap(e) {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        console.log(order[i])
        this.setData({
          toView: order[i+1],
        })
        console.log(this.data.toView)
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
