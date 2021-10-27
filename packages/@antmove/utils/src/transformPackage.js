const path = require('path')
const fs = require('fs-extra')
const convertedComponents = require('./comStores')
const { getNpmComObj } = require('./getAntmoveConfigJs')

const convertedNpmName = Object.keys(convertedComponents)

module.exports = function transformPackage(fileInfo) {
  let packageJson = JSON.parse(fs.readFileSync(fileInfo.path).toString())
  const antmoveConfigPath = path.join(fileInfo.entry, './antmove.config.js')
  // useExtendedLib 方式引入 weui 组件库,暂不支持
  const appContent = fs.readJSONSync(path.join(fileInfo.entry, './app.json'))
  if (appContent.useExtendedLib && appContent.useExtendedLib.weui) {
    packageJson.dependencies = packageJson.dependencies || {}
    const npmComName = 'weui-aliapp'
    const weuiComObj = getNpmComObj(npmComName, npmComName)
    packageJson.dependencies[npmComName] = weuiComObj[npmComName].version
  }

  if (fs.existsSync(antmoveConfigPath)) {
    const antmoveJson = require(antmoveConfigPath)
    if (!antmoveJson.npm) { return JSON.stringify(packageJson, null, 4) }
    packageJson = replaceNpmName(packageJson, antmoveJson)
  } else {
    packageJson.dependencies && Object.keys(packageJson.dependencies).forEach((key) => {
      if (convertedNpmName.includes(key)) {
        const npmComObj = getNpmComObj(convertedComponents[key], key)
        const newKey = npmComObj[key].name
        packageJson.dependencies[newKey] = npmComObj[key].version
        delete packageJson.dependencies[key]
      }
    })
  }
  return JSON.stringify(packageJson, null, 4)
}

function replaceNpmName(packageJson, antmoveJson) {
  packageJson.dependencies && Object.keys(packageJson.dependencies).forEach((key) => {
    if (convertedNpmName.includes(key) && antmoveJson.npm[key]) {
      const newKey = antmoveJson.npm[key].name
      packageJson.dependencies[newKey] = antmoveJson.npm[key].version
      delete packageJson.dependencies[key]
    }
  })
  packageJson.devDependencies && Object.keys(packageJson.devDependencies).forEach((key) => {
    if (convertedNpmName.includes(key)) {
      const newKey = antmoveJson.npm[key].name
      packageJson.devDependencies[newKey] = antmoveJson.npm[key].version
      delete packageJson.devDependencies[key]
    }
  })
  return packageJson
}
