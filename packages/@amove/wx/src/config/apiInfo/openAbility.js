const { createDescObj } = require('./utils')

/**
 * 开放能力
 */
module.exports = {
  login: createDescObj(
    0,
    '调用接口获取登录凭证（code）',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
    'https://docs.alipay.com/mini/api/openapi-authorize',
    {
      msg: '封装后完全支持',
    },
  ),
  checkSession: createDescObj(
    2,
    '检查登录态是否过期',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html',
    '',
  ),
  navigateToMiniProgram: createDescObj(
    0,
    '打开另一个小程序',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html',
    'https://docs.alipay.com/mini/api/open-miniprogram',
  ),
  navigateBackMiniProgram: createDescObj(
    0,
    '返回到上一个小程序',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html',
    'https://docs.alipay.com/mini/api/open-miniprogram',
  ),
  getAccountInfoSync: createDescObj(
    2,
    '获取当前帐号信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html',
    '',
  ),
  getUserInfo: createDescObj(
    1,
    '获取用户信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html',
    'https://docs.alipay.com/mini/api/userinfo',
    {
      msg: '命名不同, 参数缺失, 返回值属性缺失',
      params: {
        props: {
          getUserInfo: {
            type: 1,
            desc: 'wx: getUserInfo, alipay: getAuthUserInfo',
          },
          withCredentials: {
            type: 0,
            desc: '是否带上登录态信息',
          },
          lang: {
            type: 0,
            desc: '显示用户信息的语言',
          },
        },
      },
      returnValue: {
        props: {
          userInfo: {
            type: 0,
            desc: '用户信息对象，不包含 openid 等敏感信息',
          },
          rawData: {
            type: 0,
            desc: '不包括敏感信息的原始数据字符串，用于计算签名',
          },
          signature: {
            type: 0,
            desc: '使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
          },
          encryptedData: {
            type: 0,
            desc: '包括敏感数据在内的完整用户信息的加密数据',
          },
          iv: {
            type: 0,
            desc: '加密算法的初始向量',
          },
          cloudID: {
            type: 0,
            desc: '敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据',
          },
        },
      },
    },
  ),
  UserInfo: createDescObj(
    2,
    '用户信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html',
    '',
  ),
  reportMonitor: createDescObj(
    2,
    '自定义业务数据监控上报接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/report/wx.reportMonitor.html',
    '',
  ),
  reportAnalytics: createDescObj(
    0,
    '自定义分析数据上报接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html',
    'https://docs.alipay.com/mini/api/report',
    {
      msg: '封装后完全支持',
    },
  ),
  requestPayment: createDescObj(
    2,
    '发起支付',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html',
    '',
    {
      msg: '支付宝与微信支付功能差异较大，请参考支付宝支付文档做兼容处理',
    },
  ),
  authorize: createDescObj(
    1,
    '提前向用户发起授权请求',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html',
    'https://docs.alipay.com/mini/api/openapi-authorize',
    {
      msg: '命名不同wx: authorize, alipay: getAuthCode, 参数差异',
      params: {
        props: {
          scope: {
            type: 1,
            desc: '授权类型, wx: scope, alipay: scopes, 且取值不同',
          },
        },
      },
    },
  ),
  openSetting: createDescObj(
    0,
    '调起客户端小程序设置界面',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html',
    'https://docs.alipay.com/mini/api/qflu8f',
  ),
  getSetting: createDescObj(
    0,
    '获取用户的当前设置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html',
    'https://docs.alipay.com/mini/api/xmk3ml',
  ),
  AuthSetting: createDescObj(
    2,
    '用户授权设置信息',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html',
    '',
  ),
  chooseAddress: createDescObj(
    1,
    '打开地图选择位置',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html',
    'https://yuque.antfin-inc.com/mpaas-tiny-site/api/choose-address',
    {
      msg: '支付宝端需要在项目作出相应配置，并需要服务端的支持',
    },
  ),
  openCard: createDescObj(
    1,
    '查看微信卡包中的卡券',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html',
    'https://docs.alipay.com/mini/api/qxxpsh',
    {
      msg: '命名不同wx: openCard, alipay: openCardList, 参数缺失',
      params: {
        props: {
          cardList: {
            type: 0,
            desc: '需要打开的卡券列表',
          },
          success: {
            type: 0,
            desc: '接口调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '接口调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行)',
          },
        },
      },
    },
  ),
  addCard: createDescObj(
    1,
    '添加卡券',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html',
    'https://docs.alipay.com/mini/api/add-card-auth',
    {
      msg: '命名不同wx: addCard, alipay: addCardAuth, 参数缺失, 返回值差异',
      params: {
        props: {
          cardList: {
            type: 0,
            desc: '需要添加的卡券列表',
          },
        },
        returnValue: {
          props: {
            cardList: {
              type: 1,
              desc: 'wx: cardList Array.<Object>, alipay: result Object',
            },
          },
        },
      },
    },
  ),
  chooseInvoiceTitle: createDescObj(
    2,
    '选择用户的发票抬头',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html',
    '',
  ),
  chooseInvoice: createDescObj(
    2,
    '选择用户已有的发票',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html',
    '',
  ),
  startSoterAuthentication: createDescObj(
    1,
    '开始 SOTER 生物认证',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html',
    'https://docs.alipay.com/mini/api/alipay-face-verify',
    {
      msg: '命名不同wx: startSoterAuthentication, alipay: ap.faceVerify, 参数缺失',
      params: {
        props: {
          requestAuthModes: {
            type: 0,
            desc: '请求使用的可接受的生物认证方式',
          },
          challenge: {
            type: 0,
            desc: '挑战因子',
          },
          authContent: {
            type: 0,
            desc: '验证描述，即识别过程中显示在界面上的对话框提示内容',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
    },
  ),
  checkIsSupportSoterAuthentication: createDescObj(
    2,
    '获取本机支持的 SOTER 生物认证方式',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html',
    '',
  ),
  checkIsSoterEnrolledInDevice: createDescObj(
    2,
    '获取设备内是否录入如指纹等生物信息的接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html',
    '',
  ),
  getWeRunData: createDescObj(
    2,
    '获取用户过去三十天微信运动步数',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html',
    '',
  ),
}
