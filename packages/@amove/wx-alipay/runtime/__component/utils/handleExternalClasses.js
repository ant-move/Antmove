function handleExternalClasses(opts = {}) {
  const arr = opts.externalClasses || []
  const _class = []
  arr.forEach((a) => {
    _class.push(_transform(a) || '')
  })

  opts.data = opts.data || {}

  opts.data.__classNames = _class
  opts.data.__classes = ''

  function _transform(str = '') {
    str = str.replace(/-(\w)/g, (...$) => {
      return $[1].toUpperCase()
    })

    return str || ''
  }
  return opts
}

module.exports = handleExternalClasses
