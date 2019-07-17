const path = require('path');
const transformFramework = require('../../src/index.js');
const WechatPlugin = require('@antmove/wx-alipay');
let outputPath = path.join(__dirname, '../../dist');

let inputDirPath = path.join(__dirname, '../../examples/miniprogram-demo/miniprogram');

const App = transformFramework();

App.use(WechatPlugin, {
    entry: inputDirPath,
    dist: outputPath + '/alipaymini-demo',
    env: 'development'
})
    .start();