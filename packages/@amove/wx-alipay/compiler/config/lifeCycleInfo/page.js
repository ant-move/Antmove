const { createDescObj } = require('./utils')

/**
 * 基础
 */
module.exports = {
  onLoad: createDescObj(
    0,
    '生命周期回调—监听页面加载',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onShow: createDescObj(
    0,
    '生命周期回调—监听页面显示',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onReady: createDescObj(
    0,
    '生命周期回调—监听页面初次渲染完成',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onHide: createDescObj(
    0,
    '生命周期回调—监听页面隐藏',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onUnload: createDescObj(
    0,
    '生命周期回调—监听页面卸载',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onPullDownRefresh: createDescObj(
    0,
    '监听用户下拉动作',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onReachBottom: createDescObj(
    0,
    '页面上拉触底事件的处理函数',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onShareAppMessage: createDescObj(
    0,
    '用户点击右上角转发',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onPageScroll: createDescObj(
    0,
    '页面滚动触发事件的处理函数',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  data: createDescObj(
    0,
    '页面的初始数据',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onTabItemTab: createDescObj(
    0,
    '当前是 tab 页时，点击 tab 时触发',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    'https://docs.alipay.com/mini/framework/page-detail',
  ),
  onResize: createDescObj(
    2,
    '页面尺寸改变时触发',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html',
    '',
  ),
}
