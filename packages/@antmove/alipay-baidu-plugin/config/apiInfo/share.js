const { createDescObj } = require('./utils');
/**
 * 转发
 */
module.exports = {
    hideShareMenu: createDescObj(
        2,
        '隐藏分享按钮',
        'https://docs.alipay.com/mini/api/share_app',
        '',
        {
            msg: '不支持'
        }
    ), 
    showSharePanel: createDescObj(
        2,
        '唤起分享面板',
        'https://docs.alipay.com/mini/api/omg2ye',
        '',
        {
            msg: '不支持'
        }
    ), 
};