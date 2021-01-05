const { createDescObj } = require('./utils')

/**
 * 小程序当前运行版本类型
 */
module.exports = {
  getRunScene: createDescObj(
    2,
    '用于获取当前小程序的运行版本',
    'https://docs.alipay.com/mini/api/runscene',
    '',
  ),
}
