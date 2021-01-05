const path = require('path')
const fs = require('fs-extra')
const Config = require('../config')

/**
 * generate config file which storge the compiling info.
 */

module.exports = function(output, obj = {}, cb = () => {}) {
  const targetPath = path.join(output, `${Config.library.customComponentPrefix}/.config.json`)
  const code = `
        ${JSON.stringify(obj)}
    `

  fs.outputFile(targetPath, code, (err) => {
    if (err) { throw err }
    cb(targetPath)
  })
}
