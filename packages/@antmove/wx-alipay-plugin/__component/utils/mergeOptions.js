function mergeOptions(parent, child) {
  Object.keys(parent)
    .forEach((key) => {
      const val = parent[key]
      const _val = child[key]
  
      if (Array.isArray(_val)) { return false }
      if (child[key] === undefined) { child[key] = parent[key] }

      if (typeof val === 'object' && typeof _val === 'object') {
        child[key] = Object.assign({}, _val, val)
      } else if (typeof val === 'function' && typeof _val === 'function') {
        child[key] = function(...p) {
          val.apply(this, p)
          _val.apply(this, p)
        }
      }
    })
}

module.exports = mergeOptions
