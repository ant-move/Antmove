const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')
const {
  prettierCode,
  isTypeFile,
  record,
  reportMethods,
  setAppName,
  setCompileType,
  reportError,
  getAppName,
  recordOptions,
} = require('@antmove/utils')
const AxmlParser = require('../parse/parseAxml.js')
const antmoveHandle = require('../utils/antmoveHandle')
const generateBundleApi = require('../generate/generateBundleApi')
const generateBundleComponent = require('../generate/generateWrapComponents')
const appJsonProcess = require('../component/appJson')
const pageJsonProcess = require('../component/pageJson')
const generateConfig = require('../generate/generateConfig')
const getPackageJson = require('../utils/getpackageData')
const isAlipayApp = require('../utils/isAlipayApp')
const getCache = require('../utils/getCache')
const compileAxml = require('./compile/compileAxml')
const compileAcss = require('./compile/compileAcss')
const compileJs = require('./compile/compileJs')

const project = {
  name: '',
  path: '',
  distPath: '',
  fileNum: 0,
  pageNum: 0,
  componentNum: 0,
  usetime: '',
}

const Config = require('../config.js')
const { processAppJson } = require('../generate/generateRuntimeLogPage')

const {
  report,
  reportTable,
  reportSpeed,
  reportDist,
} = reportMethods
// 制作日志
const recordConfig = require('../utils/record/config')

const {
  resDataInit,
} = record(recordConfig)

// 默认报告不显示具体文件
const showCompile = false
// 默认查看报告
let showReport = false
const statFileNameArr = []
let readtimes = 0
let finishFile = 0
let projectParents = ''
let beginTime = 0
// 输出日志数据
const repData = resDataInit()

module.exports = {
  defaultOptions: {
    exclude: [
      'project.config.json',
      'node_modules',
      'antmove.config.js'
    ],
    env: 'production',
    remote: false,
  },
  beforeParse(next) {
    const ver = fs.readJSONSync(path.join(__dirname, '../package.json')).version
    setCompileType(`alipay-baidu@${ver}`)
    const {
      getSurrounding,
    } = record(recordConfig)
    fs.emptyDirSync(this.$options.dist)
    let ifComponent = false
    if (this.$options.component === 'component') {
      ifComponent = true
    }
    if (!isAlipayApp(this.$options.entry, ifComponent) && !this.$options.isWx2Baidu) {
      console.log(chalk.red(`[Ops] ${this.$options.entry} is not a alipay miniproramm directory.`))
      return false
    }
    recordOptions(this.$options)
    antmoveHandle(this.$options.entry)
    Config.env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
    showReport = Config.env === 'development'
    beginTime = Number(new Date())
    const date = ''
    report(date, { type: 'title', showReport })
    repData.surroundings = getSurrounding()
    next()
  },
  onParsing(fileInfo) {
    if (fileInfo.type === 'file') {
      const antmoveAcss = path.join(this.$options.entry, '__antmove/static/app.acss')
      if (fileInfo.path !== antmoveAcss) {
        project.fileNum++
      }
      if (fileInfo.filename === 'app.json') {
        project.path = fileInfo.dirname
        const distPath = this.$options.dist
        project.distPath = distPath.substr(0, distPath.length - 1)
        report('', {
          type: 'project',
          path: project.path,
          showReport,
          showCompile,
        })
      }
    }
    if (isTypeFile('.axml', fileInfo.path)) {
      const ast = AxmlParser.parseFile(fileInfo.path)
      fileInfo.ast = ast
    }
  },
  onParsed() {
    const { packageData, antmovePackageData } = getPackageJson()
    const toolData = { tool: '@antmove/alipay-baidu', version: packageData.version }

    try {
      reportDist(`${antmovePackageData.version}`, this.$options.dist, toolData)
    } catch (err) {
      return false
    }
  },
  beforeCompile(ctx) {
    fs.emptyDirSync(ctx.$options.dist)
    this.$options.antmoveCache = getCache(this.$options.entry)
  },
  onCompiling(fileInfo, ctx) {
    const {
      getTemplateData,
      getStyleData,
      getScriptData,
      getCustomScript,
      getJsonData,
      getOthersFile,
    } = record(recordConfig)
    if (fileInfo.type !== 'file') {
      fs.ensureDirSync(fileInfo.dist)
      return false
    }

    let date = new Date()
    const reportData = {
      info: fileInfo.dirname,
      type: 'parse',
      showReport,
      length: project.fileNum,
      nums: finishFile,
    }
    if (!fileInfo.parent) {
      readtimes = 0
      let pathArr = fileInfo.path.split('\\')
      if (pathArr.length < 3) {
        pathArr = pathArr[0].split('/')
      }
      projectParents = pathArr[pathArr.length - 3]
      reportData.info = fileInfo.path.split(projectParents)[1].substr(1)
      report(date, reportData)
    } else if (statFileNameArr.indexOf(fileInfo.dirname) === -1) {
      readtimes = 0
      reportData.info = fileInfo.dirname.split(projectParents)[1].substr(1)
      report(date, reportData)
      statFileNameArr.push(fileInfo.dirname)
    }
    readtimes++
    if (isTypeFile('.axml', fileInfo.path)) {
      const reptempData = getTemplateData(fileInfo, project.name)
      compileAxml(fileInfo, ctx)
      const reportData = {
        info: fileInfo.path.split(projectParents)[1].substr(1),
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, reportData)
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.acss', fileInfo.path)) {
      const antmoveAcss = path.join(this.$options.entry, '__antmove/static/app.acss')
      if (fileInfo.path === antmoveAcss) {
        return false
      }

      compileAcss(fileInfo, ctx, project.distPath)
      const reptempData = getStyleData(fileInfo.path.split(projectParents)[1].substr(1))

      const reportData = {
        info: fileInfo.path.split(projectParents)[1].substr(1),
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, reportData)
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.js', fileInfo.path)) {
      const pathinfo = fileInfo.path.split(projectParents)[1].substr(1)
      const originCode = fs.readFileSync(fileInfo.path, 'utf8')
      const wxoriginCode = originCode
      const apis = {}
      fileInfo.antmoveCache = this.$options.antmoveCache
      compileJs(fileInfo, ctx, originCode, apis, this.$options.entry)

      const reportData = {
        info: pathinfo,
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, reportData)
      const reptempData = getScriptData(pathinfo, apis, wxoriginCode, 'my')
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.sjs', fileInfo.path)) {
      const pathinfo = fileInfo.path.split(projectParents)[1].substr(1)
      const reptempData = getCustomScript(pathinfo)
      repData.transforms = Object.assign(repData.transforms, reptempData)
      const content = fs.readFileSync(fileInfo.path, 'utf8') || ''
      const reportData = {
        info: pathinfo,
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, reportData)

      fs.outputFileSync(fileInfo.dist, content)
    } else {
      let content
      if (fileInfo.deep === 0 && fileInfo.filename === 'app.json') {
        content = fs.readFileSync(fileInfo.path, 'utf8')
        const appData = JSON.parse(content)
        const json = appData
        if (json.window && json.window.defaultTitle) {
          setAppName(json.window.defaultTitle)
        } else {
          const appName = getAppName(json.pages, fileInfo.entry, 'defaultTitle')
          setAppName(appName)
        }
        const pathInfo = fileInfo.path.split(projectParents)[1].substr(1)
        const jsonData = getJsonData(pathInfo, content)
        repData.transforms = Object.assign(repData.transforms, jsonData)
        content = processAppJson(content)
        const app = JSON.parse(content)
        let dirnameArr = fileInfo.dirname.split('/')
        if (dirnameArr.length <= 1) {
          dirnameArr = dirnameArr[0].split('\\')
        }
        try {
          project.name = app.window.navigationBarTitleText || dirnameArr[dirnameArr.length - 1]
        } catch (err) {
          project.name = dirnameArr[dirnameArr.length - 1]
        }

        try {
          project.pageNum = app.pages.length
        } catch (err) {
          project.pageNum = 0
        }
        content = appJsonProcess(content)
        content = prettierCode(content, 'json', {
          useTabs: true,
          tabWidth: 4,
        })

        const reportData = {
          info: pathInfo,
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, reportData)
      } else if (fileInfo.deep > 0 && fileInfo.extname === '.json') {
        const { transformPackage } = require('@antmove/utils')
        const pathInfo = fileInfo.path.split(projectParents)[1].substr(1)
        const parent = fileInfo.parent
        let bool = false
        let AxmlFileInfo = null
        parent && parent.children && parent.children.forEach((el) => {
          if (`${fileInfo.basename}.axml` === el.filename) {
            bool = true
            AxmlFileInfo = el
          }
        })
        content = fs.readFileSync(fileInfo.path, 'utf8')
        const pageJson = JSON.parse(content)
        if (pageJson.usingComponents) {
          const componentObj = pageJson.usingComponents
          Object.keys(componentObj).map((key) => {
            if (key !== 'custom-rich-text') {
              componentObj[`antmove-${key}`] = componentObj[key]
              delete componentObj[key]
            }
          })
          if (pageJson.component) {
            project.componentNum++
          }
          content = JSON.stringify(pageJson, null, 4)
        }
        if (bool) {
          content = pageJsonProcess.call(ctx, content, AxmlFileInfo, project.distPath)
        }
        if (fileInfo.path.includes('package.json')) {
          content = transformPackage(fileInfo)
        }
        const jsonData = getJsonData(pathInfo, content)
        repData.transforms = Object.assign(repData.transforms, jsonData)

        content = prettierCode(content, 'json', {
          useTabs: true,
          tabWidth: 4,
        })
        const reportData = {
          info: pathInfo,
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, reportData)
      } else {
        content = fs.readFileSync(fileInfo.path)
               
        if (content) {
          project.componentNum++
        }
        const reportData = {
          info: fileInfo.path.split(projectParents)[1].substr(1),
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, reportData)
                
        const otherData = getOthersFile(fileInfo.path.split(projectParents)[1].substr(1))
        repData.transforms = Object.assign(repData.transforms, otherData)
      }
            
      fs.outputFileSync(fileInfo.dist, content)
    }
    // 记录当前处理完成的文件数目
    finishFile++

    const generateData = {
      info: fileInfo.path.split(projectParents)[1].substr(1),
      type: 'generate',
      showReport,
      length: project.fileNum,
      nums: finishFile,
    }

    if (!fileInfo.parent) {
      report(date, generateData)
    } else if (readtimes === fileInfo.parent.children.length) {
      generateData.info = fileInfo.dirname.split(projectParents)[1].substr(1)
      report(date, generateData)
    }
       
    reportSpeed({
      showReport,
      length: project.fileNum,
      nums: finishFile,
    })
    return fileInfo
  },
  compiled(ctx, cb = () => {}) {
    let isReport = this.$options.isReport
    isReport = typeof isReport === 'boolean' ? isReport : true
    reportError(null, null, 'log', null, isReport)
    generateBundleApi(ctx.output)
        
    generateBundleComponent(ctx.output)

    const {
      findOpenAbility,
      statistics,
      writeReportPage,
    } = record(recordConfig)
    const tableInfo = {
      项目名称: project.name,
      项目路径: project.path,
      输出路径: project.distPath,
      文件数: String(project.fileNum),
      页面数: String(project.pageNum),
      组件数: String(project.componentNum),
            
    }
        
    repData.tableInfo = tableInfo

    generateConfig(ctx.output, Config, (targetPath) => {
      // removeAntUtils(this.$options.entry, this.$options.dist);
      const nowTime = report(beginTime, {
        showReport,
        type: 'computedTime',
      })
      tableInfo['总耗时'] = `${nowTime}ms`
      reportTable({ tableInfo, showReport })
      repData.opening = findOpenAbility(repData, 'my')
      const statisticsData = statistics(repData.transforms)
      repData.concept = statisticsData
      writeReportPage(repData, targetPath)

      cb()
    })
  },
}
