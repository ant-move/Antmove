const path = require('path')
const wx2tt = require('wx-to-tt')
const fs = require('fs-extra')
const {
  recordOptions,
  parserDirInfo,
  emptyFiles,
  explorerSync,
} = require('@antmove/utils')

module.exports = function(options) {
  const opts = {
    src: '',
    dist: '',
    log: null,
    extension: false,
  }
  const input = options.input
  const output = options.output
  const antmoveDist = path.resolve(path.dirname(output), '_antmoveDist')

  options.dirpath = input
  options.antmoveDist = antmoveDist
  options.exclude = [
    'antmove.config.js',
    'node_modules',
    'project.config.json'
  ]
  const inputProjectInfo = parserDirInfo(options, (info) => {
    info.dist = path.join(output, info.path.split(input)[1]).replace('//', '/')
  })
  opts.src = antmoveDist
  opts.dist = output

  const ver = fs.readJSONSync(path.join(__dirname, './package.json')).version
  process.env.compilerType = `wx-tt@${ver}`
  recordOptions(options)
  explorerSync(inputProjectInfo, options, 'tt')

  wx2tt(opts, () => {
    emptyFiles(antmoveDist)
    fs.rmdirSync(antmoveDist)
  })
}
