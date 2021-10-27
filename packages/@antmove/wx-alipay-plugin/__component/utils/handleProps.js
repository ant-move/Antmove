function handleProps(opts = {}) {
  opts.props = opts.props || {}

  if (opts.relations) {
    opts.props.theRelations = opts.relations
  }
  if (!opts.properties) { return false }
  Object.keys(opts.properties)
    .forEach((prop) => {
      const val = opts.properties[prop]
      if (!val) {
        opts.props[prop] = val
        return false
      }

      if (typeof val === 'function') {
        const obj = {
          [Boolean]: false,
          [String]: '',
          [Array]: [],
          [Object]: {},
        }
        opts.props[prop] = obj[val]
        return false
      }

      if (val.hasOwnProperty('value')) {
        opts.props[prop] = val.value
      } else if (val.type !== 'observer') {
        const info = {
          [String]: '',
          [Number]: 0,
          [Object]: {},
          [null]: null,
        }

        opts.props[prop] = info[val.type]
      }
    })
}

module.exports = handleProps
