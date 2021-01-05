const appJson = require('../config/jsonInfo/globalconfig')

/**
 * app config process
 */
const tabbarConfigMap = {}
const windowConfigMap = {}

const windowProps = appJson.window.props
const tabBarProps = appJson.tabBar.props

mkJsonMap(windowProps, windowConfigMap)
mkJsonMap(tabBarProps, tabbarConfigMap)
mkJsonMap(tabBarProps.items.props, tabbarConfigMap)
function mkJsonMap(props, targetJson) {
  Object.keys(props)
    .forEach((prop) => {
      const value = props[prop]
      if (value.type === 1) {
        targetJson[prop] = value.msg
      }
    })
}
module.exports = function(str) {
  let tabBar
  const json = JSON.parse(str)
  tabBar = json.tabBar
  if (tabBar) {
    replaceTheKey(tabBar, tabbarConfigMap)

    const list = tabBar.list || []
    list.forEach((el) => {
      for (const key in el) {
        if (tabbarConfigMap[key]) {
          el[tabbarConfigMap[key]] = el[key]
          delete el[key]
        }
      }
    })
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
        obj[_key] = obj[key]
        delete obj[key]
      }
    })
  return obj
}
