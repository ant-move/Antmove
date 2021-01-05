Page({
  data: {},
  onLoad() { },
  navigateToAMapPage() {
    my.navigateToAMapPage({
      url: 'amapuri://search/around?keywords=%e9%a6%96%e5%bc%80%e5%b9%bf%e5%9c%ba&lat=39.99325&lon=116.473209',
      success: (res) => {
        console.log(`success|navigateToAMapPage|${encodeURIComponent(JSON.stringify(res))}`)
        my.alert({ content: `系统信息${JSON.stringify(res)}` })
      },
      fail: (error) => {
        console.log(`fail|navigateToAMapPage|${encodeURIComponent(JSON.stringify(error))}`)
        my.alert({ content: `系统信息${JSON.stringify(error)}` })
      },
      complete: () => {
        console.log('complete|navigateToAMapPage')
      },
    })
  },
})
