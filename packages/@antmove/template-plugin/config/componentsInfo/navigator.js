const { createSupportProp } = require('./utils.js')

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
  navigator: {
    name: '页面链接',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
      alipay: 'https://docs.alipay.com/mini/component/navigator',
    },
    desc: '页面链接。',
    props: {
      url: createSupportProp('当前小程序内的跳转链接'),
      'hover-class': createSupportProp('指定点击时的样式类，当hover-class="none"时，没有点击态效果'),
    },
  },
  'functional-page-navigator': {
    name: '仅在插件中有效，用于跳转到插件功能页',
    url: {
      wechat: 'https://developers.weixin.qq.com/miniprogram/dev/component/functional-page-navigator.html',
      alipay: '',
    },
    type: 0,
    status: 2,
    desc: '仅在插件中有效，用于跳转到插件功能页',
  },
}
