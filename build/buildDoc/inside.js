/**
 * alipay-baidu */
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
  ComponentInfo: '../../packages/transform-alipay-baidu/config/componentsInfo',
  ApiInfo: '../../packages/transform-alipay-baidu/config/apiInfo',
  LifeInfo: '../../packages/transform-alipay-baidu/config/lifeCycleInfo',
  JsonInfo: '../../packages/transform-alipay-baidu/config/jsonInfo',
  type: 'alipay-baidu',
  edtion: 'inside',
}
const alipayTransformWechat = {
  ComponentInfo: '../../packages/transform-alipay-wechat/config/componentsInfo',
  ApiInfo: '../../packages/transform-alipay-wechat/config/apiInfo',
  LifeInfo: '../../packages/transform-alipay-wechat/config/lifeCycleInfo',
  JsonInfo: '../../packages/transform-alipay-wechat/config/jsonInfo',
  type: 'alipay-wechat',
  edtion: 'inside',
}
const wechatTransformAlipay = {
  ComponentInfo: '../../packages/@antmove/wx-alipay-plugin/config/componentsInfo',
  ApiInfo: '../../packages/@antmove/wx-alipay-plugin/config/apiInfo',
  LifeInfo: '../../packages/@antmove/wx-alipay-plugin/config/lifeCycleInfo',
  JsonInfo: '../../packages/@antmove/wx-alipay-plugin/config/jsonInfo',
  type: 'wechat-alipay',
  edtion: 'inside',
}
const wechatTransformAmap = {
  ComponentInfo: '../config/componentInfo.json',
  ApiInfo: '../config/apiInfo.json',
  LifeInfo: '../amapDemo/lifeCycleInfo/index',
  JsonInfo: '../amapDemo/jsonInfo/index',
  type: 'wechat-amap',
  edtion: 'inside',
}
externalTransformDoc(alipayTansformBaidu)
externalTransformDoc(alipayTransformWechat)
externalTransformDoc(wechatTransformAlipay)
externalTransformDoc(wechatTransformAmap)
