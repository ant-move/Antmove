const { createDescObj } = require('./utils')

/**
 * 分享
 */
module.exports = {
  hideShareMenu: createDescObj(
    0,
    '隐藏分享按钮',
    'https://docs.alipay.com/mini/api/share_app',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html',
  ),
  showSharePanel: createDescObj(
    0,
    '唤起分享面板',
    'https://docs.alipay.com/mini/api/omg2ye',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html',
    {
      msg: '封装后完全支持',
    },
  ),
  onShareAppMessage: createDescObj(
    0,
    '在 Page 中定义 onShareAppMessage 函数，设置该页面的分享信息',
    'https://docs.alipay.com/mini/api/vn576p',
    'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object',
  ),
}
