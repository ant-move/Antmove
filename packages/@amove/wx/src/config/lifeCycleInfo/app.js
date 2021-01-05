const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  onLaunch: createDescObj(
    1,
    '生命周期回调——监听小程序初始化',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    'https://docs.alipay.com/mini/framework/app',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          scene: {
            type: 0,
            desc: '启动小程序的场景值',
          },
          shareTicket: {
            type: 0,
            desc: '获取更多转发信息',
          },
        },
      },
    },
  ),
  onShow: createDescObj(
    1,
    '生命周期回调——监听小程序启动或切前台',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    'https://docs.alipay.com/mini/framework/app',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          scene: {
            type: 0,
            desc: '启动小程序的场景值',
          },
          shareTicket: {
            type: 0,
            desc: '获取更多转发信息',
          },
        },
      },
    },
  ),
  onHide: createDescObj(
    0,
    '生命周期回调——监听小程序切后台',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    'https://docs.alipay.com/mini/framework/app',
  ),
  onError: createDescObj(
    0,
    '错误监听函数',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    'https://docs.alipay.com/mini/framework/app',
  ),
  onPageNotFound: createDescObj(
    2,
    '页面不存在监听函数',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    '',
  ),
}
