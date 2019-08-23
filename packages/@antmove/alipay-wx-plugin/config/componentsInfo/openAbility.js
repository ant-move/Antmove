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
    'web-view': {
        name: '组件用于承载 H5 网页，自动铺满整个小程序页面',
        url: {
            original: 'https://docs.alipay.com/mini/component/web-view',
            target: 'https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html'
        },
        desc: '此组件目前仅支持企业小程序,每个页面只能有一个 web-view，请不要渲染多个 web-view，会自动铺满整个页面，并覆盖其它组件',
        props: {
            'src': createSupportProp('web-view 要渲染的 H5 网页 URL，需要登录 小程序管理后台 > 小程序详细 > 设置，进行 H5 域名白名单配置'),
            'onMessage': {
                type: 1,
                status: 0,
                desc: '网页向小程序 postMessage 消息。e.detail = { data }',
                key: 'bindmessage',
            }
        }
    },
    'lifestyle': {
        name: '关注生活号',
        url: {
            original: 'https://docs.alipay.com/mini/component/lifestyle',
            target: ''
        },
        type: 0,
        status: 2,
        desc: '关注生活号'
    },
    'contact-button': {
        name: '智能客服能力由蚂蚁金服零号云客服提供',
        url: {
            original: 'https://docs.alipay.com/mini/component/contact-button',
            target: ''
        },
        type: 0,
        status: 2,
        desc: '唤起智能客服组件，开通智能客服'
    }
};