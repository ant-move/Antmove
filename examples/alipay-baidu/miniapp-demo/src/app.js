function initUpdateManager() {
  const updateManager = my.getUpdateManager()

  updateManager.onCheckForUpdate((res) => {
    // 请求完新版本信息的回调
    console.log(res.hasUpdate)
    my.alert({
      title: '请求完新版本信息的回调',
      content: JSON.stringify(res),
    })
  })

  updateManager.onUpdateReady(() => {
    my.confirm({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      },
    })
  })

  updateManager.onUpdateFailed((res = {}) => {
    // 新版本下载失败
    my.alert({
      title: '新版本下载失败',
      content: JSON.stringify(res),
    })
  })
}

App({
  globalData: {},
  onLaunch(options) {
    if (options.path === 'pages/framework/API/getUpdateManager/index') {
      initUpdateManager()
    }
  },
  onShow() {},
  onHide() {},
  onError() {},
})
