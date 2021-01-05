
const config = require('../../api/config')
const Relations = require('../../api/relations')
const {
  watchShakes,
  getUrl,
} = require('../utils')
const createNode = require('./relation')
const processRelationHandle = require('./processRelation')
const { connectNodes, antmoveAction } = require('./utils')
const SelectComponent = require('./selectComponent')


module.exports = {
  processTransformationPage(_opts, options) {
    _opts = Object.assign(_opts, options)

    _opts.onLoad = function(res) {
      this.selectComponentApp = new SelectComponent(this)
      this.selectComponentApp.connect()
      // 初始化节点树
      createNode.call(this, null, null, null, true)
      processRelations(this, Relations)
      if (typeof options.data === 'function') {
        options.data = options.data()
      }

      getUrl()
      this.createSelectorQuery = function() {
        return my.createSelectorQuery()
      }
      if (options.onLoad) {
        options.onLoad.call(this, res)
      }
    }

    _opts.onReady = function(param) {
      let ast = null
      if (this.$node) {
        ast = this.$node.getRootNode()
      }
      ast && processRelationNodes(ast)
      if (options.onReady) {
        options.onReady.call(this, param)
      }
      if (ast) {
        ast.isPageReady = true
      }
    }
    _opts.onShow = function(param) {
      if (config.env === 'development' && config.useRuntimeLog) {
        watchShakes()
      }
      if (options.onShow) {
        options.onShow.call(this, param)
      }
    }
    if (options.onResize) {
      _opts.events = options.events || {}
      _opts.events.onResize = function(e) {
        const { size } = e
        const { windowHeight, windowWidth } = size
        let deviceOrientation = 'landscape'
        let resizeObj = {}
        if (windowHeight > windowWidth) {
          deviceOrientation = 'portrait'
        }

        const { screenWidth, screenHeight } = my.getSystemInfoSync()
        size.screenWidth = screenWidth
        size.screenHeight = screenHeight

        resizeObj = {
          deviceOrientation,
          size,
        }

        /**
                * 组件所在的页面尺寸变化时执行
                */
        if (this.$node && Array.isArray(this.$node.$children)) {
          this.$node.$children.forEach((c) => {
            if (c.$self.antmovePageLifetimes) {
              c.$self.antmovePageLifetimes(e = resizeObj)
            }
          })
        }

        options.onResize(e = resizeObj)
      }
    }

    _opts.antmoveAction = antmoveAction
  },
}


function processRelationNodes(ast = {}) {
  const $nodes = ast.$nodes

  /**
     * componentNodes onPageReady
     */
  Object.keys($nodes)
    .forEach((item) => {
      const node = $nodes[item]
      connectNodes(node, ast)

      if (node.$self && typeof node.$self.onPageReady === 'function') {
        node.$self.onPageReady()
      }
    })

  ast.mountedHandles
    .forEach((fn) => {
      fn()
    })
  ast.mountedHandles = []
}


function processRelations(ctx, relationInfo = {}) {
  let route = ctx.route
  route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '')

  if (route[0] !== '/') { route = `/${route}` }

  const info = relationInfo[route] || relationInfo[route.substring(1)]
  if (info) {
    processRelationHandle(info, (node) => {
      const id = node.$id
      if (id === 'saveChildRef0') {
        ctx[id] = function() {}
        node.$index = 0
        node.$route = route
        createNode.call(ctx, ctx, null, node)
        return false
      }
      ctx[id] = function(ref) {
        if (!ref) { return false }
        ctx.$antmove = ctx.$antmove || {}
        if (ctx.$antmove[id] === undefined) {
          ctx.$antmove[id] = 0
        } else {
          ctx.$antmove[id] += 1
        }
        ctx.selectComponentApp.preProcesscomponents(ref)
        node.$index = ctx.$antmove[id]
        node.$route = route
        createNode.call(ctx, ref, null, node)
      }
    })
  } else {
    console.warn('Missing nodes relation of ', route)
  }
}
