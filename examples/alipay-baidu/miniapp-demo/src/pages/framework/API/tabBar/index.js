Page({
  setTabBarBadge() {
    my.setTabBarBadge({
      index: 0,
      text: '1',
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('setTabBarBadge/complete')
      },
    })
  },
  removeTabBarBadge() {
    my.removeTabBarBadge({
      index: 0,
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('removeTabBarBadge/complete')
      },
    })
  },
  setTabBarStyle() {
    my.setTabBarStyle({
      color: '#FF0000',
      selectedColor: '#00FF00',
      backgroundColor: '#FFFFFF',
      borderStyle: 'black',
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('setTabBarStyle/complete')
      },
    })
  },
  setTabBarItem() {
    my.setTabBarItem({
      index: 0,
      text: 'text',
      iconPath: '/image/icon_component.png',
      selectedIconPath: '/image/icon_component_HL.png',
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('setTabBarItem/complete')
      },
    })
  },
  showTabBar() {
    my.showTabBar({
      animation: true,
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('showTabBar/complete')
      },
    })
  },
  hideTabBar() {
    my.hideTabBar({
      animation: true,
      success(res) {
        console.log(res)
        my.confirm({
          content: '是否去首页查看设置效果',
          confirmButtonText: '是',
          cancelButtonText: '否',
          success: (result) => {
            if (result.confirm) {
              my.switchTab({
                url: '/pages/tab-bar/page-APIs/index',
              })
            }
          },
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('hideTabBar/complete')
      },
    })
  },
  onTabItemTap(item) {
    console.log('onTabItemTap', item)
  },
})
