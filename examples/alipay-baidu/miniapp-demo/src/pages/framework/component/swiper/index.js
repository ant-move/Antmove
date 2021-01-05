Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
    current: 1,
  },
  onLoad() {
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    })
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    })
  },
  changeCircular() {
    this.setData({
      circular: !this.data.circular,
    })
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay,
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    })
  },
  change(e) {
    this.setData({
      current: e.detail.current,
    })
    console.log('change')
  },
  transition() {
    console.log('transition')
  },
  end() {
    console.log('end')
  },
  disableSwitch() {
    this.setData({
      current: 2,
    })
  },
})
