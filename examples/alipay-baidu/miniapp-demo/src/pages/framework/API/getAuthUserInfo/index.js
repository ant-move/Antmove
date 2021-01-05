Page({
  data: {
    hasUserInfo: false,
  },
  getUserInfo() {
    my.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error)
      },
      success: () => {
        my.getAuthUserInfo({
          fail: (error) => {
            console.error('getAuthUserInfo', error)
          },
          success: (userInfo) => {
            console.log('userInfo', userInfo)
            this.setData({
              userInfo,
              hasUserInfo: true,
            })
            my.alert({
              content: JSON.stringify(userInfo), // alert 框的标题
            })
          },
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {},
    })
  },
})
