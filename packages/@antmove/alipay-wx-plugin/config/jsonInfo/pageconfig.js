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
    'optionMenu': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '设置导航栏额外图标，目前支持设置属性 icon，值为图标 url（以 https/http 开头）或 base64 字符串，大小建议 30*30 px',
        msg: '暂不支持'
    },
    'defaultTitle': {
        type: 1,
        status: 0,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '页面默认标题',
        msg: 'navigationBarTitleText'
    },
    'pullRefresh': {
        type: 1,
        status: 0,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '是否允许下拉刷新。默认NO',
        msg: 'enablePullDownRefresh'
    },
    'allowsBounceVertical': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '是否允许向下拉拽。默认 YES',
        msg: '暂不支持'
    },
    'titlePenetrate': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '是否允许导航栏点击穿透。默认 NO',
        msg: '暂不支持'
    },
    'showTitleLoading': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '是否进入时显示导航栏的 loading。默认 NO',
        msg: '暂不支持'
    },
    'titleImage': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '导航栏图片地址',
        msg: '暂不支持'
    },
    'titleBarColor': {
        type: 1,
        status: 0,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '页面的背景色',
        msg: 'navigationBarBackgroundColor'
    },
    'backgroundColor': {
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        type: 7,
        status: 0,
        desc: '窗口的背景色'
    },
    'backgroundImageColor': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '下拉露出显示的背景图底色',
        msg: '暂不支持'
    },
    'backgroundImageUrl': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: '下拉露出显示的背景图链接',
        msg: '暂不支持'
    },
    'gestureBack': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: 'iOS 用，是否支持手势返回。默认 NO，支持 YES / NO',
        msg: '暂不支持'
    },
    'enableScrollBar': {
        type: 0,
        status: 2,
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        desc: 'Android 用，是否显示 WebView 滚动条',
        msg: '暂不支持'
    },
    'usingComponents': {
        url: {
            original: 'https://docs.alipay.com/mini/framework/page-json',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html'
        },
        type: 7,
        status: 0,
        desc: '页面自定义组件配置'
    }
};