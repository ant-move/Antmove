const fs = require('fs-extra')
const generateAxml = require('../../generate/generateAxml.js')

module.exports = function(fileInfo, ctx) {
  fileInfo.dist = fileInfo.dist.replace(/\.wxml/, '.axml')
  let originCode = generateAxml(fileInfo.ast, fileInfo, ctx.$options.appPages)
  if (fileInfo.parent) {
    fileInfo.parent.hasAntmoveAction = originCode.includes('antmoveAction')
  }
  originCode = generateAxml(fileInfo.ast, fileInfo, ctx.$options.appPages)
  fs.outputFileSync(fileInfo.dist, originCode)
}
