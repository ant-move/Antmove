const { createDescObj } = require('./utils');
/**
 * 文件系统
 */
module.exports = {
    saveFile: createDescObj(
        0,
        '保存文件到本地',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html',
        'https://developer.toutiao.com/dev/miniapp/ugTOy4CO5IjL4kjM'
    ),
    removeSavedFile: createDescObj(
        0,
        '删除本地缓存文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
        'https://developer.toutiao.com/dev/miniapp/uUDNz4SN0MjL1QzM'
    ),
    openDocument: createDescObj(
        2,
        '新开页面打开文档',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.openDocument.html',
        ''
    ),
    getSavedFileList: createDescObj(
        0,
        '获取保存的所有文件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html',
        'https://developer.toutiao.com/dev/miniapp/uYDMz4iNwMjL2AzM'
    ),
    getSavedFileInfo: createDescObj(
        2,
        '获取保存的文件信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
        ''
    ),
    getFileSystemManager: createDescObj(
        0,
        '获取全局唯一的文件管理器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileSystemManager.html',
        'https://developer.toutiao.com/dev/miniapp/uUDOy4SN4IjL1gjM'
    ),
    getFileInfo: createDescObj(
        0,
        '获取文件信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html',
        'https://developer.toutiao.com/dev/miniapp/uITOy4iM5IjLykjM',
        {
            msg: '参数缺失',
            params: {
                props: {
                    digestAlgorithm: {
                        type: 0,
                        desc: '计算文件摘要的算法'
                    }
                }
            }
        }
    ),
    Stats: createDescObj(
        0,
        '描述文件状态的对象',
        'https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.html',
        'https://developer.toutiao.com/dev/miniapp/ugDOy4CO4IjL4gjM'
    )
};