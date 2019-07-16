# 蚂蚁搬家自更新工具
### updataTool
#### 介绍
updataTool函数是方便用户在使用搬家工具前自动更新本地代码的函数，让用户能实时使用最新的工具进行小程序搬家工作
#### 位置
/src/utils/updataTool<br />这个功能需要在正式编译前调用才能让自更新功能生效，如在script文件下wechat里的编译js里使用，可以这样引用

```javascript
const updataTool = require("../../src/utils/updataTool");
```

#### 函数用法
updataTool函数提供了三个参数 updataTool(opactions, cb)

| 参数 | 参数类型 | 是否必填 | 描述 |
| --- | --- | --- | --- |
| opactions | object | 是 | 自更新的配置参数 |
| cb | function | 否 | 更新结束后的回调函数 |

opactions里面的具体参数

| 参数 | 参数类型 | 默认参数 | 是否必填 | 描述 |
| --- | --- | --- | --- | --- |
| isUpadta | bool | true | 否 | 使用去执行更新功能，如果isUpdata=false，则直接执行callBack函数的逻辑； |
| showReport | bool | false | 否 | 是否打印更新报告 |

#### 案例
这里，我们如果在script文件下wechat文件夹编写的初始化文件，就可以这样写

```javascript
const path = require('path');
const updataTool = require("../../src/utils/updataTool");
updataTool(
    {
        isUpdata: true,
     	showReport: true
    }, // 配置参数，isUpdata=ture 时可以省略 
    ()=>{
        const transformFramework = require('../../src/index.js');
        const WechatPlugin = require('../../src/plugin/transform-wechat-alipay/index');
        const outputPath = path.join(__dirname, '../../dist');
        const inputDirPath = path.join(__dirname, '../../examples/miniprogram-test-1');
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
    } // 回调函数，在代码更新成功后执行对应的引入和转码的操作
);
```

