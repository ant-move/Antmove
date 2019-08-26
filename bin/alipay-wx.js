const alipayToWx = require('../cli/alipay-wechat/index');

module.exports = function (program, cb = () => {}) {
    program
        .command('alipay-wx')
        .action(function (...params) {
            cb(params, alipayToWx);
        });

};