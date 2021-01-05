const env = 'dev' // prod, 生产环境不输出

module.exports = {
  info() {},
  // 生命周期报错警告记录函数

  /**
     * msg 为发出的警告信息
     * lifeName 为发出警告的生命周期名字
     * **/
  warnLife(msg, lifeName) {
    if (env === 'prod') { return false }
    let logInfo = {
      appName: '',
      appVersion: '',
      pages: [],
    }
    const page = {
      pageName: '',
      path: '',
      open: false,
      logs: [],
    }
    const log = {
      type: '',
      errorType: '',
      name: '',
      message: '',
      custom: '',
    }
    let p = false
    let l = false
    let a = -1

    const res = wx.getStorageSync('__antmove_loginfo')
    if (res) {
      logInfo = res
    }
    const rs = wx.getStorageSync('_pageMsg')

    page.pageName = rs.pageName
    page.path = rs.pagePath
    log.type = 'life'
    let reg = ''
    if (msg.match(/support (\S*) attribute/)) {
      reg = msg.match(/support (\S*) attribute/)[1]
    }
    let _name = ''
    if (reg) {
      _name = `${lifeName}/${reg}`
    } else {
      _name = lifeName
    }
    log.name = _name
    log.message = msg

    if (res) {
      for (let i = 0; i < res.pages.length; i++) {
        if (rs.pagePath === res.pages[i].path) {
          p = true
          a = i
          for (let j = 0; j < res.pages[i].logs.length; j++) {
            if (_name === res.pages[i].logs[j].name) {
              l = true
              if (l) { break }
            }
          }
        } else {
          l = true
        }
      }
      if (p && !l) {
        logInfo.pages[a].logs.push(log)
      }
      if (!p && l) {
        page.logs.push(log)
        logInfo.pages.push(page)
      }
    } else {
      page.logs.push(log)
      logInfo.pages.push(page)
    }
    wx.setStorage({
      key: '__antmove_loginfo',
      data: logInfo,
    })
    console.warn(msg)
  },

  /**
    *  warn 为api报警的就函数
    *  _desc = {
    *      apiName: 报警的api的名字
    *      errorType: 报警的api警告等级
    *      type： 警告描述
    * }
    *  errorType等级分为:
    *  0 - missing - 不支持该属性
    *  1 - diff - 命名及格式不同
    *  3 - diffType - 类型不同
    *  4 - defaultValue - 默认值不同
    * 5 - wrapComponent - 使用自定义组件代替
    * 6 - diff tagName
    * 7 - equal - 完全支持
    */
  warn(
    msg,
    _desc = {
      apiName: '',
      errorType: '',
      type: '',
    },
  ) {
    if (env === 'prod') { return false }

    let logInfo = {
      appName: '',
      appVersion: '',
      pages: [],
    }
    const page = {
      pageName: '',
      path: '',
      open: '',
      logs: [],
    }
    const log = {
      type: '',
      errorType: '',
      name: '',
      message: '',
      custom: '',
    }
    const res = wx.getStorageSync('__antmove_loginfo')
    if (res) {
      logInfo = res
    }

    const rs = wx.getStorageSync('_pageMsg')
    page.pageName = rs.pageName
    page.path = rs.pagePath
    log.type = _desc.type
    let reg = ''
    if (msg.match(/support (\S*) attribute/)) {
      reg = msg.match(/support (\S*) attribute/)[1]
    }
    let _name = ''
    if (reg) {
      _name = `${_desc.apiName}/${reg}`
    } else {
      _name = _desc.apiName
    }
    log.name = _name
    log.message = msg
    log.errorType = _desc.errorType
    if (!_desc.errorType && _desc.errorType !== 0) {
      log.custom = 'No missing attribute'
    } else if (_desc.errorType === 0) {
      log.custom = '不支持该属性'
    } else if (_desc.errorType === 1) {
      log.custom = '命名及格式不同'
    } else if (_desc.errorType === 2) {
      log.custom = '类型不同'
    } else if (_desc.errorType === 3) {
      log.custom = '默认值不同'
    }
    let p = false
    let l = false
    let a = -1
    if (res) {
      for (let i = 0; i < res.pages.length; i++) {
        if (rs.pagePath === res.pages[i].path) {
          p = true
          a = i
          for (let j = 0; j < res.pages[i].logs.length; j++) {
            if (_name === res.pages[i].logs[j].name) {
              l = true
              if (l) { break }
            }
          }
        } else {
          l = true
        }
      }
      if (p && !l) {
        logInfo.pages[a].logs.push(log)
      }
      if (!p && l) {
        page.logs.push(log)
        logInfo.pages.push(page)
      }
    } else {
      page.logs.push(log)
      logInfo.pages.push(page)
    }
    wx.setStorageSync(
      '__antmove_loginfo',
      logInfo,
    )
    console.warn(msg)
  },
  error() {},
}
