const wxToWx = require('../cli/wechat-wechat/index')

module.exports = function(program, cb = () => {}) {
  program
    .command('wx-compiler')
    .action((...params) => {
      cb(params, wxToWx)
    })
}
