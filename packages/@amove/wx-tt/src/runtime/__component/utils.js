const hasProxy = typeof Proxy !== 'undefined'
let _Proxy = function() {}

if (hasProxy) { _Proxy = Proxy }

module.exports = {

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
}
