Page({
  data: {
    x: 0,
    y: 0,
  },
  onButtonTap() {
    const { x, y } = this.data
    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1,
      })
    } else {
      this.setData({
        x: 30,
        y: 30,
      })
    }
  },
  change() {
    console.log('change')
  },
  changeEnd() {
    console.log('changeEnd')
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
