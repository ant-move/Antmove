const path = require('path')
const { useReducer } = require('@amove/next')
const fs = require('fs-extra')

useReducer({
  Wxs(node, store) {
    this.$node.content = fs.readFileSync(node.body.path, 'utf8')
    this.$node.dist
            = `${store.config.output}/${node.body.fullname}.sjs`
    this.addChild({
      type: 'WxsImportExpression',
      body: {
        content: this.$node.content,
        dist: this.$node.dist,
      },
    })
  },
})
