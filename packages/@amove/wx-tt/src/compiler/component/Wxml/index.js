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
})
