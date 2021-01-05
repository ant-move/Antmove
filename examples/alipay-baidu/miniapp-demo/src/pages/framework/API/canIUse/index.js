Page({
  onShow() {
    my.alert({
      content: `当前版本是否支持:getFileInfo ${my.canIUse('getFileInfo')}`,
    })
    my.alert({
      content: `当前版本是否支持lifestyle: ${my.canIUse('lifestyle')}`,
    })
    console.log(`closeSocket: ${my.canIUse('closeSocket.object.code')}`)
    console.log(`getLocation: ${my.canIUse('getLocation.object.type')}`)
    console.log(`getSystemInfo: ${my.canIUse('getSystemInfo.return.brand')}`)
  },
  isSupport() {
    my.alert({
      content: my.canIUse('button.open-type.share'),
    })
  },
})
