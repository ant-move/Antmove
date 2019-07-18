Page({
  data: {},
  onLoad() {
    
  },
  onShareAppMessage(){
    return {
      title:"恭喜发财",
      path:"/pages/myshear/myshear"
    }
  },
  defaultTap() {
    wx.hideShareMenu({
      success() {
        console.log(123)
      }
    })
  },
  updateShareMenu() {
    wx.updateShareMenu({
      withShareTicket: true,
      success() { 
        console.log(22)
      }
    })
  },
  showShareMenu(){
    wx.showShareMenu({
      success(){
        console.log("成功")
      }
    })
  },
  getShareInfo(){
    console.log(wx.getShareInfo)
  }

});
