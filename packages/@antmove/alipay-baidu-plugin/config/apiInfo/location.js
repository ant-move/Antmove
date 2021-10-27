const { createDescObj } = require('./utils')

/**
 * 多媒体
 */

module.exports = {
  chooseLocation: createDescObj(
    0,
    '使用支付宝内置地图选择地理位置',
    'https://docs.alipay.com/mini/api/location',
    'https://smartprogram.baidu.com/docs/develop/api/location_get/#swan-chooseLocation/',
  ),
  getLocation: createDescObj(
    1,
    '获取用户当前的地理位置信息',
    'https://docs.alipay.com/mini/api/mkxuqd',
    'https://smartprogram.baidu.com/docs/develop/api/location_get/#swan-getLocation/',
    {
      msg: '百度小程序封装实现部分功能',
      params: {
        props: {
          cacheTimeout: {
            type: 0,
            desc: '支付宝客户端经纬度定位缓存过期时间',
          },
          type: {
            type: 1,
            desc: '注意为3时，获取经纬度和详细到POI级别的逆地理编码数据不支持',
          },
        },
      },
      returnValue: {
        props: {
          pois: {
            type: 1,
            desc: '定位点附近的 POI 信息',
          },
        },
      },
    },
  ),
  openLocation: createDescObj(
    0,
    '使用支付宝内置地图查看位置',
    'https://docs.alipay.com/mini/api/as9kin',
    'https://smartprogram.baidu.com/docs/develop/api/location_open/#swan-openLocation/',
  ),
}
