const { createDescObj } = require('./utils');
/**
 * 多媒体
 */

module.exports = {
    chooseImage: createDescObj(
        0,
        '拍照或从本地相册中选择图片',
        'https://docs.alipay.com/mini/api/scroll',
        'https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-chooseImage/'
    ),
    compressImage: createDescObj(
        2,
        '压缩图片',
        'https://docs.alipay.com/mini/api/ehndze',
        '',
        {
            msg: '百度小程序不支持此功能'
        }
    ),
    getImageInfo: createDescObj(
        0,
        '获取图片信息',
        'https://docs.alipay.com/mini/api/yv9n6t',
        'https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-getImageInfo/'
    ),
    previewImage: createDescObj(
        0,
        '预览图片',
        'https://docs.alipay.com/mini/api/eei0av',
        'https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-previewImage/'
    ),
    saveImage: createDescObj(
        2,
        '将在线图片保存至本地相册',
        'https://docs.alipay.com/mini/api/izfoiz',
        'https://smartprogram.baidu.com/docs/develop/api/media_image/#swan-saveImageToPhotosAlbum/',
        {
            msg: '百度小程序不支持'
        }
    ),
};