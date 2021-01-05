/**
 * add runtime log page for target alipay app
 */
const path = require('path')
const fs = require('fs-extra')
const config = require('../config')

const componentDirName = config.log.runtime.dirname || '__runtime__logs__'

const logPagePath = path.join(__dirname, '../', `__component/${componentDirName}`)
function generateLogPage(dist) {
  const distPath = path.join(dist, `/pages/${componentDirName}`)

  if (config.env === 'development') {
    fs.copySync(logPagePath, distPath)
  }
}

function processAppJson(json) {
  json = JSON.parse(json)
  if (config.env === 'development') {
    json.pages.push(`pages/${componentDirName}/index`)
    json.pages.push(`pages/${componentDirName}/specific/index`)
  }

  return JSON.stringify(json)
}

module.exports = {
  generateLogPage,
  processAppJson,
}
