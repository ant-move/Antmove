module.exports = function(...p) {
  return {
    visitor: {
      ObjectExpression(path) {
        const t = p[0].types
        const opts = p[1] && p[1].opts
        const props = path.node.properties

        /**
                 * onGetUserInfo(e) {}
                 * onGetUserInfo(e) { e = process(e)}
                 */
        props.forEach((el) => {
          if (el.value && el.value.type === 'FunctionExpression' && el.value.params[0]) {
            console.log(el)
            if (opts.bindFnName === el.key.name) {
              console.log(opts, el.value.params[0])
              const expr = t.expressionStatement(
                t.callExpression(
                  t.memberExpression(
                    t.Identifier('_my'),
                    t.Identifier(opts.wrapFnName),
                  ),
                  [
                    el.value.params[0],
                    t.functionExpression(null, el.value.params, el.value.body)
                  ],
                ),
              )
                            
              el.value.body = t.blockStatement([expr])
            }
          }
        })
      },
    },
  }
}
