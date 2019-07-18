
Page({
  onShareAppMessage() {
    return {
      title: '使用原生地图选择位置',
      path: 'page/API/pages/choose-location/choose-location'
    };
  },

  data: {
    hasLocation: false
  },

  chooseLocation() {
    const that = this;
    console.log(wx.chooseLocation)
    wx.chooseLocation({
      success(res) {
        console.log(res);
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
          locationAddress: res.address
        });
      }

    });
  },

  clear() {
    this.setData({
      hasLocation: false
    });
  }
});