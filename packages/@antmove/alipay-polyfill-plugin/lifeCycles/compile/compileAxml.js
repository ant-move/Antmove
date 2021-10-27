const fs = require('fs-extra')
const generateAxml = require('../../generate/generateAxml.js')

module.exports = function(fileInfo) {
  const originCode = generateAxml(fileInfo.ast, fileInfo)
  fs.outputFileSync(fileInfo.dist, originCode)
}
