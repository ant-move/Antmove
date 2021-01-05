Page({
  onLoad(res) {
    console.log(res)
  },
  navigateTo() {
    my.navigateTo({
      url: '../alert/index',
      success(res) {
        console.log('navigateToRES', res)
      },
      fail(err) {
        console.log('navigateToERR', err)
      },
      complete() {
        console.log('navigateToComplete')
      },
    })
  },
  navigateBack() {
    my.navigateBack({
      delta: 1,
    })
  },
  redirectTo() {
    my.redirectTo({
      url: '../confirm/index',
      success(res) {
        console.log('redirectToRES', res)
      },
      fail(err) {
        console.log('redirectToERR', err)
      },
      complete() {
        console.log('redirectToComplete')
      },
    })
  },
  switchTab() {
    my.switchTab({
      url: '/pages/tab-bar/page-components/index',
      success: () => {
        my.showToast({
          content: '成功',
          type: 'success',
          duration: 4000,
        })
      },
    })
  },
  reLaunch() {
    my.reLaunch({
      url: '/pages/tab-bar/page-components/index',
    })
  },
})
