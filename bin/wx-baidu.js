const wxToBaidu = require('../cli/wechat-baidu/index');

module.exports = function (program, cb = () => {}) {
    program
        .command('wx-baidu')
        .action(function (...params) {
            cb(params, wxToBaidu);
        });

};