const path = require('path')
const fs = require('fs-extra')
const {
  processRequireForWx,
  replaceCalleeHandleFn,
  // transformEs6,
  commentBlock,
  requireModuleFn,
  ifProcessHandleFn,
  ConstructorHandle,
  prettierCode,
  getCbName,
} = require('@antmove/utils')
const Config = require('../../config')

module.exports = function(fileInfo, ctx, originCode, apis, entry) {
  const jsonPath = `${fileInfo.path}on`
  const antmoveCache = fileInfo.antmoveCache
  Object.keys(antmoveCache).forEach((key) => {
    if (key[0] === '/') {
      const key2 = key.substr(1)
      antmoveCache[key2] = antmoveCache[key]
      delete antmoveCache[key]
    }
  })
  let jsonData = {}
  if (fs.existsSync(jsonPath)) {
    jsonData = JSON.parse(fs.readFileSync(jsonPath))

    /**
         *  二次转码获取组件js的wx格式的缓存代码
         * */

    if (jsonData.component && antmoveCache) {
      let componentPath = fileInfo.path.split(entry)[1].replace(/\\/g, '/')
      if (componentPath[0] === '/') {
        componentPath = componentPath.substr(1)
      }
      if (!componentPath.includes('__antmove')) {
        const cachepath = path.join(entry, '__antmove/.antmove_cache', antmoveCache[componentPath])
        originCode = fs.readFileSync(cachepath)
        originCode = replaceCalleeHandleFn(originCode, 'wx', '_swan', apis)
      }
    }
  }
 
  const customComponentPrefix = Config.library.customComponentPrefix
    
  // originCode = cunsermEvent(originCode);
    
  originCode = replaceCalleeHandleFn(originCode, 'my', '_swan', apis)
  // originCode = transformEs6(originCode);
  if (/\bmy\./g.test(originCode)) {
    originCode = originCode.replace(/\bmy\./g, '_swan.')
  }
  if (/\bwx\./g.test(originCode)) {
    originCode = originCode.replace(/\bwx\./g, '_swan.')
  }
  Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis)
  originCode = commentBlock(originCode)
  originCode = requireModuleFn(originCode, ctx)
  originCode = ifProcessHandleFn(originCode)

  /**
     *  判断是否为 App()/Page()/Component()
     * */
  const cbNameInfo = {
    name: '',
  }
  let insertCode = ''
  const componentWrapFnPath = `${customComponentPrefix}/component/componentClass.js`
  getCbName(originCode, cbNameInfo)
  const apiPath = `${customComponentPrefix}/api/index.js`
  const _compoentPath = componentWrapFnPath
        
  const fnArr = []
  if (originCode.match(/\bApp\(/g)) {
    fnArr.push('baiduApp')
  }
  if (originCode.match(/\bPage\(/g)) {
    fnArr.push('baiduPage')
  }
  if (originCode.match(/\bComponent\(/g)) {
    if (jsonData.component && antmoveCache) {
      fnArr.push('baiduComponentWx')
    } else {
      fnArr.push('baiduComponent')
    }
  }
  if (fnArr.length > 0) {
    const fnStr = `{${fnArr.join(',')}}`
    insertCode += `const ${fnStr} = require('${_compoentPath}');\n`
    if (fnArr.indexOf('baiduComponentWx') !== -1) {
      insertCode += 'const baiduComponent = baiduComponentWx;\n'
    }
  }
    
  originCode = ConstructorHandle(originCode, { targetName: Config.target })

   
  insertCode += `const _swan = require('${apiPath}')(swan);`

  originCode = insertCode + originCode
  // originCode = precessAbsolutePathOfCode(originCode, fileInfo.path, ctx.entry);
  // originCode = precessAbsolutePathOfCode(originCode, fileInfo.path, ctx.entry);
  originCode = processRequireForWx(originCode, {
    dirname: ctx.entry,
    filename: fileInfo.path,
    filepath: fileInfo.dirname,
  })
  originCode = prettierCode(originCode)
   

  fs.outputFileSync(fileInfo.dist, originCode)
}
