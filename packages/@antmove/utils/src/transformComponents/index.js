const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')

function copyFolder(from, to) {
  let files = []
  if (fs.existsSync(to)) {
    files = fs.readdirSync(from)
    files.forEach((file) => {
      const targetPath = `${from}/${file}`
      const toPath = `${to}/${file}`
      if (fs.statSync(targetPath).isDirectory()) {
        copyFolder(targetPath, toPath)
      } else {
        fs.copyFileSync(targetPath, toPath)
      }
    })
  } else {
    fs.mkdirSync(to)
    copyFolder(from, to)
  }
}

function ifOriginalComponent(from, type) {
  let _tem = ''
  switch (type) {
    case 'wx':
      _tem = 'wxml'
      break
    case 'alipay':
      _tem = 'axml'
      break
    case 'baidu':
      _tem = 'swan'
      break
    case 'qq':
      _tem = 'qml'
      break
    default:
      _tem = 'axml'
  }
  let isWx = false
  isWxComponents(from)

  function isWxComponents(_from) {
    const files = fs.readdirSync(_from)
    files.forEach((file) => {
      const targetPath = `${_from}/${file}`
      const reg = new RegExp(`\\S*\\.${_tem}`)
      if (fs.statSync(targetPath).isDirectory()) {
        isWxComponents(targetPath)
      } else {
        const ifWxml = reg.test(
          targetPath.split('/')[targetPath.split('/').length - 1],
        )
        if (ifWxml) {
          isWx = true
        }
      }
    })
  }
  return isWx
}

function getProgramName(type = 'wx') {
  const pro = {}
  switch (type) {
    case 'alipay':
      pro.name = '支付宝'
      pro.css = 'acss'
      break
    case 'baidu':
      pro.name = '百度'
      pro.css = 'css'
      break
    case 'qq':
      pro.name = 'qq'
      pro.css = 'qss'
      break
    case 'wx':
    default:
      pro.name = '微信'
      pro.css = 'wxss'
  }
  return pro
}

function getCachePath(from) {
  let _path = from
  const tail = _path.charAt(_path.length - 1)
  const sep = path.sep
  const arr = _path.split(sep)
  if (tail === '/' || tail === '\\') {
    arr.splice(-2, 2, 'cache', '.antmove')
  } else {
    arr.splice(-1, 1, 'cache', '.antmove')
  }
  _path = arr.join(sep) + sep
  return _path
}

module.exports = function(opts) {
  opts.originalInput = opts.input
  const cachePath = getCachePath(opts.input)
  const originalProgram = opts.type.split('-')[0]
  const isOriginalComponents = ifOriginalComponent(opts.input, originalProgram)
  const program = getProgramName(originalProgram)
  if (!isOriginalComponents) {
    console.log(
      chalk.red(
        `如需使用一键转换${program.name}组件功能，请选择${program.name}小程序的组件`,
      ),
    )
    return false
  }
  fs.outputFileSync(`${cachePath}app.${program.css}`, ' ')
  fs.outputFileSync(`${cachePath}app.js`, ' ')
  fs.outputFileSync(`${cachePath}app.json`, '{}')
  copyFolder(opts.input, cachePath)
  opts.input = cachePath
  opts.entry = opts.input
  return opts
}
