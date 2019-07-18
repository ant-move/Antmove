Page({
  data: {
    tempFilePath: ""
  },
  onLoad() {
    console.log(wx.setInnerAudioOption)

  },
  playVoice() {
    const self = this;
    console.log('playVioce:', self.data.tempFilePath)
    wx.playVoice({
      filePath: self.data.tempFilePath,
      // duration:2,
      success(e) {
        console.log(213, e)
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log(12)
      }
    })

  },
  startRecord() {
    console.log(222)
    const self = this
    wx.startRecord({

      success(res) {
        console.log(res);
        self.data.tempFilePath = res.tempFilePath

      },
      fail(err) {
        console.log(err)
      }
    })
  },
  stopRecord() {
    wx.stopRecord()
  },
  stopVoice() {
    wx.stopVoice()
  },
  pauseVoice() {
    wx.pauseVoice({
      success() {
        console.log("pauseVoice")
      }
    })
  }

});
