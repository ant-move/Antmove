const _Page = require("../../../../__antmove/component/componentClass.js")(
    "Page"
);
const _my = require("../../../../__antmove/api/index.js")(my);
my.setStorageSync({
    key: "activeComponent",
    data: {
        is: "page/API/pages/request-payment/request-payment"
    }
});

const paymentUrl = require("../../../../config").paymentUrl;

const app = getApp();

_Page({
    onShareAppMessage() {
        return {
            title: "发起支付",
            path: "page/API/pages/request-payment/request-payment"
        };
    },

    onLoad() {},

    requestPayment() {
        const self = this;
        self.setData({
            loading: true
        }); // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
        // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject

        /* app.getUserOpenId(function (err, openid) {
     if (!err) {
        wx.request({
          url: paymentUrl,
          data: {
            openid
          },
          method: 'POST',
          success(res) {
            console.log('unified order success, response is:', res)
            const payargs = res.data.payargs
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            })
            self.setData({
              loading: false
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })*/

        _my.requestPayment({
            timeStamp: "1490840662",
            nonceStr: "5K8264ILTKCH16CQ2502SI8ZNMTM67VS",
            package: "prepay_id=wx2017033010242291fcfe0db70013231072",
            signType: "MD5",
            paySign: "",
            success: () => {
                console.log("success");
            },
            fail: () => {
                console.log("fail");
            }
        });

        self.setData({
            loading: false
        });
    }
});
