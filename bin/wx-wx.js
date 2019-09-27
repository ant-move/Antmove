const wxToWx = require('../cli/wechat-wechat/index');

module.exports = function (program, cb = () => {}) {
    program
        .command('wx-compiler')
        .action(function (...params) {
            cb(params, wxToWx);
        });

}; 