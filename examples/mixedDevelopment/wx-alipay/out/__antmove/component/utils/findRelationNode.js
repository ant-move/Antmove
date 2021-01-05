function findRelationNode (node, p, type, isArray = false) {
    // parent child ancestor descendant
    let nodes = [];
    let _prcess = {
        parent: function (node) {
            if (!node || !node.$parent) return ;
            let _p = node.$parent.$self.is || node.$parent.$self.route;
            if (_p === p) {
                return node.$parent;
            }
        },
        child: function (node) {
            let _child = null;
            node.$children
                .forEach(function (child) {
                    let _p = child.$self.is;

                    if (_p === p) {
                        _child = child;
  
                        if (!isArray) {
                            return _child;
                        }
                        nodes.push(_child);
                    }
                });
            return _child;
        },
        ancestor: function (node) {
            if (!node) return ;
            let _node = null;
            _node = _prcess.parent(node);
            if (!_node) {
                _node = _prcess.ancestor(node.$parent);
            }
            return _node;
        },
        descendant: function (node) {
            let _node = null;
            _node = _prcess.child(node);
  
            if (!_node) {
                node.$children
                    .forEach(function (c) {
                        _node = _prcess.child(c);
  
                        if (!_node) {
                            _node = _prcess.descendant(c);
                        }
                    });
            }
  
            return _node;
        }
    };
  
    let ret = _prcess[type](node);
  
    if (isArray) {
        if (type === 'parent' || type === 'ancestor') return [ret];
        return nodes;
    } 
    return ret;
      
}

module.exports = findRelationNode;