const path = require('path');
const updataTool = require("../../src/utils/updataTool");
updataTool({isUpdata: true,showReport: true},()=>{
    const transformFramework = require('../../src/index.js');
    const WechatPlugin = require('transform-wechat-alipay');
    let outputPath = path.join(__dirname, '../../dist');

    let inputDirPath = path.join(__dirname, '../../examples/miniprogram-test-1');
    transformFramework({
        entry: inputDirPath,
        plugins: [
            {
                plugin: WechatPlugin,
                options: {
                    dist: outputPath + '/miniprogram-test'
                }
            }
        ]
    });
});
