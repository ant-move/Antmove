/**
 * add component wrap bundle
 */
const path = require('path')
const fs = require('fs-extra')
const Config = require('../config.js')
const { generateLogPage } = require('./generateRuntimeLogPage')

const customComponentPrefix = Config.library.customComponentPrefix
const entry = path.join(__dirname, '../__component')

function copyDirectory(output, directoryPath) {
  const entryPath = path.join(entry, directoryPath)
  const outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`)
  const err = fs.copySync(entryPath, outputPath)
  if (err) { console.error(err) }
}

module.exports = function(output, config) {
  generateLogPage(output)
  Object.keys(config.compile.customComponent)
    .forEach((item) => {
      copyDirectory(output, item)
    })
}
