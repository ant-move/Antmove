module.exports = {
  connectNodes: function connectNodes(node, ast) {
    if (!node.$relationNode.$parent) { return false }
    const parentNodeId = node.$relationNode.$parent.$id
    const parentNodeRoute = node.$relationNode.$parent.$route
    const index = node.$relationNode.$parent.$index
    
    const refNumbers = (node.$self.props.refNumbers && node.$self.props.refNumbers.length) || 1
    
    const parentArray = ast.$refNodes[parentNodeRoute][parentNodeId]
    let parent = null
    if (refNumbers > 1) {
      parentArray.forEach((_parent) => {
        if (_parent.$children.length !== refNumbers && !parent) {
          parent = _parent
          return true
        }
      })
    } else {
      parent = parentArray[0]
    }
    if (parent) {
      node.setParent(parent)
    }
  },
  setIfWatch,

}
function setIfWatch(res) {
  my.setStorageSync({
    key: 'ifWatch',
    data: res,
  })
}

