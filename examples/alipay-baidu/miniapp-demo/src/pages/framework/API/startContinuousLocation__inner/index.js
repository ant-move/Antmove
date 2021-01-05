Page({
  data: {
    bizContent: '',
    startResult: '',
    stopResult: '',
    onResult: '',
    offResult: '',
  },
  onLoad() {
    this.num = 0
    this.continuousLocationCb = this.continuousLocationCb.bind(this)
  },
  startContinuousLocation() {
    let bizContent
    if (this.data.bizContent.trim() === '') {
      bizContent = ''
    } else {
      try {
        bizContent = JSON.parse(this.data.bizContent)
      } catch (err) {
        my.alert({
          title: '入参解析失败，请检查传入入参是否为json对象',
          content: JSON.stringify(err),
        })
      }
    }
    let param = {}
    if (bizContent) {
      param = bizContent
    }

    if (my.canIUse('startContinuousLocation')) {
      my.startContinuousLocation({
        ...param,
        success: (data) => {
          console.log('success', data)
          this.setData({ startResult: JSON.stringify(data) })
        },
        fail: (data) => {
          console.log('fail', data)
          this.setData({ startResult: JSON.stringify(data) })
          my.alert({
            title: '失败',
            content: JSON.stringify(data),
          })
        },
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  bindInput(e) {
    console.log(e)
    this.setData({
      [e.target.dataset.type]: e.detail.value,
    })
  },
  stopContinuousLocation() {
    if (my.canIUse('startContinuousLocation')) {
      my.stopContinuousLocation({
        success: (data) => {
          console.log('success', data)
          this.setData({ stopResult: JSON.stringify(data) })
        },
        fail: (error) => {
          my.alert({
            title: '失败',
            content: JSON.stringify(error),
          })
        },
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },

  onContinuousLocation() {
    if (my.canIUse('onContinuousLocation')) {
      my.onContinuousLocation(this.continuousLocationCb)
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  offContinuousLocation() {
    if (my.canIUse('onContinuousLocation')) {
      my.offContinuousLocation(this.continuousLocationCb)
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
      })
    }
  },
  continuousLocationCb(res) {
    this.num += 1
    my.showToast({
      duration: 500,
      content: `第${this.num}次位置信息更新${JSON.stringify(res)}`,
    })
    this.setData({ onResult: JSON.stringify(res) })
  },
})
