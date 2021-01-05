const appTransformation = require('./classSubdirectory/app')
const pageTransformation = require('./classSubdirectory/page')
const componentTransformation = require('./classSubdirectory/component')

module.exports = {
  baiduApp(options = {}) {
    const _opts = {}
    appTransformation.processTransformationApp(_opts, options)
    return App(_opts)
  },
  baiduPage(options = {}) {
    const _opts = {}
    pageTransformation.processTransformationPage(_opts, options)
    return Page(_opts)
  },
  baiduComponent(options = {}) {
    const _opts = {}
    componentTransformation.processTransformationComponent(_opts, options)
    return Component(_opts)
  },
  baiduComponentWx(options = {}) {
    const _opts = {}
    componentTransformation.processTransformationComponentWx(_opts, options)
    return Component(_opts)
  },
}
