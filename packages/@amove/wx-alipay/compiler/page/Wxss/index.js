/*
 * @Author: your name
 * @Date: 2020-08-05 14:22:14
 * @LastEditTime: 2020-08-21 18:43:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /antmove-zqs/packages/@amove/wx-alipay/compiler/page/Wxss/index.js
 */
const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

useReducer({
  PageWxss(node, store) {
    this.$node.content = fs.readFileSync(
      `${node.body._node.path}.wxss`,
      'utf8',
    )
    const config = store.config.preAppData.config
    const output
            = `${path.join(store.config.output, node.body._node.projectPath)
            }.wxss`
    if (!this.$node.content) {
      this.$node.content = `/*${node.filePath}*/`
    }
    this.$node.projectPath = `${node.body._node.projectPath}.wxss`
    this.addChild({
      type: 'ProcessCss',
      key: `${node.path}ProcessCss`,
      dist: output,
      body: node.body,
    })
    // this.addChild('ProcessFlexDirection')
    if (config.options.styleScope) {
      this.addChild('ProcessCssSemicolon')
    }
  },
})
