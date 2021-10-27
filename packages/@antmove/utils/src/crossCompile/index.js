const path = require('path')
const fs = require('fs-extra')
const { isTypeFile } = require('../common')
const transformEnvStyle = require('../processMixStyle')
const { ifProcessHandleFn } = require('../babel')
const transformEnvConfig = require('../processMixJson')
const { reportError, getAppName } = require('../reprotError')
const generateXml = require('./parse/generateXml')

function walk(arr = [], cb) {
  arr.forEach((el) => {
    if (Array.isArray(el.children)) {
      walk(el.children, cb)
    } else {
      cb && cb(el)
    }
  })
}

module.exports = function(inputProjectInfo = [], opts = {}, platformType = 'alipay') {
  process.env.fromId = opts.fromId
  walk(inputProjectInfo, (fileInfo) => {
    const antmoveDist = path.resolve(opts.antmoveDist, fileInfo.dist.replace(opts.output, ''))
    let content = ''
    if (isTypeFile('.wxml', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = generateXml(content, platformType)
    } else if (isTypeFile('.json', fileInfo.path)) {
      content = fs.readJsonSync(fileInfo.path)
      content = transformEnvConfig(platformType, content)
      if (fileInfo.deep === 0 && fileInfo.filename === 'app.json') {
        const json = JSON.parse(content)
        if (json.window && json.window.navigationBarTitleText) {
          process.env.appName = json.window.navigationBarTitleText
        } else {
          const appName = getAppName(json.pages, fileInfo.entry, 'navigationBarTitleText')
          process.env.appName = appName
        }
      }
    } else if (isTypeFile('.js', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = ifProcessHandleFn(content, {
        entry: 'wx',
        dist: platformType,
        code: 'wx.__target__',
      })
    } else if (isTypeFile('.wxss', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = transformEnvStyle(content, platformType, true)
    } else {
      content = fs.readFileSync(fileInfo.path, 'utf8')
    }
        
    fs.outputFileSync(antmoveDist, content)
  })
  let isReport = opts.isReport
  isReport = typeof isReport === 'boolean' ? isReport : true
  reportError(null, null, 'log', null, isReport)
}
