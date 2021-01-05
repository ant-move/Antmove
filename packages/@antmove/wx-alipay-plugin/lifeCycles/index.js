const path = require('path')
const chalk = require('chalk')
const fs = require('fs-extra')
const {
  prettierCode,
  isTypeFile,
  record,
  reportMethods,
  runJs,
  cjsToes,
  emptyFiles,
  setAppName,
  setCompileType,
  setAppFromId,
  reportError,
  getAppName,
  recordOptions,
  transformEnvConfig,
  processErrMassage,
} = require('@antmove/utils')
const transformNpmComponents = require('../useCore/npmComponentsTransform')
const { monitorFiles } = require('../useCore/watcher')
const wxmlParser = require('../parse/parse.js')
// const upDataTool = require("../utils/updataTool");
const appJsonProcess = require('../component/appJson')
const pageJsonProcess = require('../component/pageJson')
const checkCoverView = require('../utils/checkCoverView') // cover-view 检测
const getPackageJson = require('../utils/getpackageData')
const saveComponentJs = require('../utils/saveComponentJs')
const generateBundleComponent = require('../generate/generateWrapComponents')
const generateMiniProjectJson = require('../generate/generateMiniProjectJson')
const generateAntmoveReadme = require('../generate/generateAntmoveReadme')
// const generateWxsDeps = require('../generate/generateWxsDep')
// 制作日志
const recordConfig = require('../utils/record/config')
const isWechatApp = require('../utils/isWechatApp')
const { processAppJson } = require('../generate/generateRuntimeLogPage')
const Config = require('../config.js')
const compileJs = require('./compile/compileJs')
const compileWxss = require('./compile/compileWxss')
const compileWxml = require('./compile/compileWxml')

const project = {
  name: '',
  path: '',
  distPath: '',
  fileNum: 0,
  pageNum: 0,
  componentNum: 0,
  usetime: '',
}

const { report, reportTable, reportSpeed, reportDist } = reportMethods

// 默认报告不显示具体文件
const showCompile = true
// 默认查看报告
let showReport = false
const statFileNameArr = []
let readtimes = 0
let finishFile = 0
let projectParents = ''
const beginTime = Number(new Date())
// 输出日志数据
let repData = {}
// let isUpdata = true;
// let baseurl = 'http://cache.amap.com/ecology/tool/antmove/wechat-alipay/';

const exportObj = {
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
    process.on('warning', () => {
      if (process.env.transFile) {
        console.log()
        console.log(
          chalk.yellow(
            `(${process.env.transFile}) 转换失败，请通过Github: https://github.com/ant-move/Antmove 或加钉群(21977588)联系我们`,
          ),
        )
      }
    })
    const ver = fs.readJSONSync(path.join(__dirname, '../package.json')).version
    setCompileType(`wx-alipay@${ver}`)
    setAppFromId(this.$options.fromId)
    let ifComponent = false
    if (this.$options.component === 'component') {
      ifComponent = true
    }
    try {
      if (!isWechatApp(this.$options.entry, ifComponent)) {
        const errStr = `[Ops] ${this.$options.entry} 不是一个微信小程序目录, 请检查目录或请通过Github: https://github.com/ant-move/Antmove 加钉群(21977588)联系我们.`
        if (this.$options.error) {
          next(errStr)
          throw new Error(errStr)
        } else {
          console.log(chalk.red(errStr))
        }
        return false
      }
    } catch (err) {
      console.log(err)
      return false
    }
    this.$options.empty
      && fs.existsSync(this.$options.dist)
      && emptyFiles(this.$options.dist, [
        'miniprogram_npm',
        'node_modules',
        '.tea',
        'mini.project.json',
      ])

    if (this.$options.scope && /true/.test(this.$options.scope)) {
      Config.options.scopeStyle = true
    }

    Config.env
      = process.env.NODE_ENV === 'development' ? 'development' : 'production'
    showReport = Config.env === 'development'
    Config.component2
      = typeof this.$options.component2 === 'boolean'
        ? this.$options.component2
        : true
    Config.useRuntimeLog
      = typeof this.$options.useRuntimeLog === 'boolean'
        ? this.$options.useRuntimeLog
        : false
    Config.aliAppType = this.$options.platform || 'alipay'
    if (this.$options.component === 'component') {
      Config.min = true
    }
    if (!this.$options.isNpmComponent) {
      // isUpdata = this.$options.remote;    // 是否从远程拉取 polyfill 代码
      const date = ''
      report(date, { type: 'title', showReport })
      const { getSurrounding, getToolVs, resDataInit } = record(recordConfig)

      repData = resDataInit()
      repData.surroundings = getSurrounding()
      const versionData = {}
      versionData.version = this.$options.version
      repData.toolVs = getToolVs(versionData)
      
      const pathArr = this.$options.entry.split(path.sep)
      projectParents = pathArr[pathArr.length - 3]
    }
    // const toolPath = path.join(__dirname, '../package.json');
    // const toolVsData = JSON.parse(fs.readFileSync(toolPath)).version;
    // baseurl = baseurl + toolVsData;
    // try {
    //     await upDataTool({ baseurl, isUpdata, showReport });
    // } catch (err) {}
    next()
  },
  onParsing(fileInfo) {
    if (fileInfo.basename.includes('@')) {
      console.log(
        '支付宝小程序文件或文件夹名中不允许出现 @ 符号，真机调试和预览会有构建失败的风险',
        fileInfo.path,
      )
    }
    fileInfo.output = this.$options.dist
    fileInfo.entry = this.$options.entry
    if (fileInfo.type === 'file') {
      project.fileNum++
      if (fileInfo.filename === 'app.json') {
        project.path = fileInfo.dirname
        const distPath = fileInfo.dist.split('app.json')[0]
        project.distPath = path.join(distPath.substr(0, distPath.length - 1))

        report('', {
          type: 'project',
          path: project.path,
          showReport,
          showCompile,
        })
      }
    }
    if (isTypeFile('.wxml', fileInfo.path)) {
      fileInfo.ast = wxmlParser.parseFile(fileInfo.path)
    }
  },

  onParsed() {
    const { packageData, antmovePackageData } = getPackageJson()

    if (!this.$options.isWx2Baidu) {
      try {
        reportDist(`${antmovePackageData.version}`, this.$options.dist, {
          tool: '@antmove/wx-alipay',
          version: packageData.version,
        })
      } catch (err) {
        return false
      }
    } else {
      console.log('\n ')
    }
  },
  beforeCompile() {
    /**
     *
     */
  },
  onCompiling(fileInfo, ctx) {
    ctx.$options.output = ctx.$options.output || ctx.$options.dist
    const {
      getTemplateData,
      getStyleData,
      getCustomScript,
      getScriptData,
      getJsonData,
      getOthersFile,
    } = record(recordConfig)
    if (fileInfo.type !== 'file') {
      fs.ensureDirSync(fileInfo.dist)
      return false
    }
    process.env.transFile = fileInfo.path
    let date = new Date()
    const reportData = {
      info: fileInfo.dirname,
      type: 'parse',
      showReport,
      length: project.fileNum,
      nums: finishFile,
    }
    let isComponentPage = false

    if (!fileInfo.parent) {
      readtimes = 0
      const pathArr = fileInfo.path.split(path.sep)
      projectParents = pathArr[pathArr.length - 3] || ''
      reportData.info = fileInfo.path.split(projectParents)[1].substr(1)
      report(date, reportData)
    } else if (statFileNameArr.indexOf(fileInfo.dirname) === -1) {
      readtimes = 0
      reportData.info = fileInfo.dirname.split(projectParents)[1].substr(1)
      report(date, reportData)
      statFileNameArr.push(fileInfo.dirname)
    }
    readtimes++
    if (ctx.$options && ctx.$options.componentPages) {
      Object.keys(ctx.$options.componentPages).forEach((p) => {
        if (
          path.join(fileInfo.entry, p)
          === fileInfo.path.replace(fileInfo.extname, '')
        ) {
          fileInfo.dist = fileInfo.dist.replace(
            p,
            ctx.$options.componentPages[p].path,
          )
          isComponentPage = {
            originPath: p,
            ...ctx.$options.componentPages[p],
          }
        }
      })
    }
    if (isTypeFile('.wxml', fileInfo.path)) {
      compileWxss(fileInfo, this.$options, true, isComponentPage)
      const projectname = fileInfo.entry
      const reptempData = getTemplateData(fileInfo, projectname)
      checkCoverView(fileInfo.ast, reptempData)
      compileWxml(fileInfo, ctx)
      const _reportData = {
        info: fileInfo.path.split(projectParents)[1].substr(1),
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, _reportData)
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.wxss', fileInfo.path)) {
      compileWxss(fileInfo, this.$options)
      const reptempData = getStyleData(
        fileInfo.path.split(projectParents)[1].substr(1),
      )

      const _reportData = {
        info: fileInfo.path.split(projectParents)[1].substr(1),
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, _reportData)
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.js', fileInfo.path)) {
      const pathinfo = fileInfo.path.split(projectParents)[1].substr(1)
      const originCode = fs.readFileSync(fileInfo.path, 'utf8')
      const wxoriginCode = originCode
      const apis = {}
      if (this.$options.isWx2Baidu) {
        saveComponentJs(fileInfo, originCode, this.$options)
      }
      try {
        compileJs(fileInfo, ctx, originCode, apis)
      } catch (error) {
        processErrMassage(error, fileInfo.path.replace(fileInfo.entry, ''))
      }
      const _reportData = {
        info: pathinfo,
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, _reportData)
      const reptempData = getScriptData(pathinfo, apis, wxoriginCode)
      repData.transforms = Object.assign(repData.transforms, reptempData)
    } else if (isTypeFile('.wxs', fileInfo.path)) {
      const pathinfo = fileInfo.path.split(projectParents)[1].substr(1)
      const reptempData = getCustomScript(pathinfo)
      repData.transforms = Object.assign(repData.transforms, reptempData)
      let content = fs.readFileSync(fileInfo.path, 'utf8') || ''
      const _reportData = {
        info: pathinfo,
        type: 'compile',
        showCompile,
        showReport,
        length: project.fileNum,
        nums: finishFile,
      }
      date = report(date, _reportData)

      /**
       * 不支持 sjs 兼容处理
       */
      if (!Config.hasWxs) {
        content = content.replace(/\.wxs/g, '.wxs.js')
        if (content.match(/\s*getRegExp/g)) {
          const preCode = `
                    function getRegExp (p1, p2) {
                        return new RegExp(p1, p2);
                    }
                    \n
                    `
          content = preCode + content
        }
        fs.outputFileSync(fileInfo.dist.replace(/\.wxs$/, '.wxs.js'), content)
      } else {
        content = cjsToes(content)

        content = content.replace(/\.wxs/g, '.sjs')
        fs.outputFileSync(fileInfo.dist.replace(/\.wxs$/, '.sjs'), content)
      }
    } else {
      let content
      if (fileInfo.deep === 0 && fileInfo.filename === 'app.json') {
        content = fs.readFileSync(fileInfo.path, 'utf8')
        if (
          this.$options.hooks
          && typeof this.$options.hooks.appJson === 'function'
        ) {
          content = this.$options.hooks.appJson(content)
        }
        content = transformEnvConfig('alipay', content)
        const appData = JSON.parse(content)
        const json = appData
        if (json.window && json.window.navigationBarTitleText) {
          setAppName(json.window.navigationBarTitleText)
        } else {
          const appName = getAppName(
            json.pages,
            fileInfo.entry,
            'navigationBarTitleText',
          )
          setAppName(appName)
        }
        try {
          project.pageNum = appData.pages.length
          const subpages = appData.subPackages || appData.subpackages
          subpages && Array.isArray(subpages) && subpages.forEach((subp) => {
            project.pageNum += subp.pages.length
          })
        } catch (err) {
          project.pageNum = 0
        }
        const pathInfo = fileInfo.path.split(projectParents)[1].substr(1)
        const jsonData = getJsonData(pathInfo, content)
        repData.transforms = Object.assign(repData.transforms, jsonData)
        if (Config.useRuntimeLog) {
          content = processAppJson(content)
        }
        const app = JSON.parse(content)
        this.$options.appPages = app.pages || []
        let dirnameArr = fileInfo.dirname.split('/')
        if (dirnameArr.length <= 1) {
          dirnameArr = dirnameArr[0].split('\\')
        }
        try {
          project.name
            = app.window.navigationBarTitleText
            || dirnameArr[dirnameArr.length - 1]
        } catch (err) {
          project.name = dirnameArr[dirnameArr.length - 1]
        }
        content = appJsonProcess(content, this.$options)
        content = prettierCode(content, 'json', {
          useTabs: true,
          tabWidth: 4,
        })
        const _reportData = {
          info: pathInfo,
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, _reportData)
      } else if (fileInfo.deep > 0 && fileInfo.extname === '.json') {
        const pathInfo = fileInfo.path.split(projectParents)[1].substr(1)
        const parent = fileInfo.parent
        let bool = false
        let wxmlFileInfo = null
        parent
          && parent.children
          && parent.children.forEach((el) => {
            if (`${fileInfo.basename}.wxml` === el.filename) {
              bool = true
              wxmlFileInfo = el
            }
          })
        content = fs.readFileSync(fileInfo.path, 'utf8')
        content = transformEnvConfig('alipay', content)
        if (bool) {
          content = pageJsonProcess.call(ctx, content, wxmlFileInfo)
        }
        const jsonData = getJsonData(pathInfo, content)
        repData.transforms = Object.assign(repData.transforms, jsonData)

        content = prettierCode(content, 'json', {
          useTabs: true,
          tabWidth: 4,
        })

        const pageJson = JSON.parse(content)
        if (pageJson.component) {
          project.componentNum++
        }
        const _reportData = {
          info: pathInfo,
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, _reportData)
      } else {
        content = fs.readFileSync(fileInfo.path)
        if (fileInfo.deep === 0 && fileInfo.filename === 'package.json') {
          const { transformPackage } = require('@antmove/utils')
          content = transformPackage(fileInfo)
          content = prettierCode(content, 'json', {
            useTabs: true,
            tabWidth: 4,
          })
        }
        const _reportData = {
          info: fileInfo.path.split(projectParents)[1].substr(1),
          type: 'compile',
          showCompile,
          showReport,
          length: project.fileNum,
          nums: finishFile,
        }
        date = report(date, _reportData)
        const otherData = getOthersFile(
          fileInfo.path.split(projectParents)[1].substr(1),
        )
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
    // console.log(new Date() - date)
    if (
      new Date() - date > 30
      || finishFile % 3 === 0
      || finishFile === project.fileNum
    ) {
      reportSpeed({
        showReport,
        length: project.fileNum,
        nums: finishFile,
      })
    }

    return fileInfo
  },
  async compiled(ctx, cb = () => {}) {
    let isReport = this.$options.isReport
    isReport = typeof isReport === 'boolean' ? isReport : true
    reportError(null, null, 'log', null, isReport)
    // 上报所有缺失属性 || 上报缺失的组件
    for (const key in shortCompsInfo) {
      if (shortCompsInfo.hasOwnProperty(key)) {
        reportError(
          null,
          null,
          'log',
          13,
          isReport,
          true,
          key,
          shortCompsInfo[key].join(','),
        )
      }
    }
    // 上报缺失api
    global.shortApiInfo.length
      && reportError(
        null,
        null,
        'log',
        13,
        isReport,
        true,
        'api',
        global.shortApiInfo.join(','),
      )
    const { findOpenAbility, statistics, writeReportPage } = record(
      recordConfig,
    )
    if (!this.$plugin.isMonitorFiles) {
      !this.$options.isNpmComponent && recordOptions(this.$options)
      this.$options.watch && monitorFiles(this.$plugin)
    }
    const notTransformNpmComponents = Config.notTransformNpmComponents

    if (!this.$options.isNpmComponent) {
      if (
        this.$options.ignoreNpm === false
        && !this.$options.isNpmComponent
        && notTransformNpmComponents
      ) {
        const npmDirPath = path.join(this.$options.entry, 'miniprogram_npm')
        const npmDir = fs.readdirSync(npmDirPath)
        let npmComponentsExclude = []
        npmComponentsExclude = npmDir.filter((n) => {
          return !notTransformNpmComponents[n]
        })
        const transNpmOpts = {}
        transNpmOpts.entry = npmDirPath
        transNpmOpts.input = transNpmOpts.entry
        transNpmOpts.dist = path.join(
          this.$options.dist,
          '__antmove_miniprogram_npm',
        )
        transNpmOpts.output = transNpmOpts.dist
        transNpmOpts.exclude = npmComponentsExclude
        transformNpmComponents(this.$plugin, transNpmOpts)
      }
      /**
       * 如果是转换npm中组件，无需再引入__antmove
       */
      if (Config.component2) {
        generateMiniProjectJson(ctx.output)
      }
      generateBundleComponent(ctx.output, Config)
      generateAntmoveReadme(ctx.output)
      await runGenerateBundleApi(ctx.output)
      generateNodeTrees(ctx.output, Config)
      if (ctx.$options.useCompileLog) {
        const tableInfo = {
          项目名称: project.name,
          项目路径: project.path,
          输出路径: project.distPath,
          文件数: String(project.fileNum),
          页面数: String(project.pageNum),
          组件数: String(project.componentNum),
        }
        repData.tableInfo = tableInfo
        const nowTime = report(beginTime, {
          showReport,
          type: 'computedTime',
        })
        tableInfo['总耗时'] = `${nowTime}ms`
        reportTable({ tableInfo, showReport })
        repData.opening = findOpenAbility(repData)
        const statisticsData = statistics(repData.transforms)
        repData.concept = statisticsData
        const targetPath = path.join(
          ctx.output,
          `${Config.library.customComponentPrefix}/.config.json`,
        )
        writeReportPage(repData, targetPath)
      }
      cb()
    }
  },
}

module.exports = exportObj

/**
 * Run generateBundleApi in child_process
 */
function runGenerateBundleApi(output) {
  const filename = path.join(__dirname, '../generate/generateBundleApi.js')
  return new Promise((resolve, reject) => {
    try {
      runJs(
        filename,
        {
          output,
          Config,
        },
        (code) => {
          resolve(code)
        },
      )
    } catch (error) {
      reject(error)
    }
  })
}

function generateNodeTrees(output, config) {
  const str = `${global.appNodesTreeStr}}`
  fs.outputFileSync(
    path.join(output, config.library.customComponentPrefix, 'api/relations.js'),
    str,
  )
}
