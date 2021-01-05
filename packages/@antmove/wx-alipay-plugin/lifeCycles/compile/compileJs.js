const path = require('path')
const fs = require('fs-extra')
const {
  customBabelHandle,
  behavourHandle,
  replaceGlobalhandleFn,
  getApiNameHandleFn,
  commentBlock,
  requireModuleFn,
  ifProcessHandleFn,
  prettierCode,
  renamehandleFn,
  wxConfigHandle,
  antmoveActionHandle,
} = require('@antmove/utils')
const Config = require('../../config')
const wrapApisInfo = require('../../config/apiInfo/index').descObject

global.shortApiInfo = []
const apiWhiteList = ['__target__']
const customComponentPrefix = Config.library.customComponentPrefix

module.exports = function(fileInfo, ctx, originCode, apis) {
  originCode = renamehandleFn(originCode)
  originCode = customBabelHandle(originCode, ctx)
  // 缺失api
  getApiNameHandleFn(originCode, 'wx', (_api) => {
    if (!apiWhiteList.includes(_api) && !global.shortApiInfo.includes(_api) && !wrapApisInfo[_api]) {
      global.shortApiInfo.push(_api)
    }
  })

  originCode = behavourHandle(originCode)
  originCode = wxConfigHandle(originCode)
  if (!Config.component2 && fileInfo.parent && fileInfo.parent.is) {
    originCode = processComponentIs(originCode, fileInfo.parent.is)
  }
  originCode = ifProcessHandleFn(originCode, {
    entry: 'wx',
    dist: 'alipay',
    code: 'wx.__target__',
  })

  let isMatchPlatformApi = '' // originCode.match(/\bwx\.(\w+)/g);
  if (/wx(\.\w+)?/.test(originCode)) {
    isMatchPlatformApi = true
  }
  originCode = replaceGlobalhandleFn(originCode, 'global', 'my.global')

  Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis)
  originCode = commentBlock(originCode)

  originCode = requireModuleFn(originCode, ctx)

  /**
   *  判断是否为 App()/Page()/Component()
   * */

  const componentWrapFnPath = `${customComponentPrefix}/component/componentClass.js`
  const sep = ctx.$options.isNpmComponent ? '' : '../'
  let apiPath = `${customComponentPrefix}/api/index.js`
  let _componentPath = componentWrapFnPath
  /**
   * absolute to relative
   */
  _componentPath = path
    .relative(
      path.join(fileInfo.dist, '../'),
      path.join(fileInfo.output, _componentPath),
    )
    .replace(/\\/g, '/')
  apiPath = path
    .relative(
      path.join(fileInfo.dist, sep),
      path.join(fileInfo.output, apiPath),
    )
    .replace(/\\/g, '/')
  if (_componentPath[0] !== '.') {
    _componentPath = `./${_componentPath}`
  }

  if (apiPath[0] !== '.') {
    apiPath = `./${apiPath}`
  }
  let insertCode = ''

  if (fileInfo.filename === 'app.js' && fileInfo.deep === 0) {
    insertCode += `import '${_componentPath}';\nmy.global={};\n`
    // btn styleV2
    const appContent = fs.readJSONSync(path.join(fileInfo.entry, './app.json'))
    if (appContent.style) {
      insertCode += `my.styleV2 = ${appContent.style === 'v2'}\n`
    }
  }

  if (isMatchPlatformApi || (fileInfo.parent && fileInfo.parent.tplInfo)) {
    let type = 'my'
    if (Config.aliAppType === 'dingding') {
      type = 'dd'
    }
    insertCode += `const _my = require('${apiPath}')(${type});
const wx = _my;
                `
  }

  // Todo:
  // if (fileInfo.parent && fileInfo.parent.tplInfo) {

  //     fileInfo.parent.tplInfo.button &&
  //     fileInfo.parent.tplInfo.button
  //         .forEach(function (info) {
  //             // todos
  //             // if (info.type === 'button' && info.scope)
  //             // originCode = processFnBodyHandleFn(originCode, info);
  //         });
  // }
  originCode = insertCode + originCode
  originCode = prettierCode(originCode)
  if (fileInfo.parent && fileInfo.parent.hasAntmoveAction) {
    originCode = antmoveActionHandle(originCode, fileInfo)
    originCode = originCode.replace(/"antmoveActionHandler";/g, '//执行时动态赋值，请勿删除')
  }
  fs.outputFileSync(fileInfo.dist, originCode)
}

function processComponentIs(code, isPath = '') {
  if (isPath) {
    code = `
        my.setStorageSync({
            key: 'activeComponent',
            data: {
                is: '${isPath}'
            }
        })\n
        ${code}`
  }

  return code
}
