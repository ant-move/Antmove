const getUrl = function() {
  const pages = getCurrentPages()
  const url = pages[pages.length - 1].__route__
  const _arr = url.split('/')
  const _name = _arr[_arr.length - 1]
  tt.setStorageSync({
    key: '_pageMsg',
    data: {
      pageName: _name,
      pagePath: url,
    },
  })
  return url
}
module.exports = {
  processTransformationPage(_opts, options) {
    _opts = Object.assign(_opts, options)

    _opts.onLoad = function(res) {
      if (typeof options.data === 'function') {
        options.data = options.data()
      }

      getUrl()
      if (options.onResize) {
        // warnLife("There is no onResize life cycle", "onResize");
      }
      if (options.onLoad) {
        options.onLoad.call(this, res)
      }
    }

    _opts.onReady = function(param) {
      if (options.onReady) {
        options.onReady.call(this, param)
      }
    }
  },
}
