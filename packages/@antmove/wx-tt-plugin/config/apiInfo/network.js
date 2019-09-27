const { createDescObj } = require('./utils');
/**
 * 网络
 */
module.exports = {
    request: createDescObj(
        1,
        '发起 HTTPS 网络请求',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
        'https://developer.toutiao.com/dev/miniapp/uQTMz4CNxMjL0EzM',
        {
            msg: '入参参数名称差异',
            params: {
                props: {
                    'method合法值': {
                        type: 0,
                        desc: 'OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT'
                    }
                }
            }
        }
    ),
    downloadFile: createDescObj(
        1,
        '下载文件资源到本地',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html',
        'https://developer.toutiao.com/dev/miniapp/uQjM04CNyQjL0IDN',
        {
            msg: '参数缺失, 返回值属性值/方法缺失, 返回值名称差异',
            params: {
                props: {
                    filePath: {
                        type: 0,
                        desc: '指定文件下载后存储的路径'
                    }	
                }
            },
            returnValue: {
                props: {
                    filePath: {
                        type: 0,
                        desc: '用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致'
                    },
                    offHeadersReceived: {
                        type: 0,
                        desc: "监听下载进度变化事件"
                    },
                    offProgressUpdate: {
                        type: 0,
                        desc: "取消监听下载进度变化事件"
                    },
                    onHeadersReceived: {
                        type: 0,
                        desc: "监听 HTTP Response Header 事件。会比请求完成事件更早"
                    }
                }
            }
        }
    ),
    uploadFile: createDescObj(
        1,
        '上传本地资源到开发者服务器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html',
        'https://developer.toutiao.com/dev/miniapp/uAzMz4CMzMjLwMzM',
        {
            msg: '返回值方法缺失',
            returnValue: {
                props: {
                    offHeadersReceived: {
                        type: 0,
                        desc: "missing"
                    },
                    offProgressUpdate: {
                        type: 0,
                        desc: "missing"
                    },
                    onHeadersReceived: {
                        type: 0,
                        desc: "missing"
                    }
                }
            }
        }
    ),
    connectSocket: createDescObj(
        1,
        '创建一个 WebSocket 的连接',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html',
        'https://developer.toutiao.com/dev/miniapp/uMDNy4yM0IjLzQjM',
        {
            msg: '参数缺失, 返回值缺失',
            params: {
                props: {
                    tcpNoDelay: {
                        type: 0,
                        desc: '建立 TCP 连接的时候的 TCP_NODELAY 设置'
                    }
                }
            }
        }
    ),
    onSocketOpen: createDescObj(
        2,
        '监听WebSocket连接打开事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html',
        ''
    ),
    sendSocketMessage: createDescObj(
        2,
        '通过 WebSocket 连接发送数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html',
        ''
    ),
    onSocketMessage: createDescObj(
        2,
        '监听WebSocket接受到服务器的消息事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html',
        ''
    ),
    onSocketError: createDescObj(
        2,
        '监听WebSocket错误',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html',
        ''
    ),
    onSocketClose: createDescObj(
        2,
        '监听WebSocket关闭',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html',
        ''
    ),
    closeSocket: createDescObj(
        2,
        '关闭 WebSocket 连接',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html',
        ''
    ),
    stopLocalServiceDiscovery: createDescObj(
        2,
        '停止搜索 mDNS 服务',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.stopLocalServiceDiscovery.html',
        ''
    ),
    startLocalServiceDiscovery: createDescObj(
        2,
        '开始搜索局域网下的 mDNS 服务',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.startLocalServiceDiscovery.html',
        ''
    ),
    onLocalServiceResolveFail: createDescObj(
        2,
        '监听 mDNS 服务解析失败的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceResolveFail.html',
        ''
    ),
    onLocalServiceLost: createDescObj(
        2,
        '监听 mDNS 服务离开的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceLost.html',
        ''
    ),
    onLocalServiceFound: createDescObj(
        2,
        '监听 mDNS 服务发现的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceFound.html',
        ''
    ),
    onLocalServiceDiscoveryStop: createDescObj(
        2,
        '监听 mDNS 服务停止搜索的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.onLocalServiceDiscoveryStop.html',
        ''
    ),
    offLocalServiceResolveFail: createDescObj(
        2,
        '取消监听 mDNS 服务解析失败的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html',
        ''
    ),
    offLocalServiceLost: createDescObj(
        2,
        '取消监听 mDNS 服务离开的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceLost.html',
        ''
    ),
    offLocalServiceFound: createDescObj(
        2,
        '取消监听 mDNS 服务发现的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceFound.html',
        ''
    ),
    offLocalServiceDiscoveryStop: createDescObj(
        2,
        '取消监听 mDNS 服务停止搜索的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceDiscoveryStop.html',
        ''
    )
};