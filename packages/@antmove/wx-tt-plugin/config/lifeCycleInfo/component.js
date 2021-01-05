const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  created: createDescObj(
    0,
    '在组件实例刚刚被创建时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  attached: createDescObj(
    0,
    '在组件实例进入页面节点树时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  ready: createDescObj(
    0,
    '在组件在视图层布局完成后执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  detached: createDescObj(
    0,
    '在组件实例被从页面节点树移除时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  moved: createDescObj(
    0,
    '在组件实例被移动到节点树另一个位置时执行',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  properties: createDescObj(
    0,
    '组件的对外属性，是属性名到属性设置的映射表',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  observers: createDescObj(
    2,
    '组件数据字段监听器，用于监听 properties 和 data 的变化',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    '',
  ),
  behaviors: createDescObj(
    0,
    '类似于mixins和traits的组件间代码复用机制',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  relations: createDescObj(
    0,
    '定义和使用组件间关系',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  options: createDescObj(
    0,
    '其他选项',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
  lifetimes: createDescObj(
    0,
    '组件生命周期声明对象',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html',
    'https://developer.toutiao.com/dev/miniapp/ugDOx4CO4EjL4gTM',
  ),
}
