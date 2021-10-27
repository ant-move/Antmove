const wxToBaidu = require('../cli/wechat-baidu/index')

module.exports = function(program, cb = () => {}) {
  program
    .command('wx-baidu')
    .action((...params) => {
      cb(params, wxToBaidu)
    })
}
