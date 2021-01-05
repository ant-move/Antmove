Page({
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: `choosePhoneContact response: ${JSON.stringify(res)}`,
        })
      },
      fail: (res) => {
        my.alert({
          content: `choosePhoneContact response: ${JSON.stringify(res)}`,
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
