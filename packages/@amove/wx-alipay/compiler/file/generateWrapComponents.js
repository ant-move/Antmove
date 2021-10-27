/**
 * add component wrap bundle
 */
const path = require('path')
const fs = require('fs-extra')
// const Config = require('../../../config.js');
// const { generateLogPage } = require('./generateRuntimeLogPage');

const entry = path.join(__dirname, '../../runtime/__component')


function copyDirectory(output, directoryPath, Config) {
  const customComponentPrefix = Config.library.customComponentPrefix
  let entryPath = `${entry}/${directoryPath}`
  const outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`)
    
  // if not support component2
  if (!Config.component2) {
    entryPath = entryPath.replace('classSubdirectory', 'runtime2')
    copyUtils('/runtime2', output, Config)
  }
    
  const err = fs.copySync(entryPath, outputPath)
  if (err) { console.error(err) }
}

function copyUtils(readPath, output, Config) {
  const customComponentPrefix = Config.library.customComponentPrefix
  const _entryPath = entry + readPath
  const dir = fs.readdirSync(_entryPath)
  dir.forEach((fileName) => {
    const entryPath = `${_entryPath}/${fileName}`
    // console.log(entryPath)
    const outputPath = path.join(output, `${customComponentPrefix}/component/utils/${fileName}`)
    const err = fs.copySync(entryPath, outputPath)
    if (err) { console.error(err) }
  })
}

module.exports = {
  runGenerateBundleComponent(node, store) {
    const output = store.config.output
    const config = store.config.preAppData.config
    // generateLogPage(output);
    copyUtils('/utils', output, config)
    Object.keys(config.compile.customComponent)
      .forEach((item) => {
        copyDirectory(output, item, config)
      })
  },
}
