Page({
  data: {
    pageName: 'component/view',
    hidden: false,
    btnText: '隐藏',
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      returnIndex: getCurrentPages().length === 1,
    })
  },
  returnIndex() {
    my.switchTab({ url: '/pages/tab-bar/page-components/index' })
  },
  touchStart() {
    console.log('touchStart')
  },
  touchMove() {
    console.log('touchMove')
  },
  touchEnd() {
    console.log('touchEnd')
  },
  touchCancel() {
    console.log('touchCancel')
  },
  onLongTap() {
    console.log('onLongTap')
  },
  transitionEnd() {
    console.log('transitionEnd')
  },
  appear() {
    console.log('appear')
  },
  disappear() {
    console.log('disappear')
  },
  firstAppear() {
    console.log('firstAppear')
  },
  toHidden() {
    if (this.data.hidden) {
      this.setData({
        hidden: false,
        btnText: '隐藏',
      })
    } else {
      this.setData({
        hidden: true,
        btnText: '显示',
      })
    }
  },
})
