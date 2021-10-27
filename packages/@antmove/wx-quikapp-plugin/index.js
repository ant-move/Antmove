const path = require('path')
const { adapter } = require('qa-adapter')
const fs = require('fs-extra')
const {
  recordOptions,
  parserDirInfo,
  emptyFiles,
  explorerSync,
} = require('@antmove/utils')

module.exports = async function(options) {
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
  const ver = fs.readJSONSync(path.join(__dirname, './package.json')).version
  process.env.compilerType = `wx-quickapp@${ver}`
  recordOptions(options)
  explorerSync(inputProjectInfo, options, 'quick')
  await adapter(antmoveDist, output)
  await emptyFiles(antmoveDist)
  fs.rmdirSync(antmoveDist)
}
