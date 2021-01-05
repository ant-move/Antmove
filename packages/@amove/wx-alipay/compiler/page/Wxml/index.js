const { useReducer } = require('@amove/next')
// let _componentMap = require("../../config/componentsInfo/index").descObject;
useReducer({
  PageWxml(node, store) {
    this.addChild({
      type: 'processWxml',
      body: node.body,
    })
  },
  PageWxs(node) {
    const { _node } = node.body
    this.addChild({
      type: 'Wxs',
      body: {
        path: `${_node.path}.wxs`,
        fullname: _node.projectPath,
      },
    })
  },
  XmlTagElementMounted: {
    hook: 'after',
    body(node, store) {
      const config = store.config.preAppData.config
      const { deep, astLast } = node.body
      const cName = this.$node.componentName
      if (!cName && deep === 1 && astLast) {
        this.$node.content = `<view class='${config.options.pageContainerClassName}'>\n${this.$node.content}</view>`
      }
    },
  },
})
