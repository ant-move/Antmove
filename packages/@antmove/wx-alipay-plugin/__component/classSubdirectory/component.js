const utils = require('../../api/utils')

const { warnLife, fnAppClass } = utils
const Relations = require('../../api/relations')
const config = require('../../api/config.js')
const {
  createSelectorQuery,
  createIntersectionObserver,
} = require('../../api/my')
const {
  getUrl,
  updateData,
  processRelationPath,
  _relationNode,
  findRelationNode,
  compatibleLifetime,
  collectObserver,
  collectObservers,
  processTriggerEvent,
  observerHandle,
  handleProps,
  handleExternalClasses,
  handleAfterInit,
  mergeOptions,
  copy,
  nextUid,
} = require('../utils')
const SelectComponent = require('./selectComponent')
const processRelationHandle = require('./processRelation')
const createNode = require('./relation')
const { antmoveAction } = require('./utils')

function getInfo(key, obj) {
  let val = {}
  Object.keys(obj).forEach((item) => {
    if (key === item || key.indexOf(item) !== -1) {
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

function handleRelations() {
  if (this.props.theRelations) {
    Object.keys(this.props.theRelations).forEach((relation) => {
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

function processObservers(observersObj, options, param) {
  if (options.observers) {
    collectObservers.call(this, observersObj, options, param)
  }
}

function processInit() {
  getUrl()
}

function processIntersectionObserver(context) {
  context.createIntersectionObserver = function(...p) {
    return createIntersectionObserver.fn(...p)
  }
}

/**
 *
 * @param {*} behavior
 * @param {*} _opts
 * @param {*} mixins
 */

module.exports = {
  processTransformationComponent(_opts, options) {
    const fnApp = fnAppClass()
    options.properties = options.properties || {}
    const behaviors = options.behaviors || []
    const mixins = options.mixins || []
    const _export = options.export || ''
    delete options.behaviors
    delete options.mixins
    const retMixins = {}

    _opts.observerObj = {}
    _opts.observersObj = {}
    _opts.behaviorsArr = []

    processBehavior(retMixins, behaviors, _opts.behaviorsArr)
    processBehavior(retMixins, mixins, _opts.behaviorsArr)
    mergeOptions(retMixins, options)
    processBehaviorId(behaviors)
    processBehaviorId(mixins)

    Object.keys(options).forEach((key) => {
      _opts[key] = options[key]
    })

    handleProps(_opts)
    handleExternalClasses(_opts)

    const _life = compatibleLifetime(options)
    if (options.properties) {
      collectObserver(_opts.observerObj, options.properties, options)
    }

    if (!_opts.methods) {
      _opts.methods = {}
    }

    _opts.methods.antmoveAction = antmoveAction

    /**
     * 处理组件所在的页面尺寸变化时执行
     */
    if (_opts.pageLifetimes && _opts.pageLifetimes.resize) {
      _opts.methods.antmovePageLifetimes = function(e) {
        return _opts.pageLifetimes.resize(e)
      }
    }

    const didMount = function() {
      _life.error && warnLife('There is no error life cycle', 'error')
      _life.move && warnLife('There is no moved life cycle', 'moved')
      _life.pageLifetimes
        && warnLife(
          'There is no page life cycle where the component resides,including(show,hide,resize)',
          'pageLifetimes',
        )
      this.props.genericSelectable
        && warnLife('generic:selectable is Unsupported', 'generic')

      // process relations, get relation ast
      const relationAst = createNode.call(this, null, null, null, null, true)
        .mountedHandles
      relationAst.push(() => {
        handleRelations.call(this)
      })
    }
    fnApp.add('onInit', function() {
      this.onPageReady = function(p) {
        _opts.onPageReady && _opts.onPageReady.call(this, p)
      }
    })

    fnApp.add('deriveDataFromProps', () => {})

    fnApp.add('didMount', didMount)
    if (_opts.lifetimes && _opts.lifetimes.created) {
      fnApp.add('onInit', _opts.lifetimes.created)
    } else {
      fnApp.add('onInit', _opts.created)
    }
    fnApp.insert('onInit', function() {
      this.__wxExparserNodeId__ = nextUid()
      processIntersectionObserver(this)
      this.createSelectorQuery = function() {
        if (config.env !== 'production') {
          console.warn(
            '支付宝createSelectorQuery不支持限定选择器的选择范围，如使用，请保证对应选择器使用的唯一性',
          )
        }
        return createSelectorQuery.fn()
      }
      for (const method in this) {
        if (typeof this[method] === 'function') {
          this[method] = this[method].bind(this)
        }
      }
      this.getRelationNodes = function() {
        return []
      }
      processComponentExport(_export, behaviors, this)
      this.selectComponentApp = new SelectComponent(this)

      this.properties = {
        ..._opts.properties,
      }
      processInit.call(this, _opts, options, _life, fnApp)
      testBehaviors(behaviors)
      updateData.call(this)
      processRelations(this, Relations)
      this.selectComponentApp.connect()
      this.selectOwnerComponent = processSelectOwnerComponent.bind(this)
      this.getPageId = processGetPageId.bind(this)
      addAntmoveData.call(this)
      if (typeof this.triggerEvent !== 'function') {
        processTriggerEvent.call(this)
      }
      processObservers.call(this, _opts.observersObj, options, _opts)
      observerHandle(_opts.observerObj, _opts, this, true)
    })
    fnApp.bind('onInit', _opts)
    if (_opts.lifetimes && _opts.lifetimes.attached) {
      fnApp.add('didMount', _opts.lifetimes.attached)
    } else {
      fnApp.add('didMount', _opts.attached)
    }
    if (_opts.pageLifetimes && _opts.pageLifetimes.show) {
      fnApp.add('didMount', _opts.pageLifetimes.show)
    }

    fnApp.add('didMount', _opts.ready || (_opts.lifetimes && _opts.lifetimes.ready))

    const didUpdate = function(...param) {
      updateData.call(this, param)
      processObservers.call(
        this,
        _opts.observersObj,
        options,
        this.$antmove._data,
      )
      observerHandle(_opts.observerObj, this.$antmove._data, this)
      addAntmoveData.call(this)
    }
    fnApp.add('didUpdate', didUpdate)
    fnApp.add('didUpdate', function() {
      handleAfterInit.call(this)
    })

    fnApp.bind('deriveDataFromProps', _opts)
    fnApp.bind('didUpdate', _opts)
    fnApp.bind('didMount', _opts)
    if (_opts.lifetimes && _opts.lifetimes.detached) {
      fnApp.add('didUnmount', _opts.lifetimes.detached)
    } else {
      fnApp.add('didUnmount', options.detached)
    }
    fnApp.add('didUnmount', function() {
      // todo: 暂时这样处理使其不报错
      if (this.$node && this.$node.$parent) {
        this.$node.$parent.removeChild(this.$node)
        const refId = this.$node.$relationNode.$id
        this.$antmove[refId]--
      }
    })
    fnApp.bind('didUnmount', _opts)
  },
}

function addAntmoveData() {
  const _data = [{}, {}]
  const ctx = this
  const _props = {}
  for (const i in ctx.properties) {
    if (ctx.properties.hasOwnProperty(i)) {
      _props[i] = ctx.data[i]
    }
  }
  _data[0] = copy(_props)
  _data[1] = copy(ctx.data)
  this.$antmove = this.$antmove || {}
  this.$antmove._data = _data
}

/**
 * selectOwnerComponent
 */
function processSelectOwnerComponent() {
  const node = this.$node
  if (node && node.$parent && node.$parent.$self) {
    return node.$parent.$self
  }
  return {}
}

/**
 * getPageId
 */

function processGetPageId() {
  if (this.$page) {
    return `pageId:${this.$page.$id}`
  }
  return 'pageId: undefined'
}

/**
 * behavior
 */
function processBehavior(_opts = {}, opts, $behaviors) {
  const self = this
  if (Array.isArray(opts)) {
    opts.forEach((item) => {
      if (
        typeof item === 'object'
        && ($behaviors.indexOf(item.$id) === -1 || item.$id === undefined)
      ) {
        $behaviors.push(item.$id)
        _process.call(self, _opts, item)
      }
    })
  } else if (typeof opts === 'object' && $behaviors.indexOf(opts.$id) === -1) {
    $behaviors.push(opts.$id)
    _process.call(self, _opts, opts)
  }
  function _process(__opts = {}, opt = {}) {
    if (opt.behaviors) {
      processBehavior.call(self, __opts, opt.behaviors, $behaviors)
      delete opt.behaviors
    }

    if (opt.mixins) {
      processBehavior(__opts, opt.mixins, $behaviors)
      delete opt.mixins
    }
    mergeOptions(opt, __opts)
  }
}

function processBehaviorId(behavior) {
  if (Array.isArray(behavior)) {
    behavior.forEach((item) => {
      if (typeof item === 'object' && item.$id) {
        delete item.$id
      }
    })
  } else if (typeof behavior === 'object' && behavior.$id) {
    delete behavior.$id
  }
}

function processComponentExport(_export, behaviors, self) {
  if (typeof _export !== 'function') {
    return
  }
  if (Array.isArray(behaviors)) {
    behaviors.forEach((bhv) => {
      if (bhv === 'wx://component-export') {
        self._this = _export()
      }
    })
  } else if (behaviors === 'wx://component-export') {
    self._this = _export()
  }
}

function testBehaviors(behaviors) {
  if (Array.isArray(behaviors)) {
    behaviors.forEach((bhv) => {
      if (bhv === 'wx://form-field') {
        warnLife(
          'Wx://form-field in built-in behavior is not supported',
          'behavior/form-field',
        )
      }
    })
  } else if (behaviors === 'wx://form-field') {
    warnLife(
      'Wx://form-field in built-in behavior is not supported',
      'behavior/form-field',
    )
  }
}
