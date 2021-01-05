module.exports = function(...p) {
  return {
    visitor: {
      CallExpression(path) {
        if (path.node.callee.property === undefined) {
          return
        }
        const name = path.node.callee.property.name
        if (p[1].name === name) {
          path.node.callee.property.name = p[1].newName
        }
      },
    },
  }
}
