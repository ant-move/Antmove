const fs = require('fs-extra')
const Config = require('../../config')

const customComponentPrefix = Config.library.customComponentPrefix
const path = require('path')
const {
  ConstructorHandle,
  prettierCode,
  getCbName,
} = require('@antmove/utils')


module.exports = function(fileInfo, ctx, originCode) {
  /**
     *  判断是否为 App()/Page()/Component()
     * */
  if (!Config.component2 && fileInfo.parent && fileInfo.parent.is) {
    originCode = processComponentIs(originCode, fileInfo.parent.is)
  }
  const componentWrapFnPath = `${customComponentPrefix}/component/componentClass.js`
  let matchRet = ''
  const cbNameInfo = {
    name: '',
    constructName: {},
  }
  getCbName(originCode, cbNameInfo)
    
  matchRet = cbNameInfo.name
  let _compoentPath = componentWrapFnPath

  /**
     * absolute to relative
     */
  _compoentPath = path.relative(path.join(fileInfo.dist, '../'), path.join(fileInfo.output, _compoentPath)).replace(/\\/g, '/')
  if (_compoentPath[0] !== '.') {
    _compoentPath = `./${_compoentPath}`
  }

  let insertCode = ''

  if (matchRet) {
    Object.keys(cbNameInfo.constructName)
      .forEach((name) => {
        insertCode += `const ${Config.target + name} = require('${_compoentPath}')('${name}');\n`
      })
    originCode = ConstructorHandle(originCode, {
      targetName: Config.target,
    })
  }

  originCode = insertCode + originCode
  originCode = prettierCode(originCode)

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
