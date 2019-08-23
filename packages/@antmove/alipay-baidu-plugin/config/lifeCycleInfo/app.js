const { createDescObj } = require('./utils');
/**
 * 基础
 */
module.exports = {
    onLaunch: createDescObj(
        0,
        "当小程序初始化完成时触发，全局只触发一次",
        "https://docs.alipay.com/mini/framework/app-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/"
    ),
    onShow: createDescObj(
        0,
        "当小程序启动，或从后台进入前台显示时触发",
        "https://docs.alipay.com/mini/framework/app-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/"
    ),
    onHide: createDescObj(
        0,
        "当小程序从前台进入后台时触发",
        "https://docs.alipay.com/mini/framework/app-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/"
    ),
    onError: createDescObj(
        0,
        "当小程序发生 js 错误时触发",
        "https://docs.alipay.com/mini/framework/app-detail",
        "https://smartprogram.baidu.com/docs/develop/framework/app_service_register/#App/"
    ),
    onShareAppMessage: createDescObj(
        2,
        "当小程序发生 js 错误时触发",
        "https://docs.alipay.com/mini/framework/app-detail",
        ""
    ), 
};