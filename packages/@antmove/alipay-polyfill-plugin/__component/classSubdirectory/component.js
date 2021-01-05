const utils = require('../../api/utils')

const { fnAppClass, browserPath } = utils
const createNode = require('./relation')
const processRelationHandle = require('./processRelation')

const posix = browserPath()
const Relations = require('../../api/relations')
const SelectComponent = require('./selectComponent')

function getInfo(key, obj) {
  let val = {}
  Object.keys(obj)
    .forEach((item) => {
      if (key === item) {
        val = obj[item]
      } else if (key.indexOf(item) !== -1) {
        val = obj[item]
      }
    })
  return val
}
function processRelations(ctx, relationInfo = {}) {
  let route = ctx.is
  route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '')
    
  if (route[0] === '/') {
    route = route.substring(1)
  }
  const info = getInfo(route, relationInfo)
  if (info) {
    processRelationHandle(info, (node) => {
      if (node.$id === 'saveChildRef0') {
        ctx[node.$id] = function() {}
        node.$index = 0
        node.$route = route
        createNode.call(ctx, ctx, null, node)
        return false
      }
      ctx[node.$id] = function(ref) {
        ctx.$antmove = ctx.$antmove || {}
        if (ctx.$antmove[node.$id] === undefined) {
          ctx.$antmove[node.$id] = 0
        } else {
          ctx.$antmove[node.$id] += 1
        }
        this.selectComponentApp.preProcesscomponents(ref)
        node.$index = ctx.$antmove[node.$id]
        node.$route = route
        createNode.call(ctx, ref, null, node)
      }
    })
  } else {
    console.warn('Missing nodes relation of ', route)
  }
}

function processRelationPath(self, relation) {
  const from = self.is; let
    to = relation
  if (to[0] === '.') {
    to = `../${to}`
  }
  const _p = posix.join(from, to)
  return _p
}
function handleRelations() {
  if (this.props.theRelations) {
    Object.keys(this.props.theRelations)
      .forEach((relation) => {
        const _p = processRelationPath(this, relation)
        const relationInfo = this.props.theRelations[relation]
        let nodes = null

        if (relationInfo.type === 'child' || relationInfo.type === 'descendant') {
          return false
        }
        nodes = findRelationNode(this.$node, _p, relationInfo.type, true)
        if (!nodes || nodes[0] === undefined) {
          return false
        }

        nodes.forEach((n) => {
          if (!n) {
            // console.error('wrong relation reference of ', relationInfo);
            // console.error('from: ', this.$node.$self.is, 'to: ', _p);
            return false
          }
          _relationNode.call(this, n, {
            relationInfo,
            _p,
            relation,
          })
        })
      })
  }
}

// process node relation callback
function _relationNode(node, info) {
  const { relationInfo, relation, _p } = info

  // 触发父级组件的 relations
  const type = relationInfo.type
  let parentType = ''
  if (type === 'parent') {
    parentType = 'child'
  } else if (type === 'ancestor') {
    parentType = 'descendant'
  }

  const parentCtx = node.$self
  const childCtx = this
  if (typeof parentCtx.props.theRelations === 'object') {
    Object.keys(parentCtx.props.theRelations)
      .forEach((relation) => {
        const relationInfo = parentCtx.props.theRelations[relation]
        if (relationInfo.type === parentType) {
          _relationNode.call(parentCtx, childCtx.$node, {
            relationInfo,
            relation,
            _p: processRelationPath(parentCtx, relation),
          })

          return true
        }
      })
  }
  

  node = node.$self
  
  this._storeRelationNodes = this._storeRelationNodes || {}
  if (this._storeRelationNodes[_p]) {
    this._storeRelationNodes[_p].push(node)
  } else {
    this._storeRelationNodes[_p] = [node]
  }
                    
  if (this._storeRelationNodes[relation]) {
    this._storeRelationNodes[relation].push(node)
  } else {
    this._storeRelationNodes[relation] = [node]
  }
  const ctx = this || {}
  this.getRelationNodes = function(_p) {
    this._storeRelationNodes = this._storeRelationNodes || {}
    return this._storeRelationNodes[_p] || []
  }

  
  if (typeof relationInfo.linked === 'function') {
    relationInfo.linked.call(ctx, node)
  }
  
  if (typeof relationInfo.linkChanged === 'function') {
    const self = this
    ctx._lifes = ctx._lifes || {}
    ctx._lifes.didUpdate = ctx._lifes.didUpdate || []
    ctx._lifes.didUpdate.push(() => {
      relationInfo.linkChanged.call(self, node)
    })
  }
  if (typeof relationInfo.unlinked === 'function') {
    const self = this
    ctx._lifes = ctx._lifes || {}
    ctx._lifes.didUnmount = ctx._lifes.didUnmount || []
    ctx._lifes.didUnmount.push(() => {
      relationInfo.unlinked.call(self, node)
    })
  }
}
  
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

module.exports = {
  processTransformationComponent(_opts, options) {
    const fnApp = fnAppClass()
    _opts = Object.assign(_opts, options)
    const didMount = function() {
      // process relations, get relation ast
      const relationAst = createNode.call(this, null, null, null, null, true).mountedHandles
      relationAst.push(() => {
        handleRelations.call(this)
      })
    }
    fnApp.add('onInit', function() {
      this.onPageReady = function(p) {
        _opts.onPageReady && _opts.onPageReady.call(this, p)
      }
    })
        
    fnApp.add('didMount', didMount)
    fnApp.insert('onInit', function() {
      this.getRelationNodes = function() {
        return []
      }
      this.selectComponentApp = new SelectComponent(this)

      processRelations(this, Relations)
      this.selectComponentApp.connect()
    })
    fnApp.bind('onInit', _opts)
        

    fnApp.bind('didMount', _opts)
    fnApp.add('didUnmount', function() {
      if (this.$node) {
        this.$node.parent.removeChild(this.$node)
        const refId = this.$node.$relationNode.$id
        this.$antmove[refId]--
      }
    })
    fnApp.bind('didUnmount', options.didUnmount)
  },
}

