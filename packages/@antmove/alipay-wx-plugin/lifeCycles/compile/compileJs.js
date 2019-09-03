const fs = require('fs-extra');
const path = require('path');
const Config = require('../../config');
const customComponentPrefix = Config.library.customComponentPrefix;
const {
    processRequireForWx,
    replaceCalleeHandleFn,
    precessWxAbsolutePathOfCode,
    commentBlock,
    ifProcessHandleFn,
    ConstructorHandle,
    prettierCode,
    transformClass,
    replaceCallName,
    getCbName
} = require('@antmove/utils');

let rootDir = '';
let isAssignment = true;

function completionPath (originCode, outputPath) {
    if (outputPath.includes('node_modules')) {
        return originCode;
    }
    if (isAssignment) {
        rootDir = outputPath;
        isAssignment = false;
    }
    originCode = originCode.replace(/ +/g, ' ');
    return originCode.replace(/from\s?['"].+/g, function (r) {
        let str = r.match(/['"].+['"]/)[0];
        let paths = '';
        str = str.slice(1, str.length -1);
        if (str.includes('@')) {
            return r;
        }
        if (str[0] === '/') {
            paths = path.join(rootDir, str);
        } else {
            paths = path.join(outputPath, str);
        }
        const isExists = fs.existsSync(paths);
        if (!isExists) {
            paths += '.js';
        }
        const isDir = fs.statSync(paths).isDirectory();
        if (isDir) {
            r = r.replace(/-/g, '');
            const index = r.includes('"') ? r.lastIndexOf('"') : r.lastIndexOf("'") + 1;
            const start = r.slice(0, index);
            const end = r.slice(index);
            r = start + '/index.js' + end;
        }
        return r;
    });
}

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
    originCode = completionPath(originCode, fileInfo.dirname);
    originCode = processRequireForWx(originCode, {
        dirname: ctx.entry,
        filename: fileInfo.path,
    });
    originCode = prettierCode(originCode);

    fs.outputFileSync(fileInfo.dist, originCode);
};