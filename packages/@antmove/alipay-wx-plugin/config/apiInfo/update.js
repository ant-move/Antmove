const { createDescObj } = require('./utils');
/**
 * 更新管理
 */
module.exports = {
    getUpdateManager: createDescObj(
        0,
        '创建一个 UpdateManager 对象，获取全局唯一的版本更新管理器，用于管理小程序更新',
        'https://docs.alipay.com/mini/api/zdblqg',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html'
    )
};