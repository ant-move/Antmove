const transformFramework = require('../../src/index');
const AlipayWxPlugin = require('@antmove/alipay-baidu');
const fs = require('fs-extra');
const App = transformFramework();

module.exports = function (options = {}) {
    const inputDirPath = options.input;
    const outputDirPath = options.output || options.defaultOutput;
    const opts = {
        dist: outputDirPath,
        entry: inputDirPath,
        ...options
    };

    App.use(
        AlipayWxPlugin,
        opts
    )
        .start(()=>{
            if (inputDirPath.includes('.antmove')) {
                deleteall(inputDirPath);
            }
        });
};



function deleteall (path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { 
                deleteall(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}    