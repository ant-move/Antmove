const { createDescObj } = require('./utils')

/**
 * 网络
 */
module.exports = {
  closeSocket: createDescObj(
    0,
    '关闭 WebSocket 连接',
    'https://docs.alipay.com/mini/api/network',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html',
  ),
  connectSocket: createDescObj(
    1,
    '创建一个 WebSocket 的连接',
    'https://docs.alipay.com/mini/api/vx19c3',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html',
    {
      msg: '参数缺失',
      params: {
        props: {
          data: {
            type: 0,
            desc: '请求的参数',
          },
        },
      },
    },
  ),
  downloadFile: createDescObj(
    0,
    '下载文件资源到本地',
    'https://docs.alipay.com/mini/api/xr054r',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html',
    {
      msg: '封装后完全支持',
    },
  ),
  offSocketClose: createDescObj(
    2,
    '取消监听 WebSocket 关闭事件',
    'https://docs.alipay.com/mini/api/qc4q3t',
    '',
  ),
  offSocketMessage: createDescObj(
    2,
    '取消监听 WebSocket 接受到服务器的消息事件',
    'https://docs.alipay.com/mini/api/qc4q3t',
    '',
  ),
  offSocketOpen: createDescObj(
    2,
    '取消监听 WebSocket 连接打开事件',
    'https://docs.alipay.com/mini/api/qc4q3t',
    '',
  ),
  offSocketError: createDescObj(
    2,
    '取消监听 WebSocket 错误',
    'https://docs.alipay.com/mini/api/qc4q3t',
    '',
  ),
  onSocketClose: createDescObj(
    0,
    '监听WebSocket关闭',
    'https://docs.alipay.com/mini/api/foqk6g',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html',
  ),
  onSocketError: createDescObj(
    0,
    '监听WebSocket错误',
    'https://docs.alipay.com/mini/api/giu3c2',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html',
  ),
  onSocketMessage: createDescObj(
    1,
    '监听WebSocket接受到服务器的消息事件',
    'https://docs.alipay.com/mini/api/gecnap',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html',
    {
      msg: '返回值属性缺失',
      returnValue: {
        props: {
          isBuffer: {
            type: 0,
            desc: '如果此字段值为true，data字段表示接收到的经过了 base64 编码后的 String，否则 data 字段表示接收到的普通 String 文本',
          },
        },
      },
    },
  ),
  onSocketOpen: createDescObj(
    0,
    '监听WebSocket连接打开事件',
    'https://docs.alipay.com/mini/api/itm5og',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html',
  ),
  request: createDescObj(
    1,
    '发起 HTTPS 网络请求',
    'https://docs.alipay.com/mini/api/owycmh',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
    {
      msg: '入参参数名称差异/参数缺失/返回值名称差异',
      params: {
        props: {
          headers: {
            type: 1,
            desc: 'alipay: headers, wx: header',
          },
          timeout: {
            type: 0,
            desc: '超时时间，单位 ms，默认 30000',
          },
        },
      },
      returnValue: {
        props: {
          status: {
            type: 1,
            desc: 'alipay: status, wx: statusCode',
          },
          headers: {
            type: 1,
            desc: 'alipay: headers, wx: header',
          },
        },
      },
    },
  ),
  sendSocketMessage: createDescObj(
    1,
    '通过 WebSocket 连接发送数据',
    'https://docs.alipay.com/mini/api/mr91d1',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html',
    {
      msg: '入参参数差异/缺失',
      params: {
        props: {
          isBuffer: {
            type: 0,
            desc: '如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 data，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段',
          },
          data: {
            type: 3,
            desc: '支付宝是string类型, 微信上是string/object/ArrayBuffer',
          },
        },
      },
    },
  ),
  uploadFile: createDescObj(
    1,
    '上传本地资源到开发者服务器',
    'https://docs.alipay.com/mini/api/kmq4hc',
    'https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html',
    {
      msg: '参数名称差异/缺失',
      params: {
        props: {
          fileName: {
            type: 1,
            desc: '文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, alipay: fileName, wx: name',
          },
          fileType: {
            type: 0,
            desc: '文件类型支持图片、视频、音频',
          },
        },
      },
    },
  ),
}
