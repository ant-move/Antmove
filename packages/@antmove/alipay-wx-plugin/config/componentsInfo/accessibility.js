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
  'aria-component': {
    name: '无障碍访问',
    url: {
      original: 'https://docs.alipay.com/mini/component/accessibility',
      target: 'https://developers.weixin.qq.com/miniprogram/dev/component/aria-component.html',
    },
    desc: 'aria 属性是 WAI-ARIA 标准提供无障碍访问动态、可交互 Web 内容的技术规范。从 基础库 1.18.0 版本开始，小程序架的部分基础组件支持 aria 属性，可满足视障人士对于小程序的无障碍访问需求',
    props: {
      role: {
        type: 1,
        status: 0,
        desc: '表示组件的语义角色',
        key: 'aria-role',
      },
      'aria-label': createSupportProp('可以代替组件内的文本内容'),
      'aria-labelledby': createSupportProp('一些组件和其他组件是有关联的，需要一起朗读才能表达出完整的含义'),
      'aria-checked': createSupportProp('表示 checkbox、switch 等组件是否被选中'),
      'aria-expanded': createSupportProp('可折叠的组件 的展开信息'),
    },
  },
}
