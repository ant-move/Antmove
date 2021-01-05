// page/API/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (wx.canIUse('navigateTo')) {
      this.setData({
        navigateTo: true
      });
    }
    if (wx.canIUse('navigateBack')) {
      this.setData({
        navigateBack: true
      });
    }
    if (wx.canIUse('redirectTo')) {
      this.setData({
        redirectTo: true
      });
    }
    if (wx.canIUse('reLaunch')) {
      this.setData({
        reLaunch: true
      });
    }
    if (wx.canIUse('switchTab')) {
      this.setData({
        switchTab: true
      });
    }
  },
  navigateTo() {
    wx.navigateTo({ url: '../get-user-info/get-user-info' });
  },
  navigateBack() {
    wx.navigateBack();
  },
  redirectTo() {
    wx.redirectTo({ url: '../get-user-info/get-user-info' });
  },
  reLaunch() {
    wx.reLaunch({ url: '../get-user-info/get-user-info' });
  },
  switchTab() {
    wx.switchTab({
      url: '/page/tabBar/API/index',
      success: () => {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 4000
        });
      }
    });
  },
})