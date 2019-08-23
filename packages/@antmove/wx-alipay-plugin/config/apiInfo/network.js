const { createDescObj } = require('./utils');
/**
 * 网络
 */
module.exports = {
    request: createDescObj(
        1,
        '发起 HTTPS 网络请求',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
        'https://docs.alipay.com/mini/api/owycmh',
        {
            msg: '入参参数名称差异/参数缺失/返回值名称差异',
            params: {
                props: {
                    header: {
                        type: 1,
                        desc: '设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json, wx: header, alipay: headers'
                    },
                    responseType: {
                        type: 0,
                        desc: '响应的数据类型, alipay缺失: responseType'
                    },
                    'method合法值': {
                        type: 0,
                        desc: 'OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT'
                    }
                }
            },
            returnValue: {
                props: {
                    statusCode: {
                        type: 1,
                        desc: 'wx: statusCode, alipay: status'
                    },
                    header: {
                        type: 1,
                        desc: 'wx: header, alipay: headers'
                    }
                }
            }
        }
    ),
    downloadFile: createDescObj(
        1,
        '下载文件资源到本地',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html',
        'https://docs.alipay.com/mini/api/xr054r',
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
                    tempFilePath: {
                        type: 1,
                        desc: '临时文件路径, wx: tempFilePath, alipay: apFilePath'
                    },
                    filePath: {
                        type: 0,
                        desc: '用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致'
                    },
                    statusCode: {
                        type: 0,
                        desc: '开发者服务器返回的 HTTP 状态码'
                    },
                    abort: {
                        type: 0,
                        desc: "中断下载任务"
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
                    },
                    onProgressUpdate: {
                        type: 0,
                        desc: "取消监听 HTTP Response Header 事件"
                    }
                }
            }
        }
    ),
    uploadFile: createDescObj(
        1,
        '上传本地资源到开发者服务器',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html',
        'https://docs.alipay.com/mini/api/kmq4hc',
        {
            msg: '参数名称差异, 返回值方法缺失',
            params: {
                props: {
                    name: {
                        type: 1,
                        desc: '文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, wx: name, alipay: fileName'
                    }
                }
            },
            returnValue: {
                props: {
                    abort: {
                        type: 0,
                        desc: "missing"
                    },
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
                    },
                    onProgressUpdate: {
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
        'https://docs.alipay.com/mini/api/vx19c3',
        {
            msg: '参数缺失, 返回值缺失',
            params: {
                props: {
                    protocols: {
                        type: 0,
                        desc: '子协议数组'
                    },
                    tcpNoDelay: {
                        type: 0,
                        desc: '建立 TCP 连接的时候的 TCP_NODELAY 设置'
                    }
                }
            },
            returnValue: {
                props: {
                    close: {
                        type: 0,
                        desc: "missing"
                    },
                    cloonClosese: {
                        type: 0,
                        desc: "missing"
                    },
                    onError: {
                        type: 0,
                        desc: "missing"
                    },
                    onMessage: {
                        type: 0,
                        desc: "missing"
                    },
                    onOpen: {
                        type: 0,
                        desc: "missing"
                    },
                    send: {
                        type: 0,
                        desc: "missing"
                    }
                }
            }
        }
    ),
    onSocketOpen: createDescObj(
        1,
        '监听WebSocket连接打开事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html',
        'https://docs.alipay.com/mini/api/itm5og',
        {
            msg: '返回值属性值缺失',
            returnValue: {
                props: {
                    header: {
                        type: 0,
                        desc: '连接成功的 HTTP 响应 Header'
                    }
                }
            }
        }
    ),
    sendSocketMessage: createDescObj(
        0,
        '通过 WebSocket 连接发送数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.sendSocketMessage.html',
        'https://docs.alipay.com/mini/api/mr91d1'
    ),
    onSocketMessage: createDescObj(
        0,
        '监听WebSocket接受到服务器的消息事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketMessage.html',
        'https://docs.alipay.com/mini/api/gecnap'
    ),
    onSocketError: createDescObj(
        0,
        '监听WebSocket错误',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketError.html',
        'https://docs.alipay.com/mini/api/giu3c2'
    ),
    onSocketClose: createDescObj(
        0,
        '监听WebSocket关闭',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html',
        'https://docs.alipay.com/mini/api/foqk6g'
    ),
    closeSocket: createDescObj(
        1,
        '关闭 WebSocket 连接',
        'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html',
        'https://docs.alipay.com/mini/api/network',
        {
            msg: '参数缺失',
            params: {
                props: {
                    code: {
                        type: 0,
                        desc: '一个数字值表示关闭连接的状态号，表示连接被关闭的原因。'
                    },
                    reason: {
                        type: 0,
                        desc: '一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）'
                    }
                }
            }
        }
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