const WxMyPlugin = require('@amove/wx-alipay');
module.exports = function (options = {}) {
    const inputDirPath = options.input;
    const outputDirPath = options.output || options.defaultOutput;
    const opts = {
        dist: outputDirPath,
        output: outputDirPath,
        entry: inputDirPath,
        ...options
    };
    WxMyPlugin(opts);
};