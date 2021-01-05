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
})
