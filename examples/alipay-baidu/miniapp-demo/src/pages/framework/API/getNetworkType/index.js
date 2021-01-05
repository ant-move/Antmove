Page({
  data: {
    hasNetworkType: false,
  },
  onLoad() {
    this.onChange = this.onChange.bind(this)
    // my.onNetworkChange(this.onChange);
  },
  onChange(res) {
    console.log('onNetworkChange', res)
    this.setData({
      hasNetworkType: true,
      networkType: res.networkType,
    })
  },
  onUnload() {
    // my.offNetworkChange(this.onChange);
  },
  getNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType,
        })
      },
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: '',
    })
  },
  startOnNetworkStatusChange() {
    console.log('startOnNetworkStatusChange')
    my.onNetworkStatusChange((res) => {
      console.log(JSON.stringify(res))
    })
  },
  offNetworkStatusChange() {
    console.log('offNetworkStatusChange')
    my.offNetworkStatusChange()
  },
})
