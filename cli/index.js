const transformFramework = require('../src/index');
const WechatPlugin = require('@antmove/wx-alipay');

const App = transformFramework();

module.exports = function (options = {}) {
    const inputDirPath = options.input;
    const outputDirPath = options.output || options.defaultOutput;
    const opts = {
        dist: outputDirPath,
        entry: inputDirPath,
        ...options
    };

    App.use(
        WechatPlugin,
        opts
    )
        .start();
};
