const path = require('path');
const transformFramework = require('../../src/index.js');
const WechatPlugin = require('transform-wechat-alipay');

let outputPath = path.join(__dirname, '../../dist');

let inputDirPath = path.join(__dirname, '../../examples/wx-zhihu');
transformFramework({
    entry: inputDirPath,
    options: {
        exclude: [
            /^\.\w+/,
            'project.config.json'
        ]
    },
    plugins: [
        {
            plugin: WechatPlugin,
            options: {
                dist: path.join(outputPath , 'ali-zhihu')
            }
        }
    ]
});
