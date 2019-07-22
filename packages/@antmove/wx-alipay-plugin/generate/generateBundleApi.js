/**
 * add api wrap bundle
 * exec by child_process
 */
const path = require('path');
const fs = require('fs-extra');
const {
    minifyJs,
    transformEs6
} = require('@antmove/utils');
let Config = require('../config.js');
let customComponentPrefix = Config.library.customComponentPrefix;
const wrapApis = require('../__api/my.js');
const wrapApisInfo = require('../config/apiInfo/index').descObject;
let entry = path.join(__dirname, '../__api');

/**
 * 
 * @param {*} output 
 */
function generate (output) {
    let outputPath = path.join(output, `${customComponentPrefix}/api`);
    let apiContent = minifyObject(wrapApis, Config.compile.wrapApis);
    let apiInfo = minifyObject(wrapApisInfo, Config.compile.wrapApis);

    apiContent = objToString(apiContent);
    apiContent = apiContent.replace(/\\n/g, '');
    apiContent = apiContent.replace(/\\"/g, '"');

    apiInfo = objToString(apiInfo);
    apiInfo = apiInfo.replace(/\\n/g, '');
    apiInfo = apiInfo.replace(/\\"/g, '"');

    Config.wrapApiFiles.forEach(function (file) {
        copyFile(file);
    });

    let myJS = 'const utils = require("./utils");\nconst descObj = require("./desc.js");\nconst apiObj = ' + apiContent + '\nmodule.exports = apiObj;';
    let descJs = 'const utils = require("./utils");\nconst infoObj = ' + apiInfo + '\nmodule.exports = infoObj;';

    if (!Config.isDev()) {
        myJS = minifyJs(
            transformEs6(myJS)
        );
        descJs = minifyJs(
            transformEs6(descJs));
    }

    fs.outputFileSync(path.join(outputPath, 'my.js'), myJS);
    fs.outputFileSync(path.join(outputPath, 'desc.js'), descJs);

    function copyFile (filename) {
        let inputPath = path.join(entry, filename);
        let distPath = path.join(outputPath, filename);
        if (!Config.isDev()) {
            let content = fs.readFileSync(inputPath, 'utf8');
            fs.outputFileSync(distPath, minifyJs(
                transformEs6(content)
            ));
        } else {

            fs.copySync(inputPath, distPath);
        }
    }
}

function generateRuntimeConfig (output, isDev = false) {
    let code = `
    module.exports = {
        env: ${isDev ? '"development"': '"production"'}
    }
    `;
    let outputPath = path.join(output, `${customComponentPrefix}/api/config.js`);

    fs.outputFileSync(outputPath, code);
}

function objToString (obj = {}) {
    let code = '{';
    Object.keys(obj)
        .forEach(function (item) {
            if (typeof obj[item] === "object") {
                code += String(item) + ':' + objToString(obj[item]) + ',';
            } else if (typeof obj[item] === 'function') {
                let fnStr = obj[item].toString();
                if (fnStr.match(/^function/)) {
                    code += item + ':' + fnStr + ',';
                } else {
                    code += item + ': function ' + fnStr + ',';
                }
            } else if  (obj[item] !== undefined) {
                if (typeof obj[item] === 'string') {
                    code += item + ':"' + obj[item] + '",';
                } else {
                    code += item + ':' + obj[item] + ',';
                }
            }
        });

    return code + '}';
}

function minifyObject (obj = {}, props = {}) {
    let _obj = {};

    Object.keys(props)
        .forEach(function (item) {
            _obj[item] = obj[item];
        });

    return _obj;
}

/**
 * 监听父进程 message 事件
 */
process.on('message', function (opts) {
    Config = opts.Config;
    Config.isDev = function () {
        return Config.env === 'development';
    },
    customComponentPrefix = Config.library.customComponentPrefix;
    generateRuntimeConfig(opts.output, Config.isDev());
    generate(opts.output);
    process.exit(0);
});