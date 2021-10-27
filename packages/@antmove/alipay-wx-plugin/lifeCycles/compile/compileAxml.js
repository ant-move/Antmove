const fs = require('fs-extra')
const generateAxml = require('../../generate/generateAxml.js')

module.exports = function(fileInfo) {
  fileInfo.dist = fileInfo.dist.replace(/\.axml/, '.wxml')
  const originCode = generateAxml(fileInfo.ast, fileInfo)
  fs.outputFileSync(fileInfo.dist, originCode)
}
