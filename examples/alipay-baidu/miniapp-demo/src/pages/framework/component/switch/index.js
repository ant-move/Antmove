Page({
  data: {
    switch1: true,
    checked: true,
  },
  switch1Change(e) {
    console.log(e)
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      switch1: e.detail.value,
      checked: !this.data.checked,
    })
  },
  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
})
