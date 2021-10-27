const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  onInit: createDescObj(
    0,
    '在组件实例刚刚被创建时执行',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
  ),
  deriveDataFromProps: createDescObj(
    0,
    '在组件实例进入页面节点树时执行',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
  ),
  didMount: createDescObj(
    0,
    '在组件在视图层布局完成后执行',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
  ),
  didUpdate: createDescObj(
    2,
    '组件更新完毕时触发',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
    '',
  ),
  didUnmount: createDescObj(
    0,
    '在组件实例被从页面节点树移除时执行',
    'https://docs.alipay.com/mini/framework/component-lifecycle',
    'https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html',
  ),
}
