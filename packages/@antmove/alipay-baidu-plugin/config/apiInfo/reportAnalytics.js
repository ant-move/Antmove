const { createDescObj } = require('./utils');

/**
 * 自定义分析
 */
module.exports = {
    reportAnalytics: createDescObj(
        1,
        '自定义分析数据的上报接口',
        'https://docs.alipay.com/mini/api/report',
        'https://smartprogram.baidu.com/docs/develop/api/data/#swan-reportAnalytics/',
        {
            msg: '使用前，需要在小程序管理后台自定义分析中新建事件，配置好事件名与字段'
        }
    ),
};