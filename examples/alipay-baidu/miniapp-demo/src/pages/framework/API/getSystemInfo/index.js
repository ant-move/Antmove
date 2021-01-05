Page({
  data: {
    systemInfo: {},
  },
  getSystemInfo() {
    my.getSystemInfo({
      success: (res) => {
        console.log(res)
        this.setData({
          systemInfo: res,
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: my.getSystemInfoSync(),
    })
    console.log(this.data.systemInfo)
  },
})
