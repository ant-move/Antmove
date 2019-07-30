const { createDescObj } = require('./utils');
/**
 * 基础
 */

module.exports = {
    canIUse: createDescObj(
        0,
        '判断小程序的 API，回调，参数，组件等是否在当前版本可用',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html',
        'https://docs.alipay.com/mini/api/can-i-use'
    ),
    getSystemInfoSync: createDescObj(
        1,
        '获取系统信息同步版本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html',
        'https://docs.alipay.com/mini/api/system-info',
        {
            msg: '返回值属性值缺失',
            returnValue: {
                props: {
                    SDKVersion: {
                        type: 0,
                        desc: "客户端基础库版本"
                    },
                    benchmarkLevel: {
                        type: 0,
                        desc: "仅 Android 小游戏 设备性能等级取值为：-2 或 0"
                    },
                    albumAuthorized: {
                        type: 0,
                        desc: "允许微信使用相册的开关 仅 iOS 有效"
                    },
                    cameraAuthorized: {
                        type: 0,
                        desc: "允许微信使用摄像头的开关"
                    },
                    locationAuthorized: {
                        type: 0,
                        desc: "允许微信使用定位的开关"
                    },
                    microphoneAuthorized: {
                        type: 0,
                        desc: "允许微信使用麦克风的开关"
                    },
                    notificationAuthorized: {
                        type: 0,
                        desc: "允许微信通知的开关"
                    },
                    notificationAlertAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有提醒的开关 仅 iOS 有效"
                    },
                    notificationBadgeAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有标记的开关 仅 iOS 有效"
                    },
                    notificationSoundAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有声音的开关 仅 iOS 有效"
                    },
                    bluetoothEnabled: {
                        type: 0,
                        desc: "蓝牙的系统开关"
                    },
                    locationEnabled: {
                        type: 0,
                        desc: "地理位置的系统开关"
                    },
                    wifiEnabled: {
                        type: 0,
                        desc: "Wi-Fi 的系统开关"
                    }
                }
            }
        }
    ),
    getSystemInfo: createDescObj(
        1,
        '获取系统信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
        'https://docs.alipay.com/mini/api/system-info',
        {
            msg: '返回值属性值缺失',
            returnValue: {
                props: {
                    SDKVersion: {
                        type: 0,
                        desc: "客户端基础库版本"
                    },
                    benchmarkLevel: {
                        type: 0,
                        desc: "仅 Android 小游戏 设备性能等级取值为：-2 或 0"
                    },
                    albumAuthorized: {
                        type: 0,
                        desc: "允许微信使用相册的开关 仅 iOS 有效"
                    },
                    cameraAuthorized: {
                        type: 0,
                        desc: "允许微信使用摄像头的开关"
                    },
                    locationAuthorized: {
                        type: 0,
                        desc: "允许微信使用定位的开关"
                    },
                    microphoneAuthorized: {
                        type: 0,
                        desc: "允许微信使用麦克风的开关"
                    },
                    notificationAuthorized: {
                        type: 0,
                        desc: "允许微信通知的开关 仅 iOS 有效"
                    },
                    notificationAlertAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有提醒的开关 仅 iOS 有效"
                    },
                    notificationBadgeAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有标记的开关 仅 iOS 有效"
                    },
                    notificationSoundAuthorized: {
                        type: 0,
                        desc: "允许微信通知带有声音的开关 仅 iOS 有效"
                    },
                    bluetoothEnabled: {
                        type: 0,
                        desc: "蓝牙的系统开关"
                    },
                    locationEnabled: {
                        type: 0,
                        desc: "地理位置的系统开关"
                    },
                    wifiEnabled: {
                        type: 0,
                        desc: "Wi-Fi 的系统开关"
                    }
                }
            }
        }
    ),
    getUpdateManager: createDescObj(
        2,
        '获取全局唯一的版本更新管理器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html',
        '无'
    ),
    getLaunchOptionsSync: createDescObj(
        2,
        '获取小程序启动时的参数',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html',
        '无'
    ),
    onPageNotFound: createDescObj(
        2,
        '监听小程序要打开的页面不存在事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html',
        '无'
    ),
    onError: createDescObj(
        2,
        '监听小程序错误事件。如脚本错误或 API 调用报错等。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html',
        '无'
    ),
    onAudioInterruptionBegin: createDescObj(
        2,
        '监听音频因为受到系统占用而被中断开始事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html',
        '无'
    ),
    onAudioInterruptionEnd: createDescObj(
        2,
        '监听音频中断结束事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html',
        '无'
    ),
    onAppShow: createDescObj(
        2,
        '监听小程序切前台事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html',
        '无'
    ),
    onAppHide: createDescObj(
        2,
        '监听小程序切后台事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html',
        '无'
    ),
    offPageNotFound: createDescObj(
        2,
        '取消监听小程序要打开的页面不存在事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html',
        '无'
    ),
    offError: createDescObj(
        2,
        '监听小程序切前台事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html',
        '无'
    ),
    offAudioInterruptionBegin: createDescObj(
        2,
        '取消监听音频因为受到系统占用而被中断开始事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html',
        '无'
    ),
    offAudioInterruptionEnd: createDescObj(
        2,
        '取消监听音频中断结束事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html',
        '无'
    ),
    offAppShow: createDescObj(
        2,
        '取消监听小程序切前台事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html',
        '无'
    ),
    offAppHide: createDescObj(
        2,
        '取消监听小程序切后台事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html',
        '无'
    ),
    setEnableDebug: createDescObj(
        2,
        '设置是否打开调试开关。此开关对正式版也能生效',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html',
        '无'
    ),
    getLogManager: createDescObj(
        2,
        '获取日志管理器对象。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html',
        '无'
    ),
    createCameraContext: createDescObj(
        1,
        '创建 camera 上下文 CameraContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html',
        '',
        {
            msg: '返回值属性值缺失',
            returnValue: {
                props: {
                
                    takePhoto: {
                        type: 0,
                        desc: "拍照"
                    },
                    startRecord: {
                        type: 0,
                        desc: "开始录像"
                    },
                    stopRecord: {
                        type: 0,
                        desc: "停止录像"
                    }
                }
            }
        }
    ),
};