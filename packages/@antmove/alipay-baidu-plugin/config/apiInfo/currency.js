const { createDescObj } = require('./utils');
/**
 * 通用部分
 *  */
module.exports = {
    
    
    hideAddToDesktopMenu: createDescObj(
        2,
        '隐藏当前页面通用菜单中的添加到桌面功能',
        'https://docs.alipay.com/mini/api/optionmenuitem',
        '',
        {
            msg: '不支持'
        }
    ), 
    hideAllAddToDesktopMenu: createDescObj(
        2,
        '隐藏所有页面的通用菜单中的 添加到桌面 功能',
        'https://docs.alipay.com/mini/api/fdaplu',
        '',
        {
            msg: '不支持'
        }
    ),
    hideAllFavoriteMenu: createDescObj(
        2,
        '隐藏所有页面的通用菜单中的 收藏 功能',
        'https://docs.alipay.com/mini/api/glp0w0',
        '',
        {
            msg: '不支持'
        }
    ),
    hideFavoriteMenu: createDescObj(
        2,
        '隐藏当前页面的通用菜单中的 收藏 按钮',
        'https://docs.alipay.com/mini/api/avtg7h',
        '',
        {
            msg: '不支持'
        }
    ),
     
    
};