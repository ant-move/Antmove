const path = require('path')
const fs = require('fs-extra')

const output = path.join(__dirname, '../../transform-framework/')
const entry = path.join(__dirname, '../../antmove/')


function process(filename) {
  const entryPath = path.join(entry, filename)
  const outputPath = path.join(output, filename)
  const json = fs.readFileSync(entryPath, 'utf8')
  console.log(`[update]: ${outputPath}`)
  fs.outputFileSync(outputPath, json)
}

const files = [
  './package.json',
  './lerna.json',
  './packages/@antmove/utils/package.json',
  './packages/@antmove/wx-alipay-plugin/package.json',
  './packages/@antmove/wx-baidu-plugin/package.json',
  './packages/@antmove/wx-wx-plugin/package.json',
  './packages/@antmove/wx-tt-plugin/package.json',
  './packages/@antmove/wx-qq-plugin/package.json',
  './packages/@antmove/alipay-wx-plugin/package.json',
  './packages/@antmove/alipay-baidu-plugin/package.json',
  './packages/@antmove/alipay-polyfill-plugin/package.json',
  './packages/@antmove/template-plugin/package.json',
]

files.forEach((file) => {
  process(file)
})
