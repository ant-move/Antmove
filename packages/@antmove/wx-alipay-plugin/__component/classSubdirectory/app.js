const utils = require('../../api/utils')

const { warnLife } = utils
const { setIfWatch } = require('./utils')

const getUrl = function() {
  const pages = getCurrentPages()
  const url = pages[pages.length - 1].route
  const _arr = url.split('/')
  const _name = _arr[_arr.length - 1]
  my.setStorageSync({
    key: '_pageMsg',
    data: {
      pageName: _name,
      pagePath: url,
    },
  })
}

module.exports = {
  processTransformationApp(_opts, options) {
    _opts = Object.assign(_opts, options)
    _opts.onLaunch = function(res) {
      if (!my.canIUse('component2')) { console.warn('《建议用户开启 component2 模式，详情：IDE 中的 详情 > 项目配置 中，勾选 component2》') }
      my.removeStorageSync({
        key: 'logInfo',
      })
      my.removeStorageSync({
        key: '_pageMsg',
      })
      getUrl()
      let body = {}
      function pre(params = {}) {
        return utils.defineGetter(params, body.params, (obj, prop) => {
          warnLife(`onLaunch's return value is not support ${prop} attribute!`, `onLaunch/${prop}`)
        })
      }
      if (options.onLaunch) {
        body = {
          params: {
            scene: {
              type: 0,
              desc: 'missing',
            },
            shareTicket: {
              type: 0,
              desc: 'missing',
            },
          },
        }
        res = pre(res)

        if (typeof options.data === 'function') {
          options.data = options.data()
        }

        options.onLaunch.call(this, res)
      }
      if (options.onPageNotFound) {
        warnLife('There is no onPageNotFound life cycle', 'onPageNotFound')
      }
      if (options.onPageNotFound) {
        warnLife('There is no onPageNotFound life cycle', 'onPageNotFound')
      }
    }
    _opts.onShow = function(res) {
      setIfWatch(true)
      let body = {}
      function pre(params = {}) {
        return utils.defineGetter(params, body.params, (obj, prop) => {
          warnLife(`onShow's return value is not support ${prop} attribute!`, `onShow/${prop}`)
        })
      }
      if (options.onShow) {
        body = {
          params: {
            scene: {
              type: 0,
              desc: 'missing',
            },
            shareTicket: {
              type: 0,
              desc: 'missing',
            },
          },
        }
        res = pre(res)
        options.onShow.call(this, res)
      }
    }
    _opts.onHide = function() {
      setIfWatch(false)
      if (options.onHide) {
        warnLife('', 'app/onHide')
        options.onHide.call(this)
      }
    }
    if (options.onError) {
      _opts.onError = function(...args) {
        options.onError.apply(this, args)
      }
    }
  },
}
