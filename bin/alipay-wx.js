const alipayToWx = require('../cli/alipay-wechat/index')

module.exports = function(program, cb = () => {}) {
  program
    .command('alipay-wx')
    .action((...params) => {
      cb(params, alipayToWx)
    })
}
