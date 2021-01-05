const { createDescObj } = require('./utils')

/**
 * 自定义分析
 */
module.exports = {
  call: createDescObj(
    2,
    '',
    'https://docs.alipay.com/mini/introduce/ocr-meter#iuatn',
    '',
  ),
  reportAnalytics: createDescObj(
    0,
    '自定义分析数据的上报接口',
    'https://docs.alipay.com/mini/api/report',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html',
  ),
}
