const path = require('path')
const WechatPlugin = require('@antmove/wx-alipay')
const transformFramework = require('../../src/index.js')

const outputPath = path.join(__dirname, '../../dist')

const inputDirPath = path.join(__dirname, '../../examples/wechat-v2ex')

const App = transformFramework()

App
  .use(WechatPlugin, {
    entry: inputDirPath,
    dist: outputPath,
  })
  .start()
