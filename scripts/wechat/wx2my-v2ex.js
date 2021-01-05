const path = require('path')
const WxMyPlugin = require('@amove/wx-alipay')

const outputPath = path.join(__dirname, '../../dist/zhihu')
const inputDirPath = path.join(__dirname, '../../examples/wx-zhihu')

const opts = {
//   dist: outputPath,
//   entry: inputDirPath,
  output: outputPath,
  entry: inputDirPath,
  excludes: ['data'],

}
WxMyPlugin(opts)
