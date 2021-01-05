const utils = require('../../api/utils')

const { warnLife } = utils
const config = require('../../api/config')
const Relations = require('../../api/relations')
const {
  watchShakes,
  getUrl,
} = require('../utils')
const createNode = require('./relation')
const processRelationHandle = require('./processRelation')
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
      if (options.onResize) {
        warnLife('There is no onResize life cycle', 'onResize')
      }
      if (options.onLoad) {
        options.onLoad.call(this, res)
      }
    }

    _opts.onReady = function(param) {
      /**
             * for child ref
             * 
             * 当父级组件挂载后再执行父级组件传递下来的属性回调函数
             */
      this.setData({
        isMounted: true,
      })

      if (options.onReady) {
        options.onReady.call(this, param)
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
  },
}


function processRelationNodes(ast = {}) {
  setTimeout(() => {
    ast.mountedHandles
      .forEach((fn) => {
        fn()
      })
    ast.mountedHandles = []
  }, 500)
}


function processRelations(ctx, relationInfo = {}) {
  const relationApp = {
    fns: [],
    relationFns: [],
  }
  let route = ctx.route
  route = route.replace(/\/node_modules\/[a-z-]+\/[a-z-]+/, '')

  if (route[0] !== '/') { route = `/${route}` }
    
  const info = relationInfo[route] || relationInfo[route.substring(1)]
  if (info) {
    processRelationHandle(info, (node) => {
      const id = node.$id
      ctx.$antmove = ctx.$antmove || {}
      ctx.$antmove.__refFns = ctx.$antmove.__refFns || {}
      ctx.$antmove.__refFns[node.$id] = false
      if (id === 'saveChildRef0') {
        ctx.$antmove.__refFns[id] = true
        ctx[id] = function() {
          node.$index = 0
          node.$route = route
          this.$id = this.$id || this.$viewId
          createNode.call(this, this, null, node)
          relationApp.fns.forEach((fn) => {
            fn.call(this)
          })

                
          const _arr = []
          relationApp.relationFns.forEach((fn) => {
            if (!fn.call(this)) {
              _arr.push(fn)
            }
          })

          relationApp.relationFns = _arr

          const ast = this.$rootNode.getRootNode()
          processRelationNodes(ast)
          ast.isPageReady = true
        }
        return false
      }
      ctx[id] = function(ref) {
        if (!ref) { return false }
        if (!ctx.$antmove.__refFns[ref.$id]) {
          ctx.$antmove.__refFns[ref.$id] = true

          relationApp.fns.unshift(
            function() {
              const _ctx = this
              _ctx.selectComponentApp.preProcesscomponents(ref)
              _ctx.$antmove = _ctx.$antmove || {}
              if (_ctx.$antmove[id] === undefined) {
                _ctx.$antmove[id] = 0
              } else {
                _ctx.$antmove[id] += 1
              }
              node.$index = _ctx.$antmove[id]
              node.$route = route
              createNode.call(_ctx, ref, null, node)
            },
          )

          relationApp.relationFns.push(() => {
            return ref.handleRelations && ref.handleRelations()
          })
        }
        if (ctx.saveChildRef0) {
          ctx.saveChildRef0()
        }
      }
    })
  } else {
    console.warn('Missing nodes relation of ', route)
  }
}
