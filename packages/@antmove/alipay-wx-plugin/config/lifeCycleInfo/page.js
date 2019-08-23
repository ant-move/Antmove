const { createDescObj } = require('./utils');
/**
 * 基础
 */
module.exports = {
    data: createDescObj(
        0,
        "页面的初始数据",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
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
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
       
    ),
    onShow: createDescObj(
        0,
        "页面显示时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
        
    ),
    onReady: createDescObj(
        0,
        "页面初次渲染完成时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onHide: createDescObj(
        0,
        "页面隐藏时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onUnload: createDescObj(
        0,
        "页面卸载时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onShareAppMessage: createDescObj(
        0,
        "用户点击右上角转发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
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
        "监听用户下拉动作",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onPullIntercept: createDescObj(
        2,
        "下拉中断时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        ""
    ),
    onTabItemTap: createDescObj(
        0,
        "点击tabItem时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onPageScroll: createDescObj(
        0,
        "页面滚动时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    ),
    onReachBottom: createDescObj(
        0,
        "上拉触底时触发",
        "https://docs.alipay.com/mini/framework/page-detail",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html"
    )
};