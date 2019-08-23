const { createDescObj } = require('./utils');
/**
 * 媒体
 */
module.exports = {
    chooseImage: createDescObj(
        0,
        '拍照或从本地相册中选择图片',
        'https://docs.alipay.com/mini/api/media-image',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html',
        {
            msg: '封装后完全支持'
        }
    ),
    compressImage: createDescObj(
        0,
        '压缩图片',
        'https://docs.alipay.com/mini/api/ehndze',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html',
        {
            msg: '封装后完全支持'
        }
    ),
    getImageInfo: createDescObj(
        0,
        '获取图片信息',
        'https://docs.alipay.com/mini/api/yv9n6t',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html'
    ),
    previewImage: createDescObj(
        0,
        '预览图片',
        'https://docs.alipay.com/mini/api/eei0av',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html',
        {
            msg: '封装后完全支持'
        }
    ),
    saveImage: createDescObj(
        0,
        '将在线图片保存至本地相册',
        'https://docs.alipay.com/mini/api/izfoiz',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html',
        {
            msg: '封装后完全支持'
        }
    )
};