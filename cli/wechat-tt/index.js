const transformFramework = require('../../src/index');
const WxToutiaoPlugin = require('@antmove/wx-tt');

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
        WxToutiaoPlugin,
        opts
    )
        .start();
};
