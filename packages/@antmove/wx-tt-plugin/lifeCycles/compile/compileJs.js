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
    try {
        originCode = behavourHandle(originCode);
        // originCode = precessRelativePathOfCode(originCode, fileInfo.path, ctx.entry);
        originCode = ifProcessHandleFn(originCode, {
            entry: 'wx',
            dist: 'tt',
            code: 'wx.__target__'
        }); 
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    let isMatchPlatformApi = ''; // originCode.match(/\bwx\.(\w+)/g);
    
    
    try {
        originCode = replaceCalleeHandleFn(originCode, 'wx', '_tt', apis, function () {
            isMatchPlatformApi = true;
        });
        Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
        originCode = commentBlock(originCode);
        originCode = requireModuleFn(originCode, ctx);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    
    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    let matchRet = '';
    let cbNameInfo = {
        name: '',
        constructName: {}
    };
    try {
        getCbName(originCode, cbNameInfo);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    
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
        try {
            originCode = ConstructorHandle(originCode, {
                targetName: Config.target
            });
        } catch (error) {
            console.error('Invalid js file: ' +  fileInfo.dist);
        }
    }

    if (isMatchPlatformApi || (fileInfo.parent && fileInfo.parent.tplInfo)) {
        insertCode += `const _tt = require('${apiPath}')(tt);
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
    try {
        originCode = prettierCode(originCode);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    fs.outputFileSync(fileInfo.dist, originCode);
};