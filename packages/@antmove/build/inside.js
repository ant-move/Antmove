/**
 * alipay-baidu */
const antMoveUtils = require('@antmove/utils')
const atbComponentInfo = require('../../transform-alipay-baidu/config/componentsInfo')
const atbApiInfo = require('../../transform-alipay-baidu/config/apiInfo')
const atbLifeInfo = require('../../transform-alipay-baidu/config/lifeCycleInfo')
const atbJsonInfo = require('../../transform-alipay-baidu/config/jsonInfo')

const alipayTansformBaidu = {
  ComponentInfo: atbComponentInfo,
  ApiInfo: atbApiInfo,
  LifeInfo: atbLifeInfo,
  JsonInfo: atbJsonInfo,
}
antMoveUtils.transformDoc(alipayTansformBaidu, 'alipay-baidu', 'inside')

/**
 * alipay-wechat */
const atwComponentInfo = require('../../transform-alipay-wechat/config/componentsInfo')
const atwApiInfo = require('../../transform-alipay-wechat/config/apiInfo')
const atwLifeInfo = require('../../transform-alipay-wechat/config/lifeCycleInfo')
const atwJsonInfo = require('../../transform-alipay-wechat/config/jsonInfo')

const alipayTransformWechat = {
  ComponentInfo: atwComponentInfo,
  ApiInfo: atwApiInfo,
  LifeInfo: atwLifeInfo,
  JsonInfo: atwJsonInfo,
}
antMoveUtils.transformDoc(alipayTransformWechat, 'alipay-wechat', 'inside')

/**
 *wechat-alipay */
const wtaComponentInfo = require('../wx-alipay-plugin/config/componentsInfo')
const wtaApiInfo = require('../wx-alipay-plugin/config/apiInfo')
const wtaLifeInfo = require('../wx-alipay-plugin/config/lifeCycleInfo')
const wtaJsonInfo = require('../wx-alipay-plugin/config/jsonInfo')

const wechatTransformAlipay = {
  ComponentInfo: wtaComponentInfo,
  ApiInfo: wtaApiInfo,
  LifeInfo: wtaLifeInfo,
  JsonInfo: wtaJsonInfo,
}
antMoveUtils.transformDoc(wechatTransformAlipay, 'wechat-alipay', 'inside')

/**
 *wechat-amap */
/*
const wtmComponentInfo = require('../../../build/config/componentInfo.json');
const wtmApiInfo =require('../../../build/config/apiInfo.json');
const wtmLifeInfo = require('../../../build/amapDemo/lifeCycleInfo/index');
const wtmJsonInfo = require('../../../build/amapDemo/jsonInfo/index');
const wechatTransformAmap = {
        ComponentInfo: wtmComponentInfo,
        ApiInfo: wtmApiInfo,
        LifeInfo: wtmLifeInfo,
        JsonInfo: wtmJsonInfo
}
antMoveUtils.transformDoc(wechatTransformAmap,"wechat-amap","inside")
*/
