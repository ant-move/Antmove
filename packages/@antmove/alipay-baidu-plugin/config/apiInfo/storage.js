const { createDescObj } = require('./utils');
/**
 * 数据缓存
 */
module.exports = {
    getStorageInfoSync: createDescObj(
        0,
        '同步获取当前 storage 的相关信息',
        'https://docs.alipay.com/mini/api/uw5rdl',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfoSync/',
        {
            msg: '完整支持'
        }
    ),
    setStorageSync: createDescObj(
        0,
        '将数据存储在本地缓存中指定的 key 中',
        'https://docs.alipay.com/mini/api/uw5rdl',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfoSync/',
        {
            msg: '可以封装实现完整支持',
        }
    ),
    getStorageSync: createDescObj(
        0,
        '从本地缓存中同步获取指定 key 对应的内容',
        'https://docs.alipay.com/mini/api/uw5rdl',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfoSync/',
        {
            msg: '可以封装实现完整支持'
        }
    ),
    clearStorage: createDescObj(
        0,
        '清除本地数据缓存的异步接口',
        'https://docs.alipay.com/mini/api/storage',
        'https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-clearStorage/'
    ),
    clearStorageSync: createDescObj(
        0,
        '清除本地数据缓存的同步接口',
        'https://docs.alipay.com/mini/api/ulv85u',
        'https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-clearStorageSync/'
    ),
    getStorage: createDescObj(
        0,
        '程序相同 key下的缓存数据',
        'https://docs.alipay.com/mini/api/azfobl',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorage/'
    ),
    getStorageInfo: createDescObj(
        0,
        '获取当前 storage 的相关信息的异步接口',
        'https://docs.alipay.com/mini/api/zvmanq',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-getStorageInfo/'
    ),
    removeStorage: createDescObj(
        0,
        '删除缓存数据的异步接口',
        'https://docs.alipay.com/mini/api/of9hze',
        'https://smartprogram.baidu.com/docs/develop/api/storage_remove/#swan-removeStorage/'
    ),
    setStorage: createDescObj(
        0,
        '将数据存储在本地缓存中指定的 key 中的异步接口',
        'https://docs.alipay.com/mini/api/eocm6v',
        'https://smartprogram.baidu.com/docs/develop/api/storage_save/#swan-setStorage/'
    ),
};