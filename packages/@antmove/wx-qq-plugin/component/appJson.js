const toHex = require('colornames')
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
// mkJsonMap(tabBarProps.list.props, tabbarConfigMap);

function mkJsonMap(props, targetJson) {
  Object.keys(props)
    .forEach((prop) => {
      const value = props[prop]
      if (value.type === 1) {
        targetJson[prop] = value.key
      }
    })
}

module.exports = function(str) {
  const json = JSON.parse(str)

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
