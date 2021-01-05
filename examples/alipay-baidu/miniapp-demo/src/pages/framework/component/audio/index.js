Page({
  data: {
    poster: 'http://img.xiami.net/images/album/img58/23258/4139691291281159_2.jpg',
    name: '最美的期待',
    author: '周笔畅',
    src: 'http://sc1.111ttt.cn/2018/1/03/13/396131153555.mp3',
  },
  onReady() {
    this.audioCtx = my.createAudioContext('myAudio')
  },
  audioPlay() {
    this.audioCtx.play()
  },
  audioPause() {
    this.audioCtx.pause()
  },
  audioSeek() {
    this.audioCtx.seek(90)
  },
  audioStart() {
    this.audioCtx.seek(0)
  },
  changeMusic() {
    this.setData({
      ...this.data,
      name: 'Hello',
      src: 'http://sc1.111ttt.cn/2018/1/03/13/396131229550.mp3',
    })
  },
  timeUpdate() {
    console.log('timeUpdate')
  },
  end() {
    my.alert({
      content: JSON.stringify('结束'),
    })
  },
  error(err) {
    my.alert({
      content: JSON.stringify(`err${err}`),
    })
  },
})
