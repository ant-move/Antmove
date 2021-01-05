const toString = Object.prototype.toString
function __type(x) {
  // fix typeof null = object
  if (x === null) {
    return 'null'
  }

  const t = typeof x
  if (t !== 'object') {
    return t
  }

  let cls
  let clsLow
  try {
    cls = toString.call(x).slice(8, -1)
    clsLow = cls.toLowerCase()
  } catch (e) {
    // ie下的 activex对象
    return 'object'
  }

  if (clsLow !== 'object') {
    return clsLow
  }

  if (x.constructor === Object) {
    return clsLow
  }

  // Object.create(null)
  try {
    /* eslint-disable no-proto */
    if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
      /* eslint-enable no-proto */
      return 'object'
    }
  } catch (e) {
    // 
  }

  try {
    const cname = x.constructor.name

    if (typeof cname === 'string') {
      return cname
    }
  } catch (e) {
    // 无constructor
  }

  // function A() {}; A.prototype.constructor = null; new A
  return 'unknown'
}
function SimpleWeakmap() {
  this.cacheArray = []
}
const UNIQUE_KEY = `com.yanhaijing.jsmini.clone${(new Date()).getTime()}`
SimpleWeakmap.prototype.set = function(key, value) {
  this.cacheArray.push(key)
  key[UNIQUE_KEY] = value
}
SimpleWeakmap.prototype.get = function(key) {
  return key[UNIQUE_KEY]
}
SimpleWeakmap.prototype.clear = function() {
  for (let i = 0; i < this.cacheArray.length; i++) {
    const key = this.cacheArray[i]
    delete key[UNIQUE_KEY]
  }
  this.cacheArray.length = 0
}
function getWeakMap() {
  let result
  if (typeof WeakMap !== 'undefined' && __type(WeakMap) === 'function') {
    result = new WeakMap()
    if (__type(result) === 'weakmap') {
      return result
    }
  }
  result = new SimpleWeakmap()

  return result
}
function isClone(x) {
  const t = __type(x)
  return t === 'object' || t === 'array'
}
function hasOwnProp(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
function copy(x) {
  const uniqueData = getWeakMap()

  const t = __type(x)

  let root = x

  if (t === 'array') {
    root = []
  } else if (t === 'object') {
    root = {}
  }

  // 循环数组
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    }
  ]

  while (loopList.length) {
    // 深度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const source = node.data
    const tt = __type(source)

    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let target = parent
    if (typeof key !== 'undefined') {
      parent[key] = tt === 'array' ? [] : {}
      target = parent[key]
    }

    // 复杂数据需要缓存操作
    if (isClone(source)) {
      // 命中缓存，直接返回缓存数据
      const uniqueTarget = uniqueData.get(source)
      if (uniqueTarget) {
        parent[key] = uniqueTarget
        continue // 中断本次循环
      }

      // 未命中缓存，保存到缓存
      uniqueData.set(source, target)
    }

    if (tt === 'array') {
      for (let i = 0; i < source.length; i++) {
        if (isClone(source[i])) {
          // 下一次循环
          loopList.push({
            parent: target,
            key: i,
            data: source[i],
          })
        } else {
          target[i] = source[i]
        }
      }
    } else if (tt === 'object') {
      for (const k in source) {
        if (hasOwnProp(source, k)) {
          if (k === UNIQUE_KEY) { continue }
          if (isClone(source[k])) {
            // 下一次循环
            loopList.push({
              parent: target,
              key: k,
              data: source[k],
            })
          } else {
            target[k] = source[k]
          }
        }
      }
    }
  }
    

  uniqueData.clear && uniqueData.clear()
    
  return root
}

module.exports = {
  copy,
}
