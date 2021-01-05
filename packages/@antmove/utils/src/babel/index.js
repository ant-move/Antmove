const babel = require('@babel/core')
const babelPreset = require('@babel/preset-env')
const fs = require('fs-extra')
const chalk = require('chalk')
const ConstructorHandle = require('./constructorHandle.js')
const processAntmoveAction = require('./processAntmoveAction.js')
const crossCodeHandle = require('./crossCode.js')
const commentBlock = require('./alipayCodeBlock.js')
const requireModule = require('./requireModule')
const behavourHandle = require('./behavourHandle')
const minifyObjectHandle = require('./minifyObject')
const replaceCalleeHandle = require('./replaceCallee')
const getApiNameHandle = require('./getApiName')
const processRequire = require('./processRequire')
const cjsToes = require('./cjs-to-es5')
const externalForWx = require('./externalForWx')
const getCbNameFn = require('./getCallName')
const replaceCallNames = require('./replaceCallName')
const renameFn = require('./reName')
const wxConfigHandle = require('./__wxConfigHandle')
const replaceGlobalhandle = require('./replaceGlobalhandleFn')

function ConstructorHandleFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[ConstructorHandle, opts]],
  }).code
}

function antmoveActionHandleFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[processAntmoveAction, opts]],
  }).code
}

function renamehandleFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[renameFn, opts]],
  }).code
}

function getCbName(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[getCbNameFn, opts]],
  }).code
}

function replaceCallName(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[replaceCallNames, opts]],
  }).code
}

function crossCodeHandleFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[crossCodeHandle, opts]],
  }).code
}

function replaceCalleeHandleFn(code, entryName, outputName, opts = {}, cb) {
  return babel.transform(code, {
    plugins: [
      [
        replaceCalleeHandle,
        {
          entryName,
          outputName,
          opts,
          cb,
        },
      ],
    ],
  }).code
}

function replaceGlobalhandleFn(code, type, newType, opts) {
  return babel.transform(code, {
    plugins: [
      [
        replaceGlobalhandle,
        {
          type,
          newType,
          opts,
        },
      ],
    ],
  }).code
}

function externalForWxFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [[externalForWx, opts]],
  }).code
}

function transformClass(code) {
  return babel.transform(code, {
    plugins: [
      [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    ],
  }).code
}

function transformSjsToWxs(code) {
  return babel.transform(code, {
    presets: [[babelPreset]],
    plugins: [
      [
        require('@babel/plugin-transform-modules-commonjs'),
        {
          allowTopLevelThis: true,
          loose: true,
          strict: true,
        },
      ],
    ],
  }).code
}

function minifyObjectHandleFn(code, opts = {}) {
  return babel.transform(code, {
    plugins: [
      [
        minifyObjectHandle,
        {
          opts,
        },
      ],
    ],
  }).code
}

function requireModuleFn(code, ctx) {
  let depObj = {}
  try {
    const packageJson = JSON.parse(fs.readFileSync(`${ctx.entry}/package.json`))
    depObj = Object.assign(
      packageJson.dependencies,
      packageJson.devDependencies,
    )
  } catch (error) {
    // error
  }

  return babel.transform(code, {
    plugins: [
      require('@babel/plugin-proposal-export-default-from'),
      [
        requireModule,
        {
          module: depObj,
        },
      ],
    ],
  }).code
}

function processRequireForWx(code, opts = {}) {
  return babel.transform(code, {
    plugins: [
      require('@babel/plugin-proposal-export-default-from'),
      [processRequire, opts],
    ],
  }).code
}

function transformEs6(code) {
  return babel.transform(code, {
    presets: [[babelPreset]],
  }).code
}

function cjsToesFn(code) {
  return babel.transform(code, {
    plugins: [[cjsToes]],
  }).code
}

function customBabelHandle(code, ctx) {
  if (!ctx.$options.babel) {
    return code
  }
  const plugins
    = typeof ctx.$options.babel.plugins === 'function'
      ? ctx.$options.babel.plugins()
      : []
  const presets = Array.isArray(ctx.$options.babel.presets)
    ? ctx.$options.babel.presets
    : []
  return babel.transform(code, {
    presets: [...presets],
    plugins: [...plugins],
  }).code
}
function getApiNameHandleFn(code, entryName, cb) {
  return babel.transform(code, {
    plugins: [
      [
        getApiNameHandle,
        {
          entryName,
          cb,
        },
      ],
    ],
  }).code
}

function tryToBabel(fn) {
  return function(...args) {
    const code = args[0]
    try {
      return fn(...args)
    } catch (error) {
      process.env.babelFile = process.env.babelFile || ''
      if (process.env.babelFile !== process.env.transFile) {
        console.log()
        console.log(
          chalk.yellow(`${process.env.transFile} 文件中遇到Antmove暂不支持解析和转译的语法，请评估是否有影响，有疑问加钉群(21977588)反馈,该报错不会影响Antmove转换以及结果
以下为具体信息：
${error.message}
`),
        )
      }
      process.env.babelFile = process.env.transFile
      return code
    }
  }
}

module.exports = {
  // processClasssProperties,
  ConstructorHandle: tryToBabel(ConstructorHandleFn),
  antmoveActionHandle: tryToBabel(antmoveActionHandleFn),
  crossCodeHandleFn: tryToBabel(crossCodeHandleFn),
  ifProcessHandleFn: tryToBabel(crossCodeHandleFn),
  commentBlock: tryToBabel(commentBlock),
  requireModuleFn: tryToBabel(requireModuleFn),
  behavourHandle: tryToBabel(behavourHandle),
  replaceCalleeHandleFn: tryToBabel(replaceCalleeHandleFn),
  getApiNameHandleFn: tryToBabel(getApiNameHandleFn),
  minifyObjectHandleFn: tryToBabel(minifyObjectHandleFn),
  transformEs6: tryToBabel(transformEs6),
  cjsToes: tryToBabel(cjsToesFn),
  externalForWxFn: tryToBabel(externalForWxFn),
  transformClass: tryToBabel(transformClass),
  transformSjsToWxs: tryToBabel(transformSjsToWxs),
  processRequireForWx: tryToBabel(processRequireForWx),
  getCbName: tryToBabel(getCbName),
  replaceCallName: tryToBabel(replaceCallName),
  renamehandleFn: tryToBabel(renamehandleFn),
  wxConfigHandle: tryToBabel(wxConfigHandle),
  customBabelHandle: tryToBabel(customBabelHandle),
  replaceGlobalhandleFn: tryToBabel(replaceGlobalhandleFn),
}
