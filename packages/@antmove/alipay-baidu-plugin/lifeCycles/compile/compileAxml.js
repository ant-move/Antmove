const { precessRelativePathOfCode } = require('@antmove/utils')
const fs = require('fs-extra')
const generateAxml = require('../../generate/generateAxml.js')

module.exports = function(fileInfo, ctx) {
  fileInfo.dist = fileInfo.dist.replace(/\.axml/, '.swan')
  let originCode = generateAxml(fileInfo.ast, fileInfo)
  originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry)
  fs.outputFileSync(fileInfo.dist, originCode)
}
