Page({
  onShareAppMessage() {
    return {
      title: '操作菜单',
      path: 'page/API/pages/action-sheet/action-sheet'
    }
  },

  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      itemColor: '#ff0000',
      success(e) {
        console.log(e.tapIndex)
      },
      fail(err) {
        console.log(err)
      },
      complete(result) {
        console.log(result)
      }
    })
  }
})
