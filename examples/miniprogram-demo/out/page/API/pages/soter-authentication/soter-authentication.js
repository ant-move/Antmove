const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/soter-authentication/soter-authentication"
    }
});
const AUTH_MODE = "fingerPrint";

_Page({
    onShareAppMessage() {
        return {
            title: "生物认证",
            path: "page/API/pages/soter-authentication/soter-authentication"
        };
    },

    startAuth() {
        const startSoterAuthentication = () => {
            _my.startSoterAuthentication({
                requestAuthModes: [AUTH_MODE],
                challenge: "test",
                authContent: "小程序示例",
                success: () => {
                    _my.showToast({
                        title: "认证成功"
                    });
                },
                fail: err => {
                    console.error(err);

                    _my.showModal({
                        title: "失败",
                        content: "认证失败",
                        showCancel: false
                    });
                }
            });
        }; // const checkIsEnrolled = () => {
        //   wx.checkIsSoterEnrolledInDevice({
        //     checkAuthMode: AUTH_MODE,
        //     success: (res) => {
        //       console.log(res)
        //       if (parseInt(res.isEnrolled, 10) <= 0) {
        //         wx.showModal({
        //           title: '错误',
        //           content: '您暂未录入指纹信息，请录入后重试',
        //           showCancel: false
        //         })
        //         return
        //       }
        //       startSoterAuthentication()
        //     },
        //     fail: (err) => {
        //       console.error(err)
        //     }
        //   })
        // }

        startSoterAuthentication(); // const notSupported = () => {
        //   wx.showModal({
        //     title: '错误',
        //     content: '您的设备不支持指纹识别',
        //     showCancel: false
        //   })
        // }
        // wx.checkIsSupportSoterAuthentication({
        //   success: (res) => {
        //     console.log(res)
        //     if (
        //       !res ||
        //       res.supportMode.length === 0 ||
        //       res.supportMode.indexOf('fingerPrint') < 0
        //     ) {
        //       notSupported()
        //       return
        //     }
        //     checkIsEnrolled()
        //   },
        //   fail: (err) => {
        //     console.error(err)
        //     notSupported()
        //   }
        // })
    }
});
