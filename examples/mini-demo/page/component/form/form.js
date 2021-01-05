Page({
  data: {
  },
  onSubmit(e) {
    wx.showToast({
      title: `数据：${JSON.stringify(e.detail.value)}`
    });
  },
  onReset(e){
    console.log(e)
  }
})