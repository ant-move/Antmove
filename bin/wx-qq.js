const wxToQq = require('../cli/wx-qq/index')

module.exports = function(program, cb = () => {}) {
  program
    .command('wx-qq')
    .action((...params) => {
      cb(params, wxToQq)
    })
}
