/**
 * add api wrap bundle
 */
const path = require('path')
const fs = require('fs-extra')
const {
  minifyJs,
  transformEs6,
} = require('@antmove/utils')
const Config = require('../config.js')
const wrapApis = require('../__api/my.js')
const wrapApisInfo = require('../config/apiInfo/index').descObject

const entry = path.join(__dirname, '../__api')

module.exports = function(output) {
  const customComponentPrefix = Config.library.customComponentPrefix
  const outputPath = path.join(output, `${customComponentPrefix}/api`)
  // let apiContent = minifyObject(wrapApis, Config.compile.wrapApis);
  let apiContent = wrapApis
  let apiInfo = minifyObject(wrapApisInfo, Config.compile.wrapApis)
  // let apiInfo = wrapApisInfo;
  apiContent = objToString(apiContent)
  apiContent = apiContent.replace(/\\n/g, '')
  apiContent = apiContent.replace(/\\"/g, '"')

  apiInfo = objToString(apiInfo)
  apiInfo = apiInfo.replace(/\\n/g, '')
  apiInfo = apiInfo.replace(/\\"/g, '"')

  Config.wrapApiFiles.forEach((file) => {
    copyFile(file)
  })

  let myJS = `const utils = require("./utils");\nconst descObj = require("./desc.js");\nconst apiObj = ${apiContent}\nmodule.exports = apiObj;`
  let descJs = `const utils = require("./utils");\nconst infoObj = ${apiInfo}\nmodule.exports = infoObj;`

  if (!Config.isDev()) {
    myJS = minifyJs(
      transformEs6(myJS),
    )
    descJs = minifyJs(
      transformEs6(descJs),
    )
  }

  fs.outputFileSync(path.join(outputPath, 'my.js'), myJS)
  fs.outputFileSync(path.join(outputPath, 'desc.js'), descJs)

  function copyFile(filename) {
    const inputPath = path.join(entry, filename)
    const distPath = path.join(outputPath, filename)
    if (!Config.isDev()) {
      const content = fs.readFileSync(inputPath, 'utf8')
      fs.outputFileSync(distPath, minifyJs(
        transformEs6(content),
      ))
    } else {
      fs.copy(inputPath, distPath, (err) => {
        if (err) { console.error(err) }
      })
    }
  }
}


function objToString(obj = {}) {
  let code = '{'
  Object.keys(obj)
    .forEach((item) => {
      if (typeof obj[item] === 'object') {
        code += `${String(item)}:${objToString(obj[item])},`
      } else if (typeof obj[item] === 'function') {
        const fnStr = obj[item].toString()
        if (fnStr.match(/^function/)) {
          code += `${item}:${fnStr},`
        } else {
          code += `${item}: function ${fnStr},`
        }
      } else if (obj[item] !== undefined) {
        if (typeof obj[item] === 'string') {
          code += `${item}:"${obj[item]}",`
        } else {
          code += `${item}:${obj[item]},`
        }
      }
    })

  return `${code}}`
}


function minifyObject(obj = {}, props = {}) {
  const _obj = {}

  Object.keys(props)
    .forEach((item) => {
      _obj[item] = obj[item]
    })

  return _obj
}
