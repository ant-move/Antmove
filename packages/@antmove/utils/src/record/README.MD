# 日志插件record

### 说明

这个插件的功能主要作用在ant-move搬家工具转码完成后，会以页面的形式向用户报告转码的详细过程，用户可以更直观的在浏览器上查看工具的转换结果；

### 参数config
日志工具以函数的形式向外提供了各个模块的检测方法，其中需要使用者提供相应的参数

| key值 | 类型 | 说明 |
| --- | --- |--- |
| isShow | bool | 是否使用日志工具，默认：true |
| pagePath | string | 编译生成的页面存放地址 |
| globalconfig | object | 小程序全局配置文件配置项目说明 |
| pageconfig | object | 小程序页面配置文件配置项目说明 |
| components | object | 小程序使用的组件说明 |
| apis | string | 小程序使用的api说明 |
| openAbility | string | 小程序使用的开放能力说明 |
| lifeCycleInfo | string | 小程序生命周期函数说明 |
| packagepath | string | ant-move项目package.json文件的路径(经过path处理后的路径) |


配置案例：
```javascript
const globalconfig = require("../../config/jsonInfo/globalconfig");
const pageconfig = require("../../config/jsonInfo/pageconfig");
const components = require("../../config/componentsInfo/index");
const apis = require("../../config/apiInfo/index");
const openAbility = require("../../config/apiInfo/openAbility");
const lifeCycleInfo = require('../../config/lifeCircleInfo');
const path = require('path');
const packagepath = path.join(__dirname,'../../../../../package.json');

module.exports = {
    isShow: true,
    pagePath: '/', // /代表项目根目录
    globalconfig,
    pageconfig,
    components,
    apis,
    openAbility,
    lifeCycleInfo,
    packagepath
};
```

### 返回的方法

| 方法名称 | 说明 | 参数 |
| --- | --- | --- |
| resDataInit | 生成日志数据模板（注意：使用者需要在转码正式开始前项目开始前调用这个函数，以保证日志数据格式的正确性） | 无 |
| getTemplateData | 生成模板文件的组件的转码情况数据 | fileInfo：文件的信息 |
| getStyleData | 生成样式的转码情况数据 | filePath：文件的项目下的路径 |
| getCustomScript | 生成自定义脚本的转码情况数据 | filePath：文件的项目下的路径 |
| getScriptData | 生成脚本的转码情况数据 | filePath：文件的项目下的路径,apis：文件使用的API,originCode：脚本文件内容 |
| getJsonData | 生成json文件数据 | filePath：文件的项目下的路径,content：json文件的内容 |
| findOpenAbility | 生成小程序开发能力的转码数据 | repData：之前生成的日志数据（注意：调用这个方法前必须先调用getScriptData方法）  |
| getOthersFile | 生成其他文件的转码数据 | filePath：文件的项目下的路径 |
| statistics | 生成转码工具文件统计数据 | transforms：文件处理结果 （注意：调用这个方法前必须在项目处理完成后再调用） |
| writeReportPage | 生成并打开转码的日志网页 | dayas：文件处理结果的对象 ,targetPath：生成页面的目标路径 |


```javascript
let repData = resDataInit(); 

// 结果：
// repData = { 
//     transforms: {}
// }

const reptempData = getTemplateData(fileInfo);

repData.transforms = Object.assign(repData.transforms,reptempData); 

```


