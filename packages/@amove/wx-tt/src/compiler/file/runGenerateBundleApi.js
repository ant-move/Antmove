const path = require('path')
const { runJs } = require('../utils/childProcess')
// const Config = require('../../../config');

module.exports = {
  runGenerateBundleApi(node, store) {
    const Config = store.config.preAppData.config
    const output = store.config.output
    const filename = path.join(__dirname, './generateBundleApi.js')
    return new Promise(((resolve, reject) => {
      try {
        runJs(filename, {
          output,
          Config,
        }, (code) => {
          resolve(code)
        })
      } catch (error) {
        reject(error)
      }
    }))
  },
}
