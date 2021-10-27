const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  onLaunch: createDescObj(
    1,
    '生命周期回调：监听小程序初始化',
    'https://docs.alipay.com/mini/framework/app-detail',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          sourceServiceId: {
            type: 0,
            desc: 'referrerInfo对象下的sourceServiceId 来源插件，当处于插件运行模式时可见',
          },
        },
      },
    },
  ),
  onShow: createDescObj(
    1,
    '生命周期回调：监听小程序显示',
    'https://docs.alipay.com/mini/framework/app-detail',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
    {
      msg: '返回值属性值缺失',
      returnValue: {
        props: {
          sourceServiceId: {
            type: 0,
            desc: 'referrerInfo对象下的sourceServiceId 来源插件，当处于插件运行模式时可见',
          },
        },
      },
    },
  ),
  onHide: createDescObj(
    0,
    '生命周期回调：监听小程序隐藏',
    'https://docs.alipay.com/mini/framework/app-detail',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
          
  ),
  onError: createDescObj(
    0,
    '监听小程序错误',
    'https://docs.alipay.com/mini/framework/app-detail',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html',
  ),
  onShareAppMessage: createDescObj(
    2,
    '全局分享配置',
    'https://docs.alipay.com/mini/framework/app-detail',
    '',
  ),
}
