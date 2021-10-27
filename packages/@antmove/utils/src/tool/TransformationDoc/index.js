const path = require('path')
const fs = require('fs-extra')
const fn = require('../generateDocs')

module.exports = function(configObj, type, edition) {
  const { apiRes, componentRes, lifeRes, jsonRes, unsupportApis, unsupportComponents, unsupportJson, unsupportLifeCircle } = fn(configObj, type, edition)
  const outputDist = path.join(__dirname, '../../../../../../../antmove-website/docs')
  apiRes.forEach((apiName) => {
    const _ = Object.keys(apiName)[0]
    fs.outputFile(`${outputDist}/${type}-api-${_}.md`, apiName[_])
  })
  lifeRes.forEach((lifeName) => {
    const _ = Object.keys(lifeName)[0]
    fs.outputFile(`${outputDist}/${type}-lifeCircle-${_}.md`, lifeName[_])
  })
  componentRes.forEach((componentName) => {
    const _ = Object.keys(componentName)[0]
    fs.outputFile(`${outputDist}/${type}-components-${_}.md`, componentName[_])
  })
  jsonRes.forEach((jsonName) => {
    const _ = Object.keys(jsonName)[0]
    fs.outputFile(`${outputDist}/${type}-json-${_}.md`, jsonName[_])
  })
  fs.outputFile(
    `${outputDist}/${type}-unsupport-apis.md`,
    unsupportApis,
  )

  fs.outputFile(
    `${outputDist}/${type}-unsupport-components.md`,
    unsupportComponents,
  )
  fs.outputFile(
    `${outputDist}/${type}-unsupport-json.md`,
    unsupportJson,
  )
  fs.outputFile(
    `${outputDist}/${type}-unsupport-lifeCircle.md`,
    unsupportLifeCircle,
  )
}

