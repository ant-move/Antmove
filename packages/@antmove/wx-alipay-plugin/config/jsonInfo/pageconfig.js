const { createSupportProp } = require('../componentsInfo/utils.js');
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
    'navigationBarBackgroundColor': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '导航栏背景颜色，如 #000000',
        msg: '暂不支持'
    },
    'navigationBarTextStyle': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '导航栏标题颜色，仅支持 black / white',
        msg: '暂不支持'
    },
    'navigationBarTitleText': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '导航栏标题文字内容',
        msg: '暂不支持'
    },
    'navigationStyle': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '导航栏样式，仅支持以下值，default 默认样式,custom 自定义导航栏，只保留右上角胶囊按钮',
        msg: '暂不支持'
    },
    'backgroundColor': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '窗口的背景色',
        msg: '暂不支持'
    },
    'backgroundTextStyle': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '下拉 loading 的样式，仅支持 dark / light',
        msg: '暂不支持'
    },
    'backgroundColorTop': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '顶部窗口的背景色，仅 iOS 支持',
        msg: '暂不支持'
    },
    'backgroundColorBottom': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '底部窗口的背景色，仅 iOS 支持',
        msg: '暂不支持'
    },
    'enablePullDownRefresh': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '是否开启当前页面下拉刷新。详见 Page.onPullDownRefresh',
        msg: '暂不支持'
    },
    'onReachBottomDistance': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '页面上拉触底事件触发时距页面底部距离，单位为px。详见 Page.onReachBottom',
        msg: '暂不支持'
    },
    'pageOrientation': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化',
        msg: '暂不支持'
    },
    'disableScroll': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '设置为 true 则页面整体不能上下滚动。只在页面配置中有效，无法在 app.json 中设置',
        msg: '暂不支持'
    },
    'disableSwipeBack': {
        type: 0,
        status: 2,
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html',
            alipay: ''
        },
        desc: '禁止页面右滑手势返回',
        msg: '暂不支持'
    },
    'usingComponents': createSupportProp('页面自定义组件配置')
};