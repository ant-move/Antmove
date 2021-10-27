const logUtils = require('./log.js')

const hasProxy = typeof Proxy !== 'undefined'
let _Proxy = function() {}

if (hasProxy) { _Proxy = Proxy }

module.exports = {
  ...logUtils,

  /**
     * defineGetter
     */
  defineGetter(obj = {}, descObj = {}, cb = () => {}) {
    if (!hasProxy) {
      return obj
    }
    return new _Proxy(obj, {
      get(target, attr) {
        if (typeof attr === 'string' && descObj[attr] && descObj[attr].type === 0) {
          cb && cb(target, attr)
        }

        return target[attr]
      },
    })
  },

  /**
     * sourceObj : 要操作对象
     * wxAttr: 微信key值
     * alipayAttr: 支付宝key值
     **/
  objectMap(sourceObj = {}, wxAttr, alipayAttr) {
    if (!hasProxy) {
      Object.defineProperty(sourceObj, wxAttr, {
        get() {
          return sourceObj[alipayAttr]
        },
      })
    
      return sourceObj
    }
    return new _Proxy(sourceObj, {
      get(target, attr) {
        if (attr === wxAttr) {
          return target[alipayAttr]
        }
      },
    })
  },
  // 类型转换
  changeType(str) {
    const hexA = new Array()
    if (typeof attr === 'string') {
      // 十六进制字符串转字节数组
      let pos = 0
      let len = str.length
      if (len % 2 !== 0) {
        return null
      }
      len /= 2
      for (let i = 0; i < len; i++) {
        const s = str.substr(pos, 2)
        const v = parseInt(s, 16)
        hexA.push(v)
        pos += 2
      }
      return hexA
    }
  },

  /** 
     * 处理参数
    */
  testparams(data, obj) {
    if (data.body.params && data.body.params.props) {
      Object.keys(data.body.params.props).forEach((key) => {
        if (obj[key] && data.body.params.props[key].type === 0) {
          console.warn(`百度小程序参数不支持${key}`)
        }
      })
    }
  },

  /**
     * 返回值处理
     */
  testreturnValue(data) {
    if (data.body.returnValue && data.body.returnValue.props) {
      Object.keys(data.body.returnValue.props).forEach((key) => {
        if (data.body.returnValue.props[key].type === 0) {
          console.warn(`返回值不支持${key}`)
        }
      })
    }
  },

  wgs84togcj02(lng, lat) {
    const ee = 0.00669342162296594323
    const a = 6378245.0

    lat = Number(lat)
    lng = Number(lng)

    if (out_of_china(lng, lat)) {
      return [lng, lat]
    }

    let dlat = transformlat(lng - 105.0, lat - 35.0)
    let dlng = transformlng(lng - 105.0, lat - 35.0)
    const radlat = lat / 180.0 * Math.PI
    let magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    const sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * Math.PI)
    dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * Math.PI)
    const mglat = lat + dlat
    const mglng = lng + dlng

    return [mglng, mglat]
  },

  ab2hex(buffer) {
    const hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      (bit) => {
        return (`00${bit.toString(16)}`).slice(-2)
      },
    )
    return hexArr.join('')
  },

  /**
     * change attr for object
     * replace attr by newAttr
     */
  changeObjAttr(obj = {}, attr, newAttr) {
    if (obj[attr] !== undefined) {
      obj[newAttr] = obj[attr]
      delete obj[attr]
    } else {
      console.warn(`${attr} attribute is missing!`)
    }

    return obj
  },
  fnAppClass,
}

function out_of_china(lng, lat) {
  // 纬度3.86~53.55,经度73.66~135.05
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

function transformlat(lng, lat) {
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * Math.PI) + 20.0 * Math.sin(2.0 * lng * Math.PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lat * Math.PI) + 40.0 * Math.sin(lat / 3.0 * Math.PI)) * 2.0 / 3.0
  ret += (160.0 * Math.sin(lat / 12.0 * Math.PI) + 320 * Math.sin(lat * Math.PI / 30.0)) * 2.0 / 3.0
  return ret
}

function transformlng(lng, lat) {
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += (20.0 * Math.sin(6.0 * lng * Math.PI) + 20.0 * Math.sin(2.0 * lng * Math.PI)) * 2.0 / 3.0
  ret += (20.0 * Math.sin(lng * Math.PI) + 40.0 * Math.sin(lng / 3.0 * Math.PI)) * 2.0 / 3.0
  ret += (150.0 * Math.sin(lng / 12.0 * Math.PI) + 300.0 * Math.sin(lng / 30.0 * Math.PI)) * 2.0 / 3.0
  return ret
}

function fnAppClass() {
  const fn = {
    $data: {},
    add(key, cb = () => {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.$data[key].push(cb)
      return fn
    },
    insert(key, cb = () => {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.$data[key].unshift(cb)
    },
    getFn(key) {
      return fn.$data[key]
    },
    bind(key, ctx = {}) {
      fn.$data[key] = fn.$data[key] || []
      fn.add(key, ctx[key])
      ctx[key] = function(...params) {
        const self = this
        fn.getFn(key)
          .forEach((cb) => {
            cb.apply(self, params)
          })
      }
    },
  }
  return fn
}
