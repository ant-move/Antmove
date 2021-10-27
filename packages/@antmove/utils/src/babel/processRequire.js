const path = require('path')
const fs = require('fs-extra')

/**
 * 支付宝路径转微信路径
 */
module.exports = function(...p) {
  function _transform(filepath) {
    const dirname = `${p[1].dirname}/`
    const filename = p[1].filename
    const currentPath = p[1].filepath
    if (filepath[0] !== '@' && filepath[0] === '.') {
      if (!/\.js$/.test(filepath)) {
        let requireFilePath = path.join(currentPath, filepath)
        const exit = fs.existsSync(requireFilePath)
        if (exit) {
          const stat = fs.statSync(requireFilePath)
          if (stat.isDirectory) {
            requireFilePath = path.join(requireFilePath, 'index.js')
          }
        }
        filepath = path.relative(currentPath, requireFilePath)
        filepath = `./${filepath}`
      }
    }
    if (filepath[0] !== '@' && filepath[0] === '/') {
      const requireFilePath = path.join(dirname, filepath)
      filepath = path.relative(filename, requireFilePath)
      if (!filepath.match(/^\.\.\/\.\./)) {
        filepath = filepath.substring(1)
      } else {
        filepath = filepath.substring(3)
      }
    }
    filepath = filepath.replace(/\\/g, '/')
    return filepath
  }
  return {
    visitor: {
      ImportDeclaration(_path) {
        let pathValue = _path.node.source.value || ''
        pathValue = _transform(pathValue)

        _path.node.source.value = pathValue
        _path.node.source.raw = `"${pathValue}"`
      },
      CallExpression(_path) {
        if (_path.node.callee && _path.node.callee.name === 'require') {
          const args = _path.node.arguments[0]
          if (args && args.type === 'StringLiteral') {
            args.value = _transform(args.value)
            args.raw = `"${args.value}"`
          }
        }
      },
    },
  }
}

