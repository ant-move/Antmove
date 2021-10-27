const os = require('os')
const propsHandle = require('../props/index.js')
const proccessComponentProps = require('../component/props')

const indentWidthChar = '  '
let isAddWxs = false
let funName = ''

/**
 * @special tags
 */
function createElement(tagName, children = []) {
  return {
    typeof: 'element',
    key: null,
    props: {},
    type: tagName,
    children,
  }
}
function processSpecialTags(ast = {}) {
  if (ast.type === 'picker' && ast.children[0].length > 1) {
    ast.children[0] = [createElement('view', ast.children[0])]
    return ast
  }
}
function transformStyle(value) {
  value = value.trim()
  const reg = /{\s?[a-zA-Z]+:.+}/
  if (reg.test(value)) {
    let val = value.slice(1, value.length - 1)
    val = val.replace(/ +/g, '')
    const comma = val.charAt(val.length - 2)
    if (comma === ',') {
      const index = val.lastIndexOf(comma)
      val = `${val.slice(0, index)}}`
    }
    value = `{{ custom.transformStyle(${val}) }}`
    isAddWxs = true
  }
  if (!funName.includes('transformStyle')) {
    (
      funName += '\n\t\ttransformStyle: function(value) {\n\t\t\tvalue = JSON.stringify(value);\n\t\t\tvalue = value.slice(1, value.length - 1);\n\t\t\tvar val =\'\';\n\t\t\tfor(var i = 0; i < value.length; i++){\n\t\t\t\tif (value[i] !== \'"\') {\n\t\t\t\t\tif (value.indexOf(\'transform\') === -1) {\n\t\t\t\t\t\tif(value[i] === \',\'){\n\t\t\t\t\t\t\tval += \';\';\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tval += \'\';\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {\n\t\t\t\t\tval += \'-\' + value[i].toLowerCase();\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tval += value[i];\n\t\t\t}\n\t\t\treturn val;\n\t\t},'
    )
  }
  return value
}

module.exports = function axmlRender(ast = [], fileInfo) {
  isAddWxs = false
  if (typeof ast === 'string') { return ast }
  let wxsLabel = '<filter module="custom">\n'
  let _code = ''
  let indentWidth = ''
  let wxsCode = '\t  export default {'
  ast.forEach((tagAst) => {
    _code += renderFn(tagAst, fileInfo)
  })
  if (isAddWxs) {
    wxsCode += funName
    wxsCode += '\n\t}'
    wxsLabel += wxsCode
    wxsLabel += '\n</filter>'
    _code += wxsLabel
  }
  return _code

  function incIndent() {
    indentWidth += indentWidthChar
  }

  function decIndent() {
    indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length)
  }


  function renderFn(_ast, _fileInfo) {
    let { props } = _ast

    proccessComponentProps(_ast, _fileInfo, axmlRender)
    processSpecialTags(_ast)

    if (props && props.style) {
      props.style.value[0] = transformStyle(props.style.value[0])
    }
    if (_ast.type === 'textContent') {
      // todo: fix comment parse bug
      if (_ast.value.match(/-->/)) {
        return ''
      }

      return `${_ast.value}`
    }

    let code = ''
    const tagName = _ast.type
    const children = _ast.children

    appendCode(`<${tagName}`)
    props = props || {}

    let attrCode = ''
    Object.keys(props)
      .forEach((prop) => {
        const propInfo = propsHandle(prop, props[prop], ast)

        // a:for process
        if (propInfo.key === 'wx:for-items' || propInfo.key === 'a:for-items') {
          propInfo.key = 'a:for'
        }

        if (propInfo.value === null) {
          // 无值属性
          attrCode += ` ${propInfo.key}`
        } else {
          let value = propInfo.value.value[0] || ''
          value = value.replace(/\.axml/g, '.swan')
            .replace(/\.wxs/g, '.sjs')

          /**
                 * support unknown type string
                 * */
          if (propInfo.value && propInfo.value.type === 'unknown') {
            let singleIndex = value.indexOf("'")
            let doubleIndex = value.indexOf('"')

            singleIndex = singleIndex > -1 ? singleIndex : 0
            doubleIndex = doubleIndex > -1 ? doubleIndex : 0

            if (singleIndex > doubleIndex) {
              propInfo.value.type = 'double'
            } else {
              propInfo.value.type = 'single'
            }
          }
          if (propInfo.value && propInfo.value.type === 'double') {
            attrCode += ` ${propInfo.key}="${value}"`
          } else if (propInfo.key === 's-else') {
            attrCode += ` ${propInfo.key}`
          } else {
            attrCode += ` ${propInfo.key}='${value}'`
          }
        }
      })

    /**
         * close element
         */
    if (children === undefined || _ast.isSingle) {
      appendCode(`${attrCode}/>`)
      // decIndent()
    } else {
      appendCode(`${attrCode}>`)
      incIndent()

      // children element
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (Array.isArray(child)) {
            child.forEach((subChild) => {
              appendCode(renderFn(subChild, _fileInfo))
            })
          } else {
            appendCode(renderFn(child, _fileInfo))
          }
        })
      } else {
        appendCode(children)
      }

      decIndent()
      appendCode(`</${tagName}>`)
    }

    return code.replace(os.EOL + os.EOL, os.EOL)

    function appendCode(appendChars) {
      if (appendChars.trim().length === 0) {
        return
      }

      if (appendChars.startsWith('<')) {
        code += (appendChars.startsWith('</') ? os.EOL : '') + String(indentWidth) + appendChars
      } else if (appendChars.endsWith('>')) {
        code += appendChars + os.EOL
      } else {
        code += indentWidth + appendChars
      }
    }
  }
}
