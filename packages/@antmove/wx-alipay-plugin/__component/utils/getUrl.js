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
  return url
}

module.exports = getUrl
