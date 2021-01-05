const path = require('path')
const fs = require('fs-extra')

module.exports = {
  generateMiniProjectJson(ndoe, store) {
    const jsonStr = `{
            "component2": true
        }`
    const output = store.config.output
    const miniPath = path.join(output, 'mini.project.json')
    fs.outputFile(miniPath, jsonStr)
  },
}
