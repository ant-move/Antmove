const path = require('path');
const transformFramework = require('../../src/index.js');
const WechatPlugin = require('transform-wechat-alipay');
let outputPath = path.join(__dirname, '../../dist');

let inputDirPath = path.join(__dirname, '../../examples/miniprogram-demo/miniprogram');
transformFramework({
    entry: inputDirPath,
    plugins: [
        {
            plugin: WechatPlugin,
            options: {
                dist: outputPath + '/alipaymini-demo'
            }
        }
    ]
});