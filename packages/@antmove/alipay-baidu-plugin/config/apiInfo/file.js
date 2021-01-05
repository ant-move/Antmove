const { createDescObj } = require('./utils')

/**
 * 文件系统
 */
module.exports = {
  getFileInfo: createDescObj(
    0,
    '获取文件信息',
    'https://docs.alipay.com/mini/api/izfoiz',
    'https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getFileInfo/',
    {
      msg: '可封装实现完整支持',
      params: {
        props: {
          apFilePath: {
            type: 1,
            desc: '文件路径',
          },
        },
      },
    },
  ),
  getSavedFileInfo: createDescObj(
    0,
    '获取保存的文件信息',
    'https://docs.alipay.com/mini/api/izfoiz',
    'https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileInfo/',
    {
      msg: '可封装实现完整支持',
    },
  ),
  getSavedFileList: createDescObj(
    0,
    '获取保存的文件信息列表',
    'https://docs.alipay.com/mini/api/cgohg1',
    'https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileList/',
    {
      msg: '可封装实现完整支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
          apFilePath: {
            type: 1,
            desc: '文件路径',
          },
        },
      },
    },
  ),
  removeSavedFile: createDescObj(
    0,
    '删除某个保存的文件',
    'https://docs.alipay.com/mini/api/cgohg1',
    'https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileList/',
    {
      msg: '可封装实现完整支持',
      params: {
        props: {
          apFilePath: {
            type: 1,
            desc: '文件路径',
          },
        },
      },
    },
  ),
  saveFile: createDescObj(
    0,
    '保存文件到本地',
    'https://docs.alipay.com/mini/api/cgohg1',
    'https://smartprogram.baidu.com/docs/develop/api/file_save/#swan-getSavedFileList/',
    {
      msg: '可封装实现完整支持',
      params: {
        props: {
          apFilePath: {
            type: 1,
            desc: '文件路径',
          },
        },
      },
      returnValue: {
        props: {
          apFilePath: {
            type: 1,
            desc: '文件保存路径',
          },
        },
      },
    },
  ),
}
