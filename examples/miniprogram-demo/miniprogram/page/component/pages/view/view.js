Page({
  onShareAppMessage() {
    return {
      title: 'view',
      path: 'page/component/pages/view/view'
    }
  },
  getBatteryInfo(){
    console.log(123)
    wx.getBatteryInfo({
      success(res){
        console.log(res)
      },
      fail(res){
        console.log(res)
      }
    })
    wx.getBatteryInfoSync({
      success(res) {
        console.log(res)
      },
      fail(res) {
        console.log(res)
      }
    })
  } 
})
