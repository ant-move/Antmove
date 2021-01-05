const { createDescObj } = require('./utils')

/**
 * 位置
 */
module.exports = {
  stopLocationUpdate: createDescObj(
    2,
    '关闭监听实时位置变化，前后台都停止消息接收',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.stopLocationUpdate.html',
    '',
  ),
  startLocationUpdateBackground: createDescObj(
    2,
    '开启小程序进入前后台时均接收位置消息，需引导用户开启授权',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html',
    '',
  ),
  startLocationUpdate: createDescObj(
    2,
    '开启小程序进入前台时接收位置消息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdate.html',
    '',
  ),
  openLocation: createDescObj(
    0,
    '打开位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html',
    'https://developer.toutiao.com/dev/miniapp/uQTNz4CN1MjL0UzM',
  ),
  onLocationChange: createDescObj(
    2,
    '监听实时地理位置变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html',
    '',
  ),
  offLocationChange: createDescObj(
    2,
    '取消监听实时地理位置变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.offLocationChange.html',
    '',
  ),
  getLocation: createDescObj(
    1,
    '获取位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
    'https://developer.toutiao.com/dev/miniapp/uIzMz4iMzMjLyMzM',
    {
      msg: '参数缺失',
      params: {
        props: {
          altitude: {
            type: 0,
            desc: '传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度',
          },
        },
      },
    },
  ),
  chooseLocation: createDescObj(
    2,
    '打开地图选择位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html',
    '',
  ),
}
