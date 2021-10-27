const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

useReducer({
  AppWxss(node, store) {
    this.$node.content = fs.readFileSync(node.body.path, 'utf8')
    const output = path.join(store.config.output, node.body.projectPath)
    this.$node.dist = output
    if (!this.$node.content) {
      this.$node.content = `/*${node.filePath}*/`
    }
  },
})
