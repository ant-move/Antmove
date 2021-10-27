const path = require('path')
const fs = require('fs-extra')

module.exports = function isAlipayApp(dirname, isComponent = false) {
  if (isComponent) { return true }
  let isAlipay = false
  const appJs = path.join(dirname, './app.js')
  const appJson = path.join(dirname, './app.json')
  if (fs.pathExistsSync(appJs) && fs.pathExistsSync(appJson)) {
    const JsonData = JSON.parse(fs.readFileSync(appJson))
    const JsonDataArr = JsonData.pages[0].split('/')
    JsonDataArr.pop()
    const dirPagePath = path.join(dirname, JsonDataArr.join('/'))
    const fileList = fs.readdirSync(dirPagePath)
    fileList.forEach((item) => {
      if (item.includes('.axml')) {
        isAlipay = true
      }
    })
  }
  return isAlipay
}
