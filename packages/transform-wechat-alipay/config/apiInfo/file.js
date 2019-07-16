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
            msg: '参数名称差异/返回值名称差异',
            params: {
                props: {
                    tempFilePath: {
                        type: 1,
                        desc: '需要保存的文件的临时路径wx: tempFilePath, alipay: apFilePath'
                    }
                }
            },
            returnValue: {
                props: {
                    savedFilePath: {
                        type: 1,
                        desc: '存储后的文件路径, wx: savedFilePath, alipay: apFilePath'
                    }
                }
            }
        }
    ),
    removeSavedFile: createDescObj(
        0,
        '删除本地缓存文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
        'https://docs.alipay.com/mini/api/dgi1fr',
        {
            msg: '参数名称差异',
            params: {
                props: {
                    filePath: {
                        type: 1,
                        desc: '需要删除的文件路径, wx: filePath, alipay: apFilePath'
                    }
                }
            }
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
            msg: '返回值名称不同',
            returnValue: {
                props: {
                    filePath: {
                        type: 1,
                        desc: '本地路径, wx: filePath, alipay: apFilePath'
                    }
                }
            }
        }
    ),
    getSavedFileInfo: createDescObj(
        0,
        '获取保存的文件信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
        'https://docs.alipay.com/mini/api/qrx6ze',
        {
            msg: '参数名称差异',
            params: {
                props: {
                    filePath: {
                        type: 1,
                        desc: '文件路径, wx: filePath, alipay: apFilePath'
                    }
                }
            }
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
            msg: '参数名称差异',
            params: {
                props: {
                    filePath: {
                        type: 1,
                        desc: '文件路径, wx: filePath, alipay: apFilePath'
                    }
                }
            }
        }
    )
};