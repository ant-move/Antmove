const { createDescObj } = require('./utils');
/**
 * 数据缓存
 */
module.exports = {
    clearStorage: createDescObj(
        0,
        '清理本地数据缓存',
        'https://docs.alipay.com/mini/api/storage',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorage.html'
    ),
    clearStorageSync: createDescObj(
        0,
        '同步清理本地数据缓存',
        'https://docs.alipay.com/mini/api/ulv85u',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.clearStorageSync.html'
    ),
    getStorage: createDescObj(
        0,
        '从本地缓存中异步获取指定 key 的内容',
        'https://docs.alipay.com/mini/api/azfobl',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorage.html'
    ),
    getStorageInfo: createDescObj(
        0,
        '异步获取当前storage的相关信息',
        'https://docs.alipay.com/mini/api/zvmanq',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfo.html'
    ),
    getStorageInfoSync: createDescObj(
        0,
        '获取当前storage的相关信息',
        'https://docs.alipay.com/mini/api/uw5rdl',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageInfoSync.html'
    ),
    getStorageSync: createDescObj(
        0,
        '获取缓存数据',
        'https://docs.alipay.com/mini/api/ox0wna',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html'
    ),
    removeStorage: createDescObj(
        0,
        '从本地缓存中移除指定 key',
        'https://docs.alipay.com/mini/api/of9hze',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorage.html'
    ),
    removeStorageSync: createDescObj(
        0,
        '从本地缓存中同步移除指定 key',
        'https://docs.alipay.com/mini/api/ytfrk4',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html'
    ),
    setStorage: createDescObj(
        0,
        '将数据存储在本地缓存中指定的 key 中异步接口',
        'https://docs.alipay.com/mini/api/eocm6v',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html'
    ),
    setStorageSync: createDescObj(
        0,
        '将数据存储在本地缓存中指定的 key 中',
        'https://docs.alipay.com/mini/api/cog0du',
        'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html',
        {
            msg: "封装后完全支持"
        }
    )
};