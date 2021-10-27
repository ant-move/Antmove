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
  let entryPath = `${entry}/${directoryPath}`
  const outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`)
    
  // if not support component2
  if (!Config.component2) {
    entryPath = entryPath.replace('classSubdirectory', 'runtime2')
  }
    
  const err = fs.copySync(entryPath, outputPath)
  if (err) { console.error(err) }
}

function copyUtils(readPath, output) {
  const _entryPath = entry + readPath
  const dir = fs.readdirSync(_entryPath)
  dir.forEach((fileName) => {
    const entryPath = `${_entryPath}/${fileName}`
    const outputPath = path.join(output, `${customComponentPrefix}/component/utils/${fileName}`)
    const err = fs.copySync(entryPath, outputPath)
    if (err) { console.error(err) }
  })
}

module.exports = function(output, config) {
  if (config.useRuntimeLog) {
    generateLogPage(output)
  }
  copyUtils('/utils', output)
  Object.keys(config.compile.customComponent)
    .forEach((item) => {
      copyDirectory(output, item)
    })
}
