const os = require('os')
const proccessComponentProps = require('../component/props')
const createComponentNode = require('../component/processRelations')

const indentWidthChar = '  '


global.appNodesTreeStr = 'module.exports = {\n'

module.exports = function axmlRender(ast = [], fileInfo) {
  /**
     * container node render
     */
  fileInfo.nodeId = 0
  const refRender = createComponentNode(ast[0], fileInfo)
  processComponentIs(fileInfo)

  if (typeof ast === 'string') { return ast }
  let _code = ''
  let indentWidth = ''

  ast.forEach((tagAst) => {
    _code += renderFn(tagAst, fileInfo, refRender)
  })

  generateRenderFn(fileInfo, refRender.toJsFile())

  return _code

  function incIndent() {
    indentWidth += indentWidthChar
  }

  function decIndent() {
    indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length)
  }


  function renderFn(_ast, _fileInfo, parentRenderNode) {
    let _parentRenderNode = parentRenderNode
    _ast.children = _ast.children || []
        
    let { props } = _ast

    const isComponentRender = proccessComponentProps(_ast, _fileInfo, axmlRender)

    if (isComponentRender) {
      _parentRenderNode = createComponentNode(_ast, _fileInfo)
      parentRenderNode.appendChild(_parentRenderNode)
    }

    let code = ''
    const tagName = _ast.type
    const children = _ast.children

    appendCode(`<${tagName}`)
    props = props || {}

    let attrCode = ''
    Object.keys(props)
      .forEach((prop) => {
        const propInfo = {
          key: prop,
          value: props[prop],
        }

        if (propInfo.value === null) {
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
            if (propInfo.key === 'a:else') {
              attrCode += ` ${propInfo.key} `
            } else {
              attrCode += ` ${propInfo.key}="${value}"`
            }
          } else {
            attrCode += ` ${propInfo.key}='${value}'`
          }
        }
      })
        
    if (_ast.type === 'textContent') {
      return `${_ast.value}`
    }

    /**
         * close element
         */
    if (children.length === 0) {
      appendCode(`${attrCode}>`)
    } else {
      appendCode(`${attrCode}>`)
      incIndent()

      // children element
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (Array.isArray(child)) {
            child.forEach((subChild) => {
              appendCode(renderFn(subChild, _fileInfo, _parentRenderNode))
            })
          } else {
            appendCode(renderFn(child, _fileInfo, _parentRenderNode))
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

/**
 * 组件层级关系
 */
function generateRenderFn(fileInfo, renderStr = '') {
  let route = fileInfo.dist.replace(fileInfo.output, '')
  route = route.replace(/\.axml/, '')
  route = route.replace(/\\+/g, '/')
    
  appNodesTreeStr += `'${route}': ${renderStr},`
}

function processComponentIs(fileInfo) {
  // let dist = fileInfo.dist.replace(/\.axml$/, '.is.js');
  const isPath = fileInfo.dist.replace(fileInfo.output, '')
    .replace(/\.axml$/, '').replace(/\\/g, '/')
    
  if (fileInfo.parent) {
    fileInfo.parent.is = isPath
  }
}
