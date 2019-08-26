const alipayToBaidu = require('../cli/alipay-baidu/index');

module.exports = function (program, cb = () => {}) {
    program
        .command('alipay-baidu')
        .option('-o, --output', 'Output path of compiled code.')
        .action(function (...params) {
            cb(params, alipayToBaidu);
        });

};