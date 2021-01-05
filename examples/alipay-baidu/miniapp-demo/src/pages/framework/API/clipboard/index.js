Page({
  data: {
    text: '3.1415926',
    copy: '',
  },
  handleInput(e) {
    this.setData({
      text: e.detail.value,
    })
  },
  handleCopy() {
    my.setClipboard({
      text: this.data.text,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('setClipboard/complete')
      },
    })
  },
  handlePaste() {
    my.getClipboard({
      success: ({ text }) => {
        this.setData({ copy: text })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('getClipboard/complete')
      },
    })
  },
})
