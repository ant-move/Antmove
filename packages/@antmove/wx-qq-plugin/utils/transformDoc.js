const ComponentInfo = require('../config/componentsInfo')
const ApiInfo = require('../config/apiInfo')
const LifeInfo = require('../config/lifeCycleInfo')
const JsonInfo = require('../config/jsonInfo')

const docs = {
  ComponentInfo,
  ApiInfo,
  LifeInfo,
  JsonInfo,
}
const antMoveUtils = require('@antmove/utils')

antMoveUtils.transformDoc(docs, 'wx-qq')
