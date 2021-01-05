const myApi = require('./my')
const utils = require('./utils.js')
const globalVar = require('./config').global

const hasProxy = typeof Proxy !== 'undefined'
let _Proxy = function() { }
if (hasProxy) { _Proxy = Proxy }

let myProxy = null

/**
 * runtime error catch
 */
function warnApi(api) {
  const iscanIuse = globalVar.canIUse(api)
  // my下有此方法，但目前不可用
  if (!iscanIuse || api === 'getFileSystemManager') {
    utils.warn(
      `支付宝暂不支持${api}`,
      {
        apiName: api,
        errorType: 0,
        type: 'api',
      },
    )

    return function() {
      console.error(`支付宝暂不支持${api}`)
    }
  }
}

module.exports = function(obj = {}) {
  if (myProxy) {
    return myProxy
  }

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
  myProxy = new _Proxy(_obj, {
    get(target, attr) {
      let ret
      if (typeof attr === 'string' && myApi[attr]) {
        if (typeof myApi[attr].fn === 'function') {
          ret = function(opts = {}, args = '') {
            if (args) {
              return myApi[attr].fn(opts, args)
            }
            return myApi[attr].fn(opts)
          }
        } else {
          ret = myApi[attr]
        }
      } else {
        const helpFn = warnApi(attr)
        ret = target[attr] || helpFn
      }

      return ret
    },
  })

  return myProxy
}

/**
 * for bindgetuserinfo open-type of button
 */
myApi.getUserInfoWrap = {
  fn(e = {}, fn) {
    globalVar.getAuthCode({
      scopes: 'auth_user',
      success: () => {
        globalVar.getAuthUserInfo({
          success(userInfo) {
            fn && fn({
              ...e,
              detail: {
                userInfo,
              },
            })
          },
        })
      },
      fail(res) {
        fn && fn({
          ...e,
          detail: res,
        })
      },
    })
  },
}

/**
 * for bindgetphonenumber open-type of button
 */
myApi.getPhoneNumberWrap = {
  fn(e = {}, fn) {
    globalVar.getPhoneNumber({
      success: (res) => {
        const encryptedData = res.response
        e = {
          ...e,
          detail: encryptedData,
          res,
        }
        fn && fn(e)
      },
      fail: (res) => {
        e = {
          ...e,
          detail: {},
          res,
        }
        fn && fn(e)
      },
    })
  },
}
