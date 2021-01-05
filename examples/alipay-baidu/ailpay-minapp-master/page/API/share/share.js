Page({
  data: { share: false },
  tapPage() {
    console.log('tap page')
    // this.setData({share:false})
  },
  showShare(){
    // debugger
  my.showShareMenu()
  
  },
  onShareAppMessage() {
    this.setData({ name: 'ccc', share: true })
    // setTimeout(()=>{
    //   this.setData({share:false})
    // },1000)
    return {
      title: '分享 View 组件1',
      desc: 'View 组件很通用',
      path: 'page/component/view/view',
      content:'吱口令',
      bgImgUrl:'http://img003.qufenqi.com/products/0d/8b/0d8b66116258021d8b2aac7355810a97.jpeg',
      success: () => {
        console.log('succeed')

        this.setData({ name: 'success', share: false })
      },
      fail: () => {
        console.log('fail')
        this.setData({ name: 'fail', share: false })
      },
      complete: () => {
        console.log('fail')
        this.setData({ name: 'complete', share: false })
      }
    }
  }
})
