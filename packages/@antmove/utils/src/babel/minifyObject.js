module.exports = function(...p) {
  return {
    visitor: {
      ObjectExpression(path) {
        const opts = p[1].opts
        const props = path.node.properties
        path.node.properties = []
        props.forEach((el) => {
          const name = el.key.name || el.key.value
          if (name && opts[name]) {
            path.node.properties.push(el)
          }
        })
      },
    },
  }
}
