const fs = require('fs-extra');
const Config = require('../../config');
const customComponentPrefix = Config.library.customComponentPrefix;
const path = require('path');
const {
    customBabelHandle,
    behavourHandle,
    replaceCalleeHandleFn,
    commentBlock,
    requireModuleFn,
    ifProcessHandleFn,
    prettierCode,
    transformClass,
    transSharePath,
    renamehandleFn,
    wxConfigHandle
} = require('@antmove/utils');


module.exports = function (fileInfo, ctx, originCode, apis) {
    originCode = transformClass(originCode);
    originCode = renamehandleFn(originCode);
    originCode = customBabelHandle(originCode, ctx)
    originCode = behavourHandle(originCode);
    originCode = wxConfigHandle(originCode);
    // originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry);
    if (!Config.component2 && fileInfo.parent && fileInfo.parent.is) {
        originCode = processComponentIs(originCode, fileInfo.parent.is);

    }
    originCode = ifProcessHandleFn(originCode, {
        entry: 'wx',
        dist: 'alipay',
        code: 'wx.__target__'
    });   
    originCode = transSharePath(originCode);
    
    let isMatchPlatformApi = ''; // originCode.match(/\bwx\.(\w+)/g);

    originCode = replaceCalleeHandleFn(originCode, 'wx', '_my', apis, function () {
        isMatchPlatformApi = true;
    });
    Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
    originCode = commentBlock(originCode);
    
    originCode = requireModuleFn(originCode, ctx);
    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';

    let apiPath = customComponentPrefix + '/api/index.js';
    let _compoentPath = componentWrapFnPath;
    /**
     * absolute to relative
     */
    _compoentPath = path.relative(path.join(fileInfo.dist, '../'), path.join(fileInfo.output, _compoentPath)).replace(/\\/g, '/');
    apiPath = path.relative(path.join(fileInfo.dist, '../'), path.join(fileInfo.output, apiPath)).replace(/\\/g, '/');
    if (_compoentPath[0] !== '.') {
        _compoentPath = './' + _compoentPath;
    }

    if (apiPath[0] !== '.') {
        apiPath = './' + apiPath;
    }
    let insertCode = '';


    if (fileInfo.filename ==='app.js' && fileInfo.deep === 0) {
        insertCode += `import '${_compoentPath}';\n`;
    }


    if (isMatchPlatformApi || (fileInfo.parent && fileInfo.parent.tplInfo)) {
        let type = 'my';
        if (Config.aliAppType === 'dingding') {
            type = 'dd';
        }
        insertCode += `const _my = require('${apiPath}')(${type});
                `;
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
    originCode = insertCode + originCode;
    originCode = prettierCode(originCode);

    fs.outputFileSync(fileInfo.dist, originCode);
};

function processComponentIs (code, isPath = '') {
    if (isPath) {
        code = `
        my.setStorageSync({
            key: 'activeComponent',
            data: {
                is: '${isPath}'
            }
        })\n
        `+ code;
    }

    return code;
}