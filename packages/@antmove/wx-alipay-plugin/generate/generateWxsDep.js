const path = require('path')
const fs = require('fs-extra')
const config = require('../config')

global.wxsDepObj = {}

module.exports = {
  createDep(filename, wxsPath, wxsName, output) {
    global.wxsDepObj[filename] = global.wxsDepObj[filename] || []
    global.wxsDepObj[filename].push({
      name: wxsName,
      path: wxsPath,
      output,
    })
  },
  _generate(filename) {
    let code = `
        '${filename}': {`
    global.wxsDepObj[filename]
      .forEach((item) => {
        code += `${item.name}: require('${item.path}'),`
      })
    code += '},'
    return code
  },
  generate() {
    if (config.hasWxs) { return false }
    const basePath = config.wxsPolyfillPath
    const _p = config.library.customComponentPrefix // ployfill 代码输出目录
    let output = ''
    let code = `
        module.exports = {`
        
    Object.keys(global.wxsDepObj)
      .forEach((item) => {
        const obj = global.wxsDepObj[item]
        output = obj[0].output
        // base output is equal
        code += this._generate(item, obj[0].output)
      })
    code += '}'
    const _path = path.join(output, _p, basePath, 'sjs.js')
    fs.outputFileSync(_path, code)
  },
}
