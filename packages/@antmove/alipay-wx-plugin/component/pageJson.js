const Config = require('../config')
const appJson = require('../config/jsonInfo/globalconfig')
const pageJson = require('../config/jsonInfo/pageconfig')

const windowConfigMap = {}

mkJsonMap(appJson.window.props, windowConfigMap)
mkJsonMap(pageJson, windowConfigMap)

function mkJsonMap(props, targetJson) {
  Object.keys(props)
    .forEach((prop) => {
      const value = props[prop]
      if (value.type === 1) {
        targetJson[prop] = value.msg
      }
    })
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

module.exports = function(jsonStr, fileInfo) {
  if (!jsonStr) { return '' }
  const json = JSON.parse(jsonStr)
  replaceTheKey(json, windowConfigMap)

  // process wrap components
  const tagsInfo = fileInfo.tagsInfo
  if (tagsInfo) {
    tagsInfo.forEach((tagInfo) => {
      if (tagInfo.type === 5) {
        Config.compile.customComponent[tagInfo.tagName] = true
        // the __component directory will rename as component
        const componentPath = tagInfo.path.replace('__component', 'component')
        json.usingComponents = json.usingComponents || {}
        json.usingComponents[tagInfo.tagName] = componentPath
      }
    })
  }
  return JSON.stringify(json)
}
