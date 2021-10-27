const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  created: createDescObj(
    0,
    '在组件实例刚刚被创建时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
  ),
  attached: createDescObj(
    0,
    '在组件实例进入页面节点树时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
  ),
  ready: createDescObj(
    0,
    '在组件在视图层布局完成后执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
  ),
  detached: createDescObj(
    0,
    '在组件实例被从页面节点树移除时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
  ),
  moved: createDescObj(
    2,
    '在组件实例被移动到节点树另一个位置时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    '',
  ),
  error: createDescObj(
    2,
    '每当组件方法抛出错误时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    '',
  ),
  show: createDescObj(
    2,
    '组件所在的页面被展示时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    '',
  ),
  hide: createDescObj(
    2,
    '组件所在的页面被隐藏时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    '',
  ),
  resize: createDescObj(
    2,
    '组件所在的页面尺寸变化时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    '',
  ),
  properties: createDescObj(
    0,
    '组件的对外属性，是属性名到属性设置的映射表',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://docs.alipay.com/mini/framework/component_object',
  ),
  observers: createDescObj(
    0,
    '组件数据字段监听器，用于监听 properties 和 data 的变化',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    '',
  ),
  behaviors: createDescObj(
    0,
    '类似于mixins和traits的组件间代码复用机制',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://docs.alipay.com/mini/framework/component_object',
  ),
  relations: createDescObj(
    2,
    '定义和使用组件间关系',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html',
    '',
  ),
}
