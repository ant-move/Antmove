const utils = require('../../api/utils')

const { warnLife } = utils
const data = require('./data.js')

const getUrl = function() {
  const pages = getCurrentPages()
  const url = pages[pages.length - 1].route
  const _arr = url.split('/')
  const _name = _arr[_arr.length - 1]
  wx.setStorageSync(
    '_pageMsg',
    {
      pageName: _name,
      pagePath: url,
    },
  )
  return url
}

const makeEventObj = function(_opts, options) {
  const lifeArr = ['data', 'events', 'onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onShareAppMessage', 'onTitleClick', 'onOptionMenuClick', 'onPopMenuClick', 'onPullDownRefresh', 'onPullIntercept', 'onTabItemTap', 'onPageScroll', 'onReachBottom']
  Object.keys(options).map((key) => {
    if (lifeArr.indexOf(key) === -1) {
      const keyFn = options[key]
      options[key] = function(...res) {
        if (res[0] && res[0].target) {
          res[0].target.dataset = { ...res[0].currentTarget.dataset } || {}
          return keyFn.call(this, res[0])
        }
        return keyFn.apply(this, res)
      }
    }
  })
}
const makeLife = function(_opts, options) {
  _opts.onLoad = function(res) {
    getUrl()
    data.$page = this
    if (options.events) {
      warnLife('There is no events life cycle', 'events')
    }
    if (options.onTitleClick) {
      warnLife('There is no onTitleClick life cycle', 'onTitleClick')
    }
    if (options.onOptionMenuClick) {
      warnLife('There is no onOptionMenuClick life cycle', 'onOptionMenuClick')
    }
    if (options.onPopMenuClick) {
      warnLife('There is no onPopMenuClick life cycle', 'onPopMenuClick')
    }
    if (options.onPullIntercept) {
      warnLife('There is no onPullIntercept life cycle', 'onPullIntercept')
    }
    if (options.onLoad) {
      options.onLoad.call(this, res)
    }
  }
}

module.exports = {
  processTransformationPage(_opts, options) {
    makeEventObj(_opts, options)
    _opts = Object.assign(_opts, options)
    makeLife(_opts, options)
    return _opts
  },
}
