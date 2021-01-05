const { createDescObj } = require('./utils')

/**
 * 位置
 */
module.exports = {
  chooseLocation: createDescObj(
    0,
    '打开地图选择位置',
    'https://docs.alipay.com/mini/api/location',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html',
  ),
  getLocation: createDescObj(
    1,
    '获取位置',
    'https://docs.alipay.com/mini/api/mkxuqd',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
    {
      msg: '参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异',
      params: {
        props: {
          cacheTimeout: {
            type: 0,
            desc: '支付宝客户端经纬度定位缓存过期时间，单位秒',
          },
          type: {
            type: 4,
            desc: '支付宝是Number类型,默认0; 微信是String类型,默认wgs84',
          },
        },
      },
      returnValue: {
        props: {
          country: {
            type: 0,
            desc: '国家（type>0生效）',
          },
          countryCode: {
            type: 0,
            desc: '国家编号 （type>0生效）',
          },
          province: {
            type: 0,
            desc: '省份（type>0生效）',
          },
          city: {
            type: 0,
            desc: '城市（type>0生效）',
          },
          cityAdcode: {
            type: 0,
            desc: '城市级别的地区代码（type>0生效）',
          },
          district: {
            type: 0,
            desc: '区县（type>0生效）',
          },
          districtAdcode: {
            type: 0,
            desc: '区县级别的地区代码（type>0生效）',
          },
          streetNumber: {
            type: 0,
            desc: '需要街道级别逆地理的才会有的字段,街道门牌信息（type>1生效）',
          },
          pois: {
            type: 0,
            desc: '需要 POI 级别的地理位置才会有的字段，定位点附近的 POI 信息（type>2生效）',
          },
          error返回值差异: {
            type: 3,
            desc: "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”",
          },
        },
      },
    },
  ),
  openLocation: createDescObj(
    0,
    '打开位置',
    'https://docs.alipay.com/mini/api/as9kin',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html',
    {
      msg: '封装后完全支持',
    },
  ),
}
