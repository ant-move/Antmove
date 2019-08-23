const { createSupportProp } = require('./utils.js');
/**
 * type
 * 0 - missing - 不支持该createSupportProp属性
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
        name: 'H5页面承载组件',
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/component/open/#web-view/',
            original: 'https://docs.alipay.com/mini/component/web-view'
        },
      
        desc: '组件用于承载 H5 网页，自动铺满整个小程序页面',
        props: {
            src: {
                type: 7,
                status: 1,
                desc: "主语及时修改h5页面的相关jssdk",
            },
            onMessage: createSupportProp("网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息",1),
        }
    },
    lifestyle: {
        name: '关注生活号',
        url: {
            target: '',
            original: 'https://docs.alipay.com/mini/component/lifestyle'
        },
        desc: '关注生活号',
        type: 0,
        status: 2
    },
    'contact-button': {
        name: '智能客服',
        url: {
            target: '',
            original: 'https://docs.alipay.com/mini/component/contact-button'
        },
        desc: '智能客服',
        type: 0,
        status: 2
    }

};