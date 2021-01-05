const path = require('path')
const WechatPlugin = require('@antmove/wx-alipay')
const transformFramework = require('../../src/index.js')

const outputPath = path.join(__dirname, '../../dist')

const inputDirPath = path.join(__dirname, '../../examples/miniprogram-demo/miniprogram')

const App = transformFramework()

App.use(WechatPlugin, {
  entry: inputDirPath,
  dist: `${outputPath}/alipaymini-demo`,
  component2: true,
  scope: true,
  type: 'wx-alipay',
  component: false,
})
  .start()
