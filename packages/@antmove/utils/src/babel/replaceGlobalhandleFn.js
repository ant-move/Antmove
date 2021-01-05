module.exports = function(...p) {
  return {
    visitor: {
      ExpressionStatement(path) {
        // 单独使用 global
        if (
          path.node.expression.type === 'Identifier'
          && path.node.expression.name === p[1].type
        ) {
          path.node.expression.name = p[1].newType
        }
      },
      MemberExpression(path) {
        // global.xxx
        if (
          path.node.object.type === 'Identifier'
          && path.node.object.name === p[1].type
        ) {
          path.node.object.name = p[1].newType
        }
      },
      AssignmentExpression(path) {
        // xx = global
        if (
          path.node.right.type === 'Identifier'
          && path.node.right.name === p[1].type
        ) {
          path.node.right.name = p[1].newType
        }
      },
    },
  }
}
