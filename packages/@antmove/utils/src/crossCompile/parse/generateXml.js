const os = require('os')
const processMixTemplate = require('../../processMixTemplate')
const wxmlParser = require('./parse.js')

const indentWidthChar = '  '

module.exports = function axmlRender(xmlCode, platformType) {
  const codeAst = wxmlParser.parseString(xmlCode)
  let _code = ''
  let indentWidth = ''

  codeAst.forEach((tagAst) => {
    _code += renderFn(tagAst)
  })

  function incIndent() {
    indentWidth += indentWidthChar
  }

  function decIndent() {
    indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length)
  }

  function propsHandle(key, value) {
    const newKey = key
    
    return {
      key: newKey,
      value,
    }
  }

  function renderFn(_ast) {
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
    let attrCode = ''
    let { props } = _ast
    _ast.children = _ast.children || []
    props = props || {}
    appendCode(`<${tagName}`)

    Object.keys(props)
      .forEach((prop) => {
        const propInfo = propsHandle(prop, props[prop])
        if (propInfo.value === null || propInfo.value.value[0] === '') {
          // 无值属性
          attrCode += ` ${propInfo.key}`
        } else {
          const value = propInfo.value.value[0] || ''

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
            if (propInfo.key === 'wx:else' || propInfo.key === 'a:else') {
              attrCode += ` ${propInfo.key} `
            } else {
              attrCode += ` ${propInfo.key}="${value}"`
            }
          } else {
            attrCode += ` ${propInfo.key}='${value}'`
          }
        }
      })

    if (children.length === 0) {
      appendCode(`${attrCode}>`)
      // decIndent()
    } else {
      appendCode(`${attrCode}>`)
      incIndent()

      // children element
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (Array.isArray(child)) {
            child.forEach((subChild) => {
              appendCode(renderFn(subChild))
            })
          } else {
            appendCode(renderFn(child))
          }
        })
      } else {
        appendCode(children)
      }

      decIndent()
    }
    appendCode(`</${tagName}>`)

    return code.replace(os.EOL + os.EOL, os.EOL)

    function appendCode(appendChars) {
      if (!processMixTemplate(platformType, _ast)) {
        return
      }

      if (appendChars.trim().length === 0) {
        return
      }

      if (appendChars.startsWith('<')) {
        code += (appendChars.startsWith('</') && !/<\/text>/.test(appendChars) ? os.EOL : '') + String(indentWidth) + appendChars
      } else if (appendChars.endsWith('>')) {
        if (/<\/text>/.test(appendChars)) {
          code += appendChars
        } else {
          code += appendChars + os.EOL
        }
      } else {
        code += indentWidth + appendChars
      }
    }
  }

  return _code
}
