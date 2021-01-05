const { createDescObj } = require('./utils')

/**
 * 转发
 */
module.exports = {
  updateShareMenu: createDescObj(
    2,
    '更新转发属性',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.updateShareMenu.html',
    '',
  ),
  showShareMenu: createDescObj(
    2,
    '显示当前页面的转发按钮',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html',
    '',
  ),
  hideShareMenu: createDescObj(
    0,
    '隐藏转发按钮',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html',
    'https://docs.alipay.com/mini/api/share_app#a-namev4x7pramyhidesharemenuobject',
  ),
  getShareInfo: createDescObj(
    2,
    '获取转发详细信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html',
    '',
  ),
}
