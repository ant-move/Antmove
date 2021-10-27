const os = require('os')
const {
  transformEs6,
  processMixTemplate,
} = require('@antmove/utils')
const propsHandle = require('../props/index.js')
const proccessComponentProps = require('../component/props')
let { ref } = require('../config')

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

function addWxKey(props) {
  if (props['a:for']) {
    if (!props['a:key']) {
      props = Object.assign(props, { 'a:key': { type: 'unknown', value: ['{{index}}'] } })
    }
  }
  return props
}

function transformTypeof(val) {
  let str = ''
  let params = ''
  if (/typeof\s*\w+/.test(val)) {
    val = val.replace(/typeof\s*\w+/, (a) => {
      str = a.replace(/ +/, ' ')
      params = str.split(' ')[1]
      a = ` custom.isTypeof(${params}) `
      return a
    })
  }
  if (/typeof\s*\((.+?)\)/.test(val)) {
    val = val.replace(/typeof\s*\((.+?)\)/, (a) => {
      str = a.match(/\((.+?)\)/)[0]
      params = str.slice(1, str.length - 1)
      a = ` custom.isTypeof(${params}) `
      return a
    })
  }
  if (!funName.includes('isTypeof')) {
    funName += '\n\t\tisTypeof: function(val) {\n\t\t\treturn typeof(val);\n\t\t},'
  }
  return val
}

function transformFun(type, val) {
  val = val.replace(/{{(.*?)}}/, (a) => {
    type = `is${type.charAt(0).toUpperCase()}${type.slice(1)}`
    let params = a.match(/\w+.?/)[0]
    params = params.slice(0, params.length - 1)
    let str = a.slice(2, a.length - 2)
    const reg = new RegExp(`${params}`)
    str = str.replace(reg, '__item')
    if (!funName.includes(type)) {
      funName += `\n\t\t${type}: function(__item) {\n\t\t\treturn ${str};\n\t\t},`
    }
    a = `{{ custom.${type}(${params}) }}`
    return a
  })
  return val
}

function transformToString(val) {
  val = val.replace(/{{(.*\.toString\(\)).*}}/, (value) => {
    const text = RegExp.$1.toString().split('.')[0]
    const str = `custom._toString(${text})`
    if (!funName.includes('_toString')) {
      funName += '\n\t\t_toString: function(val) {\n\t\t\treturn val.toString();\n\t\t},'
    }
    const reg = new RegExp(text)
    value = value.replace(/\.toString\(\)/, '')
    value = value.replace(reg, str)
    return value
  })
  return val
}

function appendWxs(val) {
  const arr = ['typeof', 'some', 'every', 'forEach', 'reduce', 'filter', 'toString']
  let type = ''
  let value = ''
  if (val) {
    value = val.match(/{{(.*?)}}/)
  }
  if (value !== null) {
    arr.some((item) => {
      if (value[0] && value[0].includes(item)) {
        type = item
        return true
      }
      return false
    })
    switch (type) {
      case 'typeof':
        val = transformTypeof(val)
        break
      case 'toString':
        val = transformToString(val)
        break
      case 'some':
        val = transformFun(type, val)
        break
      case 'every':
        val = transformFun(type, val)
        break
      case 'forEach':
        val = transformFun(type, val)
        break
      case 'reduce':
        val = transformFun(type, val)
        break
      case 'filter':
        val = transformFun(type, val)
        break
      default:
        break
    }
    if (type !== '') {
      isAddWxs = true
    }
  }
  return val
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
      funName += '\n\t\ttransformStyle: function(value) {\n\t\t\tvalue = JSON.stringify(value);\n\t\t\tvalue = value.slice(1, value.length - 1);\n\t\t\tlet val =\'\';\n\t\t\tfor(var i = 0; i < value.length; i++){\n\t\t\t\tif (value[i] !== \'"\') {\n\t\t\t\t\tif (value.indexOf(\'transform\') === -1) {\n\t\t\t\t\t\tif(value[i] === \',\'){\n\t\t\t\t\t\t\tval += \';\';\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tval += \'\';\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tif(value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {\n\t\t\t\t\tval += \'-\' + value[i].toLowerCase();\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\t\t\t\tval += value[i];\n\t\t\t}\n\t\t\treturn val;\n\t\t},'
    )
  }
  return value
}

function transformStringTemplate(prop) {
  let value = prop.value.value[0].replace(/ /g, '')
  const reg = /^{{`(.+)`}}$/
  if (reg.test(value)) {
    const arr = RegExp.$1.split('$')
    let str = arr[1].trim().match(/\s*{.+}/)[0]
    str = str.slice(1, str.length - 1)
    arr[1] = `{{ ${str} }}`
    value = arr.join('')
    prop.value.value[0] = value
  }
}

function transformSjs(ast) {
  ast.type = 'wxs'
  ast.props.module = ast.props.name
  ast.props.src = ast.props.from
  delete ast.props.name
  delete ast.props.from
  return ast
}

function transformRef(prop, filePath) {
  prop.id = { type: 'unknown', value: prop.ref.value }
  const filename = filePath.replace(/\.axml/, '.js')
  const obj = { id: prop.ref.value[0], filename }
  ref = Object.assign(ref, obj)
  delete prop.ref
}

function transformInput(ast) {
  if (ast.props[undefined]) {
    ast.props.type = { type: 'unknown', value: ast.props[undefined].value }
    delete ast.props[undefined]
  }
}

module.exports = function axmlRender(ast = [], fileInfo) {
  if (typeof ast === 'string') { return ast }
  let wxsLabel = '<wxs module="custom">\n'
  let wxsCode = '\tmodule.exports = {'
  isAddWxs = false
  let _code = ''
  let indentWidth = ''
  ast.forEach((tagAst) => {
    _code += renderFn(tagAst, fileInfo)
  })
  if (isAddWxs) {
    wxsCode += funName
    wxsCode += '\n\t}'
    wxsCode = transformEs6(wxsCode)
    wxsLabel += wxsCode
    wxsLabel += '\n</wxs>'
    _code += wxsLabel
  }
  funName = ''
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
    let { props } = _ast
    proccessComponentProps(_ast, _fileInfo, axmlRender)
    processSpecialTags(_ast)
    _ast.value = appendWxs(_ast.value)
    if (props && props.style) {
      props.style.value[0] = transformStyle(props.style.value[0])
    }
    if (_ast.props) {
      Object.values(_ast.props).forEach((obj) => {
        obj.value[0] = appendWxs(obj.value[0])
      })
    }
    if (_ast.type === 'import-sjs') {
      transformSjs(_ast)
    }
    if (_ast.type === 'input') {
      transformInput(_ast)
    }
    if (props && props.ref) {
      transformRef(props, fileInfo.path)
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
    props = addWxKey(props)
    props = props || {}
    let attrCode = ''
    Object.keys(props)
      .forEach((prop) => {
        const propInfo = propsHandle(prop, props[prop], ast)
        transformStringTemplate(propInfo)
        // a:for process
        if (propInfo.key === 'wx:for-items' || propInfo.key === 'a:for-items') {
          propInfo.key = 'a:for'
        }

        if (propInfo.value === null) {
          // 无值属性
          attrCode += ` ${propInfo.key}`
        } else {
          let value = propInfo.value.value[0] || ''
          value = value.replace(/\.axml/g, '.wx')
            .replace(/\.sjs/g, '.wxs')

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
          } else if (value === '' || value === undefined || !value) {
            attrCode += ` ${propInfo.key}`
          } else {
            attrCode += ` ${propInfo.key}='${value}'`
          }
        }
      })

    /**
         * close element
         */
    if (children === undefined) {
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
      const isType = processMixTemplate('wx', _ast)
      if (!isType) { return }
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
