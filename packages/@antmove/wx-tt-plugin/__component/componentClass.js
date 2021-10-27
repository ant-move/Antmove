/**
 * type:0 missing
 * type:1 diff
 * 
 */
const appTransformation = require('./classSubdirectory/app')
const pageTransformation = require('./classSubdirectory/page')
const componentTransformation = require('./classSubdirectory/component')

module.exports = function processComponent(type = 'Component') {
  const core = {
    App(options = {}) {
      const _opts = {}
      appTransformation.processTransformationApp(_opts, options)
      App(_opts)
    },
    Page(options = {}) {
      const _opts = {}
      pageTransformation.processTransformationPage(_opts, options)
      Page(_opts)
    },
    Component(options = {}) {
      const _opts = {}
      componentTransformation.processTransformationComponent(_opts, options)
            
      Component(_opts)
    },
  }

  return core[type]
}
