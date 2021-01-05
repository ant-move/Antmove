Page({
  data: {
    canReLaunch: !!my.reLaunch,
  },
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.currentTarget.dataset
    my[openType]({ url })
  },
  index() {
    my.reLaunch({
      url: '/pages/tab-bar/page-components/index',
    })
  },
})
