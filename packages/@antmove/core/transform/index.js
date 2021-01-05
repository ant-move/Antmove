const path = require('path')
const utils = require('@antmove/utils')
const fs = require('fs-extra')

const {
  parserDirInfo,
  callIfIsFunc,
  componentsCompiler,
} = utils


module.exports = class Transform {
  constructor(plugin, opts = {}) {
    this.$options = opts || {}
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
    let err = ''
    const packagePath = path.join(__dirname, '../', 'package.json')
    let packageJson = ''
    try {
      packageJson = fs.readFileSync(packagePath)
    } catch (error) {
      console.error('Can not get Antmove Version.')
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
    lifeCycles.beforeParse((_res) => {
      if (_res) {
        err = _res
        return false
      }
      self.run(inputDir, outputDir, cb)
    })
    return err
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

function walk(arr = [], cb) {
  arr.forEach((el) => {
    if (Array.isArray(el.children)) {
      walk(el.children, cb)
    } else {
      cb && cb(el)
    }
  })
}

function deleteFolder(p) {
  let files = []
  let curPath = ''
  if (fs.existsSync(p)) {
    if (fs.statSync(p).isDirectory()) {
      files = fs.readdirSync(p)
      files.forEach((file) => {
        if (p.charAt(p.length - 1) === '/') {
          curPath = p + file
        } else {
          curPath = `${p}/${file}`
        }
        if (fs.statSync(curPath).isDirectory()) {
          curPath = `${curPath}/`
          deleteFolder(curPath)
        } else {
          fs.unlinkSync(curPath)
        }
      })
      try {
        fs.rmdirSync(p)
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
