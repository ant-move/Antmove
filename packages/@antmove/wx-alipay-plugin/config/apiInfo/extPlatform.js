const { createDescObj } = require('./utils');
/**
 * 第三方平台
 */
module.exports = {
    getExtConfig: createDescObj(
        2,
        '获取第三方平台自定义的数据字段。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html',
        ''
    ),
    getExtConfigSync: createDescObj(
        2,
        'wx.getExtConfig 的同步版本。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html',
        ''
    )
};