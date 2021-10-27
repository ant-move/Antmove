let id = 0
const { connectNodes } = require('./utils')

let astCache = {}
function createAstData() {
  const RelationAst = {
    $refNodes: {},
    $nodes: {},
    $page: null,
    current: null,
    createArray: [],
    destoryArray: [],
    mountedHandles: [],
    componentNodes: {},
  }

  return RelationAst
}
function CreateNode(ctx) {
  this.$self = ctx
  ctx.$node = this
  this.$id = id++
  this.$children = []
}

CreateNode.prototype = {
  getRootNode() {
    const ctx = this.$self
    const cacheId = ctx.$page ? ctx.$page.$id : ctx.$id

    return astCache[cacheId]
  },
  setParent(parent) {
    this.$parent = parent
    parent.appendChild(this)
  },
  appendChildren() {
    this.$children
      .forEach((child) => {
        this.appendChild(child)
      })
  },
  destory() {
    const index = this.$relationNode.$index
    this.$parent.$children.splice(index, 1)
  },
  appendChild(child) {
    this.$children.push(child)
    child.$parent = this
  },
  removeChild(child) {
    this.$children = this.$children
      .filter((el) => {
        return el.$id !== child.$id
      })
  },
}


module.exports = function(node, cb = () => {}, relationNode, bool = false, _bool = false) {
  let RelationAst = {}
  const cacheId = this.$page ? this.$page.$id : this.$id
  if (_bool) {
    return astCache[cacheId]
  }
    
  if (bool || !astCache[cacheId]) {
    astCache[cacheId] = createAstData()
    return astCache[cacheId]
  }
  let _relationData = {}
  function initData(isComponent = false) {
    let _ctx = this
    _relationData = createAstData()
    if (isComponent) {
      _ctx = this.$page
    }
    _ctx.$antmove = _ctx.$antmove || {}
    _ctx.$antmove.relationData = _relationData
    _ctx.$antmove.astCache = astCache
  }
  if (!this.$page) {
    initData.call(this)
  } else {
    if (!this.$page.$antmove
            || !this.$page.$antmove.relationData) {
      initData.call(this, true)
    }
    _relationData = this.$page.$antmove.relationData
    astCache = this.$page.$antmove.astCache
  }

  RelationAst = astCache[cacheId]
  const wrapNode = new CreateNode(node)
  const route = relationNode.$route

  RelationAst.$page = wrapNode

  /**
       * component
       */
  wrapNode.$relationNode = relationNode
  RelationAst.$nodes[node.$id] = wrapNode
  RelationAst.$refNodes[route] = RelationAst.$refNodes[route] || {}
  const componentNodes = RelationAst.$refNodes[route]
  RelationAst.$refNodes[route][relationNode.$id] = RelationAst.$refNodes[route][relationNode.$id] || []
  componentNodes[relationNode.$id].push(wrapNode)

  if (RelationAst.isPageReady) {
    setTimeout(() => {
      connectNodes(wrapNode, RelationAst)
      RelationAst.mountedHandles
        .forEach((fn) => {
          if (wrapNode.$parent) {
            fn()
          } else {
            setTimeout(() => {
              fn()
            }, 0)
          }
        })
      RelationAst.mountedHandles = []
    }, 0)
  }
  cb && cb(RelationAst)
  return RelationAst
}
