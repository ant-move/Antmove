const path = require('path')
const fs = require('fs-extra')
const { reportMethods } = require('@antmove/utils')

const fileNames = ['node_modules', 'buildAlipay', 'examples', 'alife-antmove']
module.exports = function(antmovePath, outName) {
  const aliPath = path.join(antmovePath, '..', outName)
  console.log('开始搭建阿里内部版本')
  console.log('')
  const filesList = []
  readFileList(antmovePath, filesList)

  const fileNums = filesList.length
  if (fs.existsSync(aliPath)) {
    emptyDir(aliPath)
  }
  fs.mkdirSync(aliPath)

  const antmovePathArr = antmovePath.split(path.sep)
  antmovePathArr.pop()
  antmovePathArr.push(outName)
  const newDirPath = antmovePathArr.join(path.sep)

  filesList.map((item, index) => {
    let code = fs.readFileSync(item, 'utf-8')
    let codePath = path.join(newDirPath, item.split(antmovePath)[1].replace(/\\/, '/'))
    codePath = codePath.replace(/@antmove/g, '@alife')
    code = code.replace(/require\('antmove'\)/g, "require('@alife/antmove')")
    code = code.replace(/require\("antmove"\)/g, "require('@alife/antmove')")
    code = code.replace(/@antmove\//g, '@alife/antmove-')

    if (codePath.includes('package.json')) {
      const codeData = JSON.parse(code)
      codeData.author = 'shengfu.ysf@alibaba-inc.com/'
      codeData.publishConfig = codeData.publishConfig || {}
      codeData.publishConfig.registry = 'https://registry.npm.alibaba-inc.com'
      if (codeData.dependencies && codeData.dependencies.antmove) {
        codeData.dependencies['@alife/antmove'] = codeData.dependencies.antmove
        delete codeData.dependencies.antmove
      }
      if (codeData.name === 'antmove') {
        codeData.name = '@alife/antmove'
                
        if (codeData.bin.antmove) {
          codeData.bin['antmove-ali'] = codeData.bin.antmove
          delete codeData.bin.antmove
        }
        if (codeData.scripts) {
          delete codeData.scripts['build-alife']
        }
      }
      code = JSON.stringify(codeData, null, 2)
    }

    fs.outputFileSync(codePath, code)
    reportMethods.reportSpeed({
      nums: index + 1,
      length: fileNums,
    })
  })
  console.log('\n')
  console.log(`内部版本输出地址：${aliPath}`)
}

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((item) => {
    if (item.indexOf('.') === 0) {
      return false
    }

    if (fileNames.indexOf(item) !== -1) {
      return false
    }

    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList)
    } else {
      filesList.push(fullPath)
    }
  })
  return filesList
}

function emptyDir(fileUrl) {
  let files = []
  if (fs.existsSync(fileUrl)) {
    files = fs.readdirSync(fileUrl)
    files.forEach((file) => {
      const curPath = fileUrl + path.sep + file
      if (fs.statSync(curPath).isDirectory()) {
        emptyDir(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(fileUrl)
  }
}
