/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-11-18 20:06:46
 * @LastEditors: 比心
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx-alipay/compiler/component/Json/index.js
 */
const path = require('path')
const { useReducer } = require('@amove/next')

useReducer({
  ComponentJson(node, store) {
    this.$node.content = ''
    const keyarray = Object.keys(store.config.preAppData.nodes)
    keyarray.forEach((key) => {
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
      type: 'compilerLog',
      body: {
        _type: 'getJsonData',
        opts: {
          pathInfo: path.join(path.basename(store.config.entry), `${node.body._node.projectPath}.json`),
          content: JSON.stringify(this.$node.content),
        },
      },
    })
    // this.$node.content
  },
  ComponentJsonMounted() {
    this.$node.content = JSON.stringify(this.$node.content)
    this.addChild({
      type: 'outputFile',
      body: {
        dist: this.$node.dist,
        content: this.$node.content,
      },
    })
  },
})
