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

