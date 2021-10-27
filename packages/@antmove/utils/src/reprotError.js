const path = require('path')
const fs = require('fs-extra')
const axios = require('axios').default

/**
 * error message report
 * @param reportCompInfo 上报组件或属性
 */
function reportError(type, appName, _msg = 'log', logType, isReprot, isReportComp = false,compName,reportCompInfo) {
  if (!isReprot) { return }
  type = type || process.env.compilerType || ''
  appName = appName || process.env.appName || ''
  const fromId = process.env.fromId || '0'
  let msg = `${type}-${appName}-${_msg}-${fromId}`
  if(isReportComp){
    msg += `-${compName}${reportCompInfo? '_'+reportCompInfo : ''}`
  }
  try {
    axios({
      method: 'post',
      url: 'http://gm.mmstat.com/fsp.1.1',
      data: `{"gmkey":"OTHER","gokey":"delay=0&hash=&last_pos=0%252C0&msg=${msg}&page=null&patch_ver=-&pid=platformi-server-app&query=&raw_ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&referrer=http://&rel=&scr=2560x1440&spm_a=&spm_b=&title=mini-server&tracker_ver=4.3.0&type=${logType || 12}&ua=Mozilla%252F5.0%2520(Macintosh%253B%2520Intel%2520Mac%2520OS%2520X%252010_14_6)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F77.0.3865.90%2520Safari%252F537.36&uid=","logtype":"2"}`,
    }).catch(err=>{
      // 上传失败
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  setAppName(name) {
    process.env.appName = name
  },
  setCompileType(type) {
    process.env.compilerType = type
  },
  setAppFromId(fromId) {
    process.env.fromId = fromId
  },
  reportError,
  getAppName(pagesPath, baseDirName, attrName) {
    let appName = ''
    pagesPath && pagesPath.some((item) => {
      const filePath = path.join(baseDirName, `${item}.json`)
      const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      if (content[attrName]) {
        appName = content[attrName]
        return true
      }
      return false
    })
    return appName
  },
}
