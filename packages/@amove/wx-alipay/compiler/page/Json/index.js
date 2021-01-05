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
    const output = `${path.join(
      store.config.output,
      node.body._node.projectPath,
    )}.json`
    this.$node.dist = output
    const json = this.$node.content
    if (json.usingComponents) {
      this.addChild({
        type: 'UsingComponent',
        body: {
          json,
        },
      })
    }
    this.addChild({
      type: 'PageJsonWindow',
      body: {
        json: this.$node.content,
      },
    })
    this.addChild({
      type: 'compilerLog',
      body: {
        _type: 'getJsonData',
        opts: {
          pathInfo: path.join(
            path.basename(store.config.entry),
            `${node.body._node.projectPath}.json`,
          ),
          content: JSON.stringify(this.$node.content),
        },
      },
    })
  },
  UsingComponent(node) {
    const json = node.body.json.usingComponents
    const code = {}
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        code[humps.decamelize(key, { separator: '-' })]
          = ['.', '/'].indexOf(json[key][0]) === -1 ? `./${json[key]}` : json[key]
      }
    }
    this.$node.content.usingComponents = code
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
