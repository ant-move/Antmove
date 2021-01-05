const path = require('path')
const fs = require('fs-extra')
const _componentMap = require('../config/componentsInfo/index').descObject

module.exports = function(ast, fileInfo, renderAxml) {
  const isComponentTag = false
  let { type, props } = ast
  if (props) {
    Object.keys(props).forEach((key) => {
      if (key && !props[key].value[0]) {
        props[key] = { type: 'double', value: [' '] }
      }
      if (key === 'src' && type === 'include') {
        let rule = props[key].value[0]
        if ((rule[0] !== '/' && rule[0] !== '.' && rule[0] !== '{')) {
          const tempPath = path.join(fileInfo.dirname, rule.replace(/\.wxml'*/g, '.qml'))
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
      }

      // 数字文本兼容
      const val = props[key].value[0].trim()
      if (val && !isNaN(Number(val))) {
        props[key].value[0] = `{{${val}}}`
      }
    })
  }
   
  const originType = type
  const tagInfo = _componentMap[type]

  /**
     * 检测是否已存在同名的组件
     */
  if (tagInfo && tagInfo.type === 5 && !checkoutCustomComponent(fileInfo, originType)) {
    processComponentMethodProp(ast.props, tagInfo.props)
    type = ast.type = tagInfo.tagName || ast.type

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
    type = ast.type = tagInfo.tagName || ast.type
  }
   

  if (tagInfo) {
    if (tagInfo.type !== undefined) {
      if (tagInfo.type === 1) {
        type = ast.type = tagInfo.tagName || ast.type
      }
    }

    if (tagInfo.props) {
      for (const prop in tagInfo.props) {
        const propInfo = tagInfo.props[prop]
        if (!props[prop]) { continue }
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

  return isComponentTag
}

function processComponentMethodProp(astProps = {}, propsInfo = {}) {
  Object.keys(astProps)
    .forEach((prop) => {
      if (propsInfo[prop] && propsInfo[prop].type === 1) {
        astProps[propsInfo[prop].key] = astProps[prop]
        delete astProps[prop]
      }
    })

  return astProps
}


function checkoutCustomComponent(fileInfo, tagName) {
  let bool = false; let json; let
    appJson
  if (fileInfo.extname === '.wxml') {
    json = fileInfo.path.replace('.wxml', '.json')
    if (!fs.pathExistsSync(json)) { return false }

    if (!fileInfo.jsonUsingComponents) {
      json = JSON.parse(fs.readFileSync(json, 'utf8')) || {}
      appJson = JSON.parse(fs.readFileSync(path.join(fileInfo.entry, 'app.json'), 'utf8')) || {}
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
      fileInfo.jsonUsingComponents = fileInfo.jsonUsingComponents || json.usingComponents
      fileInfo.appUsingComponents = fileInfo.appUsingComponents || appJson.usingComponents
      return {
        component: json.usingComponents,
        app: appJson.usingComponents,
      }
    }
  }

  return bool
}
