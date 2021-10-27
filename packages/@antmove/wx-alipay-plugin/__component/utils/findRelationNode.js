function findRelationNode(node, p, type, isArray = false) {
  // parent child ancestor descendant
  const nodes = []
  const _prcess = {
    parent(_node) {
      if (!_node || !_node.$parent) { return }
      const _p = _node.$parent.$self.is || _node.$parent.$self.route
      if (_p === p) {
        return _node.$parent
      }
    },
    child(_node) {
      let _child = null
      _node.$children
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
    ancestor(__node) {
      if (!__node) { return }
      let _node = null
      _node = _prcess.parent(__node)
      if (!_node) {
        _node = _prcess.ancestor(__node.$parent)
      }
      return _node
    },
    descendant(__node) {
      let _node = null
      _node = _prcess.child(__node)
  
      if (!_node) {
        __node.$children
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
