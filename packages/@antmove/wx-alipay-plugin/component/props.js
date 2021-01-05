const path = require('path')
const fs = require('fs-extra')
const { externalForWxFn } = require('@antmove/utils')
const _componentMap = require('../config/componentsInfo/index').descObject
const Config = require('../config')
const eventsMap = require('./eventsMap')
const generic = require('./generic')
const preProcessCustomComponent = require('./customComponent')
const processButton = require('./processButton.js')
const processDataSet = require('./processDataSet')
// 上报缺少的组件和属性 _componentMap
// 组件/属性 上报白名单
const eventRegexp = /(bind|catch|on)(:?)(tap|longpress|touchstart|touchmove|touchcancel|touchend|longtap)/gi
const propsWhiteList = ['style', 'class', 'ref', 'scope', 'onGetAuthorize', 'wx:if', 'wx:for', 'wx:for-item', 'wx:for-index', 'wx:key', 'wx:id', 'wx:else', 'wx:elif', 'id', 'slot', 'hidden', 'ref-numbers', 'animation']
const compsWhiteList = ['textContent', 'slot', 'i', 'span', 'div']
global.shortCompsInfo = {}
module.exports = function(ast, fileInfo, renderAxml, isReport = false) {
  let isComponentTag = false
  processButton(ast, fileInfo)
  let { type } = ast
  const { props } = ast
  const originType = type
  const tagInfo = _componentMap[type]
  const shortProps = []

  processExternalClasses(ast, fileInfo)
  isComponentTag = processCustomComponent(ast, fileInfo)
  if (props) {
    Object.keys(props).forEach((key) => {
      if (key && !props[key].value[0]) {
        props[key] = { type: 'double', value: [' '] }
      }
      key = processDataSet(key, props[key], props)
      /* 自定义组件image相对路径 支付宝相对组件所在页面查找，微信相对组件路径查找： 相对路径转绝对路径 */
      if (key === 'src' && type === 'image' && fileInfo.isComponent) {
        const rule = props[key].value[0]
        if (rule[0] !== '{' && !path.isAbsolute(rule[0])) {
          let tempPath = path.join(fileInfo.dirname, rule)
          if (fs.pathExistsSync(tempPath)) {
            tempPath = tempPath.split(fileInfo.entry)[1]
            if (tempPath[0] !== path.sep) {
              tempPath = `/${tempPath}`
            }
            props[key].value[0] = tempPath.replace(/\\/g, '/')
          }
        }
      }
      if (key === 'src' && ['include', 'import', 'wxs'].includes(type)) {
        let rule = props[key].value[0]
        if (rule[0] !== '/' && rule[0] !== '.' && rule[0] !== '{') {
          const tempPath = path.join(
            fileInfo.dirname,
            rule.replace(/\.axml'*/g, '.wxml'),
          )
          if (fs.pathExistsSync(tempPath)) {
            rule = `./${rule}`
          } else {
            rule = `/${rule}`
          }
        }

        props[key].value[0] = rule
      }

      if (key === 'wx:for') {
        // relation ref collect
        if (!isNaN(Number(props[key].value[0]))) {
          props[key].value[0] = `{{[${props[key].value[0].split('')}]}}`
        }
        props['ref-numbers'] = props[key]
      }

      // 数字文本兼容
      // const val = props[key].value[0].trim()
      // const matched = key.match(/^data-(.+)/)
      // if (val && !isNaN(Number(val)) && !matched) {
      //   props[key].value[0] = `{{${val}}}`
      // }
      //  配置中缺失组件 || 配置中的组件缺失属性
      if (isReport && ((!tagInfo && !isComponentTag && !compsWhiteList.includes(type)) || (tagInfo && tagInfo.props && !tagInfo.props[key])) && !shortProps.includes(key) && !propsWhiteList.includes(key) && !key.match(/data-/) && !key.match(eventRegexp)) {
        shortProps.push(key)
      }
    })
  }


  if (isReport && ((tagInfo && shortProps.length) || (!tagInfo && !isComponentTag && !compsWhiteList.includes(type)))) {
    shortCompsInfo[type] = shortProps
  }

  /**
   * 自定义组件预处理 - 事件
   */
  if (tagInfo && tagInfo.type === 0) {
    console.log()
    console.log(`支付宝暂不支持${type}组件`)
  }
  /**
   * 检测是否已存在同名的组件
   */
  if (
    tagInfo
    && tagInfo.type === 5
    && !checkoutCustomComponent(fileInfo, originType)
    // todo: 自动检测是否需要替换成Antmove组件
    && !ast.props['no-custom']
  ) {
    // swiper 兼容 <block></block> 写法
    if (originType === 'swiper') {
      ast.children = ast.children
        .map((child) => {
          let newChild
          switch (child.type) {
            case 'swiper-item':
              newChild = child
              break
            case 'block':
              if (child.children.length) {
                const subChild = child.children[0]
                subChild.props = { ...subChild.props, ...child.props }
                subChild.parent = child.parent
                newChild = subChild
              }
              break
            default:
          }
          if (!newChild) {
            console.log()
            console.log(
              '支付宝swiper组件其中只可放置swiper-item组件，否则会导致未定义的行为',
            )
            newChild = child
          }
          return newChild
        })
        .filter((child) => child !== undefined)
    }

    processComponentMethodProp(ast.props, tagInfo.props)
    ast.type = tagInfo.tagName || ast.type
    type = ast.type

    /**
     * support mutipule custom tags
     */
    fileInfo.tagsInfo = fileInfo.tagsInfo || []

    fileInfo.tagsInfo.push(tagInfo)
    if (tagInfo.hasChildren) {
      if (ast.children) {
        let _axml = renderAxml(ast.children[0], {})
        _axml = _axml.trim()
        if (_axml[_axml.length] === '\n') {
          _axml = _axml.substring(0, _axml.length - 1)
        }

        ast.props = ast.props || {}
        ast.props.textContent = {
          value: [_axml],
          type: 'unknown',
        }

        ast.children = []
      } else {
        ast.props = ast.props || {}
        ast.props.textContent = {
          value: [''],
          type: 'single',
        }

        ast.children = []
      }
    }

    if (!tagInfo.props) {
      return false
    }
  } else if (tagInfo && tagInfo.type === 6) {
    ast.type = tagInfo.tagName || ast.type
    type = ast.type
  }

  if (tagInfo) {
    if (tagInfo.type !== undefined) {
      if (tagInfo.type === 1) {
        ast.type = tagInfo.tagName || ast.type
        type = ast.type
      }
    }

    if (tagInfo.props) {
      for (const prop in tagInfo.props) {
        if (tagInfo.props.hasOwnProperty(prop)) {
          const propInfo = tagInfo.props[prop]
          if (!props[prop]) {
            continue
          }
          // missing
          if (propInfo.type === 0) {
            delete props[prop]
          } else if (propInfo.type === 1) {
            const _value = props[prop]
            delete props[prop]
            props[propInfo.key] = _value
          }
        }
      }
    }
  }
  processEvents(props)

  return isComponentTag
}

function processEvents(obj = {}) {
  const bindReg = /^(bind|catch):?/

  for (const key in obj) {
    if (eventsMap[key]) {
      obj[eventsMap[key]] = {
        value: ['antmoveAction'],
      }
      obj[`data-antmove-${key.replace(bindReg, '')}`] = obj[key]
      delete obj[key]
    } else if (/^bind:(.+)/.test(key) || /^bind(.+)/.test(key)) {
      const newEvent = RegExp.$1
      const uper = newEvent[0].toUpperCase()
      const eventKey = `on${uper}${newEvent.substring(1)}`
      obj[eventKey] = obj[key]
      delete obj[key]
    } else if (generic[key]) {
      obj[generic[key]] = obj[key]
      delete obj[key]
    }
  }

  return obj
}

function processComponentMethodProp(astProps = {}, propsInfo = {}) {
  Object.keys(astProps).forEach((prop) => {
    if (propsInfo[prop] && propsInfo[prop].type === 1) {
      astProps[propsInfo[prop].key] = astProps[prop]
      delete astProps[prop]
    }
  })

  return astProps
}

function checkoutCustomComponent(fileInfo, tagName) {
  let bool = false
  let json
  let appJson
  if (fileInfo.extname === '.wxml') {
    json = fileInfo.path.replace('.wxml', '.json')
    if (!fs.pathExistsSync(json)) {
      return false
    }

    if (!fileInfo.jsonUsingComponents) {
      json = JSON.parse(fs.readFileSync(json, 'utf8')) || {}
      appJson
        = JSON.parse(
          fs.readFileSync(path.join(fileInfo.entry, 'app.json'), 'utf8'),
        ) || {}
    } else {
      json = fileInfo.jsonUsingComponents
      appJson = fileInfo.appUsingComponents
    }
    if (json.usingComponents && json.usingComponents[tagName]) {
      bool = true
    } else if (appJson.usingComponents && appJson.usingComponents[tagName]) {
      bool = true
    }

    if (!tagName) {
      fileInfo.jsonUsingComponents
        = fileInfo.jsonUsingComponents || json.usingComponents
      fileInfo.appUsingComponents
        = fileInfo.appUsingComponents || appJson.usingComponents
      return {
        component: json.usingComponents,
        app: appJson.usingComponents,
      }
    }
  }

  return bool
}

function processCustomComponent(ast, fileInfo) {
  let isComponentTag = false

  /**
   * 自定义组件事件处理
   */

  if (!fileInfo.jsonUsingComponents) {
    const customComponents = checkoutCustomComponent(fileInfo) || {}
    fileInfo.jsonUsingComponents = customComponents.component || {}
  }
  fileInfo.appUsingComponents = fileInfo.appUsingComponents || {}
  if (
    fileInfo.jsonUsingComponents[ast.type]
    || fileInfo.appUsingComponents[ast.type]
  ) {
    isComponentTag = true
    const _type = ast.type
    preProcessCustomComponent(ast)
    componentInTemplate(ast)
    if (fileInfo.appUsingComponents[ast.type] || fileInfo.appUsingComponents[_type]) {
      fileInfo.customAppUsingComponents = fileInfo.customAppUsingComponents || {}
      fileInfo.customAppUsingComponents[ast.type] = fileInfo.customAppUsingComponents[ast.type] || fileInfo.appUsingComponents[_type] || fileInfo.appUsingComponents[ast.type]
    }
    if (ast.props) {
      Object.keys(ast.props).forEach((prop) => {
        const value = ast.props[prop].value[0]
        if (prop.match(/^(bind:*)(\w+)/) && !value.match(/\{/)) {
          const newProp = prop.replace(/^(bind:*)\w+/, ($, $1) => {
            const _prop = $.substring($1.length)
            return `on${_prop[0].toUpperCase()}${_prop.substring(1)}`
          })

          ast.props[newProp] = ast.props[prop]
          delete ast.props[prop]
        }

        // a:key
        if (prop.match(/:key$/)) {
          ast.props[prop].value[0] = '*this'
        }

        if (!Config.component2) {
          ast.props._parent_ref = { type: 'double', value: ['{{isMounted}}'] }
        }
      })
    }
  }
  return isComponentTag
}

function componentInTemplate(ast) {
  function deep(node) {
    if (node.parent) {
      if (node.parent.type === 'template') {
        console.log()
        console.log('template模版中尽量不要插入自定义组件，会有渲染异常的风险')
      } else {
        deep(node.parent)
      }
    }
  }
  deep(ast)
}

function processExternalClasses(ast, fileInfo) {
  /**
   * external class 只支持字符常量，不支持表达式
   */
  if (!fileInfo.isComponent) {
    return false
  }
  const opts = {
    externalClasses: [],
  }

  fileInfo.jsFileCode = fileInfo.jsFileCode || ''

  if (!fileInfo.jsFileCode) {
    const jsFile = fileInfo.path.replace('.wxml', '.js')

    const code = fs.readFileSync(jsFile, 'utf8')
    fileInfo.jsFileCode = code
  }
  externalForWxFn(fileInfo.jsFileCode, opts)
  fileInfo.externalClasses = opts

  if (ast.props) {
    if (ast.props.class) {
      const classInfo = ast.props.class
      _externalClass(classInfo)

      /**
       * 提取扩展类 -class 结尾 或者带 -class- 的命名
       * */
    }

    Object.keys(ast.props).forEach((propName) => {
      if (propName.match(/-class$/) || propName.match(/-class-/g)) {
        ast.props[propName] = _externalClass(ast.props[propName])
      }
    })
  }

  function _externalClass(classInfo = {}) {
    let _classes = classInfo.value[0].split(/\s+/)
    _classes = _classes.filter((className) => {
      return className.match(/-class$/) || className.match(/-class-/g)
    })
    const temp = classInfo.value[0].split(/\s+/)
    const newClass = []
    temp.forEach((str) => {
      if (opts.externalClasses.includes(str) || _classes.includes(str)) {
        newClass.push(`{{${_transform(str)}}}`)
      } else {
        newClass.push(str)
      }
    })

    classInfo.value[0] = newClass.join(' ')
    return classInfo
  }

  function _transform(str = '') {
    str = str.replace(/-(\w)/g, (...$) => {
      return $[1].toUpperCase()
    })

    return str
  }
}
