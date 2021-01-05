Page({
  onLoad() {
    this.webViewContext = my.createWebViewContext('web-view-1')
  },
  // 接收来自H5的消息
  onMessage(e) {
    my.alert({
      title: '来自H5的消息',
      content: JSON.stringify(e.detail),
    })
    console.log(e)
    // 向H5发送消息
    this.webViewContext.postMessage({ sendToWebView: '这是来自小程序的消息' })
  },
})
