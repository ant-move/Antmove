const ComponentInfo = require('../config/componentInfo.json')
const ApiInfo = require('../config/apiInfo.json')
const LifeInfo = require('../amapDemo/lifeCycleInfo')
const JsonInfo = require('../amapDemo/jsonInfo')

const docs = {
  ComponentInfo,
  ApiInfo,
  LifeInfo,
  JsonInfo,
}
const antMoveUtils = require('ant-move-utils')

antMoveUtils.transformDoc(docs, 'wechat-amap')
