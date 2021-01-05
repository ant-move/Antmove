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
      alipay: 'https://q.qq.com/wiki/develop/miniprogram/component/navigation/navigator.html',
    },
    desc: '页面链接。',
    props: {
      target: createSupportProp('在哪个目标上发生跳转，默认当前小程序'),
      url: createSupportProp('当前小程序内的跳转链接'),
      'open-type': createSupportProp('跳转方式'),
      delta: createSupportProp('当 open-type 为 "navigateBack" 时有效，表示回退的层数'),
      'app-id': createSupportProp('当target="miniProgram"时有效，要打开的小程序 appId'),
      path: createSupportProp('当target="miniProgram"时有效，打开的页面路径，如果为空则打开首页'),
      'extra-data': createSupportProp('当target="miniProgram"时有效，需要传递给目标小程序的数据'),
      version: createSupportProp('当target="miniProgram"时有效，要打开的小程序版本'),
      'hover-class': createSupportProp('指定点击时的样式类，当hover-class="none"时，没有点击态效果'),
      'hover-stop-propagation': createSupportProp('指定是否阻止本节点的祖先节点出现点击态'),
      'hover-start-time': createSupportProp('按住后多久出现点击态，单位毫秒'),
      'hover-stay-time': createSupportProp('手指松开后点击态保留时间，单位毫秒'),
      bindsuccess: createSupportProp('当target="miniProgram"时有效，跳转小程序成功'),
      bindfail: createSupportProp('当target="miniProgram"时有效，跳转小程序失败'),
      bindcomplete: createSupportProp('当target="miniProgram"时有效，跳转小程序完成'),
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
