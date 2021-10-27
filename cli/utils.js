const path = require('path')
const exec = require('child_process').execSync
const fs = require('fs-extra')
const { comStores } = require('@antmove/utils')

function recordOptions(options, _input, _output) {
  if (!options.input || !options.output || !options.type) {
    return
  }
  const configPath = path.join(options.input, './antmove.config.js')
  options = JSON.parse(JSON.stringify(options))
  const ifNpm = getLastVersion(options)
  if (ifNpm) {
    options.npm = getLastVersion(options)
  }
  options.input = _input
  options.output = _output
  delete options.remote
  delete options.defaultInput
  options = JSON.stringify(options, null, 4)
  const _options = `module.exports = ${options}`
  fs.outputFileSync(configPath, _options)
}

function getLastVersion(options) {
  const packJsonPath = path.join(options.input, './package.json')
  const isExist = fs.existsSync(packJsonPath)
  if (!isExist) {
    return false
  }
  const obj = {}
  let code = ''
  let ifVant = false
  let _obj = {}
  code = fs.readFileSync(packJsonPath)
  code = code.toString()
  code = JSON.parse(code)
  Object.keys(code).forEach((name) => {
    if (name === 'dependencies' || name === 'devDependencies') {
      _obj = { ..._obj, ...code[name] }
    }
  })
  Object.keys(_obj).forEach((name) => {
    if (name === 'vant-weapp') {
      ifVant = true
    }
  })
  if (!ifVant) {
    return false
  }
  Object.keys(comStores).forEach((key) => {
    const version = exec(`npm view ${comStores[key]} version`)
      .toString()
      .replace(/\n|\r|\t/, '')
    obj[key] = {
      name: comStores[key],
      version,
    }
  })
  return obj
}

function returnOptions(res) {
  const _path = path.join(res, './antmove.config.js')
  const isExist = fs.existsSync(_path)
  if (isExist) {
    const _options = require(_path)
    return _options
  } else {
    return false
  }
}
module.exports = {
  recordOptions,
  returnOptions,
}
