const os = require('os')
const path = require('path')
const fs = require('fs-extra')

const indentWidthChar = '  '
const {
  cjsToes,
} = require('@antmove/utils')
const proccessComponentProps = require('../component/props')
const propsHandle = require('../props/index.js')

/**
* process wxs
*/
function processImportJs(code) {
  return cjsToes(code)
}

/**
 * @special tags
 */
function createElement(tagName, children = []) {
  return {
    typeof: 'wxml.element',
    key: null,
    props: {},
    type: tagName,
    children,
  }
}
function processSpecialTags(ast = {}) {
  if (ast.type === 'picker' && ast.children[0] && ast.children[0].length > 1) {
    ast.children[0] = [createElement('view', ast.children[0])]
    return ast
  }
}

function addWxKey(props) {
  if (props['wx:for']) {
    if (!props['wx:key']) {
      props = Object.assign(props, { 'wx:key': { type: 'unknown', value: ['{{index}}'] } })
    }
  }
  return props
}

module.exports = function axmlRender(ast = [], fileInfo) {
  processPageTpl(fileInfo)
  if (typeof ast === 'string') { return ast }
  let _code = ''
  let indentWidth = ''

  ast.forEach((tagAst) => {
    _code += renderFn(tagAst, fileInfo)
  })
  _code = _code.replace(/<text[^>]*\s*.*>\s*.+\s*<\/text>/g, (val) => {
    val = val.replace(/\r|\n/g, '')
    val = val.replace(/ +/g, ' ')
    return val
  })
  return _code

  function incIndent() {
    indentWidth += indentWidthChar
  }

  function decIndent() {
    indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length)
  }


  function renderFn(_ast, _fileInfo) {
    _ast.children = _ast.children || []
    if (_ast.type === 'wxs' && _ast.children.length) {
      try {
        let filename = _fileInfo.dist
        const sjsCode = _ast.children[0].value
        const moduleName = `${_ast.props.module.value[0]}.js`

        filename += moduleName
        fs.outputFileSync(filename, processImportJs(sjsCode))
        _ast.children[0].value = ''
        const relativePath = filename.split(path.sep)
        const _relativePath = relativePath[relativePath.length - 1]
    
        _ast.props.src = { type: 'double', value: [`./${_relativePath}`] }
      } catch (e) {
        if (e) {
          console.error(e)
        }
      }
    }
    let { props } = _ast
    proccessComponentProps(_ast, _fileInfo, axmlRender)
    processSpecialTags(_ast)
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
    props = addWxKey(props)
    props = props || {}

    let attrCode = ''
    Object.keys(props)
      .forEach((prop) => {
        const propInfo = propsHandle(prop, props[prop], ast)

        // a:for process
        if (propInfo.key === 'wx:for-items' || propInfo.key === 'tt:for-items') {
          propInfo.key = 'tt:for'
        }

        if (propInfo.value === null) {
          // 无值属性
          attrCode += ` ${propInfo.key}`
        } else {
          let value = propInfo.value.value[0] || ''
          value = value.replace(/\.wxml/g, '.ttml')

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
            if (propInfo.key === 'wx:else' || propInfo.key === 'tt:else') {
              attrCode += ` ${propInfo.key} `
            } else {
              attrCode += ` ${propInfo.key}="${value}"`
            }
          } else {
            attrCode += ` ${propInfo.key}='${value}'`
          }
        }
      })

    /**
         * close element
         */
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
    }
    appendCode(`</${tagName}>`)

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

function processPageTpl(fileInfo = {}) {
  let bool
  const jsonFile = `${fileInfo.dirname}/${fileInfo.basename}.json`
  if (fs.pathExistsSync(jsonFile)) {
    const obj = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
    if (obj.component === undefined) {
      fileInfo.isPage = true
      fileInfo.isComponent = false
    } else {
      fileInfo.isComponent = true
    }
  }

  return bool
}
