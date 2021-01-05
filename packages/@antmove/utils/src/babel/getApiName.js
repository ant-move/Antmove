module.exports = function(...p) {
    return {
      visitor: {
        MemberExpression(path) {
          if (path.node.object.type === 'Identifier' && path.node.object.name === p[1].entryName) {
            if (typeof p[1].cb === 'function') {
              p[1].cb(path.node.property.name)
            }
          }
        },
      },
    }
  }
  