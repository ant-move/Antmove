# 网络
### 扫码预览
![websocket.png](https://cache.amap.com/ecology/tool/miniapp/1563435933623.png)
## my.connectSocket
创建一个 [WebSocket](websocket) 的连接；**一个高德小程序同时只能保留一个 WebSocket 连接，如果当前已存在 WebSocket 连接，会自动关闭该连接，并重新创建一个新的 WebSocket 连接。**
### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 目标服务器url | v9.05 |
| data | Object | 否 | 请求的参数 | v9.05 |
| header | Object | 否 | 设置请求的头部 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 1 | 未知错误 | |
| 2 | 网络连接已经存在 | |
| 3 | URL参数为空 | |
| 4 | 无法识别的URL格式 | |
| 5 | URL必须以ws或者wss开头 | |
| 6 | 连接服务器超时 | |
| 7 | 服务器返回的https证书无效 | |
| 8 | 服务端返回协议头无效 | |
| 9 | WebSocket请求没有指定Sec-WebSocket-Protocol请求头 | |
| 10 | 网络连接没有打开，无法发送消息 | |
| 11 | 消息发送失败 | |
| 12 | 无法申请更多内存来读取网络数据 | |

## my.onSocketOpen
监听WebSocket连接打开事件。（v9.05）

## my.offSocketOpen
取消监听WebSocket连接打开事件。（v9.05）

## my.onSocketError
监听WebSocket错误。（v9.05）

## my.offSocketError
取消监听WebSocket错误。（v9.05）

## my.sendSocketMessage
通过 WebSocket 连接发送数据，需要先使用 [my.connectSocket](websocket#my.connectSocket) 发起建连，并在 [my.onSocketOpen](websocket#my.onSocketOpen) 回调之后再发送数据。（v9.05）

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| data | String/ArrayBuffer | 是 | 需要发送的内容：普通的文本内容 String 或者经 base64 编码后的 String | v9.05 |
| isBuffer | Boolean | 否 | 如果需要发送二进制数据，需要将入参数据经 base64 编码成 String 后赋值 `data`，同时将此字段设置为true，否则如果是普通的文本内容 String，不需要设置此字段 | v9.05 |
| success | Function | 否 | 回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

## my.onSocketMessage
监听WebSocket接受到服务器的消息事件。

### 回调返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| data | String/ArrayBuffer | 服务器返回的消息：普通的文本 String 或者经 base64 编码后的 String |
| isBuffer | Boolean | 如果此字段值为`true`，`data`字段表示接收到的经过了 base64 编码后的 String，否则 `data`字段表示接收到的普通 String 文本。 |

## my.offSocketMessage
取消监听WebSocket接受到服务器的消息事件。

## my.closeSocket
### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

## my.onSocketClose
监听WebSocket关闭。（v9.05）

## my.offSocketClose
取消监听WebSocket关闭。（v9.05）

### 示例代码
```html

<view class="page">
  <view class="page-description">websocket</view>
  <view class="page-section">
    <view class="page-section-title">connectSocket</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="connectSocket">connectSocket</button>
    </view>

    <view class="page-section-title">sendSocketMessage</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="sendSocketMessage">sendSocketMessage</button>
    </view>

    <view class="page-section-title">closeSocket</view>
    <view class="page-section-demo">
       <button size="default" type="primary" onTap="closeSocket">closeSocket</button>
    </view>

    <view class="page-section-title">offSocketClose</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offSocketClose">offSocketClose</button>
    </view>

    <view class="page-section-title">offSocketOpen</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offSocketOpen">offSocketOpen</button>
    </view>

    <view class="page-section-title">offSocketError</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offSocketError">offSocketError</button>
    </view>

    <view class="page-section-title">offSocketMessage</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offSocketMessage">offSocketMessage</button>
    </view>
  </view>
</view>
```
```javascript
Page({
  data: {},
  onLoad() {
    my.onSocketClose((res) => {
      console.log(res)
      my.alert({ content: '连接已关闭！' })
    })
    my.onSocketOpen((res) => {
      console.log(res)
      my.alert({ content: '连接已打开！' })
    })
    my.onSocketError((res) => {
      my.alert(`WebSocket 连接打开失败，请检查！${res}`)
    })
    my.onSocketMessage((res) => {
      my.alert({ content: `收到数据！${JSON.stringify(res)}` })
    })
  },
  connectSocket() {
    my.connectSocket({
      url: 'wss://echo.websocket.org',
      complete(res) {
        console.log(res)
      },
    })
  },
  sendSocketMessage() {
    my.sendSocketMessage({
      data: '3',
    })
  },
  closeSocket() {
    my.closeSocket({
      complete(res) {
        console.log(res)
      },
    })
  },
  offSocketClose() {
    my.offSocketClose()
  },
  offSocketOpen() {
    my.offSocketOpen()
  },
  offSocketError() {
    my.offSocketError()
  },
  offSocketMessage() {
    my.offSocketMessage()
  },
})
```
