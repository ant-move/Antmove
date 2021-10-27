const path = require('path')
const WechatPlugin = require('@antmove/wx-alipay')
const transformFramework = require('../../src/index.js')

const outputPath = path.join(__dirname, '../../dist/wechat-alipay/')
const inputDirPath = path.join(__dirname, '../../examples/wx-zhihu')

const App = transformFramework()

App
  .use(WechatPlugin, {
    entry: inputDirPath,
    dist: outputPath,
    env: 'dev',
  })
  .start()
