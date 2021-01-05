const config = require('../../../../config')

Page({
  onShareAppMessage() {
    return {
      title: 'image',
      path: 'page/component/pages/image/image'
    }
  },
  data: {
    imageUrl: config.downloadExampleUrl
  },
  binderror(e) {
    console.log('binderror', e)
  },
  bindload(e){
    console.log('bindload',e)
  }
})
