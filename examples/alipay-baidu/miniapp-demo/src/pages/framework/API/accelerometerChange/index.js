Page({
  data: {
    currentX: '',
    currentY: '',
    currentZ: '',
  },
  onLoad() { },
  onAccelerometerChange() {
    my.onAccelerometerChange((res) => {
      console.log(JSON.stringify(res))
      this.setData({
        currentX: res.x,
        currentY: res.y,
        currentZ: res.z,
      })
    })
  },
  offAccelerometerChange() {
    my.offAccelerometerChange()
  },
})
