const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const { cjsToes, processMixTemplate, isNumeric, processErrMassage } = require('@antmove/utils')
const propsHandle = require('../props/index.js')
const proccessComponentProps = require('../component/props')
const createComponentNode = require('../component/processRelations')
const config = require('../config')
const { parseString, parseFile } = require('../parse/parse')
const wxsApp = require('./generateWxsDep')

const indentWidthChar = '  '

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

global.appNodesTreeStr = 'module.exports = {\n'

const isParseTemplate = true

// 保存模板的声明，全局可用
const includeCustomCompTpls = {}

module.exports = function axmlRender(ast = [], fileInfo, appPages = []) {
  /**
   * container node render
   */
  fileInfo.nodeId = 0
  processPageTpl(fileInfo, appPages)
  if (fileInfo.isPage && ast.length > 1) {
    const _astPage = parseString(
      `<view class='${config.options.pageContainerClassName}'></view>`,
    )
    _astPage[0].children = [ast]
    ast = _astPage
  }
  let _ast0 = ast.find((_ast) => {
    return _ast.type !== 'import-sjs' && _ast.type !== 'wxs'
  })
  if (!_ast0) {
    const _astPage = parseString(
      '<view></view>',
    )
    _astPage[0].children = [ast]
    ast = _astPage
    _ast0 = ast[0]
  }
  const refRender = _ast0 && createComponentNode(_ast0, fileInfo)
  processComponentIs(fileInfo)
  if (typeof ast === 'string') {
    return ast
  }
  let _code = ''
  let indentWidth = ''

  ast.forEach((tagAst) => {
    _code += renderFn(
      tagAst,
      fileInfo,
      refRender,
      isReportHandler(tagAst.props),
    )
  })

  generateRenderFn(fileInfo, refRender.toJsFile())
  return _code

  function incIndent() {
    indentWidth += indentWidthChar
  }

  function decIndent() {
    indentWidth = indentWidth.slice(0, -1 * indentWidthChar.length)
  }

  function processTemplate(_ast) {
    const { props } = _ast
    const templateName = props.is.value.join('')
    const replacedChildren = includeCustomCompTpls[templateName]
    // console.log('template is', templateName)
    _ast.type = 'block'

    if (_ast.props.data) {
      const temData = processData()
      _ast.props = {
        ..._ast.props,
        'wx:for': {
          type: 'unknown',
          value: [temData.value],
        },
        'wx:for-item': {
          type: 'unknown',
          value: ['amitem'],
        },
      }
      let dataReg = temData && temData.propsObj && temData.propsObj
        .split(',')
        .map((temProp) => {
          return temProp.split(':')[0].trim()
        })
        .join('|')
      dataReg = new RegExp(`(?<!item\\.|\\w)(${dataReg})(\\W|\\s)`, 'g')
      // todo: 表达式没处理
      _ast.children = parseString(
        replacedChildren
          .map((childAst) => {
            return renderFn(childAst, fileInfo, refRender)
          })
          .join('')
          .replace(dataReg, (...$) => {
            return `amitem.${$[1]}${$[2]}`
          }),
      )
    } else {
      _ast.children = replacedChildren
    }

    _ast.props._is = _ast.props.is

    delete _ast.props.is
    delete _ast.props.data

    function processData() {
      try {
        const val = _ast.props.data.value[0].match(
          /\s*\{\s*\{\s*([^}]+)\s*\}\s*\}/,
        )
        const value = val && val[1]

        // data: item 或者 data, item
        // 再套一层大括号
        if (/,|:/.test(value)) {
          return {
            value: `{{ [{ ${value} }] }}`,
            propsObj: value,
          }
        } else {
          // data
          return {
            value: `{{ [ ${value} ] }}`,
            propsObj: value,
          }
        }
      } catch (err) {
        console.log('err', err)
      }
    }
  }

  // todo: 后期优化，只对用了自定义组件的页面使用
  function includeCustomComp(_ast) {
    return true
  }

  function parseImportTemplate(_ast, filePath) {
    const srcVal = _ast.props.src.value[0]

    // console.log('Import template', srcVal)

    const templatePath = path.join(
      /^\//.test(srcVal) ? fileInfo.entry : fileInfo.dirname,
      srcVal,
    )

    let templatesAst = parseFile(templatePath)

    templatesAst = templatesAst.filter(
      (__ast) => __ast.type === 'template' && __ast.props.name,
    )
    templatesAst.forEach((templateAst) => {
      const name = templateAst.props.name.value[0]
      const templateAstChildren = templateAst.children
        .map((astType) => {
          if (astType.type === 'wxs' && astType.props && astType.props.src) {
            const fPath = path.join(filePath, '../', srcVal)
            const sPath = path.join(fPath, '../', astType.props.src.value[0])
            const wxsSrc = path.relative(path.join(filePath, '../'), sPath)
            astType.props.src.value[0] = wxsSrc
          }
          return astType
        })
      includeCustomCompTpls[name] = templateAstChildren
    })
  }

  function renderFn(_ast, _fileInfo, parentRenderNode, _isReport = false) {
    // 处理使用自定义模板
    // 对于template的处理，必须把template的定义或者引入放在使用前

    if (isParseTemplate) {
      // 处理模板的定义
      if (
        _ast.type === 'template'
        && _ast.props.name
        && includeCustomComp(_ast)
      ) {
        includeCustomCompTpls[_ast.props.name.value.join('')] = _ast.children
      }

      // 处理模板的引入
      if (_ast.type === 'import' && /wxml$/.test(_ast.props.src.value[0])) {
        parseImportTemplate(_ast, _fileInfo.path)
        return ''
      }

      // 处理模板的使用
      if (
        _ast.type === 'template'
        && _ast.props.is
        && includeCustomCompTpls[_ast.props.is.value.join('')]
      ) {
        processTemplate(_ast)
      }
    }

    let _parentRenderNode = parentRenderNode
    _ast.children = _ast.children || []

    if (!config.hasWxs) {
      const bool = processSjs(_ast, _fileInfo)

      if (bool) {
        return ''
      }
    }
    if (_ast.type === 'wxs' && _ast.children.length) {
      try {
        let filename = _fileInfo.dist
        const sjsCode = _ast.children[0].value
        const moduleName = `${_ast.props.module.value[0]}.sjs`

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
    const isComponentRender = proccessComponentProps(
      _ast,
      _fileInfo,
      axmlRender,
      _isReport,
    )

    if (isComponentRender) {
      _parentRenderNode = createComponentNode(_ast, _fileInfo)
      parentRenderNode.appendChild(_parentRenderNode)
    }
    processSpecialTags(_ast)
    if (_ast.type === 'textContent') {
      // todo: fix comment parse bug
      if (_ast.value.match(/-->/)) {
        return ''
      }

      return `${_ast.value}`
    }

    if (_ast.type === 'span') {
      _ast.type = 'text'
    }
    if (_ast.type === 'div') {
      _ast.type = 'view'
    }
    if (_ast.type === 'i') {
      _ast.type = 'icon'
    }
    let code = ''
    const tagName = _ast.type
    const children = _ast.children
    const isReport = _isReport ? isReportHandler(props) : _isReport
    appendCode(`<${tagName}`)
    props = props || {}

    let attrCode = ''
    Object.keys(props).forEach((prop) => {
      const propInfo = propsHandle(prop, props[prop], ast)
      // a:for process
      if (propInfo.key === 'wx:for-items' || propInfo.key === 'a:for-items') {
        propInfo.key = 'a:for'
      }
      // wx-if => a:if
      if (propInfo.key === 'wx-if') {
        propInfo.key = 'a:if'
      }
      if (propInfo.key === 'wx-else') {
        propInfo.key = 'a:else'
      }
      if (propInfo.value === null) {
        // 无值属性
        attrCode += ` ${propInfo.key}`
      } else {
        let value = propInfo.value.value[0] || ''
        value = value.replace(/\.wxml/g, '.axml').replace(/\.wxs/g, '.sjs')

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
        } else if (
          (propInfo.key === 'a:key' || propInfo.key === 'wx:key')
          && !/{{/.test(value)
        ) {
          attrCode += ` ${propInfo.key}='{{${value}}}'`
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
              appendCode(
                renderFn(
                  subChild,
                  _fileInfo,
                  _parentRenderNode,
                  isReport ? isReportHandler(subChild.props) : isReport,
                ),
              )
            })
          } else {
            appendCode(
              renderFn(
                child,
                _fileInfo,
                _parentRenderNode,
                isReport ? isReportHandler(child.props) : isReport,
              ),
            )
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
      const isType = processMixTemplate('alipay', _ast)
      if (!isType) {
        return
      }
      if (appendChars.trim().length === 0) {
        return
      }
      if (appendChars.startsWith('<')) {
        code
          += (appendChars.startsWith('</') && !/<\/text>/.test(appendChars)
            ? os.EOL
            : '')
          + String(indentWidth)
          + appendChars
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
}

function processPageTpl(fileInfo = {}, appPages = []) {
  let bool
  const jsonFile = `${fileInfo.dirname}/${fileInfo.basename}.json`
  if (fs.pathExistsSync(jsonFile)) {
    let obj = {}
    try {
      obj = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))
    } catch (error) {
      processErrMassage(error, jsonFile.replace(fileInfo.entry, ''))
    }
    if (obj.component === undefined) {
      fileInfo.isPage = true
      fileInfo.isComponent = false
    } else {
      fileInfo.isComponent = true
    }
  } else {
    /**
     * 页面无json文件输出 {"component":true} ,组件无json文件输出 {}
     */
    let jsonContent = {}
    appPages.forEach((p) => {
      if (
        !(
          path.join(fileInfo.entry, p)
          === `${fileInfo.dirname}/${fileInfo.basename}`
        )
      ) {
        jsonContent = {
          component: true,
        }
      }
    })
    fs.outputFileSync(
      fileInfo.dist.replace('.axml', '.json'),
      JSON.stringify(jsonContent),
    )
  }

  return bool
}

/**
 * 组件层级关系
 */
function generateRenderFn(fileInfo, renderStr = '') {
  let route = fileInfo.dist.replace(fileInfo.output, '')
  route = route.replace(/\.axml/, '')
  route = route.replace(/\\+/g, '/')
  if (route[0] === '/') { route = route.substr(1) }

  global.appNodesTreeStr += `'${route}': ${renderStr},`
}

/**
 * sjs exports to props object
 */
function processSjs(_ast, _fileInfo) {
  let route = _fileInfo.dist.replace(_fileInfo.output, '')
  route = route.replace(/\.axml/, '')
  route = route.replace(/\\+/g, '/')
  let bool = false
  if (_ast.type === 'wxs') {
    if (_ast.children.length) {
      /**
       * 内联 wxs 处理
       */
      try {
        let filename = _fileInfo.dist
        let sjsCode = _ast.children[0].value
        const moduleName = _ast.props.module.value[0]
        filename = filename.replace('.axml', '.')
        let wxsPath = filename
        wxsPath = wxsPath.replace(_fileInfo.output, '')

        wxsPath = `${wxsPath + moduleName}sjs.js`

        if (sjsCode.match(/\s*getRegExp/g)) {
          const preCode = `
                    function getRegExp (p1, p2) {
                        return new RegExp(p1, p2);
                    }
                    \n
                    `
          sjsCode = preCode + sjsCode
        }

        fs.outputFileSync(`${filename + moduleName}sjs.js`, sjsCode)
        _ast.children[0].value = ''

        wxsApp.createDep(route, wxsPath, moduleName, _fileInfo.output)

        // _ast.props.src = { type: 'double', value: [ './' + _relativePath ] };
        bool = true
      } catch (e) {
        if (e) {
          console.error(e)
        }
      }
    } else {
      const filename = _fileInfo.dist
      const moduleName = _ast.props.module.value[0]
      let wxsPath = `${_ast.props.src.value[0]}.js`
      wxsPath = path.join(filename, '../', wxsPath)
      wxsPath = wxsPath.replace(_fileInfo.output, '')

      if (wxsPath[0] !== '/') {
        wxsPath = `/${wxsPath}`
      }
      wxsApp.createDep(route, wxsPath, moduleName, _fileInfo.output)
      bool = true
    }
  }

  return bool
}

function processComponentIs(fileInfo) {
  // let dist = fileInfo.dist.replace(/\.axml$/, '.is.js');
  const isPath = fileInfo.dist
    .replace(fileInfo.output, '')
    .replace(/\.axml$/, '')
    .replace(/\\/g, '/')

  if (fileInfo.parent) {
    fileInfo.parent.is = isPath
  }
}

/**
 * 条件编译不上报
 *  */
function isReportHandler(props) {
  const typeArr = ['is-wx', 'is-alipay', 'is-swan', 'is-tt', 'is-quick']
  let isReport = true
  if (props) {
    typeArr.forEach((type) => {
      if (props[type]) {
        isReport = false
      }
    })
  }
  return isReport
}
