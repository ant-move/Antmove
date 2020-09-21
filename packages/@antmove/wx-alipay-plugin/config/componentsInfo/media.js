const { createSupportProp } = require('./utils.js');
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
    'audio': {
        name: '音频',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html',
            alipay: 'https://yuque.antfin-inc.com/amap-webx/api/inul90'
        },
        desc: '1.6.0版本开始，该组件不再维护。建议使用能力更强的 wx.createInnerAudioContext 接口',
        props: {
            'id': createSupportProp('audio 组件的唯一标识符'),
            'src': createSupportProp('要播放音频的资源地址'),
            'loop': createSupportProp('是否循环播放'),
            'controls': createSupportProp('是否显示默认控件'),
            'poster': createSupportProp('默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效'),
            'name': createSupportProp('默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效'),
            'author': createSupportProp('默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效'),
            'binderror': {
                type: 1,
                status: 0,
                desc: '当发生错误时触发 error 事件',
                key: 'onError',
            },
            'bindplay': {
                type: 1,
                status: 0,
                desc: '当开始/继续播放时触发play事件',
                key: 'onPlay',
            },
            'bindpause': {
                type: 1,
                status: 0,
                desc: '当暂停播放时触发 pause 事件',
                key: 'onPause'
            },
            'bindtimeupdate': {
                type: 1,
                status: 0,
                desc: '当播放进度改变时触发',
                key: 'onTimeUpdate',
            },
            'bindended': {
                type: 1,
                status: 0,
                desc: '当播放到末尾时触发 ended 事件',
                key: 'onEnded',
            }
        }
    },
    'image': {
        name: '图片',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html',
            alipay: 'https://docs.alipay.com/mini/component/image'
        },
        desc: '支持JPG、PNG、SVG格式，2.3.0 起支持云文件ID。',
        props: {
            'src': createSupportProp('图片资源地址'),
            'mode': createSupportProp('图片裁剪、缩放的模式'),
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
            'binderror': {
                type: 1,
                status: 0,
                desc: '当错误发生时触发',
                key: 'onError',
            },
            'bindload': {
                type: 1,
                status: 0,
                desc: '当图片载入完毕时触发',
                key: 'onLoad',
            }
        }
    },
    'camera': {
        name: '系统相机',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html',
            alipay: 'https://yuque.antfin-inc.com/amap-webx/api/kd5k28'
        },
        desc: '扫码二维码功能，需升级微信客户端至6.7.3。需要用户授权 scope.camera。相关api：wx.createCameraContext',
        props: {
            'mode': {
                type: 7,
                status: 0,
                desc: '应用模式，只在初始化时有效，不能动态变更',
            },
            'device-position': {
                type: 7,
                status: 0,
                desc: '摄像头朝向',
            },
            'frame-size': {
                type: 7,
                status: 0,
                desc: '指定期望的相机帧数据尺寸',
            },
            'takePhoto': {
                type: 7,
                status: 0,
                desc: '拍照',
            },
            'startRecord': {
                tyoe: 7,
                status: 0,
                desc: '开始录像',
            },
            'stopRecord': {
                tyoe: 7,
                status: 0,
                desc: '结束录像',
            },
            'bindstop': {
                type: 1,
                status: 0,
                desc: '摄像头在非正常终止时触发，如退出后台等情况',
                key: 'onStop',
            },
            'binderror': {
                type: 1,
                status: 0,
                desc: '用户不允许使用摄像头时触发',
                key: 'onError',
            },
            'bindscancode': {
                type: 1,
                status: 2,
                desc: '在扫码识别成功时触发，仅在 mode="scanCode" 时生效',
                key:'onScanCode',
            },
            'bindinitdone': {
                type: 0,
                status: 2,
                desc: '相机初始化完成时触发',
            },
            'flash': {
                type: 7,
                status: 0,
                desc: '闪光灯，值为auto, on, off',
            },
        }
    },
    'live-player': {
        name: '实时音视频播放',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html',
            alipay: ''
        },
        type: 0,
        status: 2,
        desc: '实时音视频播放',
    },
    'live-pusher': {
        name: '实时音视频录制',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html',
            alipay: 'https://yuque.antfin-inc.com/tiny-tmp/api/ryieba'
        },
        type: 0,
        status: 2,
        desc: '实时音视频录制',
    },
    'video': {
        name: '视频',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html',
            alipay: 'https://yuque.antfin-inc.com/amap-webx/api/sthmge'
        },
        desc: '相关api：wx.createVideoContext',
        props: {
            'src': createSupportProp('要播放视频的资源地址，支持云文件ID'),
            'duration': createSupportProp('指定视频时长'),
            'controls': createSupportProp('是否显示默认播放控件（播放/暂停按钮、播放进度、时间)'),
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
            'autoplay': createSupportProp('是否自动播放'),
            'loop': createSupportProp('是否循环播放'),
            'muted': createSupportProp('是否静音播放'),
            'initial-time': createSupportProp('指定视频初始播放位置'),
            'page-gesture': {
                type: 0,
                status: 2,
                desc: '在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture）',
            },
            'direction': createSupportProp('设置全屏时视频的方向，不指定则根据宽高比自动判断'),
            'show-progress': {
                type: 0,
                status: 2,
                desc: '若不设置，宽度大于240时才会显示',
            },
            'show-fullscreen-btn': createSupportProp('是否显示全屏按钮'),
            'show-play-btn': createSupportProp('是否显示视频底部控制栏的播放按钮'),
            'show-center-play-btn': createSupportProp('是否显示视频中间的播放按钮'),
            'enable-progress-gesture': {
                type: 1,
                status: 0,
                desc: '是否开启控制进度的手势',
                key: 'enableProgressGesture',
            },
            'object-fit': {
                type: 1,
                status: 0,
                desc: '当视频大小与 video 容器大小不一致时，视频的表现形式',
                key: 'objectFit',
            },
            'poster': createSupportProp('视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效'),
            'show-mute-btn': {
                type: 4,
                status: 1,
                desc: '是否显示静音按钮',
                msg: '支付宝小程序默认值是true,微信是false'
            },
            'title': {
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
            'bindfullscreenchange': {
                type: 1,
                status: 0,
                desc: '视频进入和退出全屏时触发',
                key: 'onFullScreenChange',
            },
            'bindwaiting': {
                type: 0,
                status: 2,
                desc: '视频出现缓冲时触发',
            },
            'binderror': {
                type: 1,
                status: 0,
                desc: '视频播放出错时触发',
                key: 'onErrorll',
            },
            'bindprogress': {
                type: 0,
                status: 2,
                desc: '加载进度变化时触发，只支持一段加载',
            },
            'bindplay': {
                type: 1,
                status: 0,
                desc: '当开始/继续播放时触发play事件',
                key: 'onPlay',
            },
            'bindpause': {
                type: 1,
                status: 0,
                desc: '当暂停播放时触发 pause 事件',
                key: 'onPause',
            },
            'bindended': {
                type: 1,
                status: 0,
                desc: '当播放到末尾时触发 ended 事件',
                key: 'onEnded',
            },
            'bindtimeupdate': {
                type: 1,
                status: 0,
                desc: '播放进度变化时触发',
                key: 'onTimeUpdate',
            },
            'picture-in-picture-mode':{
                type: 0,
                status: 2,
                desc: '小窗模式',
            },
            'enable-auto-rotation':{
                type: 0,
                status: 2,
                desc: '是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效',
            },
            'picture-in-picture-show-progress':{
                type: 0,
                status: 2,
                desc: '是否在小窗模式下显示播放进度',
            },
            'bindenterpictureinpicture':{
                type: 0,
                status: 2,
                desc: '播放器进入小窗',
            },
            'bindleavepictureinpicture':{
                type: 0,
                status: 2,
                desc: '播放器退出小窗',
            },
        }
    }
};