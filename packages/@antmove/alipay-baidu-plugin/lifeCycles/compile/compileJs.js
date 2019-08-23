const fs = require('fs-extra');
const Config = require('../../config');
const {
    behavourHandle,
    precessAbsolutePathOfCode,
    replaceCalleeHandleFn,
    // transformEs6,
    commentBlock,
    requireModuleFn,
    ifProcessHandleFn,
    ConstructorHandle,
    prettierCode,
    getCbName
} = require('@antmove/utils');

module.exports = function (fileInfo, ctx, originCode, apis) {
    const customComponentPrefix = Config.library.customComponentPrefix;
    originCode = behavourHandle(originCode);
    // originCode = cunsermEvent(originCode);
    
    originCode = replaceCalleeHandleFn(originCode, 'my', '_swan', apis);
    // originCode = transformEs6(originCode);
    if (/\bmy\./g.test(originCode)) {
        originCode = originCode.replace(/\bmy\./g, "_swan.");
    }
    Config.compile.wrapApis = Object.assign(Config.compile.wrapApis,apis);
    originCode = commentBlock(originCode);
    originCode = requireModuleFn(originCode, ctx);
    originCode = ifProcessHandleFn(originCode);

    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    // let matchRet = (originCode.match(/\n*App\(/g) || originCode.match(/\n*Page\(/g) || originCode.match(/\n*Component\(/g));
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
        
        const fnArr = [];
        if (originCode.match(/\bApp\(/g)) {
            fnArr.push("baiduApp");
        }
        if (originCode.match(/\bPage\(/g)) {
            fnArr.push("baiduPage");
        } 
        if (originCode.match(/\bComponent\(/g)) {
            fnArr.push("baiduComponent");
        } 
        if (fnArr.length > 0) {
            let fnStr = `{${fnArr.join(",")}}`;
            insertCode += `const ${fnStr} = require('${_compoentPath}');\n`;
        }
        
        originCode = ConstructorHandle(originCode, { targetName: Config.target} );
    }

   
    insertCode += `const _swan = require('${apiPath}')(swan);`;

    originCode = insertCode + originCode;
    originCode = precessAbsolutePathOfCode(originCode, fileInfo.path, ctx.entry);
    originCode = prettierCode(originCode);
    
    fs.outputFileSync(fileInfo.dist, originCode);
};