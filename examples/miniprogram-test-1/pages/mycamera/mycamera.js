// pages/mycamera/mycamera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myCamera:{}
  },
  onShow(){
    this.data.myCamera = wx.createCameraContext()
  },

  takePhoto(){
    this.data.myCamera.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord(){
    this.data.myCamera.startRecord({
      timeoutCallback(res){
        console.log("结束了", res)
      },
      success: (res) => {
        console.log(res)

      }
    })
  },
  stopRecord(){
    this.data.myCamera.stopRecord({
      success(res){
        console.log(res)

      }
    })
  }
})