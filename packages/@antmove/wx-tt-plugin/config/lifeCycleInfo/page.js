const { createDescObj } = require('./utils');
/**
 * 基础
 */
module.exports = {
    onLoad: createDescObj(
        0,
        "生命周期回调—监听页面加载",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onShow: createDescObj(
        0,
        "生命周期回调—监听页面显示",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onReady: createDescObj(
        0,
        "生命周期回调—监听页面初次渲染完成",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onHide: createDescObj(
        0,
        "生命周期回调—监听页面隐藏",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onUnload: createDescObj(
        0,
        "生命周期回调—监听页面卸载",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onPullDownRefresh: createDescObj(
        0,
        "监听用户下拉动作",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onReachBottom: createDescObj(
        0,
        "页面上拉触底事件的处理函数",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onShareAppMessage: createDescObj(
        0,
        "用户点击右上角转发",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onPageScroll: createDescObj(
        0,
        "页面滚动触发事件的处理函数",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    data: createDescObj(
        0,
        "页面的初始数据",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "https://developer.toutiao.com/dev/miniapp/uUzNx4SN3EjL1cTM",
    ),
    onTabItemTab: createDescObj(
        2,
        "当前是 tab 页时，点击 tab 时触发",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "",
    ),
    onResize: createDescObj(
        2,
        "页面尺寸改变时触发",
        "https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html",
        "",
    )
};