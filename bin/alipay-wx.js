const alipayToWx = require('../cli/alipay-wechat/index');

module.exports = function (program, cb = () => {}) {
    program
        .command('alipay-wx')
        .option('-o, --output', 'Output path of compiled code.')
        .action(function (...params) {
            cb(params, alipayToWx);
        });

};