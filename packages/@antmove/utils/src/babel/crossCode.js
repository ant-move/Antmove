module.exports = function(...p) {
  return {
    visitor: {
      IfStatement(path) {
        let right = path.node.test.right
        let left = path.node.test.left
        let temp
        const dist = p[1].dist
        if (left && left.type === 'StringLiteral') {
          temp = right
          right = left
          left = temp
        }
        if (!(right && left && left.object)) {
          return false
        }

        const name = `${left.object.name}.${left.property.name}`
        const value = right.value
        const typeOutput = ['wx', 'alipay', 'tt', 'qq', 'swan', 'amap', 'quick']
        if (
          name === 'wx.__target__'
          || name === '_my.__target__'
          || name === 'my.__target__'
          || name === '_wx.__target__'
          || name === '_swan.__target__'
        ) {
          if (typeOutput.includes(value) && dist === value) {
            path.replaceWithMultiple(path.node.consequent.body)
          } else {
            let alternate = path.node.alternate
            if (alternate !== null) {
              alternate = alternate.body
            }
            path.replaceWithMultiple(alternate)
          }
        } else {
          return false
        }
      },
      ConditionalExpression(path) {
        if (path.node.test.type === 'BinaryExpression') {
          let right = path.node.test.right
          let left = path.node.test.left
          let temp
          if (left && left.type === 'StringLiteral') {
            temp = right
            right = left
            left = temp
          }
          if (!(right && left && left.object)) {
            return false
          }

          const name = `${left.object.name}.${left.property.name}`
          const value = right.value
          const typeOutput = [
            'wx',
            'alipay',
            'tt',
            'qq',
            'swan',
            'amap',
            'quick',
          ]
          if (
            name === 'wx.__target__'
            || name === '_my.__target__'
            || name === 'my.__target__'
            || name === '_wx.__target__'
            || name === '_swan.__target__'
          ) {
            if (typeOutput.includes(value)) {
              path.replaceWithMultiple(path.node.alternate)
            } else {
              path.replaceWithMultiple(path.node.consequent)
            }
          } else {
            return false
          }
        }
      },
    },
  }
}
