Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo")
    },
    onLoad () {
        setTimeout(function () {
          wx.requestPayment(
            {
              'timeStamp': '1554805908174',
              'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
              'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
              'signType': 'MD5',
              'paySign': 'MD5(appId=wxd678efh567hg6787&nonceStr=5K8264ILTKCH16CQ2502SI8ZNMTM67VS&package=prepay_id=wx2017033010242291fcfe0db70013231072&signType=MD5&timeStamp=1490840662&key=qazwsxedcrfvtgbyhnujmikolp111111) = 22D9B4E54AB1950F51E0649E8810ACD6',
              'success': function (res) { },
              'fail': function (res) { },
              'complete': function (res) { }
            })
            wx.getUserInfo({
                success (res) {
                    console.log(res.userInfo);
                }
            });
        }, 1500);
        // 查看是否授权
        wx.getSetting({
            success (res) {
                console.log("res: ", res);
                if (res.authSetting["scope.userInfo"]) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    
                } else {
                    console.log("you need to auth userInfo");
                }
            }
        });
    },
    bindGetUserInfo (e) {
        console.log(e);
        wx.getUserInfo({
            success (res) {
                console.log(res.userInfo);
            }
        });
    }
});
