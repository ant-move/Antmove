const { createDescObj } = require('./utils')

/**
 * 数据缓存
 */
module.exports = {
  setStorageSync: createDescObj(
    0,
    '将数据存储在本地缓存中指定的 key 中',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html',
    'https://developer.toutiao.com/dev/miniapp/ucTMz4yNxMjL3EzM',
  ),
  setStorage: createDescObj(
    0,
    '将数据存储在本地缓存中指定的 key 中异步接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html',
    'https://developer.toutiao.com/dev/miniapp/uETMz4SMxMjLxEzM',
  ),
  removeStorageSync: createDescObj(
    0,
    '从本地缓存中同步移除指定 key',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html',
    'https://developer.toutiao.com/dev/miniapp/uEzMz4SMzMjLxMzM',
  ),
  removeStorage: createDescObj(
    0,
    '从本地缓存中移除指定 key',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html',
    'https://developer.toutiao.com/dev/miniapp/uYDNz4iN0MjL2QzM',
  ),
  getStorageSync: createDescObj(
    0,
    '获取缓存数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html',
    'https://developer.toutiao.com/dev/miniapp/uUTOy4SN5IjL1kjM',
  ),
  getStorageInfoSync: createDescObj(
    0,
    '获取当前storage的相关信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html',
    'https://docs.alipay.com/mini/api/uw5rdl',
  ),
  getStorageInfo: createDescObj(
    0,
    '异步获取当前storage的相关信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html',
    'https://docs.alipay.com/mini/api/zvmanq',
  ),
  getStorage: createDescObj(
    0,
    '从本地缓存中异步获取指定 key 的内容',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html',
    'https://developer.toutiao.com/dev/miniapp/uMDMz4yMwMjLzAzM',
  ),
  clearStorageSync: createDescObj(
    0,
    '同步清理本地数据缓存',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html',
    'https://developer.toutiao.com/dev/miniapp/ucTNy4yN1IjL3UjM',
  ),
  clearStorage: createDescObj(
    0,
    '清理本地数据缓存',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html',
    'https://developer.toutiao.com/dev/miniapp/uUDNy4SN0IjL1QjM',
  ),
}
