const { createDescObj } = require('./utils');
/**
 * 媒体
 */
module.exports = {
    createMapContext: createDescObj(
        2,
        '创建 map 上下文 MapContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html',
        ''
    ),
    saveImageToPhotosAlbum: createDescObj(
        0,
        '保存图片到系统相册不支持网络图片路径',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html',
        'https://developer.toutiao.com/dev/miniapp/uITNz4iM1MjLyUzM'
    ),


    previewImage: createDescObj(
        0,
        '在新页面中全屏预览图片',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html',
        'https://developer.toutiao.com/dev/miniapp/uIjMz4iMyMjLyIzM'
    ),
    getImageInfo: createDescObj(
        1,
        '获取图片信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html',
        'https://developer.toutiao.com/dev/miniapp/uQTOy4CN5IjL0kjM',
        {
            msg: '返回值属性缺失',
            returnValue: {
                props: {
                    orientation: {
                        type: 0,
                        desc: '拍照时设备方向'
                    },
                    path: {
                        type: 0,
                        desc: '图片的本地路径'
                    }
                }
            }
        }
    ),
    compressImage: createDescObj(
        2,
        '压缩图片接口，可选压缩质量',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html',
        ''
    ),
    chooseMessageFile: createDescObj(
        2,
        '从客户端会话选择文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html',
        ''
    ),
    chooseImage: createDescObj(
        1,
        '从本地相册选择图片或使用相机拍照',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html',
        'https://developer.toutiao.com/dev/miniapp/uEDNy4SM0IjLxQjM',
        {
            msg: '参数缺失，返回值属性缺失',
            parmas: {
                props: {
                    sizeType: {
                        type: 0,
                        desc: '所选的图片的尺寸'
                    }
                }
            }
        }
    ),
    saveVideoToPhotosAlbum: createDescObj(
        0,
        '保存视频到系统相册',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html',
        'https://developer.toutiao.com/dev/miniapp/uIDNz4iM0MjLyQzM'
    ),
    createVideoContext: createDescObj(
        1,
        '创建 video 上下文 VideoContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.createVideoContext.html',
        'https://developer.toutiao.com/dev/miniapp/ucDNy4yN0IjL3QjM',
        {
            msg: '返回值方法缺失',
            returnValue: {
                props: {
                    sendDanmu: {
                        type: 0,
                        desc: '发送弹幕'
                    },
                    playbackRate: {
                        type: 0,
                        desc: '设置倍速播放'
                    },
                    showStatusBar: {
                        type: 0,
                        desc: '显示状态栏，仅在iOS全屏下有效'
                    },
                    hideStatusBar: {
                        type: 0,
                        desc: '隐藏状态栏，仅在iOS全屏下有效'
                    }
                }
            }
        }
    ),
    chooseVideo: createDescObj(
        1,
        '拍摄视频或从手机相册中选视频',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html',
        'https://developer.toutiao.com/dev/miniapp/ugDNy4CO0IjL4QjM',
        {
            msg: '参数缺失',
            parmas: {
                props: {
                    camera: {
                        type: 0,
                        desc: '默认拉起的是前置或者后置摄像头。'
                    }
                }
            }
        }
    ),
    stopVoice: createDescObj(
        2,
        '结束播放语音',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.stopVoice.html',
        ''
    ),
    setInnerAudioOption: createDescObj(
        2,
        '设置 InnerAudioContext 的播放选项',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html',
        ''
    ),
    playVoice: createDescObj(
        0,
        '开始播放语音',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.playVoice.html',
        ''
    ),
    pauseVoice: createDescObj(
        2,
        '暂停正在播放的语音',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.pauseVoice.html',
        ''
    ),
    getAvailableAudioSources: createDescObj(
        2,
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html',
        ''
    ),
    createInnerAudioContext: createDescObj(
        2,
        '创建内部 audio 上下文 InnerAudioContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createInnerAudioContext.html',
        ''
    ),
    createAudioContext: createDescObj(
        2,
        '创建 audio 上下文 AudioContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.createAudioContext.html',
        ''
    ),
    stopBackgroundAudio: createDescObj(
        2,
        '停止播放音乐',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.stopBackgroundAudio.html',
        ''
    ),
    seekBackgroundAudio: createDescObj(
        2,
        '控制音乐播放进度',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.seekBackgroundAudio.html',
        ''
    ),
    playBackgroundAudio: createDescObj(
        2,
        '使用后台播放器播放音乐',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html',
        ''
    ),
    pauseBackgroundAudio: createDescObj(
        2,
        '暂停播放音乐',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.pauseBackgroundAudio.html',
        ''
    ),
    onBackgroundAudioStop: createDescObj(
        2,
        '监听音乐停止事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioStop.html',
        ''
    ),
    onBackgroundAudioPlay: createDescObj(
        2,
        '监听音乐播放事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPlay.html',
        ''
    ),
    onBackgroundAudioPause: createDescObj(
        2,
        '监听音乐暂停事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.onBackgroundAudioPause.html',
        ''
    ),
    getBackgroundAudioPlayerState: createDescObj(
        2,
        '获取后台音乐播放状态',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioPlayerState.html',
        ''
    ),
    getBackgroundAudioManager: createDescObj(
        2,
        '获取全局唯一的背景音频管理器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html',
        ''
    ),
    createLivePusherContext: createDescObj(
        2,
        '创建 live-pusher 上下文 LivePusherContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePusherContext.html',
        ''
    ),
    createLivePlayerContext: createDescObj(
        2,
        '创建 live-player 上下文 LivePlayerContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/live/wx.createLivePlayerContext.html',
        ''
    ),
    stopRecord: createDescObj(
        2,
        '停止录音',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.stopRecord.html',
        ''
    ),
    startRecord: createDescObj(
        2,
        '开始录音',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html',
        ''
    ),
    getRecorderManager: createDescObj(
        0,
        '获取全局唯一的录音管理器 RecorderManager',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.getRecorderManager.html',
        'https://developer.toutiao.com/dev/miniapp/ukTOy4SO5IjL5kjM'
    ),
    createCameraContext: createDescObj(
        2,
        '创建 camera 上下文 CameraContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html',
        ''
    )
};