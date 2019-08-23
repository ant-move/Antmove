const { createDescObj } = require('./utils');
/**
 * 基础
 */
module.exports = {
    events: createDescObj(
        2,
        "事件处理函数对象",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onLoad: createDescObj(
        0,
        "页面加载时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onShow: createDescObj(
        0,
        "页面显示时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onReady: createDescObj(
        0,
        "页面初次渲染完成时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onHide: createDescObj(
        0,
        "页面隐藏时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onUnload: createDescObj(
        0,
        "页面卸载时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onShareAppMessage: createDescObj(
        0,
        "点击右上角分享时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onTitleClick: createDescObj(
        2,
        "点击标题触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onOptionMenuClick: createDescObj(
        2,
        "点击导航栏额外图标触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onPopMenuClick: createDescObj(
        2,
        "点击右上角通用菜单中的自定义菜单按钮触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onPullDownRefresh: createDescObj(
        0,
        "页面下拉时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onPullIntercept: createDescObj(
        2,
        "下拉中断时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onTabItemTap: createDescObj(
        0,
        "点击 tab 时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    
    onPageScroll: createDescObj(
        0,
        "页面滚动时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    onReachBottom: createDescObj(
        0,
        "上拉触底时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_page/#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%87%BD%E6%95%B0/"
    ),
    
};