const path = require('path')
const fs = require('fs-extra')
const Config = require('../config')

const customComponentPrefix = Config.library.customComponentPrefix
const entry = path.join(__dirname, '../__api')

module.exports = function generate(output) {
  const outputPath = path.join(output, `${customComponentPrefix}/api`)

  fs.copySync(entry, outputPath)
}
