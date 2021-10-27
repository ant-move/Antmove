const fs = require('fs-extra')

module.exports = function({
  types: t,
}, ...p) {
  return {
    visitor: {
      CallExpression(path) {
        const name = path.node.callee.name
        // 添加antmoveAction
        if (name === 'Page' || name === 'Component') {
          if (!path.node.arguments[0].properties) { return }
          const f = t.objectProperty(t.Identifier('antmoveAction'),
            t.functionExpression(
              null,
              [],
              t.blockStatement(
                [t.expressionStatement(t.stringLiteral('antmoveActionHandler'))],
              ),
            ))
          if (name === 'Page') {
            path.node.arguments[0].properties.push(
              f,
            )
          } else {
            path.node.arguments[0].properties
              .forEach((obj) => {
                if (obj.key && obj.key.name === 'methods') {
                  obj.value.properties.push(
                    f,
                  )
                }
              })
          }
        }
      },
    },
  }
}
