module.exports = {
  AppShare(node) {
    const { opts } = node
    const code = this.$node.content
    this.$node.content = babel.transform(code, {
      plugins: [
        function(...p) {
          return {
            visitor: {
              ObjectExpression(path) {
                const base = path.node.properties[0]
                if (
                  base
                                    && base.key
                                    && base.key.name === 'onShareAppMessage'
                                    && base.body
                                    && base.body.body
                                    && base.body.body[0]
                ) {
                  const share
                                        = base.body.body[0].argument.properties
                  share.forEach((element) => {
                    if (
                      element.key.name === 'path'
                                            && element.value.value.charAt(0)
                                                === '/'
                    ) {
                      element.value.value = element.value.value.substring(
                        1,
                      )
                    }
                  })
                }
              },
            },
          }
        },
        opts
      ],
    }).code
  },
}
