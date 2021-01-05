const { createDescObj } = require('./utils')

/**
 * 基础
 */

module.exports = {
  canIUse: createDescObj(
    0,
    '判断小程序的 API，回调，参数，组件等是否在当前版本可用',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html',
    'https://developer.toutiao.com/dev/miniapp/uczN3EjL3czNx4yN3cTM',
  ),
  getSystemInfoSync: createDescObj(
    1,
    '获取系统信息同步版本',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html',
    'https://developer.toutiao.com/dev/miniapp/uATOy4CM5IjLwkjM',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          statusBarHeight: {
            type: 0,
            desc: '状态栏的高度，单位px',
          },
          language: {
            type: 0,
            desc: '语言',
          },
          fontSizeSetting: {
            type: 0,
            desc: '用户字体大小（单位px）',
          },
          benchmarkLevel: {
            type: 0,
            desc: '设备性能等级（仅Android小游戏）',
          },
          albumAuthorized: {
            type: 0,
            desc: '允许微信使用相册的开关 仅 iOS 有效',
          },
          cameraAuthorized: {
            type: 0,
            desc: '允许微信使用摄像头的开关',
          },
          locationAuthorized: {
            type: 0,
            desc: '允许微信使用定位的开关',
          },
          microphoneAuthorized: {
            type: 0,
            desc: '允许微信使用麦克风的开关',
          },
          notificationAuthorized: {
            type: 0,
            desc: '允许微信通知的开关',
          },
          notificationAlertAuthorized: {
            type: 0,
            desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
          },
          notificationBadgeAuthorized: {
            type: 0,
            desc: '允许微信通知带有标记的开关 仅 iOS 有效',
          },
          notificationSoundAuthorized: {
            type: 0,
            desc: '允许微信通知带有声音的开关 仅 iOS 有效',
          },
          bluetoothEnabled: {
            type: 0,
            desc: '蓝牙的系统开关',
          },
          locationEnabled: {
            type: 0,
            desc: '地理位置的系统开关',
          },
          wifiEnabled: {
            type: 0,
            desc: 'Wi-Fi 的系统开关',
          },
          safeArea: {
            type: 0,
            desc: '在竖屏正方向下的安全区域',
          },
        },
      },
    },
  ),
  getSystemInfo: createDescObj(
    1,
    '获取系统信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
    'https://developer.toutiao.com/dev/miniapp/uMTOy4yM5IjLzkjM',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          statusBarHeight: {
            type: 0,
            desc: '状态栏的高度，单位px',
          },
          language: {
            type: 0,
            desc: '语言',
          },
          fontSizeSetting: {
            type: 0,
            desc: '用户字体大小（单位px）',
          },
          benchmarkLevel: {
            type: 0,
            desc: '设备性能等级（仅Android小游戏）',
          },
          albumAuthorized: {
            type: 0,
            desc: '允许微信使用相册的开关 仅 iOS 有效',
          },
          cameraAuthorized: {
            type: 0,
            desc: '允许微信使用摄像头的开关',
          },
          locationAuthorized: {
            type: 0,
            desc: '允许微信使用定位的开关',
          },
          microphoneAuthorized: {
            type: 0,
            desc: '允许微信使用麦克风的开关',
          },
          notificationAuthorized: {
            type: 0,
            desc: '允许微信通知的开关',
          },
          notificationAlertAuthorized: {
            type: 0,
            desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
          },
          notificationBadgeAuthorized: {
            type: 0,
            desc: '允许微信通知带有标记的开关 仅 iOS 有效',
          },
          notificationSoundAuthorized: {
            type: 0,
            desc: '允许微信通知带有声音的开关 仅 iOS 有效',
          },
          bluetoothEnabled: {
            type: 0,
            desc: '蓝牙的系统开关',
          },
          locationEnabled: {
            type: 0,
            desc: '地理位置的系统开关',
          },
          wifiEnabled: {
            type: 0,
            desc: 'Wi-Fi 的系统开关',
          },
          safeArea: {
            type: 0,
            desc: '在竖屏正方向下的安全区域',
          },
        },
      },
    },
  ),
  getUpdateManager: createDescObj(
    0,
    '获取全局唯一的版本更新管理器',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html',
    'https://developer.toutiao.com/dev/miniapp/ukzMz4SOzMjL5MzM',
  ),
  getLaunchOptionsSync: createDescObj(
    0,
    '获取小程序启动时的参数',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html',
    'https://developer.toutiao.com/dev/miniapp/uUTMz4SNxMjL1EzM',
    {
      msg: '参数缺失',
      params: {
        props: {
          shareTicket: {
            type: 0,
            desc: 'hareTicket，更多转发信息',
          },
          referrerInfo: {
            type: 0,
            desc: '来源信息。从另一个小程序、公众号或 App 进入小程序时返回',
          },
        },
      },
    },
  ),
  onPageNotFound: createDescObj(
    0,
    '监听小程序要打开的页面不存在事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html',
    'https://developer.toutiao.com/dev/miniapp/ucjNx4yN2EjL3YTM',
  ),
  onError: createDescObj(
    0,
    '监听小程序错误事件。如脚本错误或 API 调用报错等。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html',
    'https://developer.toutiao.com/dev/miniapp/ucjNx4yN2EjL3YTM',
  ),
  onAudioInterruptionBegin: createDescObj(
    2,
    '监听音频因为受到系统占用而被中断开始事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html',
    '',
  ),
  onAudioInterruptionEnd: createDescObj(
    2,
    '监听音频中断结束事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html',
    '',
  ),
  onAppShow: createDescObj(
    2,
    '监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html',
    '',
  ),
  onAppHide: createDescObj(
    2,
    '监听小程序切后台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html',
    '',
  ),
  offPageNotFound: createDescObj(
    2,
    '取消监听小程序要打开的页面不存在事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html',
    '',
  ),
  offError: createDescObj(
    2,
    '监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html',
    '',
  ),
  offAudioInterruptionBegin: createDescObj(
    2,
    '取消监听音频因为受到系统占用而被中断开始事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html',
    '',
  ),
  offAudioInterruptionEnd: createDescObj(
    2,
    '取消监听音频中断结束事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html',
    '',
  ),
  offAppShow: createDescObj(
    2,
    '取消监听小程序切前台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html',
    '',
  ),
  offAppHide: createDescObj(
    2,
    '取消监听小程序切后台事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html',
    '',
  ),
  setEnableDebug: createDescObj(
    2,
    '设置是否打开调试开关。此开关对正式版也能生效',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html',
    '',
  ),
  getLogManager: createDescObj(
    2,
    '获取日志管理器对象。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html',
    '',
  ),
  createCameraContext: createDescObj(
    2,
    '创建 camera 上下文 CameraContext 对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html',
    '',
  ),
}
