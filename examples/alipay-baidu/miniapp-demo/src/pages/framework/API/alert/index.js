Page({
  alert() {
    my.alert({
      title: '标题',
      content: '这是一段内容',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
