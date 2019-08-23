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
    'image': {
        name: '图片',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/media/#image/',
            original: 'https://docs.alipay.com/mini/component/image'
        },
        desc: '图片组件',
        props: {
            'src': createSupportProp('图片资源地址'),
            'mode': createSupportProp('图片裁剪、缩放的模式'),
            'lazy-load': createSupportProp('图片懒加载，在即将进入一定范围（上下三屏）时才开始加载'),
            'onLoad': createSupportProp('图片载入完毕时触发'),
            'aria-label': createSupportProp('无障碍访问文本内容',0),
            onError: createSupportProp('当图片加载错误时触发',1),
            onTap: createSupportProp('点击图片时触发',1),
            catchTap: createSupportProp('点击图片时触发，阻止事件冒泡',1),
        }
    },
    'audio': {
        name: '音频',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/media/#audio/',
            original: 'https://yuque.antfin-inc.com/amap-webx/api/inul90'
        },
        desc: '音频',
        props: {
            'id': createSupportProp('audio 组件的唯一标识符'),
            'src': createSupportProp('要播放音频的资源地址'),
            'loop': createSupportProp('是否循环播放'),
            'controls': createSupportProp('是否显示默认控件'),
            'poster': createSupportProp('默认控件上的音频封面的图片资源地址，如果 controls 属性值为 false 则设置 poster 无效'),
            'name': createSupportProp('默认控件上的音频名字，如果 controls 属性值为 false 则设置 name 无效'),
            'author': createSupportProp('默认控件上的作者名字，如果 controls 属性值为 false 则设置 author 无效'),
            'onError': {
                type: 1,
                status: 0,
                desc: '当发生错误时触发 error 事件',
                key: 'onError',
            },
            'onPlay': {
                type: 1,
                status: 0,
                desc: '当开始/继续播放时触发play事件',
                key: 'onPlay',
            },
            'onPause': {
                type: 1,
                status: 0,
                desc: '当暂停播放时触发 pause 事件',
                key: 'onPause'
            },
            'onTimeUpdate': {
                type: 1,
                status: 0,
                desc: '当播放进度改变时触发',
                key: 'onTimeUpdate',
            },
            'onEnded': {
                type: 1,
                status: 0,
                desc: '当播放到末尾时触发 ended 事件',
                key: 'onEnded',
            }
        }
    },
    
    'camera': {
        name: '系统相机',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/media/#camera/',
            original: 'https://yuque.antfin-inc.com/amap-webx/api/kd5k28'
        },
        desc: '系统相机',
        props: {
           
            'device-position': {
                type: 0,
                status: 2,
                desc: '前置或后置，值为front, back',
            },
            'flash': {
                type: 0,
                status: 2,
                desc: '指定期望的相机帧数据尺寸',
            },
            'onStop': {
                type: 1,
                status: 0,
                desc: '摄像头在非正常终止时触发，如退出后台等情况',
                key: 'onStop',
            },
            'onError': {
                type: 1,
                status: 0,
                desc: '用户不允许使用摄像头时触发',
                key: 'onError',
            }
        }
    },
    
    'video': {
        name: '视频',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/media/#video/',
            original: 'https://yuque.antfin-inc.com/amap-webx/api/sthmge'
        },
        desc: '视频',
        props: {
            'src': createSupportProp('要播放视频的资源地址，支持优酷视频编码'),
            'poster': createSupportProp('视频封面图（如果不传的话，默认取首帧图）'),
            'objectFit': createSupportProp('当视频大小与 video 容器大小不一致时，视频的表现形式'),
            'initial-time': createSupportProp('指定视频初始播放位置，单位s'),
            'duration': createSupportProp('指定视频时长，单位s，默认读取视频本身时长信息'),
            'controls': createSupportProp('是否显示默认播放控件'),
            'autoplay': createSupportProp('是否自动播放'),
            'direction': createSupportProp('设置全屏时视频的方向'),
            'loop': createSupportProp('是否循环播放'),
            'muted': createSupportProp('是否静音播放'),
            'show-fullscreen-btn': createSupportProp('是否显示全屏按钮'),
            'show-play-btn': createSupportProp('是否显示视频底部控制栏的播放按钮'),
            'show-center-play-btn': createSupportProp('是否显示视频中间的播放按钮'),
            'show-mute-btn': createSupportProp('是否展示工具栏上的静音按钮',0),
            'show-thin-progress-bar': createSupportProp('当底部工具条隐藏时，是否显示细进度条',0),
            'enableProgressGesture': createSupportProp('全屏模式下是否开启控制进度的手势',1,"enable-progress-gesture"),
            'mobilenetHintType': createSupportProp('移动网络提醒样式'),
            'onPlay': createSupportProp('当开始/继续播放时触发play事件',1),
            'onPause': createSupportProp('当暂停播放时触发 pause 事件',1),
            'onEnded': createSupportProp('当播放到末尾时触发 ended 事件',1),
            'onTimeUpdate': createSupportProp('播放进度变化时触发',1),
            'onLoading': createSupportProp('视频出现缓冲时触发',1),
            'onError': createSupportProp('视频播放出错时触发',1),
            'onFullScreenChange': createSupportProp('视频进入和退出全屏时触发',1),
            'onTap': createSupportProp('点击视频view时触发',1),
            'onUserAction': createSupportProp('用户操作事件',0)
            
        }
    }
};