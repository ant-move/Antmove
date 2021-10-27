const equals = function(x, y) {
  if (x === y) {
    return true
  }

  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false
  }
  if (x.constructor !== y.constructor) {
    return false
  }

  for (const p in x) {
    if (x.hasOwnProperty(p)) {
      if (!y.hasOwnProperty(p)) {
        return false
      }

      if (x[p] === y[p]) {
        continue
      }

      if (typeof x[p] !== 'object') {
        return false
      }
      if (!equals(x[p], y[p])) {
        return false
      }
    }
  }

  for (const p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false
    }
  }
  return true
}

function observerHandle(observerObj, args, that) {
  Object.keys(observerObj).forEach((obs) => {
    if (typeof observerObj[obs] === 'function') {
      let props
      if (args.props) {
        props = args.props
      }
      if (args[0]) {
        props = args[0]
      }
      if (!props) {
        return
      }
      if (!equals(props[obs], that.props[obs])) {
        observerObj[obs].call(that, that.props[obs], props[obs])
      }
    }
  })
}

function observersHandle(observersObj, args, that) {
  let preData = null
  if (Array.isArray(args)) {
    preData = args[1]
  } else {
    preData = args.props
  }
  Object.keys(observersObj).forEach((obs) => {
    let left = {}
    let right = {}
    if (obs.match(/\./)) {
      const _dataArr = obs.split('.')
      left = processChildAttr(preData, _dataArr)
      right = processChildAttr(that.data, _dataArr)
    } else {
      left = preData[obs]
      right = that.data[obs]
    }
    const dif = equals(left, right)
    if (!dif) {
      observersObj[obs].fn.call(that, ...observersObj[obs].arr)
    }
  })
}

function processChildAttr(attr, arr) {
  let _ = attr
  arr.forEach((name) => {
    _ = _[name]
  })
  return _
}

module.exports = {
  observerHandle,
  observersHandle,
}
