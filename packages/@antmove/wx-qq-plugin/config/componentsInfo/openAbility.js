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
    'ad': {
        name: 'Banner 广告',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/ad.html',
            alipay: ''
        },
        type: 0,
        status: 2,
        desc: 'Banner 广告',
    },
    'official-account': {
        name: '公众号关注组件',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/official-account.html',
            alipay: ''
        },
        type: 0,
        status: 2,
        desc: '当用户扫小程序码打开小程序时，开发者可在小程序内配置公众号关注组件，方便用户快捷关注公众号，可嵌套在原生组件内',
    },
    'open-data': {
        name: '用于展示微信开放的数据',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html',
            alipay: ''
        },
        type: 0,
        status: 2,
        desc: '用于展示微信开放的数据',
    },
    'web-view': {
        name: '组件用于承载 H5 网页，自动铺满整个小程序页面',
        url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html',
            alipay: 'https://docs.alipay.com/mini/component/web-view'
        },
        desc: '会自动铺满整个小程序页面，个人类型的小程序暂不支持使用。客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效',
        props: {
            'src': createSupportProp('webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。')
        }
    }
};