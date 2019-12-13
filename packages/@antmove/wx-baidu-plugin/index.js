const transformFramework = require('antmove');
const AlipayWxPlugin = require('@antmove/wx-alipay');
const path = require('path');
const AlipayBaiduPlugin = require('@antmove/alipay-baidu');
const fs = require('fs-extra');
const App = transformFramework();
const BaiduApp = transformFramework();
module.exports = function (options = {}) {
    const inputDirPath = options.input;
    let outputDirPath = options.output || options.defaultOutput;

    if (outputDirPath.charAt(outputDirPath.length-1)===path.sep) {
        outputDirPath = outputDirPath.substr(0, outputDirPath.length-1);
    }
    
    const dirArr = outputDirPath.split(path.sep);
    dirArr.pop();
    dirArr.push('.antmove');
    const newoutPath =  dirArr.join(path.sep);
    options.isWx2Baidu = true;
    options.output = newoutPath;
    const opts = {
        dist: newoutPath,
        entry: inputDirPath,
        ...options
    };

    App.use(
        AlipayWxPlugin,
        opts
    )
        .start(
            () => {
                options.input = newoutPath;
                options.output = outputDirPath;
                options.dirpath = newoutPath;
                BaiduApp.use(
                    AlipayBaiduPlugin, 
                    {
                        entry: newoutPath,
                        dist: outputDirPath,
                        env: options.env,
                        ...options
                    })
                    .start(() => {
                        if (newoutPath.includes('.antmove')) {
                            deleteall (newoutPath);
                        }
                    });
            }
        );

};

function deleteall (newoutPath) {
    var files = [];
    if (fs.existsSync(newoutPath)) {
        files = fs.readdirSync(newoutPath);
        files.forEach(function (file) {
            var curPath = newoutPath + path.sep + file;
            if (fs.statSync(curPath).isDirectory()) { 
                deleteall(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(newoutPath);
    }
}  