// const config = require('../../../config');
const path = require('path')
const fs = require('fs-extra')

module.exports = {
  generateNodeTrees(node, store) {
    const output = store.config.output
    const str = `${global.appNodesTreeStr}}`
    const config = store.config.preAppData.config
    fs.outputFileSync(path.join(output, config.library.customComponentPrefix, 'api/relations.js'), str)
  },
}
