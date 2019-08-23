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
            target: 'https://docs.alipay.com/mini/component/image',
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/image.html'
        },
        desc: '图片',
        props: {
            'role': {
                type: 1,
                status: 0,
                desc: '无障碍访问，（角色）标识元素的作用',
                key: 'aria-role'
            },
            'aria-label': createSupportProp('无障碍访问，（属性）元素的额外描述'),
            'src': createSupportProp('图片资源地址'),
            'mode': createSupportProp('图片裁剪、缩放的模式'),
            'class': createSupportProp('外部样式'),
            'style': createSupportProp('内联样式'),
            'lazy-load': createSupportProp('支持图片懒加载，不支持通过 css 来控制 image 展示隐藏的场景'),
            'onLoad': {
                type: 1,
                status: 0,
                desc: "图片载入完毕时触发，事件对象 event.detail = {height: '图片高度px', width: '图片宽度px'}",
                key: 'bindload',
            },
            'onError': {
                type: 1,
                status: 0,
                desc: "当图片加载错误时触发，事件对象 event.detail = {errMsg: 'something wrong'}",
                key: 'binderror',
            },
            'onTap': {
                type: 1,
                status: 0,
                desc: '点击图片时触发',
                key: 'bindtap',
            },
            'catchTap': {
                type: 1,
                status: 0,
                desc: '点击图片时触发，阻止事件冒泡',
                key: 'catchtap',
            }
        }
    },
    'audio': {
        name: '音频',
        url: {
            original: 'https://yuque.antfin-inc.com/amap-webx/api/inul90',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/audio.html'
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
                key: 'binderror',
            },
            'onPlay': {
                type: 1,
                status: 0,
                desc: '当开始/继续播放时触发play事件',
                key: 'bindplay',
            },
            'onPause': {
                type: 1,
                status: 0,
                desc: '当暂停播放时触发 pause 事件',
                key: 'bindpause'
            },
            'onTimeUpdate': {
                type: 1,
                status: 0,
                desc: '当播放进度改变时触发',
                key: 'bindtimeupdate',
            },
            'onEnded': {
                type: 1,
                status: 0,
                desc: '当播放到末尾时触发 ended 事件',
                key: 'bindended',
            }
        }
    },
    'camera': {
        name: '相机组件',
        url: {
            original: 'https://yuque.antfin-inc.com/amap-webx/api/kd5k28',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/camera.html'
        },
        desc: '相机组件',
        props: {
            'device-position': createSupportProp('前置或后置，值为front, back'),
            'flash': createSupportProp('闪光灯，值为auto, on, off'),
            'onStop': {
                type: 1,
                status: 0,
                desc: '摄像头在非正常终止时触发，如退出后台等情况',
                key: 'bindstop',
            },
            'onError': {
                type: 1,
                status: 0,
                desc: '用户不允许使用摄像头时触发',
                key: 'binderror',
            }
        }
    },
    'video': {
        name: '视频',
        url: {
            original: 'https://yuque.antfin-inc.com/amap-webx/api/sthmge',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/video.html'
        },
        desc: '相关api：https://yuque.antfin-inc.com/tiny-tmp/api/zx4x9h',
        props: {
            'src': createSupportProp('要播放视频的资源地址，支持优酷视频编码'),
            'poster': createSupportProp('视频封面图（如果不传的话，默认取首帧图）'),
            'objectFit': {
                type: 1,
                status: 0,
                desc: '当视频大小与 video 容器大小不一致时，视频的表现形式。contain：包含，fill：填充',
                key: 'object-fit',
            },
            'initial-time': createSupportProp('指定视频初始播放位置，单位s'),
            'duration': createSupportProp('指定视频时长，单位s，默认读取视频本身时长信息'),
            'controls': createSupportProp('是否显示默认播放控件（底部工具条，包括播放/暂停按钮、播放进度、时间）'),
            'autoplay': createSupportProp('是否自动播放'),
            'direction': createSupportProp('设置全屏时视频的方向，不指定则根据宽高比自动判断。有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）'),
            'loop': createSupportProp('是否循环播放'),
            'muted': createSupportProp('是否静音播放'),
            'show-fullscreen-btn': createSupportProp('是否显示全屏按钮'),
            'show-play-btn': createSupportProp('是否显示视频底部控制栏的播放按钮'),
            'show-center-play-btn': createSupportProp('是否显示视频中间的播放按钮'),
            'show-mute-btn': {
                type: 4,
                status: 1,
                desc: '是否显示静音按钮',
                msg: '支付宝小程序默认值是true, 微信是false'
            },
            'show-thin-progress-bar': {
                type: 0,
                status: 2,
                desc: '当底部工具条隐藏时，是否显示细进度条（controls=false时设置无效）'
            },
            'enableProgressGesture': {
                type: 1,
                status: 0,
                desc: '是否开启控制进度的手势',
                key: 'enable-progress-gesture',
            },
            'mobilenetHintType': {
                type: 0,
                status: 2,
                desc: '移动网络提醒样式：0-不提醒；1-tip提醒；2-阻塞提醒(无消耗流量大小)；3-阻塞提醒(有消耗流量大小，只有优酷vid才能取到流量大小)'
            },
            'onPlay': {
                type: 1,
                status: 0,
                desc: '当开始/继续播放时触发play事件',
                key: 'bindplay',
            },
            'onPause': {
                type: 1,
                status: 0,
                desc: '当暂停播放时触发 pause 事件',
                key: 'bindpause',
            },
            'onEnded': {
                type: 1,
                status: 0,
                desc: '当播放到末尾时触发 ended 事件',
                key: 'bindended',
            },
            'onTimeUpdate': {
                type: 1,
                status: 0,
                desc: '播放进度变化时触发',
                key: 'bindtimeupdate',
            },
            'onLoading': {
                type: 0,
                status: 2,
                desc: '视频出现缓冲时触发'
            },
            'onError': {
                type: 1,
                status: 0,
                desc: '视频播放出错时触发',
                key: 'binderror',
            },
            'onFullScreenChange': {
                type: 1,
                status: 0,
                desc: '视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal',
                key: 'bindfullscreenchange',
            },
            'onTap': createSupportProp('点击视频view时触发，event.detail = {ptInView:{x:0,y:0}}'),
            'onUserAction': {
                type: 0,
                status: 2,
                desc: '用户操作事件，event.detail = {tag:"mute", value:0}，tag为用户操作的元素，目前支持的tag有：play(底部播放按钮)、centerplay(中心播放按钮)、mute(静音按钮)、fullscreen(全屏按钮)、retry(重试按钮)、mobilenetplay(网络提醒的播放按钮)'
            }
        }
    }
};