const { createDescObj } = require('./utils')

/**
 * 位置
 */
module.exports = {
  openLocation: createDescObj(
    0,
    '打开位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html',
    'https://docs.alipay.com/mini/api/as9kin',
  ),
  getLocation: createDescObj(
    1,
    '获取位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
    'https://docs.alipay.com/mini/api/mkxuqd',
    {
      msg: '参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异',
      params: {
        props: {
          altitude: {
            type: 0,
            desc: '传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度',
          },
          type的取值: {
            type: 4,
            desc: 'wx: 默认值wgs84, alipay: 默认值0',
          },
        },
      },
      returnValue: {
        props: {
          speed: {
            type: 0,
            desc: '速度，单位 m/s',
          },
          altitude: {
            type: 0,
            desc: '高度，单位 m',
          },
          verticalAccuracy: {
            type: 0,
            desc: '垂直精度，单位 m（Android 无法获取，返回 0）',
          },
          error返回值差异: {
            type: 3,
            desc: "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”",
          },
        },
      },
    },
  ),
  chooseLocation: createDescObj(
    0,
    '打开地图选择位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html',
    'https://docs.alipay.com/mini/api/location#a-namesnvqutamychooselocation',
  ),
}
