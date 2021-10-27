/**
 * add component wrap bundle
 */
const path = require('path')
const fs = require('fs-extra')
const {
  minifyJs,
  transformEs6,
} = require('@antmove/utils')
const Config = require('../config.js')
const { generateLogPage } = require('./generateRuntimeLogPage')

const entry = path.join(__dirname, '../__component')
Config.compile.customComponent = Object.assign({}, Config.compile.customComponent)

function copyDirectory(output, directoryPath, customComponentPrefix) {
  const entryPath = `${entry}/${directoryPath}`
  const outputPath = path.join(output, `${customComponentPrefix}/component/${directoryPath}`)

  if (!Config.isDev()) {
    const stat = fs.statSync(entryPath)
    if (stat.isDirectory()) {
      const dir = fs.readdirSync(entryPath)
      fs.ensureDir(outputPath)
      dir.forEach((file) => {
        const filePath = path.join(entryPath, file)
        const suffixName = path.extname(filePath)
        let content = fs.readFileSync(filePath, 'utf8')
        const output = path.join(outputPath, file)
        if (suffixName === '.js') {
          content = minifyJs(transformEs6(content))
        }
        fs.outputFileSync(output, content)
      })
    } else {
      const suffixName = path.extname(entryPath)
      let content = fs.readFileSync(entryPath, 'utf8')
      if (suffixName === '.js') {
        content = minifyJs(transformEs6(content))
      }
      fs.outputFileSync(outputPath, content)
    }
  } else {
    fs.copy(entryPath, outputPath, (err) => {
      if (err) { console.error(err) }
    })
  }
}


module.exports = function(output, config) {
  const customComponentPrefix = Config.library.customComponentPrefix
  generateLogPage(output)

  Object.keys(config || Config.compile.customComponent)
    .forEach((item) => {
      copyDirectory(output, item, customComponentPrefix)
    })
}
