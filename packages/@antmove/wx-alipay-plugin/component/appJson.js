const path = require('path')
const fs = require('fs-extra')
const toHex = require('colornames')
const { processErrMassage } = require('@antmove/utils')
const appJson = require('../config/jsonInfo/globalconfig')

/**
 * app config process
 */
const tabbarConfigMap = {}
const windowConfigMap = {}

/**
 * to hex color
 */
const colornames = {
  titleBarColor: true,
  backgroundColor: true,
  backgroundImageColor: true,
}

const windowProps = appJson.window.props
const tabBarProps = appJson.tabBar.props

mkJsonMap(windowProps, windowConfigMap)
mkJsonMap(tabBarProps, tabbarConfigMap)
mkJsonMap(tabBarProps.list.props, tabbarConfigMap)

function mkJsonMap(props, targetJson) {
  Object.keys(props)
    .forEach((prop) => {
      const value = props[prop]
      if (value.type === 1) {
        targetJson[prop] = value.key
      }
    })
}

function mkNewPage(newPath, newName) {
  const jsPath = `${newPath}.js`
  const xmlPath = `${newPath}.axml`
  const jsonPath = `${newPath}.json`
  const cssPath = `${newPath}.acss`
  const jsContent = `
        Page({})
    `
  const xmlContent = `
        <view class="${newName}">
            <${newName}></${newName}>
        <view>
    `
  const jsonContent = `
        {
            "usingComponents" : {
                "${newName}" : "./${newName}"
            }
        }
    `
  const cssContent = `
        .${newName}{
            width: 100%
        }
    `
  fs.outputFileSync(jsPath, jsContent)
  fs.outputFileSync(xmlPath, xmlContent)
  fs.outputFileSync(jsonPath, jsonContent)
  fs.outputFileSync(cssPath, cssContent)
}

module.exports = function(str, options) {
  const json = JSON.parse(str)
  const entry = options.entry
  const tabBar = json.tabBar
  const pages = json.pages
  if (pages) {
    pages.forEach((p) => {
      const filename = `${p}.json`
      const pagePath = path.join(entry, filename)
      if (fs.existsSync(pagePath)) {
        let nodeJson = {}
        try {
          nodeJson = JSON.parse(fs.readFileSync(pagePath, 'utf8'))
        } catch (error) {
          processErrMassage(error, filename)
        }
        if (nodeJson.component) {
          const newPage = path.join(p, '../')
          const newName = path.relative(newPage, p)
          const _newName = `${newName}-component`
          const newComponentPath = path.join(newPage, _newName)
          const pagefillPath = path.join(options.dist, p)
          options.componentPages = options.componentPages || {}
          options.componentPages[p] = {
            dir: newPage,
            path: newComponentPath,
            componentName: _newName,
          }
          mkNewPage(pagefillPath, _newName)
        }
      }
    })
  }
  if (tabBar) {
    const list = tabBar.list || []
    delete tabBar.list
    replaceTheKey(tabBar, tabbarConfigMap)
    tabBar.items = list
    list.forEach((el) => {
      for (const key in el) {
        if (tabbarConfigMap[key]) {
          el[tabbarConfigMap[key]] = el[key]
          delete el[key]
        }
      }
    })
  }
  if (json.subpackages) {
    json.subPackages = json.subpackages
    delete json.subpackages

    if (json.preloadRule) {
      const subPackages = json.subPackages
      const preloadRule = json.preloadRule
      const nameToRoot = {}
      subPackages.forEach((sub) => {
        if (sub.name) {
          nameToRoot[sub.name] = sub.root
        }
      })
      Object.keys(preloadRule)
        .forEach((rule) => {
          preloadRule[rule].packages
            .forEach((_path, index) => {
              if (nameToRoot[_path]) {
                preloadRule[rule].packages.splice(index, 1, nameToRoot[_path])
              }
            })
        })
    }
  }
  if (json.plugins) {
    delete json.plugins
  }
  replaceTheKey(json.window, windowConfigMap)

  return JSON.stringify(json)
}

/**
 * replace key of object
 */
function replaceTheKey(obj, configMap) {
  if (!obj) { return false }
  Object.keys(obj)
    .forEach((key) => {
      const _key = configMap[key]
      if (_key) {
        if (colornames[_key] && obj[key][0] !== '#') {
          obj[key] = toHex(obj[key])
        }
        obj[_key] = obj[key]
        delete obj[key]
      }
    })
  return obj
}
