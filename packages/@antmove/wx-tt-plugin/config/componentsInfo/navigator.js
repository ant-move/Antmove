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
    'navigator': {
        name: '页面链接',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
            target: 'https://developer.toutiao.com/dev/miniapp/uITMy4iMxIjLyEjM'
        },
        desc: '页面链接。',
        props: {
            'target': {
                type: 0,
                status: 2,
                desc: '在哪个目标上发生跳转，默认当前小程序',
            },
            'url': createSupportProp('当前小程序内的跳转链接'),
            'delta': createSupportProp("当 open-type 为 'navigateBack' 时有效，表示回退的层数"),
            'app-id': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，要打开的小程序 appId',
            },
            'path': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页',
            },
            'extra-data': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，需要传递给目标小程序的数据，目标小程序可在 App.onLaunch()，App.onShow() 中获取到这份数据',
            },
            'version': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，要打开的小程序版本',
            },
            'hover-class': createSupportProp('指定点击时的样式类，当hover-class="none"时，没有点击态效果'),
            'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
            'bindsuccess': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，跳转小程序成功',
            },
            'bindfail': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，跳转小程序失败',
            },
            'bindcomplete': {
                type: 0,
                status: 2,
                desc: '当target="miniProgram"时有效，跳转小程序完成',
            },
            'aria-label': {
                type: 0,
                status: 2,
                desc: '无障碍访问，（属性）元素的额外描述',
            },
            'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
            'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒'),
            'open-type': {
                props: {
                    reLaunch: {
                        type: 0,
                        status: 2,
                        desc: '对应 wx.reLaunch 的功能',
                    },
                    exit: {
                        type: 0,
                        status: 2,
                        desc: '退出小程序，target="miniProgram"时生效',
                    }
                }
            }
        }
    },
    'functional-page-navigator': {
        name: '仅在插件中有效，用于跳转到插件功能页',
        url: {
            original: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
            target: ''
        },
        type: 0,
        status: 2,
        desc: '仅在插件中有效，用于跳转到插件功能页',
    }
};