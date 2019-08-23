const { createDescObj } = require('./utils');

/**
 * 更新管理
 *  */

module.exports = {
    getUpdateManager: createDescObj(
        0,
        '获取全局唯一的版本更新管理器',
        'https://docs.alipay.com/mini/api/zdblqg',
        'https://smartprogram.baidu.com/docs/develop/api/get/#swan-getUpdateManager/',
        {
            msg: '完整支持'
        }
    )
};