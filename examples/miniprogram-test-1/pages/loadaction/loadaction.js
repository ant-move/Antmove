Page({
  data: {
    actionSheetHidden: true,
    actionSheetItems: ['item1', 'item2', 'item3', 'item4']
  },
  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindItemTap: function (e) {
    console.log('tap ' + e.currentTarget.dataset.name)
  }
})