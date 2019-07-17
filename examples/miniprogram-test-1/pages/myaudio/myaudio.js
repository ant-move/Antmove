// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');

    wx.onBackgroundAudioStop(() => {
      
      console.log('支持onBackgroundAudioStop')

    })
    wx.onBackgroundAudioPlay(() => {
     
      console.log('支持onBackgroundAudioPlay')

    })
    wx.onBackgroundAudioPause(() => {
      console.log('支持onBackgroundAudioPause')
     
    })
    
  },

  seekBG() {
    wx.seekBackgroundAudio({
      position: 1,
      success(res) {
        console.log(123)
      }
    })
  },
  newBgm() {

    const bgm = wx.getBackgroundAudioManager()
    bgm.src = ""
    // bgm.src="https://img.guoanfamily.com/yuandan19/biejing.m4a"
    console.log()

  },
  playBG() {
    wx.playBackgroundAudio({
      dataUrl: 'https://img.guoanfamily.com/yuandan19/biejing.m4a',
      title: '测试',
      coverImgUrl: 'http://img.xiami.net/images/album/img58/23258/4139691291281159_2.jpg',
      success() {
        console.log(13433)
      }
    })
  },
  stopBackground() {
    wx.stopBackgroundAudio({
      complete() {
        console.log(222)
      }
    })
  },
  pauseBG() {
    wx.pauseBackgroundAudio({
      complete() {
        console.log(666)
      }
    })
  },
  onCanplay() {
    console.log(this.audioCtx)
    this.audioCtx.onEnded(res => {
      console.log(res)
    })
  },
  audioPlay() {
    this.audioCtx.play();
  },
  audioPause() {
    this.audioCtx.pause();
  },
  audioSeek() {
    this.audioCtx.seek(90);
  },
  audioStart() {
    this.audioCtx.seek(0);
  },

  changeMusic() {
    this.setData({
      ...this.data.song,
      name: 'Hello',
      src: 'http://om5.alicdn.com/96/683379096/832004743/1774205606_16708201_l.mp3?auth_key=12430d4c81b83d74652a4078dee8018f-1490324400-0-null'
    });
  },
})