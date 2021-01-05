const path = require('path')
const { transformStr, processErrMassage } = require('@antmove/utils')
const fs = require('fs-extra')
const Config = require('../config')
const appJson = require('../config/jsonInfo/globalconfig')
const pageJson = require('../config/jsonInfo/pageconfig')

const uiComponents = {
  '@vant/weapp': 'vant-aliapp/dist/dist',
  'vant-weapp': 'vant-aliapp/dist/dist',
  'weui-miniprogram': 'weui-aliapp/dist/components',
}

const keys = Object.keys

const windowConfigMap = {}

mkJsonMap(appJson.window.props, windowConfigMap)
mkJsonMap(pageJson, windowConfigMap)

function mkJsonMap(props, targetJson) {
  keys(props).forEach((prop) => {
    const value = props[prop]
    if (value.type === 1) {
      targetJson[prop] = value.key
    }
  })
}

/**
 * replace key of object
 */
function replaceTheKey(obj, configMap) {
  if (!obj) {
    return false
  }
  keys(obj).forEach((key) => {
    const _key = configMap[key]
    if (_key) {
      obj[_key] = obj[key]
      delete obj[key]
    }
  })

  return obj
}

function toAbsolutePath(str = '') {
  if (!str) {
    return false
  }

  str = str.replace(/^\.\//, '/')
  str = str.replace(/^\w/, (...$) => {
    return `/${$[0]}`
  })

  return str
}

function isNpm(dependencies, filename) {
  if (!dependencies) {
    return false
  }
  let tool = false
  let isNpmComponent = false
  const dependenciesObj = dependencies || {}
  keys(dependenciesObj).forEach((d) => {
    if (!tool) {
      const reg = new RegExp(`^${d}`)
      /**
       * 临时方案：兼容微信官方demo出现的先对路径引入依赖组件的写法,如'../../miniprogram_npm/wxml-to-canvas'
       */
      const _isReg = filename.match(/wxml-to-canvas/)
      const isReg = filename.match(reg)
      if (isReg || _isReg) {
        isNpmComponent = {
          npmCom: isReg || _isReg,
          com: isReg ? isReg[0] : _isReg[0],
        }
        tool = true
      }
    }
  })
  return isNpmComponent
}

module.exports = function(jsonStr, fileInfo) {
  if (!jsonStr) {
    return ''
  }
  const json = JSON.parse(jsonStr)
  const entry = this.$options.entry
  replaceTheKey(json, windowConfigMap)
  // process wrap components
  const tagsInfo = fileInfo.tagsInfo
  const ctx = this
  const componentPages = this.$options.componentPages || {}
  const libraryName = this.$options.libraryName || ''
  const appPath = `/${fileInfo.path.replace(fileInfo.entry, '')}`
  // process custom components
  json.usingComponents = json.usingComponents || {}

  const packageObj = fileInfo.packageInfo
  const dependencies = packageObj ? packageObj.dependencies : {}
  const npmDependencies = Object.assign({}, uiComponents, dependencies)
  const appContent = fs.readJSONSync(path.join(fileInfo.entry, './app.json'))
  if (appContent.useExtendedLib && appContent.useExtendedLib.weui) {
    dependencies['weui-miniprogram'] = true
  }

  if (fileInfo.appUsingComponents) {
    keys(fileInfo.appUsingComponents).forEach((c) => {
      c = c.replace(/([A-Z])/g, '-$1').toLowerCase()
      if (!fileInfo.customAppUsingComponents || json.usingComponents[c]) {
        return false
      }
      let cPath = fileInfo.customAppUsingComponents[c]
      if (!cPath) {
        return false
      }
      if (packageObj && !isNpm(packageObj, cPath)) {
        cPath = path.join(fileInfo.output, cPath)
        cPath = path.relative(path.join(fileInfo.dist, '../'), cPath)
      }

      /**
       * not support npm packages components
       */

      cPath = toAbsolutePath(cPath)
      cPath = cPath.replace(/\\/g, '/')
      cPath = libraryName + cPath
      json.usingComponents[c] = cPath
    })
  }
  /**
   * 组件配置未声明component: true时处理
   */
  const appPages = this.$options.appPages || []
  if (
    !appPages.includes(
      fileInfo.path.replace('.wxml', '').replace(ctx.entry, ''),
    )
    && !json.component
  ) {
    json.component = true
  }
  keys(json.usingComponents).forEach((key) => {
    const _key = transformStr(key)
    let _val = json.usingComponents[key]
    let rule = _val
    let ruleRoot = false
    const reg = new RegExp(libraryName)
    const isNpmCom = isNpm(npmDependencies, _val)
    if (!isNpmCom.npmCom) {
      // 设置 libraryName 的情况
      if (libraryName !== '') {
        if (rule[0] === '/') {
          rule = path.relative(path.join(appPath, '../'), rule)
          return
        }
        if (rule.match(reg)) {
          return
        }
      }
      // 未设置 libraryName
      if (rule[0] !== '/' && rule[0] !== '.') {
        const tempPath = path.join(fileInfo.dirname, `${rule}.wxml`)
        if (fs.pathExistsSync(tempPath)) {
          rule = `./${rule}`
        } else {
          rule = `/${rule}`
        }
      }
    } else {
      let tool = true
      if (isNpmCom.com !== 'weui-miniprogram') {
        try {
          let npmComFilePath = !_val.match(/miniprogram_npm\//) ? path.join(entry, './miniprogram_npm', _val) : path.join(fileInfo.path, '../', _val)
          if (!npmComFilePath.match(/\.js/)) {
            npmComFilePath += '.js'
          }
          const npmComExists = fs.existsSync(npmComFilePath)
          if (!npmComExists) {
            rule = path.join(rule, './index')
          }
        } catch (error) {
          processErrMassage(error, fileInfo.path.replace(entry, ''))
        }
      }
      keys(uiComponents).forEach((u) => {
        if (rule.match(u)) {
          tool = false
          rule = rule.replace(u, uiComponents[u])
        }
      })
      // ruleRoot不重复写入；tool是否支持的组件库；libraryName是否是组件库转换
      if (!ruleRoot && tool && !(libraryName && rule.match(reg))) {
        const rootName = '__antmove_miniprogram_npm'
        if (!rule.match(/wxml-to-canvas/)) {
          const rulseArr = rule.split('/')
          ruleRoot = rulseArr[0]
          rule = `/${rootName}/${rule}`
        } else {
          ruleRoot = 'wxml-to-canvas'
          rule = rule.replace('miniprogram_npm', rootName)
        }
        Config.notTransformNpmComponents
          = Config.notTransformNpmComponents || {}
        Config.notTransformNpmComponents[ruleRoot] = true
      }
    }
    _val = rule
    delete json.usingComponents[key]
    keys(componentPages).forEach((p) => {
      if (
        (_val[0] === '/'
          && path.join(entry, p)
            === path.join(entry, _val))
        || path.join(fileInfo.path, `../${_val}`)
          === path.join(entry, p)
      ) {
        const arr = _val.split('/')
        arr.splice(-1, 1, componentPages[p].componentName)
        _val = arr.join('/')
      }
    })
    json.usingComponents[_key] = _val
  })

  if (tagsInfo) {
    tagsInfo.forEach((tagInfo) => {
      if (tagInfo.type === 5) {
        Config.compile.customComponent[tagInfo.tagName] = true
        // the __component directory will rename as component
        let componentPath = tagInfo.path.replace('__component', 'component')
        const sep = ctx.$options.isNpmComponent ? '' : '../'
        componentPath = path.relative(path.join(appPath, sep).replace(/\\+/g, '/'), componentPath).replace(/\\+/g, '/')
        json.usingComponents = json.usingComponents || {}
        json.usingComponents[tagInfo.tagName] = componentPath
      }
    })
  }
  return JSON.stringify(json)
}
