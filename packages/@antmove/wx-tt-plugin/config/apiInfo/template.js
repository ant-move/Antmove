const { createDescObj } = require('./utils')

/**
 * wxml 模板
 */
module.exports = {
  createSelectorQuery: createDescObj(
    0,
    '返回一个 SelectorQuery 对象实例',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html',
    'https://developer.toutiao.com/dev/miniapp/ucjNy4yN2IjL3YjM',
  ),
  createIntersectionObserver: createDescObj(
    0,
    '创建并返回一个 IntersectionObserver 对象实例',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html',
    'https://developer.toutiao.com/dev/miniapp/uEjNy4SM2IjLxYjM',
  ),
  IntersectionObserver: createDescObj(
    0,
    'IntersectionObserver 对象，用于推断某些节点是否可以被用户看见、有多大比例可以被用户看见',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/IntersectionObserver.html',
    'https://developer.toutiao.com/dev/miniapp/uEjNy4SM2IjLxYjM',
  ),
  NodesRef: createDescObj(
    0,
    '用于获取 WXML 节点信息的对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/NodesRef.html',
    'https://developer.toutiao.com/dev/miniapp/ucjNy4yN2IjL3YjM',
  ),
  SelectorQuery: createDescObj(
    0,
    '查询节点信息的对象',
    'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/SelectorQuery.html',
    'https://developer.toutiao.com/dev/miniapp/ucjNy4yN2IjL3YjM',
  ),
}
