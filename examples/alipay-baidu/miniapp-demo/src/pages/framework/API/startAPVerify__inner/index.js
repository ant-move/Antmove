Page({
  startAPVerify() {
    console.log('唤起', my.canIUse('startAPVerify'))
    if (!my.canIUse('startAPVerify')) {
      my.alert({
        title: '客户端版本过低',
        content: '请升级高德版本',
      })
      return
    }
    my.startAPVerify({
      bizNo: 'demo',
      success: (res) => {
        my.alert({ title: `success:${JSON.stringify(res)}` })
      },
      fail: (res) => {
        my.alert({ title: `fail: ${JSON.stringify(res)}` })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})

