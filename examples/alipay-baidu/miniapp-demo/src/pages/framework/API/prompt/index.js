Page({
  prompt() {
    my.prompt({
      title: '温馨提示',
      message: '请输入内容',
      placeholder: '请输入',
      align: 'right',
      okButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        my.alert({
          title: `${result.inputValue}`,
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
