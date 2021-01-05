# webview组件控制

通过创建`webviewContext`提供从小程序向`web-view`发送消息的能力。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563531139616.png)

## my.createWebViewContext(webviewId)
创建并返回 `web-view` 上下文 `webViewContext` 对象。

### 入参
| 参数 | 类型 | 必填 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| webviewId | String | 是 | 要创建的`web-view`所对应的id属性 | v9.05.0 |

## webViewContext
`webViewContext` 通过 webviewId 跟一个 `web-view` 组件绑定，通过它可以实现一些功能。`webViewContext`对象的方法列表：

| 方法 | 参数 | 描述 | 兼容性 |
| :--- | :--- | :--- | :--- |
| postMessage | Object | 小程序向`web-view`组件发送消息，配合web-view.js中提供的my.postMessage可以实现小程序和web-view网页的双向通信 | v9.05.0 |

```xml
<view>
  <web-view id="web-view-1" src="https://cache.amap.com/ecology/tool/miniapp/miniapp-demo/h5//webview.html" onMessage="onMessage"></web-view>
</view>
```

```javascript
Page({
  onLoad() {
    this.webViewContext = my.createWebViewContext('web-view-1')
  },
  // 接收来自H5的消息
  onMessage(e) {
    my.alert({
      title: '来自H5的消息',
      content: JSON.stringify(e),
    })
    console.log(e)
    // 向H5发送消息
    this.webViewContext.postMessage({ sendToWebView: '这是来自小程序的消息' })
  },
})

```
```javascript
// H5的js代码中需要先定义my.onMessage 用于接收来自小程序的消息。
my.onMessage = function(e) {
  console.log(e)
  window.alert(JSON.stringify(e.detail))
}
// H5向小程序发送消息
my.postMessage({
  name: "测试web-view"
});
```

#### Tips:
以上的双向通信能力的流程是H5先发消息给小程序，小程序接收到消息后再发消息给H5。
