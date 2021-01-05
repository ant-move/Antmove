Page({
  data: {},
  // onShareAppMessage(options) {
  //   my.alert({
  //     content: JSON.stringify(options.webViewUrl),
  //   })
  //   return {
  //     title: '分享 web-View 组件',
  //     desc: 'View 组件很通用',
  //     path: 'page/framework/component/webView',
  //     'web-view': options.webViewUrl,
  //   }
  // },
  onMessage(e) {
    my.alert({
      content: `拿到数据${JSON.stringify(e.detail)}`, // alert 框的标题
    })
  },
})
