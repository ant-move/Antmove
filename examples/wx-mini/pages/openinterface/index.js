// index.js
// 获取应用实例

Page({
    data: {
      userInfo: {},
      hasUserInfo: false,
      apiList: ['getUserInfo','reportAnalytics','requestPayment','authorize','openCard','addCard','startSoterAuthentication','getSetting']
    },
    // 事件处理函数
    bindViewTap: function () {
      wx.navigateTo({
        url: '../logs/logs'
      });
    },
    onLoad: function () {},
    onShow () {},
    currentTap (e) {
      let curApi = e.currentTarget.dataset.item;
      switch (curApi) {
        case 'getUserInfo':
        {
          wx.getSetting({
            success(res) {
              console.log('getSetting2',res.authSetting)
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                console.log('333')
                wx.getUserInfo({
                  success(res) {
                    console.log(res.userInfo)
                  },
                  fail(res){
                    console.log(res)
                  }
                })
              }
            }
          })
          break;
        }
        case 'reportAnalytics':
        {
          wx.reportAnalytics('purchase', {
            status: 200,
            reason: 'ok'
          })
          break;
        }
        
        case 'requestPayment':
        {
          wx.requestPayment({
            timeStamp: '1490840662',
            nonceStr: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
            package: 'prepay_id=wx2017033010242291fcfe0db70013231072',
            signType: 'MD5',
            paySign: '',
            success: ()=> { 
              console.log('success');
            },
            fail: ()=> { 
              console.log('fail');
            }
          });
          break;
        }
        case 'authorize': {
          wx.getSetting({
            success(res) {
              console.log('authorize',res.authSetting['scope.record'])
               if (!res.authSetting['scope.record']) {
                wx.authorize({
                  scope: 'scope.record',
                  success(res) {
                    console.log(res)
                  },
                  fail(res){
                    console.log(res)
                  }
                })
              }
            }
          });
          break;
        }
        case 'openCard': {
          wx.openCard({
            cardList: [{
              cardId: '',
              code: ''
            }, {
              cardId: '',
              code: ''
            }],
            success (res) { 
              console.log(res);
            }
          });
          break;
        }
        case 'addCard': {
          wx.addCard({
            cardList: [
              {
                cardId: '',
                cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
              }, {
                cardId: '',
                cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
              }
            ],
            success (res) {
              console.log(res.cardList); // 卡券添加结果
            }
          });
          break;
        }
        case 'startSoterAuthentication': {
          wx.startSoterAuthentication({
            requestAuthModes: ['fingerPrint'],
            challenge: '123456',
            authContent: '请用指纹解锁',
            success (res) {
              console.log(res);
            },
            fail: ()=>{
              console.log('fail');
            }
          });
          break;
        }
        case 'getSetting':{
          wx.getSetting({
            success(res) {
              console.log(res.authSetting)
              // res.authSetting = {
              //   "scope.userInfo": true,
              //   "scope.userLocation": true
              // }
            }
          })
          break;
        }
        default:
          console.log();
      }
    },
    getUserInfoTap(){
      wx.authorize({
        scope:"scope.userInfo",
        success:(res)=>{
          console.log('getUserInfoTap',res)
        }
      })
    }
  });