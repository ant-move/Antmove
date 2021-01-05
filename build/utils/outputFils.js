const path = require('path')
const fs = require('fs-extra')

const apiFilePath = path.resolve(__dirname, '../amapDemo/API')
const componentFilePath = path.resolve(__dirname, '../amapDemo/component')
const {
  apiFileDisplay,
  componentFileDisplay,
} = require('./tool')

const apiOutputPath = path.join(__dirname, '../../packages/@antmove/wx-amap-plugin/config/apiInfo/apiInfo.js')
const componentOutputPath = path.join(__dirname, '../../packages/@antmove/wx-amap-plugin/config/componentsInfo/componentInfo.js')
const returnDOC = function(doc) {
  let info = ''
  info = `${info}module.exports =${doc}`
  return info
}
apiFileDisplay(apiFilePath).then((res) => {
  fs.outputFile(apiOutputPath, returnDOC(JSON.stringify(res, null, 4)))
})
componentFileDisplay(componentFilePath).then((res) => {
  fs.outputFile(componentOutputPath, returnDOC(JSON.stringify(res, null, 4)))
})
