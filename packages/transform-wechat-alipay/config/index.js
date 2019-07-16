const ComponentInfo = require('./componentsInfo');
const ApiInfo =require('./apiInfo');
const LifeInfo = require('./lifeCycleInfo');
const JsonInfo = require('./jsonInfo');
const config = {
        ComponentInfo,
        ApiInfo,
        LifeInfo,
        JsonInfo
}
const antMoveUtils = require('ant-move-utils')
antMoveUtils.transformDoc(config,"wechat-alipay")