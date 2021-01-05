function findRelationNode(node, p, type, isArray = false) {
  // parent child ancestor descendant
  const nodes = []
  const _prcess = {
    parent(node) {
      if (!node || !node.$parent) { return }
      const _p = node.$parent.$self.is || node.$parent.$self.route
      if (_p === p) {
        return node.$parent
      }
    },
    child(node) {
      let _child = null
      node.$children
        .forEach((child) => {
          const _p = child.$self.is

          if (_p === p) {
            _child = child
  
            if (!isArray) {
              return _child
            }
            nodes.push(_child)
          }
        })
      return _child
    },
    ancestor(node) {
      if (!node) { return }
      let _node = null
      _node = _prcess.parent(node)
      if (!_node) {
        _node = _prcess.ancestor(node.$parent)
      }
      return _node
    },
    descendant(node) {
      let _node = null
      _node = _prcess.child(node)
  
      if (!_node) {
        node.$children
          .forEach((c) => {
            _node = _prcess.child(c)
  
            if (!_node) {
              _node = _prcess.descendant(c)
            }
          })
      }
  
      return _node
    },
  }
  
  const ret = _prcess[type](node)
  
  if (isArray) {
    if (type === 'parent' || type === 'ancestor') { return [ret] }
    return nodes
  }
  return ret
}

module.exports = findRelationNode
