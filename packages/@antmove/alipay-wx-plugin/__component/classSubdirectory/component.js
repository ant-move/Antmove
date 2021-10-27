const data = require('./data.js')

function judgeType(data) {
  if (data === undefined) { return null }
  if (typeof data === 'number') {
    return Number
  }
  if (typeof data === 'string') {
    return String
  }
  if (typeof data === 'boolean') {
    return Boolean
  }
  if (typeof data === 'function') {
    return Function
  }
  if (data === null) {
    return null
  }
  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return Array
    }
    return Object
  }
}

function transformProps(props = {}) {
  let properties = {}
  const temp = Object.assign({}, props)
  for (const i in temp) {
    const type = judgeType(temp[i])
    if (type !== 'Function') {
      properties = Object.assign(properties, {
        [i]: {
          type,
          value: temp[i],
        },
      })
    }
  }
  return properties
}

function processCustomEvent(opts = {}) {
  const props = opts.props || {}
  const self = this
  const _props = Object.assign({}, props)
  for (const i in _props) {
    if (i.match(/on[A-Z]\w*/)) {
      let eventName = i.substring(2)
      eventName = eventName.toLowerCase()
      this.props[i] = function(...params) {
        self.triggerEvent(eventName, { ...params }, {})
      }
    }
  }
}

function makeLifes(_opts, options) {
  if (options.deriveDataFromProps) {
    console.warn('生命周期 deriveDataFromProps 不支持更新前触发情景')
  }
  const transformLife = [
    {
      original: 'onInit',
      target: 'attached',
    },
    {
      original: 'didUnmount',
      target: 'detached',
    },
    {
      original: 'didMount',
      target: 'ready',
    }
  ]
  transformLife.forEach((obj) => {
    const oname = options[obj.original]
    const tname = options[obj.target]
    if (obj.target === 'attached') {
      _opts[obj.target] = function() {
        this.props = this.data
        processCustomEvent.call(this, options)
        _opts.props = Object.assign({}, this.props)
        oname && oname.call(this)
        tname && tname.call(this)
      }
    } else {
      _opts[obj.target] = function() {
        if (obj.target === 'ready') {
          this.$id = this.__wxExparserNodeId__
          this.is = ''
          this.$page = data.$page
        }
        oname && oname.call(this)
        tname && tname.call(this)
        if (_opts.didUpdate) {
          if (_opts.behaviorUpdate) {
            Object.values(_opts.behaviorUpdate).forEach((item) => {
              item.call(this, _opts.props, _opts.data)
            })
          }
          _opts.didUpdate.call(this, _opts.props, _opts.data)
        }
      }
    }
    delete options[obj.original]
    delete options[obj.target]
  })
}

function makeMixin(_opts) {
  if (_opts.mixins) {
    const behavours = []
    const arr = ['onInit', 'didMount', 'didUpdate', 'didUnmount', 'data', 'props', 'methods']
    const behavourMade = (mixins = []) => {
      mixins.forEach((item) => {
        const behavour = {}
        if (item.mixins) {
          behavourMade(item.mixins)
        }
        if (item.deriveDataFromProps) {
          console.warn('生命周期 deriveDataFromProps 不支持更新前触发情景')
        }
        Object.keys(item).forEach((key, index) => {
          if (arr.includes(key)) {
            if (key === 'props') {
              const props = transformProps(item.props)
              item.properties = item.properties || {}
              behavour.properties = Object.assign(item.properties, props)
            } else if (key === 'didUpdate') {
              _opts.behaviorUpdate = {}
              const funObj = { [key + index]: item[key] }
              _opts.behaviorUpdate = Object.assign(_opts.behaviorUpdate, funObj)
            } else {
              behavour[key] = item[key]
            }
          }
        })
        behavours.push(Behavior(behavour))
      })
    }
    behavourMade(_opts.mixins)
    _opts.behaviors = behavours
    delete _opts.mixins
  }
}

function makeEventObj(_opts, options) {
  if (options.methods) {
    const methods = options.methods
    const newMethods = {}
    Object.keys(methods).forEach((key) => {
      newMethods[key] = function(...res) {
        if (res[0] && res[0].target) {
          res[0].target.dataset = { ...res[0].currentTarget.dataset } || {}
          return methods[key].call(this, res[0])
        }
        return methods[key].apply(this, res)
      }
    })
    _opts.methods = newMethods
  }
}

function makeProperties(opts) {
  opts.properties = opts.properties || {}
  const props = transformProps(opts.props)
  opts.properties = Object.assign(opts.properties, props)
}

function addObserver(obj) {
  if (!obj.didUpdate) {
    return false
  }
  obj.properties && Object.keys(obj.properties).map((key) => {
    const observer = function() {
      const props = JSON.parse(JSON.stringify(obj.props))
      if (obj.behaviorUpdate) {
        Object.values(obj.behaviorUpdate).forEach((item) => {
          item.call(this, props, this.data)
        })
      }
      obj.didUpdate.call(this, props, this.data)
    }
    if (obj.properties[key]) {
      obj.properties[key].observer = observer
    }
  })
}

module.exports = {
  processTransformationComponent(_opts, options) {
    makeLifes(_opts, options)
    _opts = Object.assign(_opts, options)
    makeEventObj(_opts, options)
    makeMixin.call(_opts, _opts)
    makeProperties(_opts)
    addObserver(_opts)
    return _opts
  },
}
