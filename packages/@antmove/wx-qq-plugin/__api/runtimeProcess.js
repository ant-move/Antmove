const myApi = require('./my')
const utils = require('./utils.js')

const hasProxy = typeof Proxy !== 'undefined'
let _Proxy = function() { }
if (hasProxy) { _Proxy = Proxy }

/**
 * runtime error catch
 */
function warnApi(api) {
  const iscanIuse = qq.canIUse(api)
  if (!iscanIuse) {
    utils.warn(
      `头条小程序暂不支持${api}`,
      {
        apiName: api,
        errorType: 0,
        type: 'api',
      },
    )

    return function() { return false }
  }
}

module.exports = function(obj = {}) {
  const _obj = Object.assign({}, obj, myApi)
  if (!hasProxy) {
    Object.keys(myApi)
      .forEach((attr) => {
        Object.defineProperty(_obj, attr, {
          get() {
            let ret
            if (myApi[attr]) {
              ret = function(o = {}, args = '') {
                if (args) {
                  return myApi[attr].fn(o, args)
                }
                return myApi[attr].fn(o)
              }
            } else {
              const helpFn = warnApi(attr)
              ret = obj[attr] || helpFn
            }

            return ret
          },
        })
      })
    return _obj
  }
  return new _Proxy(obj, {
    get(target, attr) {
      let ret
      if (typeof attr === 'string' && myApi[attr]) {
        ret = function(obj = {}, args = '') {
          if (args) {
            return myApi[attr].fn(obj, args)
          }
          return myApi[attr].fn(obj)
        }
      } else {
        const helpFn = warnApi(attr)
        ret = target[attr] || helpFn
      }

      return ret
    },
  })
}
