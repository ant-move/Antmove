const transformFramework = require('../src/index.js');
const WechatPlugin = require('transform-wechat-alipay');

module.exports = function (options = {}) {
    const inputDirPath = options.input || options.defaultInput;
    const outputDirPath = options.output;

    transformFramework({
        entry: inputDirPath,
        options: {
            exclude: [
                /^\.\w+/,
                'project.config.json'
            ]
        },
        plugins: [
            {
                plugin: WechatPlugin,
                options: {
                    dist: outputDirPath,
                    ...options
                }
            }
        ]
    });

};
