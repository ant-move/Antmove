/**
 * add api wrap bundle
 * exec by child_process
 */
const path = require('path');
const fs = require('fs-extra');

/**
 * 
 * @param {*} output 
 */

function generateRuntimeConfig (output, isDev = false, type) {
    
    let code = `
    ${
    type === 'dd' ? "dd.clearStorageSync = dd.removeStorageSync;\ndd.clearStorage = dd.removeStorage;\n" : ''
}
    module.exports = function (type) {
        return type
    }
    `;
    let outputPath = path.join(output, `${customComponentPrefix}/api/index.js`);

    fs.outputFileSync(outputPath, code);
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
    
    generateRuntimeConfig(opts.output, Config.isDev(), Config.aliAppType);
    process.exit(0);
});