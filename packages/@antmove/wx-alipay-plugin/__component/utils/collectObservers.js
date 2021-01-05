const {
  observersHandle,
} = require('./observerHandle')

function collectObservers(observersObj, options, param) {
  const self = this
  for (const key in options.observers) {
    if (options.observers.hasOwnProperty(key)) {
      const keyArr = key.split(',')
      const arr = []
      keyArr.forEach((its) => {
        its = its.trim()
        let attr = {}
        if (its.match(/\./)) {
          const _attr = its.split('.')
          attr = processChildAttr(self.data, _attr)
        } else {
          attr = self.data[its]
        }
        arr.push(attr)
      })
      keyArr.forEach((its) => {
        its = its.trim()
        observersObj[its] = Object.create(null)
        observersObj[its].fn = options.observers[key]
        observersObj[its].arr = arr
      })
    }
  }
  observersHandle(observersObj, param, self)
}

function processChildAttr(attr, arr) {
  let _ = attr
  arr.forEach((name) => {
    _ = _[name]
  })
  return _
}

module.exports = collectObservers
