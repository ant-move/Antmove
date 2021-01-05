const Plugin = require('@antmove/alipay-polyfill')
const transformFramework = require('../../src/index')

const App = transformFramework()

module.exports = function(options = {}) {
  const inputDirPath = options.input
  const outputDirPath = options.output || options.defaultOutput
  const opts = {
    dist: outputDirPath,
    entry: inputDirPath,
    ...options,
  }

  App.use(
    Plugin,
    opts,
  )
    .start()
}
