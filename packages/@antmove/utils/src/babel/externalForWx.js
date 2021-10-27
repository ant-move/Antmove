module.exports = function(...p) {
  return {
    visitor: {
      CallExpression(path) {
        const name = path.node.callee.name
        if (name !== 'Component') { return false }
                
        if (path.node.arguments[0] && path.node.arguments[0].properties) {
          path.node.arguments[0].properties
            .forEach((obj) => {
              if (obj.key.name === 'externalClasses') {
                let arr = []
                if (obj.value && obj.value.elements) {
                  arr = obj.value.elements
                    .map((val) => {
                      return val.value
                    })
                }
                p[1].externalClasses = arr
              }
            })
        }
      },
    },
  }
}
