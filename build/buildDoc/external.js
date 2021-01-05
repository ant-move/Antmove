// const antMoveUtils = require('@antmove/utils')
// const ComponentInfo = require('../../packages/@antmove/wx-alipay-plugin/config/componentsInfo');
// const ApiInfo =require('../../packages/@antmove/wx-alipay-plugin/config/apiInfo');
// const LifeInfo = require('../../packages/@antmove/wx-alipay-plugin/config/lifeCycleInfo');
// const JsonInfo = require('../../packages/@antmove/wx-alipay-plugin/config/jsonInfo');
// const docs = {
//         ComponentInfo,
//         ApiInfo,
//         LifeInfo,
//         JsonInfo
// }
// antMoveUtils.transformDoc(docs,"wechat-alipay","external")

const antMoveUtils = require('@antmove/utils')

function externalTransformDoc(_ = {
  ComponentInfo: '',
  ApiInfo: '',
  LifeInfo: '',
  atbJsonInfo: '',
  type: '',
  edtion: '',
}) {
  const ComponentInfo = require(_.ComponentInfo)
  const ApiInfo = require(_.ApiInfo)
  const LifeInfo = require(_.LifeInfo)
  const JsonInfo = require(_.JsonInfo)
  const docs = {
    ComponentInfo,
    ApiInfo,
    LifeInfo,
    JsonInfo,
  }
  antMoveUtils.transformDoc(docs, _.type, _.edtion)
}
const alipayTansformBaidu = {
  ComponentInfo: '@antmove/alipay-baidu/config/componentsInfo',
  ApiInfo: '@antmove/alipay-baidu/config/apiInfo',
  LifeInfo: '@antmove/alipay-baidu/config/lifeCycleInfo',
  JsonInfo: '@antmove/alipay-baidu/config/jsonInfo',
  type: 'alipay-baidu',
  edtion: 'external',
}
const alipayTransformWechat = {
  ComponentInfo: '@antmove/alipay-wx/config/componentsInfo',
  ApiInfo: '@antmove/alipay-wx/config/apiInfo',
  LifeInfo: '@antmove/alipay-wx/config/lifeCycleInfo',
  JsonInfo: '@antmove/alipay-wx/config/jsonInfo',
  type: 'alipay-wechat',
  edtion: 'external',
}
const wechatTransformAlipay = {
  ComponentInfo: '@antmove/wx-alipay/config/componentsInfo',
  ApiInfo: '@antmove/wx-alipay/config/apiInfo',
  LifeInfo: '@antmove/wx-alipay/config/lifeCycleInfo',
  JsonInfo: '@antmove/wx-alipay/config/jsonInfo',
  type: 'wechat-alipay',
  edtion: 'external',
}
const wechatTransformAmap = {
  ComponentInfo: '@antmove/wx-amap/config/componentsInfo/componentInfo.js',
  ApiInfo: '@antmove/wx-amap/config/apiInfo/apiInfo.js',
  LifeInfo: '@antmove/wx-amap/config/lifeCycleInfo/index.js',
  JsonInfo: '@antmove/wx-amap/config/jsonInfo/index.js',
  type: 'wechat-amap',
  edtion: 'external',
}

externalTransformDoc(alipayTansformBaidu)
externalTransformDoc(alipayTransformWechat)
externalTransformDoc(wechatTransformAlipay)
externalTransformDoc(wechatTransformAmap)
