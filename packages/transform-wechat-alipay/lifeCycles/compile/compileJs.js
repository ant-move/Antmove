const fs = require('fs-extra');
const Config = require('../../config');
const customComponentPrefix = Config.library.customComponentPrefix;
const {
    behavourHandle,
    precessRelativePathOfCode,
    replaceCalleeHandleFn,
    commentBlock,
    requireModuleFn,
    ifProcessHandleFn,
    ConstructorHandle,
    prettierCode
} = require('@antmove/utils');

module.exports = function (fileInfo, ctx, originCode, apis) {
    originCode = behavourHandle(originCode);
    originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry);
    
    let isMatchPlatformApi = originCode.match(/\bwx\.(\w+)/g);
            
    originCode = replaceCalleeHandleFn(originCode, 'wx', '_my', apis);
    Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
    originCode = commentBlock(originCode);
    originCode = requireModuleFn(originCode, ctx);
    originCode = ifProcessHandleFn(originCode);

    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    let matchRet = (originCode.match(/\n*App\(/g) || originCode.match(/\n*Page\(/g) || originCode.match(/\n*Component\(/g));

    let apiPath = customComponentPrefix + '/api/index.js';
    let _compoentPath = componentWrapFnPath;
    let insertCode = '';

    if (matchRet) {
        insertCode += `const _conponentConstructorHandle = require('${_compoentPath}');\n`;
        originCode = ConstructorHandle(originCode);
    }

    if (isMatchPlatformApi) {
        insertCode += `const _my = require('${apiPath}')(my);
                `;
    }
    originCode = insertCode + originCode;
    originCode = prettierCode(originCode);
            
    fs.outputFileSync(fileInfo.dist, originCode);
};