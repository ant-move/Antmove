Page({
  setNavigationBar(e) {
    const { title, backgroundColor, borderBottomColor, image } = e.detail.value
    const tempParams = {}
    tempParams.title = title
    tempParams.image = image
    if (backgroundColor !== '') {
      tempParams.backgroundColor = backgroundColor
    }
    if (borderBottomColor !== '') {
      tempParams.borderBottomColor = borderBottomColor
    }
    tempParams.success = function () {
      my.alert({
        content: '设置成功',
      })
    }
    tempParams.fail = function () {
      my.alert({
        content: '设置失败',
      })
    }
    tempParams.complete = function () {
      console.log('complete')
    }
    my.setNavigationBar(tempParams)
  },
  resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: '重置导航栏样式',
    })
  },
})
