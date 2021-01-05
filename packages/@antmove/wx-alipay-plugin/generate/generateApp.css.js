/**
 * add component wrap bundle
 */
const path = require('path')
const fs = require('fs-extra')
const Config = require('../config.js')

const customComponentPrefix = Config.library.customComponentPrefix
const entry = path.join(__dirname, '../static')

function generateAppAcss(output) {
  fs.copy(entry, path.join(output, `${customComponentPrefix}/static`), (err) => {
    if (err) { console.error(err) }
  })
}

const cssStyle = `
    @import '${customComponentPrefix}/static/app.acss';
`

module.exports = function(str, output) {
  generateAppAcss(output)

  return `${cssStyle}\n${str}`
}
