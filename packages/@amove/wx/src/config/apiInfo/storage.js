const { createDescObj } = require('./utils')

/**
 * 数据缓存
 */
module.exports = {
  setStorageSync: createDescObj(
    0,
    '将数据存储在本地缓存中指定的 key 中',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html',
    'https://docs.alipay.com/mini/api/cog0du',
    {
      msg: '封装后完全支持',
    },
  ),
  setStorage: createDescObj(
    0,
    '将数据存储在本地缓存中指定的 key 中异步接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html',
    'https://docs.alipay.com/mini/api/eocm6v',
  ),
  removeStorageSync: createDescObj(
    0,
    '从本地缓存中同步移除指定 key',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html',
    'https://docs.alipay.com/mini/api/ytfrk4',
    {
      msg: '封装后完全支持',
    },
  ),
  removeStorage: createDescObj(
    0,
    '从本地缓存中移除指定 key',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html',
    'https://docs.alipay.com/mini/api/of9hze',
  ),
  getStorageSync: createDescObj(
    0,
    '获取缓存数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html',
    'https://docs.alipay.com/mini/api/ox0wna',
    {
      msg: '封装后完全支持',
    },
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
    1,
    '从本地缓存中异步获取指定 key 的内容',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html',
    'https://docs.alipay.com/mini/api/azfobl',
    {
      msg: '返回值的类型',
      returnValue: {
        props: {
          data: {
            type: 3,
            desc: 'key对应的内容, wx: any, alipay: Object/String',
          },
        },
      },
    },
  ),
  clearStorageSync: createDescObj(
    0,
    '同步清理本地数据缓存',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html',
    'https://docs.alipay.com/mini/api/ulv85u',
  ),
  clearStorage: createDescObj(
    0,
    '清理本地数据缓存',
    'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html',
    'https://docs.alipay.com/mini/api/storage#a-nameaaulpuamyclearstorage',
  ),
}
