const fs = require('fs')
const htmlparser = require('htmlparser2')

function createText(text) {
  return {
    value: text,
    parent: null,
    type: 'textContent',
  }
}

function parseFile(filename) {
  return parseString(fs.readFileSync(filename, 'utf8'))
}

function parseString(code) {
  const ast = []
  let zIndex = 0
  let currentNode = null
  let preTagIsText = false // fixbug: textContent value 被拆分的情况
  let preTextNode = null

  const parser = new htmlparser.Parser({
    onopentag(name, attrs) {
      const node = {
        props: processProps(attrs),
        type: name,
        children: [],
        parent: null,
      }

      let _fn = 'push'

      if (name === 'wxs') {
        _fn = 'unshift'
      }


      if (zIndex === 0) {
        ast[_fn](node)
        currentNode = node
      } else {
        node.parent = currentNode
        currentNode.children[_fn](node)
        currentNode = node
      }
      zIndex++
      preTagIsText = false
    },
    ontext(text) {
      text = text.trim()
      if (text) {
        if (preTagIsText) {
          preTextNode.value += text
          return false
        }

        const node = createText(text)
        if (zIndex === 0) {
          ast.push(node)
        } else {
          node.parent = currentNode
          currentNode.children.push(node)
        }
        preTextNode = node
        preTagIsText = true
      }
    },
    onclosetag() {
      zIndex--
      currentNode = currentNode.parent
      preTagIsText = false
    },
  }, {
    decodeEntities: false,
    xmlMode: true,
  })
  parser.write(code)
  parser.end()
    
  return ast
}

function processProps(obj = {}) {
  const props = {}
  Object.keys(obj)
    .forEach((prop) => {
      const val = obj[prop]
      props[prop] = {
        type: 'unknown', // (val[0] === '"') ? 'double' : 'single',
        value: [val],
      }
    })
    
  return props
}

module.exports = {
  parseFile,
  parseString,
}
