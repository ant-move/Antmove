const { createDescObj } = require('./utils');
/**
 * 文件
 */
module.exports = {
    getFileInfo: createDescObj(
        0,
        '获取文件信息',
        'https://docs.alipay.com/mini/api/file',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html',
        {
            msg: '封装后完全支持'
        }
    ),
    getSavedFileInfo: createDescObj(
        0,
        '获取保存的文件信息',
        'https://docs.alipay.com/mini/api/qrx6ze',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
        {
            msg: '封装后完全支持'
        }
    ),
    getSavedFileList: createDescObj(
        0,
        '获取保存的所有文件',
        'https://docs.alipay.com/mini/api/cgohg1',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html',
        {
            msg: '封装后完全支持'
        }
    ),
    removeSavedFile: createDescObj(
        0,
        '删除本地缓存文件',
        'https://docs.alipay.com/mini/api/dgi1fr',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
        {
            msg: '封装后完全支持'
        }
    ),
    saveFile: createDescObj(
        0,
        '保存文件到本地',
        'https://docs.alipay.com/mini/api/xbll1q',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html',
        {
            msg: '封装后完全支持'
        }
    )
};