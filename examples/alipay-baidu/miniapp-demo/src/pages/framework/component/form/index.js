Page({
  onSubmit(e) {
    my.alert({
      content: `submit：${JSON.stringify(e.detail)}`,
    })
  },
  onReset() {
    my.alert({
      content: '重置',
    })
  },
})
