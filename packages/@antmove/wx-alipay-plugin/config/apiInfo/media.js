const { createDescObj } = require('./utils')

/**
 * 媒体
 */
module.exports = {
  createMapContext: createDescObj(
    1,
    '创建 map 上下文 MapContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html',
    'https://docs.alipay.com/mini/api/ui-map',
    {
      msg: '返回值对象方法缺失',
      returnValue: {
        props: {
          getRegion: {
            type: 0,
            desc: '获取当前地图的视野范围',
          },
          getScale: {
            type: 0,
            desc: '获取当前地图的缩放级别',
          },
          includePoints: {
            type: 0,
            desc: '缩放视野展示所有经纬度',
          },
        },
      },
    },
  ),
  saveImageToPhotosAlbum: createDescObj(
    0,
    '保存图片到系统相册不支持网络图片路径',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html',
    'https://docs.alipay.com/mini/api/izfoiz',
    {
      msg: '完全支持',
    },
  ),


  previewImage: createDescObj(
    0,
    '在新页面中全屏预览图片',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html',
    'https://docs.alipay.com/mini/api/eei0av',
  ),
  getImageInfo: createDescObj(
    0,
    '获取图片信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html',
    'https://docs.alipay.com/mini/api/yv9n6t',
  ),
  compressImage: createDescObj(
    0,
    '压缩图片接口，可选压缩质量',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html',
    'https://docs.alipay.com/mini/api/ehndze',
    {
      msg: '封装后可完全支持',
    },
  ),
  chooseMessageFile: createDescObj(
    2,
    '从客户端会话选择文件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html',
    '',
  ),
  chooseImage: createDescObj(
    1,
    '从本地相册选择图片或使用相机拍照',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html',
    'https://docs.alipay.com/mini/api/media-image#a-nameeh9ddfamychooseimage',
    {
      msg: '返回值属性缺失',
      returnValue: {
        props: {
          tempFiles: {
            type: 0,
            desc: '图片的本地临时文件列表',
          },
        },
      },
    },
  ),
  saveVideoToPhotosAlbum: createDescObj(
    0,
    '保存视频到系统相册',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html',
    '',
  ),
  createVideoContext: createDescObj(
    1,
    '创建 video 上下文 VideoContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html',
    '',
    {
      msg: '返回值方法缺失',
      returnValue: {
        props: {
          sendDanmu: {
            type: 0,
            desc: '发送弹幕',
          },
        },
      },
    },
  ),
  chooseVideo: createDescObj(
    0,
    '拍摄视频或从手机相册中选视频',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html',
    '',
  ),
  stopVoice: createDescObj(
    0,
    '结束播放语音',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html',
    '',
  ),
  setInnerAudioOption: createDescObj(
    2,
    '设置 InnerAudioContext 的播放选项',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html',
    '',
  ),
  playVoice: createDescObj(
    0,
    '开始播放语音',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html',
    '',
  ),
  pauseVoice: createDescObj(
    0,
    '暂停正在播放的语音',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html',
    '',
  ),
  getAvailableAudioSources: createDescObj(
    2,
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html',
    '',
  ),
  createInnerAudioContext: createDescObj(
    2,
    '创建内部 audio 上下文 InnerAudioContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html',
    '',
  ),
  createAudioContext: createDescObj(
    0,
    '创建 audio 上下文 AudioContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html',
    '',
  ),
  stopBackgroundAudio: createDescObj(
    2,
    '停止播放音乐',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html',
    '',
  ),
  seekBackgroundAudio: createDescObj(
    2,
    '控制音乐播放进度',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html',
    '',
  ),
  playBackgroundAudio: createDescObj(
    2,
    '使用后台播放器播放音乐',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html',
    '',
  ),
  pauseBackgroundAudio: createDescObj(
    2,
    '暂停播放音乐',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html',
    '',
  ),
  onBackgroundAudioStop: createDescObj(
    2,
    '监听音乐停止事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html',
    '',
  ),
  onBackgroundAudioPlay: createDescObj(
    2,
    '监听音乐播放事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPlay.html',
    '',
  ),
  onBackgroundAudioPause: createDescObj(
    2,
    '监听音乐暂停事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPause.html',
    '',
  ),
  getBackgroundAudioPlayerState: createDescObj(
    2,
    '获取后台音乐播放状态',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html',
    '',
  ),
  getBackgroundAudioManager: createDescObj(
    2,
    '获取全局唯一的背景音频管理器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html',
    '',
  ),
  createLivePusherContext: createDescObj(
    2,
    '创建 live-pusher 上下文 LivePusherContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html',
    '',
  ),
  createLivePlayerContext: createDescObj(
    2,
    '创建 live-player 上下文 LivePlayerContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html',
    '',
  ),
  stopRecord: createDescObj(
    0,
    '停止录音',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html',
    '',
  ),
  startRecord: createDescObj(
    0,
    '开始录音',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html',
    '',
  ),
  getRecorderManager: createDescObj(
    1,
    '获取全局唯一的录音管理器 RecorderManager',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html',
    '',
    {
      msg: '返回值方法缺失',
      returnValue: {
        props: {
          pause: {
            type: 0,
            desc: '暂停录音',
          },
          resume: {
            type: 0,
            desc: '继续录音',
          },
          onpause: {
            type: 0,
            desc: '监听录音暂停事件',
          },
          onresume: {
            type: 0,
            desc: '监听录音继续事件',
          },
          onFrameRecorded: {
            type: 0,
            desc: '监听已录制完指定帧大小的文件事件。如果设置了 frameSize，则会回调此事件',
          },
          onInterruptionEnd: {
            type: 0,
            desc: '监听录音中断结束事件。在收到 interruptionBegin 事件之后，小程序内所有录音会暂停，收到此事件之后才可再次录音成功',
          },
          onInterruptionBegin: {
            type: 0,
            desc: '监听录音因为受到系统占用而被中断开始事件。以下场景会触发此事件：微信语音聊天、微信视频聊天。此事件触发后，录音会被暂停。pause 事件在此事件后触发',
          },
        },
      },
    },
  ),
  createCameraContext: createDescObj(
    0,
    '创建 camera 上下文 CameraContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html',
    '',
  ),
  previewMedia: createDescObj(
    2,
    '预览图片和视频',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html',
    '',
  ),
  openVideoEditor: createDescObj(
    2,
    '打开视频编辑器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.openVideoEditor.html',
    '',
  ),
  getVideoInfo: createDescObj(
    2,
    '获取视频详细信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.getVideoInfo.html',
    '',
  ),
  compressVideo: createDescObj(
    2,
    '压缩视频',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.compressVideo.html',
    '',
  ),
  chooseMedia: createDescObj(
    2,
    '拍摄或从手机相册中选择图片或视频',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html',
    '',
  ),
  createMediaContainer: createDescObj(
    2,
    '创建音视频处理容器，最终可将容器中的轨道合成一个视频',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video-processing/wx.createMediaContainer.html',
    '',
  ),
  updateVoIPChatMuteConfig: createDescObj(
    2,
    '更新实时语音静音设置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.updateVoIPChatMuteConfig.html',
    '',
  ),
  subscribeVoIPVideoMembers: createDescObj(
    2,
    '订阅视频画面成员',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.subscribeVoIPVideoMembers.html',
    '',
  ),
  setEnable1v1Chat: createDescObj(
    2,
    '开启双人通话',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.setEnable1v1Chat.html',
    '',
  ),
  onVoIPVideoMembersChanged: createDescObj(
    2,
    '监听实时语音通话成员视频状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPVideoMembersChanged.html',
    '',
  ),
  onVoIPChatSpeakersChanged: createDescObj(
    2,
    '监听实时语音通话成员通话状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatSpeakersChanged.html',
    '',
  ),
  onVoIPChatMembersChanged: createDescObj(
    2,
    '监听实时语音通话成员在线状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatMembersChanged.html',
    '',
  ),
  onVoIPChatInterrupted: createDescObj(
    2,
    '监听被动断开实时语音通话事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.onVoIPChatInterrupted.html',
    '',
  ),
  offVoIPVideoMembersChanged: createDescObj(
    2,
    '取消监听实时语音通话成员视频状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPVideoMembersChanged.html',
    '',
  ),
  offVoIPChatMembersChanged: createDescObj(
    2,
    '取消监听实时语音通话成员在线状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatMembersChanged.html',
    '',
  ),
  offVoIPChatInterrupted: createDescObj(
    2,
    '取消监听被动断开实时语音通话事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.offVoIPChatInterrupted.html',
    '',
  ),
  joinVoIPChat: createDescObj(
    2,
    '加入 (创建) 实时语音通话',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html',
    '',
  ),
  join1v1Chat: createDescObj(
    2,
    '加入（创建）双人通话',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.join1v1Chat.html',
    '',
  ),
  exitVoIPChat: createDescObj(
    2,
    '退出（销毁）实时语音通话',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.exitVoIPChat.html',
    '',
  ),
  createMediaRecorder: createDescObj(
    2,
    '创建 WebGL 画面录制器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/media-recorder/wx.createMediaRecorder.html',
    '',
  ),
  createVideoDecoder: createDescObj(
    2,
    '创建视频解码器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/video-decoder/wx.createVideoDecoder.html',
    '',
  ),
}
