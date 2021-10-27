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
      original: 'https://docs.alipay.com/mini/component/navigator',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html',
    },
    desc: '页面链接',
    props: {
      'open-type': createSupportProp('跳转方式'),
      'hover-class': createSupportProp('点击后的样式类'),
      'hover-start-time': {
        type: 4,
        status: 0,
        desc: 'alipay: 按住后多久出现点击态，单位毫秒, wx: 默认值50ms',
      },
      'hover-stay-time': {
        type: 4,
        status: 0,
        desc: 'alipay: 手指松开后点击态保留时间，单位毫秒, wx: 默认值600ms',
      },
      url: createSupportProp('当前小程序内的跳转链接'),
    },
  },
}
