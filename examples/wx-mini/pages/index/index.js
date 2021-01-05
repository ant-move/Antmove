// index.js
// 获取应用实例

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    modalHidden: true,
    apiList: ['canIUse', 'getSystemInfosync', 'getSystemInfo', 'clearInterval', 'setInterval', 'reLaunch', 'navigateTo', 'navigateBack', 'showToast', 'showModal', 'showLoading', 'showActionSheet', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'setNavigationBarTitle', 'setNavigationBarColor', 'hideNavigationBarLoading', 'stopPullDownRefresh', 'pageScrollTo', 'request', 'previewImage', 'chooseImage', 'getLocation', 'getNetworkType','hideKeyboard']
  },
  // 事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function () {
    setTimeout(() => {
      this.setData({
        toast2Hidden: false
      });
    }, 2000);
  },
  onShow () {
  },
  currentTap (e) {
    let curApi = e.currentTarget.dataset.item;
    switch (curApi) {
      case 'canIUse':
        {
          console.log(wx.canIUse('getSystemInfo.success.brand'));
          break;
        }

      case 'getSystemInfosync':
        {
          let data = wx.getSystemInfoSync();
          console.log(data.SDKVersion);
          break;
        }

      case 'getSystemInfo':
        {
          wx.getSystemInfo({
            success: (res) => {
              console.log(res.SDKVersion);
            }
          });
          break;
        }
      case 'setInterval':
        {
          wx.setInterval(function () {
            console.log(11);
          }, 1000);
          break;
        }
      case 'reLaunch':
        {
          wx.reLaunch({
            url: '/pages/logs/logs?id=1',
          });
          break;
        }
      case 'navigateTo': {
        wx.navigateTo({
          url: '/pages/manage/manage',
        });
        break;
      }
      case 'navigateBack':
        {
          wx.navigateBack({
            delta: 1,
            success: () => {
              console.log('success');
            },
            fail: () => {
              console.log('fail');
            },
            complete: () => {
              console.log('complete');
            }
          });
          break;
        }
      case 'showToast': {
        wx.showToast({
          icon: 'success',
          title: 'demo',
          mask: false,
          duration: 5000
        });
        console.log();
        break;
      }
      case 'showModal': {
        wx.showModal({
          title: '提示',
          content: '这是一个模态弹窗',
          cancelText: '否',
          confirmText: '是',
          cancelColor: '#f00',
          success (res) {
            if (res) {
              console.log(res);
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
        break;
      }
      case 'showLoading': {
        wx.showLoading({
          title: '加载中',
          mask: false
        });
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 2000)
        break;
      }
      case 'showActionSheet': {
        wx.showActionSheet({
          itemList: ['A', 'B', 'C'],
          success (res) {
            console.log(res.tapIndex);
          },
          fail (res) {
            console.log(res);
          }
        });
        break;
      }
      case 'hideToast': {
        wx.hideToast({
          success: res => {
            console.log(res);
          },
          complete: res => {
            console.log(res);
          }
        });
        break;
      }
      case 'hideLoading': {
        wx.hideLoading({
          success: res => {
            console.log(res);
          },
          complete: res => {
            console.log(res);
          }
        });
        break;
      }
      case 'showNavigationBarLoading': {
        wx.showNavigationBarLoading({
          success: res => {
            console.log(res);
          },
          complete: res => {
            console.log(res);
          }
        });
        break;
      }
      case 'setNavigationBarTitle': {
        wx.setNavigationBarTitle({
          title: '当前页面',
          success: res=>{
            console.log(res);
          }
        });
        break;
      }
      case 'setNavigationBarColor': {
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          title: '当前标题',
          backgroundColor: '#ff0000',
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        });
        break;
      }
      case 'hideNavigationBarLoading': {
        wx.hideNavigationBarLoading({
          complete: res=>{
            console.log(res);
          }
        });
        break;
      }
      case 'stopPullDownRefresh': {
        wx.stopPullDownRefresh({
          success: res=>{
            console.log(res);
          },
          complete: res => {
            console.log(res);  
          }          
        });
        break;
      }
      case 'pageScrollTo': {
        wx.pageScrollTo({
          scrollTop: 100,
          duration: 1000,
          success: res => {
            console.log(res);
          }
        });
        break;
      }
      case 'request': {
        wx.request({
          url: '',
          data: 'dd'
        });
        break;
      }
      case 'previewImage': {
        wx.previewImage({
          current: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553169952718&di=31fd0d3c57f42c190dfc129748457bc4&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcefc1e178a82b9017930342d7d8da9773912ef0b.jpg', // 当前显示图片的http链接
          urls: ['https://img2018.cnblogs.com/blog/1489500/201812/1489500-20181206083716608-1374469878.jpg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553169952718&di=31fd0d3c57f42c190dfc129748457bc4&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fcefc1e178a82b9017930342d7d8da9773912ef0b.jpg'] // 需要预览的图片http链接列表
        });
        break;
      }
      case 'chooseImage': {
        wx.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success (res) {
            // tempFilePath可以作为img标签的src属性显示图片
            console.log(res.tempFiles);
            const tempFilePaths = res.tempFilePaths[0];
            console.log(tempFilePaths);
          }
        });
        break;
      }
      case 'getLocation': {
        wx.getLocation({
          type: 'gcj02',
          altitude: true,
          success (res) {
            console.log(res);
            const latitude = res.latitude;
            const longitude = res.longitude;
            wx.openLocation({
              latitude,
              longitude,
              scale: 18,
              success (res) {
                console.log(res);
              }
            });
          }
        });
        break;
      }
      case 'getNetworkType': {
        wx.getNetworkType({
          success (res) {
            const networkType = res.networkType;
            console.log(networkType);
          }
        });
        break;
      }
      case 'hideKeyboard': {
        wx.hideKeyboard({
          success (res) {
            console.log(res);
          },
          complete (res) {
            console.log(res);
          }
        });
        break;
      }
      default: 
        console.log();
    }
  }
});