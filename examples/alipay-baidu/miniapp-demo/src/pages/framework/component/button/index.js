Page({
  data: {},
  onLoad() {
    console.log(`share:${my.canIUse('button.open-type.share')}`)
    console.log(`getAuthorize:${my.canIUse('button.open-type.getAuthorize')}`)
    console.log(`contactShare: ${my.canIUse('button.open-type.contactShare')}`)
    console.log(`lifestyle: ${my.canIUse('button.open-type.lifestyle')}`)
  },
  onShareAppMessage() {
    return {
      title: 'view page',
      path: 'pages/framework/component/view/index',
    }
  },
  onSubmit() {
    my.alert({ title: 'You click submit' })
  },
  onReset() {
    my.alert({ title: 'You click reset' })
  },
  tap() {
    console.log('tap')
  },
})
