const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')

const fileUtils = {}
let entry = ''
let packageInfo = null

fileUtils.parserDirInfo = function(opts = {}, cb = () => {}, deep = 0, parent = null) {
  const dirpath = opts.dirpath
  const temp = fs.readdirSync(dirpath)
  let files = []
  entry = entry || dirpath

  if (!packageInfo && fs.pathExistsSync(path.join(entry, 'package.json'))) {
    packageInfo = JSON.parse(fs.readFileSync(path.join(entry, 'package.json'), 'utf8'))
  }
  temp.forEach((filename) => {
    let _file = path.join(dirpath, filename)
    if (_file.match('wxParse.wxml')) {
      console.log(chalk.yellow('检测到项目中引用了已停止维护的wxParser库，请替换成rich-text组件后再进行转换，如有其它问题请加钉群(21977588)联系我们'))
      process.exit(0)
    }
    _file = fileUtils.parserFileInfo(_file, deep, parent)
    _file.entry = entry
    let _bool
    opts.exclude.forEach((reg) => {
      if (_file.path.match(reg) || _file.filename.match(reg)) {
        _bool = true
      }
      return _bool
    })

    if (_bool) {
      return _bool
    }

    cb(_file)
    if (_file.type === 'directory') {
      const _opts = Object.assign({}, opts, {
        dirpath: _file.path,
      })
      _file.children = fileUtils.parserDirInfo(_opts, cb, deep + 1, _file)
    } else {
      _file.packageInfo = packageInfo
    }

    files.push(_file)

    return files
  })

  /*
     * component process
     * 确保 wxml 文件位于数组的开头
     */
  let isComponent = 0
  let wxmlFileIndex = 0

  files.forEach((el, i) => {
    const ext = el.extname
    if (ext === '.wxml') {
      wxmlFileIndex = i
    }

    if (ext === '.json' || ext === '.wxml') {
      isComponent++
    }
  })

  isComponent = isComponent === 2
  if (isComponent) {
    const _el = files.splice(wxmlFileIndex, 1)
    files.unshift(_el[0])
  }

  const newPathArr = [...files]
  if (newPathArr.length > 4) {
    const pathData = {}
    newPathArr.forEach((obj) => {
      const baseName = obj.basename || 'null'
      pathData[baseName] = pathData[baseName] || []
      pathData[baseName].push(obj)
    })
    let pathDataArr = []
    Object.keys(pathData).forEach((key) => {
      pathData[key].forEach((item, index) => {
        if (item.extname === '.json') {
          pathData[key].splice(index, 1)
          pathData[key].push(item)
        }
      })
      pathDataArr = pathDataArr.concat(pathData[key])
    })
    files = pathDataArr
  }
  return files
}

fileUtils.parserFileInfo = function(filepath, deep, parent) {
  return {
    type: fs.statSync(filepath).isFile() ? 'file' : 'directory',
    path: filepath,
    filename: path.basename(filepath),
    extname: path.extname(filepath),
    dirname: path.dirname(filepath),
    basename: path.basename(filepath).split('.')[0], // only one pot in filename
    children: null,
    parent,
    deep,
  }
}

fileUtils.emptyFiles = function(dirname, arr = []) {
  fs.readdirSync(dirname)
    .forEach((file) => {
      if (!arr.includes(file)) {
        fs.removeSync(path.join(dirname, file))
      }
    })
}

module.exports = fileUtils
