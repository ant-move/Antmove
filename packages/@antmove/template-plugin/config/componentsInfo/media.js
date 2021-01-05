const { createSupportProp } = require('./utils.js')

/**
 * type
 * 0 - missing - 不支持该属性
 * 1 - diff - 命名及格式不同
 * 3 - diffType - 类型不同
 * 4 - defaultValue - 默认值不同
 * 5 - wrapComponent - 使用自定义组件代替
 * 6 - diff tagName
 * 7 - equal - 完全支持
 * 
 * status - 支持程度
 * 0 - 完整支持
 * 1 - 部分支持
 * 2 - 不支持
 * 
 * desc - 组件或属性作用描述
 */
module.exports = {
  audio: {
    name: '音频',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
      alipay: 'https://yuque.antfin-inc.com/amap-webx/api/inul90',
    },
    desc: '1.6.0版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口',
    props: {
      id: createSupportProp('audio 组件的唯一标识符'),
      src: createSupportProp('要播放音频的资源地址'),
      loop: createSupportProp('是否循环播放'),
      controls: createSupportProp('是否显示默认控件'),
      poster: createSupportProp('默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效'),
      name: createSupportProp('默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效'),
      author: createSupportProp('默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效'),
    },
  },
  image: {
    name: '图片',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
      alipay: 'https://docs.alipay.com/mini/component/image',
    },
    desc: '支持JPG、PNG、SVG格式，2.3.0 起支持云文件ID。',
    props: {
      src: createSupportProp('图片资源地址'),
      mode: createSupportProp('图片裁剪、缩放的模式'),
      'lazy-load': createSupportProp('图片懒加载，在即将进入一定范围（上下三屏）时才开始加载'),
    },
  },
  camera: {
    name: '系统相机',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
      alipay: 'https://yuque.antfin-inc.com/amap-webx/api/kd5k28',
    },
    desc: '扫码二维码功能，需升级微信客户端至6.7.3。需要用户授权 scope.camera。相关api：wx.createCameraContext',
    props: {
    },
  },
  'live-player': {
    name: '实时音视频播放',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
      alipay: '',
    },
    type: 0,
    status: 2,
    desc: '实时音视频播放',
  },
  'live-pusher': {
    name: '实时音视频录制',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
      alipay: '',
    },
    type: 0,
    status: 2,
    desc: '实时音视频录制',
  },
  video: {
    name: '视频',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
      alipay: 'https://yuque.antfin-inc.com/amap-webx/api/sthmge',
    },
    desc: '相关api：wx.createVideoContext',
    props: {
      src: createSupportProp('要播放视频的资源地址，支持云文件ID'),
      duration: createSupportProp('指定视频时长'),
      controls: createSupportProp('是否显示默认播放控件（播放/暂停按钮、播放进度、时间)'),
      autoplay: createSupportProp('是否自动播放'),
      loop: createSupportProp('是否循环播放'),
      muted: createSupportProp('是否静音播放'),
      'initial-time': createSupportProp('指定视频初始播放位置'),
      direction: createSupportProp('设置全屏时视频的方向，不指定则根据宽高比自动判断'),
      'show-fullscreen-btn': createSupportProp('是否显示全屏按钮'),
      'show-play-btn': createSupportProp('是否显示视频底部控制栏的播放按钮'),
      'show-center-play-btn': createSupportProp('是否显示视频中间的播放按钮'),
      poster: createSupportProp('视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效'),
    },
  },
}
