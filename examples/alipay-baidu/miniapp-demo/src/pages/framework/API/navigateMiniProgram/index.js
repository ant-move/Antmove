Page({
  navigateToMiniProgram() {
    my.navigateToMiniProgram({
      appId: '2018051660134749',
      extraData: {
        data: 'test',
      },
      envVersion: 'release',
      success: (res) => {
        console.log(JSON.stringify(res))
      },
      fail: (res) => {
        console.log(JSON.stringify(res))
      },
      complete() {
        console.log('complete')
      },
    })
  },
  navigateBackMiniProgram() {
    my.navigateBackMiniProgram({
      extraData: {
        data1: 'test',
      },
      success: (res) => {
        console.log(JSON.stringify(res))
      },
      fail: (res) => {
        console.log(JSON.stringify(res))
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
