const fs = require('fs-extra');
const Config = require('../../config');
const customComponentPrefix = Config.library.customComponentPrefix;
const path = require('path');
const {
    behavourHandle,
    // precessRelativePathOfCode,
    replaceCalleeHandleFn,
    commentBlock,
    requireModuleFn,
    ifProcessHandleFn,
    ConstructorHandle,
    prettierCode,
    // processFnBodyHandleFn,
    getCbName
} = require('@antmove/utils');


module.exports = function (fileInfo, ctx, originCode, apis) {
    originCode = behavourHandle(originCode);
    // originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry);
    originCode = ifProcessHandleFn(originCode, {
        entry: 'wx',
        dist: 'qq',
        code: 'wx.__target__'
    });    
    
    let isMatchPlatformApi = ''; // originCode.match(/\bwx\.(\w+)/g);
    
    originCode = replaceCalleeHandleFn(originCode, 'wx', '_qq', apis, function () {
        isMatchPlatformApi = true;
    });
    Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
    originCode = commentBlock(originCode);
    
    originCode = requireModuleFn(originCode, ctx);
    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    let matchRet = '';
    let cbNameInfo = {
        name: '',
        constructName: {}
    };
    getCbName(originCode, cbNameInfo);
    
    matchRet = cbNameInfo.name;
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

    if (matchRet) {
        Object.keys(cbNameInfo.constructName)
            .forEach(function (name) {
                insertCode += `const ${Config.target + name} = require('${_compoentPath}')('${name}');\n`;
            });
        originCode = ConstructorHandle(originCode, {
            targetName: Config.target
        });
    }

    if (isMatchPlatformApi || (fileInfo.parent && fileInfo.parent.tplInfo)) {
        insertCode += `const _qq = require('${apiPath}')(qq);
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