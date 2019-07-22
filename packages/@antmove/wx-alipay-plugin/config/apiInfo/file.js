const { createDescObj } = require('./utils');
/**
 * 文件系统
 */
module.exports = {
    saveFile: createDescObj(
        0,
        '保存文件到本地',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html',
        'https://docs.alipay.com/mini/api/xbll1q',
        {
            msg: '封装后完全支持',
            
        }
    ),
    removeSavedFile: createDescObj(
        0,
        '删除本地缓存文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
        'https://docs.alipay.com/mini/api/dgi1fr',
        {
            msg: '封装后完全支持',
        }
    ),
    openDocument: createDescObj(
        2,
        '新开页面打开文档',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html',
        '无'
    ),
    getSavedFileList: createDescObj(
        0,
        '获取保存的所有文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html',
        'https://docs.alipay.com/mini/api/cgohg1',
        {
            msg: '封装后完全支持',
        }
    ),
    getSavedFileInfo: createDescObj(
        0,
        '获取保存的文件信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
        'https://docs.alipay.com/mini/api/qrx6ze',
        {
            msg: '封装后支持',
        }
    ),
    getFileSystemManager: createDescObj(
        2,
        '获取全局唯一的文件管理器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html',
        '无'
    ),
    getFileInfo: createDescObj(
        0,
        '获取文件信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html',
        'https://docs.alipay.com/mini/api/file',
        {
            msg: '封装后完全支持',
        }
    )
};