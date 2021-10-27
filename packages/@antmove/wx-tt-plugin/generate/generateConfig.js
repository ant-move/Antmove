const path = require('path')
const fs = require('fs-extra')
const Config = require('../config')

/**
 * generate config file which storge the compiling info.
 */

module.exports = function(output, obj = {}) {
  const targetPath = path.join(output, `${Config.library.customComponentPrefix}/.config.json`)
  const code = `
        ${JSON.stringify(obj)}
    `

  try {
    fs.outputFileSync(targetPath, code)
  } catch (err) {
    throw err
  }
}
