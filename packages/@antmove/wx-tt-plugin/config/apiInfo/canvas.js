const { createDescObj } = require('./utils');
/**
 * 画布
 */
module.exports = {
    createCanvasContext: createDescObj(
        0,
        '创建 canvas 的绘图上下文 CanvasContext 对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html',
        'https://developer.toutiao.com/dev/miniapp/uQTNy4CN1IjL0UjM'
    ),
    canvasToTempFilePath: createDescObj(
        0,
        '把当前画布指定区域的内容导出生成指定大小的图片',
        'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html',
        'https://developer.toutiao.com/dev/miniapp/uQTNy4CN1IjL0UjM'
    ),
    canvasPutImageData: createDescObj(
        0,
        '将像素数据绘制到画布',
        'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html',
        'https://developer.toutiao.com/dev/miniapp/uQTNy4CN1IjL0UjM'
    ),
    canvasGetImageData: createDescObj(
        0,
        '获取 canvas 区域隐含的像素数据。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html',
        'https://developer.toutiao.com/dev/miniapp/uQTNy4CN1IjL0UjM'
    )
};