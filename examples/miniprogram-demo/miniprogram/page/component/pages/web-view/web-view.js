Page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/web-view/web-view'
    }
  },
  bindmessage(e){
    console.log('bindmessage',e)
  },
  bindload(e){
    console.log('bindload',e)
  },
  binderror(e){
    console.log('binderror',e)
  }
})
