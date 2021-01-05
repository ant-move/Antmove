const { transformStr } = require('@antmove/utils')

module.exports = function(ast) {
  ast.type = transformStr(ast.type)
}
