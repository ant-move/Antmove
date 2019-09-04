const fs = require('fs-extra');
const Config = require('../../config');
const customComponentPrefix = Config.library.customComponentPrefix;
const {
    processRequireForWx,
    replaceCalleeHandleFn,
    commentBlock,
    ifProcessHandleFn,
    ConstructorHandle,
    prettierCode,
    transformClass,
    replaceCallName,
    getCbName
} = require('@antmove/utils');

module.exports = function (fileInfo, ctx, originCode, apis) {
    let isMatchPlatformApi = originCode.match(/\bmy\.(\w+)/g);
    originCode = transformClass(originCode);
    originCode = replaceCalleeHandleFn(originCode, 'my', '_wx', apis);
    originCode = replaceCallName(originCode, {name: 'httpRequest', newName: 'request'});
    // if (/\bmy\./g.test(originCode)) {
    //     originCode = originCode.replace(/\bmy\./g, '_wx.');
    // }
    Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
    originCode = commentBlock(originCode);
    originCode = ifProcessHandleFn(originCode);
    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    let matchRet = '';
    let cbNameInfo = {
        name: ''
    };
    getCbName(originCode, cbNameInfo);
    matchRet = cbNameInfo.name;

    let apiPath = customComponentPrefix + '/api/index.js';  
    let _compoentPath = componentWrapFnPath;
    let insertCode = '';

    if (matchRet) {
        insertCode += `const ${Config.target + matchRet} = require('${_compoentPath}')('` + matchRet + `');\n`;
        originCode = ConstructorHandle(originCode, {targetName: Config.target});
    }

    if (isMatchPlatformApi) {
        insertCode += `const _wx = require('${apiPath}')(wx);
                `;
    }
    originCode = insertCode + originCode;
    originCode = processRequireForWx(originCode, {
        dirname: ctx.entry,
        filename: fileInfo.path,
        filepath: fileInfo.dirname
    });
    originCode = prettierCode(originCode);

    fs.outputFileSync(fileInfo.dist, originCode);
};