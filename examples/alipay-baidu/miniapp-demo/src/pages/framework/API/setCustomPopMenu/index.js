Page({
  data: {},
  onLoad() { },
  setCustomPopMenu() {
    my.setCustomPopMenu({
      menus: [{ name: '新增0' }, { name: '新增1' }, { name: '新增2' }, { name: '新增3' }, { name: '新增4' }],
      success: (res) => {
        my.alert({
          content:
            JSON.stringify(res),
        })
      },
      fail: (error) => {
        my.alert({
          content:
            JSON.stringify(error),
        })
      },
      complete: () => {
        my.alert({ title: 'complete回调' })
      },
    })
  },
  onPopMenuClick(data) {
    my.alert({
      content: JSON.stringify(data),
    })
  },
})
