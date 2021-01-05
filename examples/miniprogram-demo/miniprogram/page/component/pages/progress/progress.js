Page({
  onShareAppMessage() {
    return {
      title: 'progress',
      path: 'page/component/pages/progress/progress'
    }
  },
  activeend:()=>{
    console.log('动画完成')
  }
})
