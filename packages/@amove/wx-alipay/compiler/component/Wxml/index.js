const { useReducer } = require('@amove/next')

useReducer({
  ComponentWxml(node, store) {
    this.addChild({
      type: 'processWxml',
      body: node.body,
    })
  },
  ComponentWxs(node) {
    const { _node } = node.body
    this.addChild({
      type: 'Wxs',
      body: {
        path: `${_node.path}.wxs`,
        fullname: _node.projectPath,
      },
    })
  },
  xmlElmentProp: {
    hook: 'after',
    body(node) {
      const { propKey, props, index, type, length } = node.body
      if (propKey === 'is-inline') {
        this.$node.componentIsInline = true
      }
    },
  },
  XmlTagElementMounted: {
    hook: 'after',
    body(node) {
      const { tagAst, deep, astLast } = node.body
      const cName = this.$node.componentName
      if (cName && deep === 1 && astLast) {
        if (this.$node.componentIsInline) {
          this.$node.content = `<view class='${cName} {{className}}' style="display: inline-block;{{style}}">\n${this.$node.content}</view>`
        } else {
          this.$node.content = `<view class='${cName} {{className}}' style='{{style}}'>\n${this.$node.content}</view>`
        }
      }
    },
  },
})
