const path = require('path')
const fs = require('fs-extra')

const entry = path.join(__dirname, '../../transform-framework/')
const output = path.join(__dirname, '../../antmove/github-core')

function prepubAntmove() {
  const dirs = [
    '/src',
    './cli',
    './bin',
    '/packages/@amove/wx-utils',
    '/packages/@amove/wx',
    '/packages/@amove/wx-tt',
    '/packages/@amove/wx-alipay',
    '/packages/@antmove/utils',
    '/packages/@antmove/wx-alipay-plugin',
    '/packages/@antmove/wx-wx-plugin',
    '/packages/@antmove/wx-tt-plugin',
    '/packages/@antmove/wx-qq-plugin',
    '/packages/@antmove/template-plugin',
    '/packages/@antmove/wx-baidu-plugin',
    '/packages/@antmove/wx-amap-plugin',
    '/packages/@antmove/alipay-wx-plugin',
    '/packages/@antmove/alipay-baidu-plugin',
    '/packages/@antmove/alipay-polyfill-plugin',
    '/examples/wechat-v2ex',
    '/examples/wx-zhihu'
  ]

  const files = [
    '/README.md',
    '/CHANGELOG.md',
    '/.commitlintrc.js',
    '/.editorconfig',
    '/.eslintignore',
    '/.eslintrc.js',
    '/.gitignore',
    '/.npmignore',
    '/lerna.json',
    '/package.json'
  ]

  dirs.forEach((dir) => {
    _copy(dir)
  })

  files.forEach((filename) => {
    fs.outputFileSync(
      path.join(output, filename),
      fs.readFileSync(path.join(entry, filename), 'utf8'),
    )
    console.log(`[generate]: ${path.join(output, filename)}`)
  })

  function _copy(dirname) {
    const dist01 = path.join(output, dirname)
    fs.emptyDirSync(dist01)
    console.log(`[generate]: ${dist01}`)

    fs.copy(path.join(entry, dirname), dist01)
  }
}

prepubAntmove()
