const path = require('path')
const utils = require('@antmove/utils')
const fs = require('fs-extra')
const chalk = require('chalk')

const {
  parserDirInfo,
  callIfIsFunc,
  componentsCompiler,
} = utils


module.exports = class Transform {
  constructor(plugin, opts = {}) {
    this.$options = opts || {}
    this.$options.type = this.$options.type || plugin.name
    this.$data = {}
    this.$plugin = plugin
  }

  beforeRun(cb = () => {}) {
    process.env.compilerType = this.$options.type
    if (this.$options.component) {
      this.$options = componentsCompiler(this.$options)
    }
    const inputDir = this.$options.entry
    const outputDir = this.$options.dist

    const lifeCycles = this.$plugin.lifeCycles
    const self = this
    const packagePath = path.join(__dirname, '../..', 'package.json')
    const packageJson = fs.readFileSync(packagePath)
    /**
     * 检测微信小程序未安装依赖跳出转换
     */
    if (this.$options.ignoreNpm === false) {
      preNpm(this.$options)
    }
    const versionData = { version: JSON.parse(packageJson).version }
    if (lifeCycles.defaultOptions.exclude) {
      this.$options.exclude = this.$options.exclude.concat(
        lifeCycles.defaultOptions.exclude,
      )
    }
    lifeCycles.$options = Object.assign(
      lifeCycles.defaultOptions,
      this.$options,
      versionData,
    )

    /**
     * Setting compile env
     */
    process.env.NODE_ENV = lifeCycles.$options.env
    lifeCycles.beforeParse(() => {
      self.run(inputDir, outputDir, cb)
    })
  }

  run(inputDir, outputDir, cb = () => {}) {
    const self = this
    this.entry = inputDir
    this.output = outputDir

    /**
     * add utils for plugin
     */
    this.$plugin._ = utils
    this.$plugin.$options = this.$options

    const lifeCycles = this.$plugin.lifeCycles

    const _opts = Object.assign({}, this.$options, {
      dirpath: inputDir,
    })
    this.$data.inputProjectInfo = parserDirInfo(_opts, (info) => {
      info.dist = path
        .join(outputDir, info.path.split(inputDir)[1])
        .replace('//', '/')

      callIfIsFunc(lifeCycles.onParsing.bind(self.$plugin), info)
    })

    callIfIsFunc(
      lifeCycles.onParsed.bind(this.$plugin),
      this.$data.inputProjectInfo,
    )

    callIfIsFunc(lifeCycles.beforeCompile.bind(this.$plugin), this)

    // begin generate target files
    walk(this.$data.inputProjectInfo, (fileInfo) => {
      callIfIsFunc(lifeCycles.onCompiling.bind(self.$plugin), fileInfo, self)
    })

    callIfIsFunc(lifeCycles.compiled.bind(this), this, cb)
    const configPath = `${this.$options.output}antmove.config.js`
    if (fs.existsSync(configPath)) {
      fs.unlinkSync(configPath)
    }
    const pro = getProgramName(this.$options.type.split('-')[1])
    if (this.$options.component === 'component') {
      let outputpath = path.join(this.$options.dist, 'app.js')
      if (fs.pathExistsSync(outputpath)) {
        fs.unlinkSync(outputpath)
        outputpath = outputpath.replace(/\.js/, '.json')

        fs.unlinkSync(outputpath)

        fs.unlinkSync(outputpath.replace(/app\.json/, `app.${pro.css}`))
        deleteFolder(this.$options.entry)
        let _path = this.$options.entry
        const pathArr
          = _path.match(/(\S*)\/\.antmove/) || _path.match(/(\S*)\\\.antmove/)
        _path = pathArr[1]
        fs.rmdirSync(_path)
      }
    }
  }
}
function checkNpm(dName, modulesDir) {
  const temp = fs.readdirSync(modulesDir)
  if (!/\//.test(dName)) {
    if (!temp.includes(dName)) {
      exitAntmove(dName)
    }
  } else {
    const dir = dName.split('/')[0]
    if (!temp.includes(dir)) {
      exitAntmove(dir)
    }
  }
}

function preNpm(opts) {
  const packagePath = path.join(opts.entry, 'package.json')
  const modulesDir = path.join(opts.entry, 'miniprogram_npm')
  if (fs.existsSync(modulesDir)) {
    const dependencies = fs.readJSONSync(packagePath).dependencies
    if (dependencies) {
      Object.keys(dependencies)
        .forEach((d) => {
          checkNpm(d, modulesDir)
        })
    }
  } else {
    exitAntmove()
  }
}

function exitAntmove(code) {
  if (code) {
    console.log(chalk.yellow(`检测到微信小程序未安装${code}依赖或未安装${code}部分依赖，请安装后再使用Antmove进行转换`))
  } else {
    console.log(chalk.yellow('检测到微信小程序未安装依赖，请安装后再使用Antmove进行转换'))
  }
  process.exit(0)
}

function walk(arr = [], cb) {
  arr.forEach((el) => {
    if (Array.isArray(el.children)) {
      walk(el.children, cb)
    } else {
      cb && cb(el)
    }
  })
}

function deleteFolder(_path) {
  let files = []
  let curPath = ''
  if (fs.existsSync(_path)) {
    if (fs.statSync(_path).isDirectory()) {
      files = fs.readdirSync(_path)
      files.forEach((file) => {
        if (_path.charAt(_path.length - 1) === '/') {
          curPath = _path + file
        } else {
          curPath = `${_path}/${file}`
        }
        if (fs.statSync(curPath).isDirectory()) {
          curPath = `${curPath}/`
          deleteFolder(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      try {
        fs.rmdirSync(_path)
      } catch (err) {
        console.log()
      }
    } else {
      fs.unlinkSync(curPath)
    }
  }
}

function getProgramName(type = 'wx') {
  const pro = {}
  switch (type) {
    case 'wx':
      pro.name = '微信'
      pro.css = 'wxss'
      break
    case 'alipay':
      pro.name = '支付宝'
      pro.css = 'acss'
      break
    case 'baidu':
      pro.name = '百度'
      pro.css = 'css'
      break
    case 'qq':
      pro.name = 'qq'
      pro.css = 'qss'
      break
    default:
      pro.css = 'wxss'
  }
  return pro
}
