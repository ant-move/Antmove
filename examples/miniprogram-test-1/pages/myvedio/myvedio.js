Page({
  data: {
    myvideo: {}
  },
  onLoad() {

    this.myvideo = wx.createVideoContext("myvideo");
    console.log(11, this.myvideo)
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
      }
    })
    // this.setData({
    //   videoid:videoid
    // })

  },
  onShow() {
    console.log(2)
  },
  savevedio() {
    wx.saveVideoToPhotosAlbum({
      filePath: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      success(res) {
        console.log(res.errMsg)
      }
    })
  },
  testvedio(e) {
    let events = e.currentTarget.dataset.evn;
    console.log(this.myvideo)
    if (events==="sendDanmu"){
      
    }else{  
      this.myvideo[events]()

    }

  }
});
