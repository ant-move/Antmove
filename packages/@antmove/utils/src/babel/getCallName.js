module.exports = function(...p) {
  return {
    visitor: {
      CallExpression(path) {
        const cbObj = {
          App: true,
          Page: true,
          Component: true,
        }
        const name = path.node.callee.name
        if (typeof p[1] === 'object') {
          p[1].constructName = p[1].constructName || {}
        }
        if (cbObj[name]) {
          p[1].name = name
          p[1].constructName = p[1].constructName || {}
          p[1].constructName[name] = name
        }
      },
    },
  }
}

