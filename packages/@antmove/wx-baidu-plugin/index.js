const path = require('path')
const transform = require('wx2')
const chalk = require('chalk')
const fs = require('fs-extra')
const {
  recordOptions,
  parserDirInfo,
  emptyFiles,
  explorerSync,
} = require('@antmove/utils')


module.exports = async function(options = {}) {
  const entry = options.input
  const dist = options.output
  const antmoveDist = path.resolve(path.dirname(dist), '_antmoveDist')
  logFor = dist,
  target = 'wx2swan'
  options.dirpath = entry
  options.exclude = [
    'antmove.config.js',
    'node_modules',
    'project.config.json'
  ]
  options.antmoveDist = antmoveDist
  const inputProjectInfo = parserDirInfo(options, (info) => {
    info.dist = path.join(dist, info.path.split(entry)[1]).replace('//', '/')
  })
  const ver = fs.readJSONSync(path.join(__dirname, './package.json')).version
  process.env.compilerType = `wx-baidu@${ver}`
  recordOptions(options)
  explorerSync(inputProjectInfo, options, 'swan')
  await transform({ entry: antmoveDist, dist, logFor, target }).catch((e) => {
    console.log(chalk.red('run error: ', `${e.message}\n${e.stack}`))
  })
  await emptyFiles(antmoveDist)
  fs.rmdirSync(antmoveDist)
}
