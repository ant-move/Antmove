Page({
  navigateTo() {
    my.navigateTo({ url: '../get-user-info/get-user-info' })
  },
  navigateBack() {
    my.navigateBack()
  },
  redirectTo() {
    my.redirectTo({ url: '../get-user-info/get-user-info' })
  },
  switchTab() {
    my.switchTab({
        url: '/page/component/index',
        success: () => {
          my.showToast({
            content: '成功',
            type: 'success',
            duration: 4000
          });
        }
      }
    );
  },
})
