const { precessRelativePathOfCode } = require('@antmove/utils')
const fs = require('fs-extra')
const generateAxml = require('../../generate/generateAxml.js')

module.exports = function(fileInfo, ctx, isComponent = false) {
  fileInfo.dist = fileInfo.dist.replace(/\.wxml/, '.qml')
  let originCode = generateAxml(fileInfo.ast, fileInfo)
  originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry, isComponent)
  fs.outputFileSync(fileInfo.dist, originCode)
}
