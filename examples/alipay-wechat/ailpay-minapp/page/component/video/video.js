Page({
  data: {
    src: "http://flv.bn.netease.com/tvmrepo/2012/7/C/7/E868IGRC7-mobile.mp4",
    //src:"https://youtu.be/J_WcqN1Hipg",
    title: 'initial',
    autoplay: 'false',
    objectFit: 'contain',
    showFullscreenBtn: 'false',
    showCenterPlayBtn: 'false',
    muted: 'false',
    loop: 'false',
    // extraInfo:{
    //     stoken:'%2bqEaZgO9Tt6Bg7c1%2bbS3H2r%2b8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK%2fgkZOFfTYPP01UptHg%2b4SAxwKMUVvhxjUhs%2fg58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA%3d%3d',
    //     ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh%2fKz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR%2fY5LsLSYNSnzl5YSYl359xKGL3cHvfcw%3d%3d',
    //     stoken:'2TTH0S/OBuQoBthtlNtu/df4zKuh2qkavbd1QRtmM5X1RT3YehRjKmFoEmnsjv9dp3GWrzEcG8y5qHJr8Mwm76aYwWqKnIY9YCRE6l606ySYgfiohgBsA199EjHwI0XG6x2OC0Q9FzgqGDkD0Z+sow==',
    //     ptoken:'iPqLrZnna90HCdsypMibpVz2eNdYBDqQmoAL89BiKVJFa/lS9zpSv2PsQgLTJYSc9uhHuYeEClEB4xeMiYyMmnG8UQQKyIPXqxfSwrQmDL72Yt1yCgvDze3DeQesjpNYKo9YruJ99nSqvmPLvjIpGA==',
    //     isYouku: false, // 是否优酷小程序，据此设置ccode
    //     srcType: 0, // 0是vid，1是showId
    // }
  },



  //extrainfo:{
        //会员
        //stoken:'%2bqEaZgO9Tt6Bg7c1%2bbS3H2r%2b8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK%2fgkZOFfTYPP01UptHg%2b4SAxwKMUVvhxjUhs%2fg58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA%3d%3d',
        //ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh%2fKz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR%2fY5LsLSYNSnzl5YSYl359xKGL3cHvfcw%3d%3d',
        //stoken:'+qEaZgO9Tt6Bg7c1+bS3H2r+8dWgk4m74sV3mlJZD5XfovsPuOxsinYham66Lua6sOZFRrlBRrjBPK/gkZOFfTYPP01UptHg+4SAxwKMUVvhxjUhs/g58428lInm7seis8F6lf2bmpxrAM6Ia4qOeA==',
        //ptoken:'eRt41ih0ieHGso2Mse3aUGjGrXzTSj70kgqyHLwTfNh/Kz0bsH1Go4ChZjwlM1PrDO1nq3RW7CarxaUnKOq5M25BfHH9aGvdCOHcce89uJfrLqLOk6NEwR/Y5LsLSYNSnzl5YSYl359xKGL3cHvfcw==',
        //非会员
        //stoken:'2TTH0S/OBuQoBthtlNtu/df4zKuh2qkavbd1QRtmM5X1RT3YehRjKmFoEmnsjv9dp3GWrzEcG8y5qHJr8Mwm76aYwWqKnIY9YCRE6l606ySYgfiohgBsA199EjHwI0XG6x2OC0Q9FzgqGDkD0Z+sow==',
        //ptoken:'iPqLrZnna90HCdsypMibpVz2eNdYBDqQmoAL89BiKVJFa/lS9zpSv2PsQgLTJYSc9uhHuYeEClEB4xeMiYyMmnG8UQQKyIPXqxfSwrQmDL72Yt1yCgvDze3DeQesjpNYKo9YruJ99nSqvmPLvjIpGA==',
        //isYouku: true,
        //srcType :0
      //}
  onShow(){
    this.videoContext = my.createVideoContext('video');
    this.muted = this.data.muted === 'true';
  },
  onPlay(){
      console.log('onPlay');
      this.setData({title:'onPlay'})
  },
  onPause(){
      console.log('onPause');
      this.setData({title:'onPause'})
  },
  onEnded(){
      console.log('onEnded');
      this.setData({title:'onEnded'});
  },
  onTimeUpdate(){
      console.log('onTimeUpdate');
      this.setData({title:'onTimeUpdate'})
  },
  onLoading(res){
      my.alert({ content: '加载中！' + JSON.stringify(res) });
      console.log('onLoading');
      this.setData({title:'onLoading'})
  },
  onStop(){
      console.log('onStop');
      this.setData({title:'onStop'})
  },
  play(){
      this.videoContext.play();
      this.videoContext.mute(this.muted);
  },
  pause(){
      this.videoContext.pause()
  },
  seek(){
      this.videoContext.seek(15)
  },
  mute(){
      this.videoContext.mute(!this.muted);
      this.muted = !this.muted;
  },
  stop(){
      this.videoContext.stop();
      this.setData({muted:this.muted.toString()})
  },
  playbackRate(res){
      this.videoContext.playbackRate(1.5),
      my.alert({content: '倍速播放中！' + JSON.stringify(res)});
  },
  requestFullScreen(){
    this.videoContext.requestFullScreen({ direction:90,});
    // setTimeout(() => { this.videoContext.exitFullScreen()},2000)
  },
  exitFullScreen(){
      this.videoContext.requestFullScreen();
      setTimeout(() => { this.videoContext.exitFullScreen()},2000)
  },
  showStatusBar(){
      this.videoContext.requestFullScreen();
      setTimeout(() => { this.videoContext.showStatusBar()},2000)
  },
  hideStatusBar(){
      this.videoContext.requestFullScreen();
      setTimeout(() => { this.videoContext.hideStatusBar()},2000)
  }
});
