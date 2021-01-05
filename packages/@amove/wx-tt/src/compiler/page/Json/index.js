const path = require('path')
const fs = require('fs-extra')
const { useReducer } = require('@amove/next')
const humps = require('humps')

useReducer({
  PageJson(node, store) {
    this.$node.content = ''
    const keyArray = Object.keys(store.config.preAppData.nodes)
    keyArray.forEach((key) => {
      const _P = path.join(store.config.entry, key)
      const _np = path.join(store.config.entry, node.body._node.projectPath)
      if (_P === _np) {
        this.$node.content = store.config.preAppData.nodes[key].json
      }
    })
    const output
            = `${path.join(store.config.output, node.body._node.projectPath)
            }.json`
    this.$node.dist = output
    this.$node.content = JSON.stringify(this.$node.content)
  },
  PageJsonMounted() {
    this.addChild({
      type: 'outputFile',
      body: {
        dist: this.$node.dist,
        content: this.$node.content,
      },
    })
  },
})
