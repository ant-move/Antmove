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
    1,
    '显示当前页面的转发按钮',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.showShareMenu.html',
    'https://developer.toutiao.com/dev/miniapp/uczMz4yNzMjL3MzM',
    {
      msg: '参数缺失',
      parmas: {
        props: {
          withShareTicket: {
            type: 0,
            desc: '是否使用带 shareTicket 的转发详情',
          },
        },
      },
    },
  ),
  hideShareMenu: createDescObj(
    0,
    '隐藏转发按钮',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html',
    'https://developer.toutiao.com/dev/miniapp/ucTOy4yN5IjL3kjM',
  ),
  getShareInfo: createDescObj(
    2,
    '获取转发详细信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html',
    '',
  ),
}
