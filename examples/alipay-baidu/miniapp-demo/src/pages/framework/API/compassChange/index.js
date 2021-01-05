Page({
  data: {
    currentValue: '',
  },
  onLoad() { },
  onCompassChange() {
    my.onCompassChange((res) => {
      console.log(res.direction)
      this.setData({
        currentValue: res.direction,
      })
    })
  },
  offCompassChange() {
    my.offCompassChange()
  },
})
