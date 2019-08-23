const { createDescObj } = require('./utils');
/**
 * 自定义通用菜单
 */
module.exports = {
    hideAddToDesktopMenu: createDescObj(
        2,
        '隐藏当前页面通用菜单中的添加到桌面功能',
        'https://docs.alipay.com/mini/api/optionmenuitem',
        ''
    ),
    hideAllAddToDesktopMenu: createDescObj(
        2,
        '隐藏所有页面的通用菜单中的 添加到桌面 功能',
        'https://docs.alipay.com/mini/api/fdaplu',
        ''
    ),
    hideAllFavoriteMenu: createDescObj(
        2,
        '隐藏所有页面的通用菜单中的 收藏 功能',
        'https://docs.alipay.com/mini/api/glp0w0',
        ''
    ),
    hideFavoriteMenu: createDescObj(
        2,
        '隐藏当前页面的通用菜单中的 收藏 按钮',
        'https://docs.alipay.com/mini/api/avtg7h',
        ''
    ),
    hideShareMenu: createDescObj(
        0,
        '隐藏当前页面右上角通用菜单中的 分享 功能',
        'https://docs.alipay.com/mini/api/aimaqk',
        'https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.hideShareMenu.html'
    ),
};