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
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '1.6.0版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口',
  },
  image: {
    name: '图片',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
      target: 'https://developer.toutiao.com/dev/miniapp/ugDMy4COwIjL4AjM',
    },
    desc: '支持JPG、PNG、SVG格式，2.3.0 起支持云文件ID。',
    props: {
      src: createSupportProp('图片资源地址'),
      mode: createSupportProp('图片裁剪、缩放的模式'),
      'lazy-load': createSupportProp('图片懒加载，在即将进入一定范围（上下三屏）时才开始加载'),
      'show-menu-by-longpress': {
        type: 0,
        status: 2,
        desc: '开启长按图片显示识别小程序码菜单',
      },
      'aria-label': {
        type: 0,
        status: 2,
        desc: '无障碍访问，（属性）元素的额外描述',
      },
      binderror: createSupportProp('当错误发生时触发'),
      bindload: createSupportProp('当图片载入完毕时触发'),
    },
  },
  camera: {
    name: '系统相机',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '扫码二维码功能，需升级微信客户端至6.7.3。需要用户授权 scope.camera。相关api：wx.createCameraContext',
  },
  'live-player': {
    name: '实时音视频播放',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '实时音视频播放',
  },
  'live-pusher': {
    name: '实时音视频录制',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
      target: '',
    },
    type: 0,
    status: 2,
    desc: '实时音视频录制',
  },
  video: {
    name: '视频',
    url: {
      original: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
      target: 'https://developer.toutiao.com/dev/miniapp/uADMy4CMwIjLwAjM',
    },
    desc: '相关api：wx.createVideoContext',
    props: {
      src: createSupportProp('要播放视频的资源地址，支持云文件ID'),
      duration: {
        type: 0,
        status: 2,
        desc: '指定视频时长',
      },
      controls: {
        type: 0,
        status: 2,
        desc: '是否显示默认播放控件（播放/暂停按钮、播放进度、时间)',
      },
      'danmu-list': {
        type: 0,
        status: 2,
        desc: '弹幕列表',
      },
      'danmu-btn': {
        type: 0,
        status: 2,
        desc: '是否显示弹幕按钮，只在初始化时有效，不能动态变更',
      },
      'enable-danmu': {
        type: 0,
        status: 2,
        desc: '是否展示弹幕，只在初始化时有效，不能动态变更',
      },
      autoplay: createSupportProp('是否自动播放'),
      loop: {
        type: 0,
        status: 2,
        desc: '是否循环播放',
      },
      muted: {
        type: 0,
        status: 2,
        desc: '是否静音播放',
      },
      'initial-time': {
        type: 0,
        status: 2,
        desc: '指定视频初始播放位置',
      },
      'page-gesture': {
        type: 0,
        status: 2,
        desc: '在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）',
      },
      direction: {
        type: 0,
        status: 2,
        desc: '设置全屏时视频的方向，不指定则根据宽高比自动判断',
      },
      'show-progress': {
        type: 0,
        status: 2,
        desc: '若不设置，宽度大于240时才会显示',
      },
      'show-fullscreen-btn': {
        type: 0,
        status: 2,
        desc: '是否显示全屏按钮',
      },
      'show-play-btn': {
        type: 0,
        status: 2,
        desc: '是否显示视频底部控制栏的播放按钮',
      },
      'show-center-play-btn': {
        type: 0,
        status: 2,
        desc: '是否显示视频中间的播放按钮',
      },
      'enable-progress-gesture': {
        type: 0,
        status: 2,
        desc: '是否开启控制进度的手势',
      },
      'object-fit': {
        type: 0,
        status: 2,
        desc: '当视频大小与 video 容器大小不一致时，视频的表现形式',
      },
      poster: createSupportProp('视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效'),
      'show-mute-btn': {
        type: 0,
        status: 2,
        desc: '是否显示静音按钮',
      },
      title: {
        type: 0,
        status: 2,
        desc: '视频的标题，全屏时在顶部展示',
      },
      'play-btn-position': {
        type: 0,
        status: 2,
        desc: '播放按钮的位置',
      },
      'enable-play-gesture': {
        type: 0,
        status: 2,
        desc: '是否开启播放手势，即双击切换播放/暂停',
      },
      'auto-pause-if-navigate': {
        type: 0,
        status: 2,
        desc: '当跳转到其它小程序页面时，是否自动暂停本页面的视频',
      },
      'auto-pause-if-open-native': {
        type: 0,
        status: 2,
        desc: '当跳转到其它微信原生页面时，是否自动暂停本页面的视频	',
      },
      'vslide-gesture': {
        type: 0,
        status: 2,
        desc: '在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture）',
      },
      'vslide-gesture-in-fullscreen': {
        type: 0,
        status: 2,
        desc: '在全屏模式下，是否开启亮度与音量调节手势',
      },
      bindfullscreenchange: createSupportProp('视频进入和退出全屏时触发'),
      bindwaiting: {
        type: 0,
        status: 2,
        desc: '视频出现缓冲时触发',
      },
      binderror: createSupportProp('视频播放出错时触发'),
      bindprogress: {
        type: 0,
        status: 2,
        desc: '加载进度变化时触发，只支持一段加载',
      },
      bindplay: createSupportProp('当开始/继续播放时触发play事件'),
      bindpause: createSupportProp('当暂停播放时触发 pause 事件'),
      bindended: createSupportProp('当播放到末尾时触发 ended 事件'),
      bindtimeupdate: createSupportProp('播放进度变化时触发'),
    },
  },
}
