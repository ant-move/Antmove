const path = require('path');
const transformFramework = require('../../src/index.js');
const WechatPlugin = require('@antmove/wx-alipay');

let outputPath = path.join(__dirname, '../../dist/wechat-alipay/');
let inputDirPath = path.join(__dirname, '../../examples/wx-zhihu');

const App = transformFramework();

App
    .use(WechatPlugin, {
        entry: inputDirPath,
        dist: outputPath,
        env: 'dev'
    })
    .start();
