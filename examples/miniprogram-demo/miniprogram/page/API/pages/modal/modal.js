Page({
  onShareAppMessage() {
    return {
      title: '模态弹窗',
      path: 'page/API/pages/modal/modal'
    }
  },

  data: {
    modalHidden: true,
    modalHidden2: true
  },
  modalTap() {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      showCancel: true,
      cancelText: "否",
      cancelColor: '#ff0000',
      confirmText: '确定',
      confirmColor: "#179B16",
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      },
      complete(result) {
        console.log(result)
      },
    })
  },
  noTitlemodalTap() {
    wx.showModal({
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消'
    })
  }
})