const { createDescObj } = require('./utils');
/** 
 * 数据安全
*/
module.exports = {
    rsa: createDescObj(
        2,
        '非对称加密',
        'https://docs.alipay.com/mini/api/data-safe',
        '',
        {
            msg: '不支持'
           
        }
    ), 
};