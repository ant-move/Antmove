const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const {
  isTypeFile,
  setCompileType,
  reportError,
  recordOptions,
  transformEnvStyle,
  transformEnvXml,
  transformEnvConfig,
  transformClass,
  transformEs6,
  ifProcessHandleFn,
  getAppName,
  setAppFromId,
} = require('@antmove/utils')
const isWechatApp = require('../utils/isWechatApp')

module.exports = {
  defaultOptions: {
    exclude: [
      'project.config.json',
      'node_modules',
      'antmove.config.js',
      'miniprogram_npm',
    ],
    env: 'production',
    remote: false,
  },
  beforeParse(next) {
    const ver = fs.readJSONSync(path.join(__dirname, '../package.json')).version
    setAppFromId(this.$options.fromId)
    setCompileType(`wx@${ver}`)
    fs.emptyDirSync(this.$options.dist)
    if (!isWechatApp(this.$options.entry)) {
      console.log(
        chalk.red(
          `[Ops] ${this.$options.entry} is not a wechat miniproramm directory.`,
        ),
      )
      return false
    }
    next()
  },
  onParsing() {},
  onParsed() {},
  beforeCompile(ctx) {
    /**
     *
     */
  },
  onCompiling(fileInfo, ctx) {
    let content = ''
    if (fileInfo.type !== 'file') {
      fs.ensureDirSync(fileInfo.dist)
      return false
    }
    if (isTypeFile('.wxml', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = transformEnvXml(content, 'wx')
    } else if (isTypeFile('.js', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = ifProcessHandleFn(content, {
        entry: 'wx',
        dist: 'wx',
        code: 'wx.__target__',
      })
    } else if (isTypeFile('.json', fileInfo.path)) {
      content = fs.readJsonSync(fileInfo.path)
      content = transformEnvConfig('wx', content)
      if (fileInfo.deep === 0 && fileInfo.filename === 'app.json') {
        const json = JSON.parse(content)
        if (json.window && json.window.navigationBarTitleText) {
          process.env.appName = json.window.navigationBarTitleText
        } else {
          const appName = getAppName(
            json.pages,
            fileInfo.entry,
            'navigationBarTitleText',
          )
          process.env.appName = appName
        }
      }
    } else if (isTypeFile('.wxss', fileInfo.path)) {
      content = fs.readFileSync(fileInfo.path, 'utf8')
      content = transformEnvStyle(content, 'wx', true)
    } else {
      content = fs.readFileSync(fileInfo.path)
    }
    fs.outputFileSync(fileInfo.dist, content)
    return fileInfo
  },
  compiled() {
    let isReport = this.$options.isReport
    isReport = typeof isReport === 'boolean' ? isReport : true
    reportError(null, null, 'log', null, isReport)
    if (!this.$plugin.isMonitorFiles) {
      recordOptions(this.$options)
    }
  },
}
