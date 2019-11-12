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
    try {
        originCode = transformClass(originCode);
        originCode = replaceCalleeHandleFn(originCode, 'my', '_wx', apis);
        originCode = replaceCallName(originCode, {name: 'httpRequest', newName: 'request'});
        Config.compile.wrapApis = Object.assign(Config.compile.wrapApis, apis);
        originCode = commentBlock(originCode);
        originCode = ifProcessHandleFn(originCode);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    
    // if (/\bmy\./g.test(originCode)) {
    //     originCode = originCode.replace(/\bmy\./g, '_wx.');
    // }
   
    /**
     *  判断是否为 App()/Page()/Component()
     * */

    let componentWrapFnPath = customComponentPrefix + '/component/componentClass.js';
    let matchRet = '';
    let cbNameInfo = {
        name: ''
    };
    try {
        getCbName(originCode, cbNameInfo);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    
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
    if (Config.ref.filename === fileInfo.path) {
        if (matchRet === 'Page') { 
            originCode = originCode.replace(/Page\s*\(\{([^]*)\}\)/, function () {
                let value = RegExp.$1;
                let val = '';
                let newFn = '';
                if (/onLoad\s*\(\)/.test(value)) {
                    value = value.replace(/onLoad\s*\(\)\s*\{([^]*?)\},*/, '');
                    value.match(/onLoad\s*\(\)\s*\{([^]*?)\}/);
                    newFn = `\n\tonLoad() {\n\t\tlet ref = this.selectComponent('#${Config.ref.id}');\n\t\tthis.${Config.ref.id}(ref);\n${RegExp.$1}\n\t},`;
                } else {
                    newFn = `\n\tonLoad() {\n\t\tlet ref = this.selectComponent('#${Config.ref.id}');\n\t\tthis.${Config.ref.id}(ref);\n\t},`;
                }
                val += newFn;
                val += value;
                return 'Page({\n' + val + '\n})';
            });
        } else {
            originCode = originCode.replace(/Component\s*\(\{([^]*?)\}\)/, function () {
                let value = RegExp.$1;
                let val = '';
                let newFn = '';
                if (/created\s*\(\)/.test(value)) {
                    value = value.replace(/created\s*\(\)\s*\{([^]*?)\},*/, '');
                    value.match(/created\s*\(\)\s*\{([^]*)\}/);
                    newFn = `\n\tcreated() {\n\t\tlet ref = this.selectComponent('#${Config.ref.id}');\n\t\tthis.${Config.ref.id}(ref);\n${RegExp.$1}\n\t},`;
                } else {
                    newFn = `\n\tcreated() {\n\t\tlet ref = this.selectComponent('#${Config.ref.id}');\n\t\tthis.${Config.ref.id}(ref);\n\t},`;
                }
                val += newFn;
                val += value;
                return 'Component({\n' + val + '\n})';
            });
        }
    }
    originCode = insertCode + originCode;
    if (matchRet === 'Component') {
        originCode = originCode.replace(/_wx\.createSelectorQuery\(\)/g, 'this.createSelectorQuery()');
        originCode = originCode.replace(/Component\s*\(\{([^]*?)\}\)/, function () {
            let value = RegExp.$1;
            let val = '\toptions: {\n\t\tmultipleSlots: true,\n';
            if (Config.options.scopeStyle) {
                val += `\t\tstyleIsolation: 'shared',`;
            }
            val += '\n},';
            val += value;
            return 'Component({\n' + val + '\n})';
        });
    }
    try {
        originCode = processRequireForWx(originCode, {
            dirname: ctx.entry,
            filename: fileInfo.path,
            filepath: fileInfo.dirname
        });
        originCode = prettierCode(originCode);
    } catch (error) {
        console.error('Invalid js file: ' +  fileInfo.dist);
    }
    fs.outputFileSync(fileInfo.dist, originCode);
};