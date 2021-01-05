function processMethods(_opts = {}) {
  const methods = {}
  Object.keys(_opts.methods || {})
    .forEach((method) => {
      const fn = _opts.methods[method]
      methods[method] = function(...p) {
        if (p[0] && typeof p[0] === 'object' && p[0].timeStamp && p[0].target) {
          this._currentEvent = p[0]
        }
        return fn.apply(this, p)
      }
    })
  _opts.methods = methods
    
  return _opts
}

module.exports = processMethods
