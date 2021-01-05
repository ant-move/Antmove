const fs = require('fs')
const htmlparser = require('htmlparser2')

function createText(text) {
  return {
    value: text,
    parent: null,
    type: 'textContent',
  }
}

function parseWxs(wxmlCode) {
  const temReg = /(<template\s*name=["']([^'"]+)["']\s*>([\s\S]*?)<\/template>)/
  const Reg = /(<wxs\s*module=["']([^'"]+)["']\s*>([\s\S]*?)<\/wxs>)/
  const wxsAsts = []
  if (!temReg.test(wxmlCode)) {
    while (Reg.test(wxmlCode)) {
      const wxsCode = RegExp.$1
  
      wxsAsts.push(parseWxsCode2Ast(RegExp.$2, RegExp.$3))
      wxmlCode = wxmlCode.replace(wxsCode, '')
    }
  }

  return {
    wxsAsts,
    restWxmlCode: wxmlCode,
  }
}

function parseWxsCode2Ast(moduleName, wxsContent) {
  const ast = {
    type: 'wxs',
    props: {
      module: {
        type: 'unknown',
        value: [moduleName],
      },
    },
    children: [
      {
        value: wxsContent,
        type: 'textContent',
      },
    ],
    parent: null,
  }

  ast.children[0].parent = ast

  return ast
}

function parseFile(filename) {
  const code = fs.readFileSync(filename, 'utf8')
  // htmlParser2 解析内联wxs时可能出错，所以将wxs单独提取出来
  const { restWxmlCode, wxsAsts } = parseWxs(code)
  const ast = parseString(restWxmlCode)
  return [...wxsAsts, ...ast]
}

function parseString(code) {
  const ast = []
  let zIndex = 0
  let currentNode = null
  let preTagIsText = false // fixbug: textContent value 被拆分的情况
  let preTextNode = null

  const parser = new htmlparser.Parser(
    {
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
    },
    {
      decodeEntities: false,
      xmlMode: true,
    },
  )
  parser.write(code)
  parser.end()

  return ast
}

function processProps(obj = {}) {
  const props = {}
  Object.keys(obj).forEach((prop) => {
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
  parseWxs,
}
