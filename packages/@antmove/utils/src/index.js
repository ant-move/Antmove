const babelPlugins = require('./babel/index')
const preprecessCode = require('./preprocessCode')
const log = require('./log')
const file = require('./file.js')
const renderMD = require('./renderMD/index')
const common = require('./common')
const transformDoc = require('./tool/TransformationDoc/index')
const record = require('./record')
const reportMethods = require('./reportMethods')
const childProcess = require('./childProcess')
const transformPackage = require('./transformPackage')
const comStores = require('./comStores')
const getVersion = require('./getVersion')
const processMixTemplate = require('./processMixTemplate')
const report = require('./reprotError')
const processErr = require('./throwError')


process.on('uncaughtException', (err) => {
  /* 处理异常*/
  console.error(err.stack)
  report.reportError(null, null, `${err.stack}jsError`, 11)
  process.emit('exit', 1)
})

module.exports = {
  ...require('./getAntmoveConfigJs'),
  ...getVersion,
  ...babelPlugins,
  ...preprecessCode,
  log,
  renderMD,
  ...file,
  ...common,
  transformDoc,
  record,
  ...report,
  reportMethods,
  comStores,
  transformPackage,
  ...childProcess,
  processMixTemplate,
  transformEnvConfig: require('./processMixJson'),
  transformEnvStyle: require('./processMixStyle'),
  explorerSync: require('./crossCompile'),
  transformEnvXml: require('./crossCompile/parse/generateXml'),
  componentsCompiler: require('./transformComponents'),
  ...processErr,

  /**
     * defineGetter
     */
  defineGetter(obj = {}, descObj = {}, cb = () => {}) {
    return new Proxy(obj, {
      get(target, attr) {
        if (typeof attr === 'string' && descObj[attr]) {
          cb && cb(target, attr)
        }
    
        return target[attr]
      },
    })
  },
}
