const path = require('path')
const fs = require('fs-extra')

module.exports = function isWechatApp(dirname) {
  const appJs = path.join(dirname, './app.js')
  const appCss = path.join(dirname, './app.wxss')
  const appJson = path.join(dirname, './app.json')

  return (fs.pathExistsSync(appJs)
            && fs.pathExistsSync(appCss)
            && fs.pathExistsSync(appJson))
}
