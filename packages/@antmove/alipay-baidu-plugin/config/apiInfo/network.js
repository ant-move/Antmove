const { createDescObj } = require('./utils')

/**
 * 网络
 */
module.exports = {
  closeSocket: createDescObj(
    0,
    '关闭 WebSocket 连接',
    'https://docs.alipay.com/mini/api/network',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-closeSocket/',
  ),
  connectSocket: createDescObj(
    1,
    '创建一个 WebSocket 的连接',
    'https://docs.alipay.com/mini/api/ehndze',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-connectSocket/',
    {
      msg: '百度小程序部分支持',
      params: {
        props: {
          data: {
            type: 1,
            desc: '请求的参数',
          },
        },
      },
    },
  ),
    
  offSocketMessage: createDescObj(
    2,
    '取消监听 WebSocket 接受到服务器的消息事件',
    'https://docs.alipay.com/mini/api/roziyq',
    '',
    {
      msg: '百度小程序不支持',
    },
  ),
  offSocketOpen: createDescObj(
    2,
    '取消监听 WebSocket 连接打开事件',
    'https://docs.alipay.com/mini/api/dva3t8',
    '',
    {
      msg: '百度小程序不支持',
    },
  ),

  offSocketError: createDescObj(
    2,
    '取消监听 WebSocket 连接打开事件',
    'https://docs.alipay.com/mini/api/dva3t8',
    '',
    {
      msg: '取消监听 WebSocket 错误',
    },
  ),
  onSocketClose: createDescObj(
    0,
    '监听 WebSocket 关闭',
    'https://docs.alipay.com/mini/api/foqk6g',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketClose/',
  ),
  onSocketError: createDescObj(
    0,
    '监听 WebSocket 错误',
    'https://docs.alipay.com/mini/api/giu3c2',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketError/',
  ),
  onSocketMessage: createDescObj(
    0,
    '监听 WebSocket 接受到服务器的消息事件',
    'https://docs.alipay.com/mini/api/gecnap',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketMessage/',
  ),
  offSocketClose: createDescObj(
    2,
    '取消监听 WebSocket 关闭事件',
    'https://docs.alipay.com/mini/api/qc4q3t',
    '',
    {
      msg: '不支持',
    },
  ),
  onSocketOpen: createDescObj(
    0,
    '监听 WebSocket 连接打开事件',
    'https://docs.alipay.com/mini/api/itm5og',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-onSocketOpen/',
  ),
  downloadFile: createDescObj(
    0,
    '下载文件资源到本地',
    'https://docs.alipay.com/mini/api/xr054r',
    'https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-downloadFile/',
  ),
  request: createDescObj(
    0,
    '发起网络请求',
    'https://docs.alipay.com/mini/api/owycmh',
    'https://smartprogram.baidu.com/docs/develop/api/net_request/#swan-request/',
    {
      msg: '百度小程序经过封装完整支持',
    },
  ),
  sendSocketMessage: createDescObj(
    0,
    '通过 WebSocket 连接发送数据',
    'https://docs.alipay.com/mini/api/mr91d1',
    'https://smartprogram.baidu.com/docs/develop/api/net_websocket/#swan-sendSocketMessage/',
  ),
  uploadFile: createDescObj(
    0,
    '上传本地资源到开发者服务器',
    'https://docs.alipay.com/mini/api/kmq4hc',
    'https://smartprogram.baidu.com/docs/develop/api/net_uploadfile/#swan-uploadFile/',
  ),
}
