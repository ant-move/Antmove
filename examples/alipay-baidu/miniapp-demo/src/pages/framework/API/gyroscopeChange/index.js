Page({
  data: {
    currentX: '',
    currentY: '',
    currentZ: '',
  },
  onLoad() { },
  onGyroscopeChange() {
    my.onGyroscopeChange((res) => {
      this.setData({
        currentX: res.x,
        currentY: res.y,
        currentZ: res.z,
      })
    })
  },
  offGyroscopeChange() {
    my.offGyroscopeChange()
  },
})
