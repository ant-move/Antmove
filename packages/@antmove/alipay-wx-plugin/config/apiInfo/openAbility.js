const { createDescObj } = require('./utils')

/**
 * 开放能力API
 */
module.exports = {
  getAuthCode: createDescObj(
    0,
    '获取授权码',
    'https://docs.alipay.com/mini/api/openapi-authorize',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html',
    {
      msg: '封装后完全支持',
    },
  ),
  getAuthUserInfo: createDescObj(
    1,
    '客户端获取会员信息',
    'https://docs.alipay.com/mini/api/userinfo',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/UserInfo.html',
    {
      msg: '封装后完全支持',
    },
  ),
  getOpenUserInfo: createDescObj(
    2,
    '获取支付宝会员的基础信息',
    'https://docs.alipay.com/mini/api/ch8chh',
    '',
  ),
  getPhoneNumber: createDescObj(
    2,
    '获取支付宝用户绑定的手机号',
    'https://docs.alipay.com/mini/api/getphonenumber',
    '',
  ),
  tradePay: createDescObj(
    2,
    '发起支付',
    'https://docs.alipay.com/mini/api/openapi-pay',
    '',
    {
      msg: '微信与支付宝支付功能差异较大，请参考微信支付文档做兼容处理',
    },
  ),
  'alipay.open.app.qrcode.create': createDescObj(
    2,
    '生成小程序推广二维码',
    'https://docs.alipay.com/mini/api/openapi-qrcode',
    '',
  ),
  openCardDetail: createDescObj(
    2,
    '打开当前用户的某张卡的详情页',
    'https://docs.alipay.com/mini/api/card-voucher-ticket',
    '',
  ),
  openCardList: createDescObj(
    0,
    '打开支付宝卡列表',
    'https://docs.alipay.com/mini/api/qxxpsh',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html',
    {
      msg: '封装后完全支持',
    },
  ),
  openKBVoucherDetail: createDescObj(
    2,
    '打开当前用户的某张券的（口碑）详情页',
    'https://docs.alipay.com/mini/api/tfa5s0',
    '',
  ),
  openMerchantCardList: createDescObj(
    2,
    '打开当前用户的某个商户的卡列表',
    'https://docs.alipay.com/mini/api/axfplw',
    '',
  ),
  openMerchantVoucherList: createDescObj(
    2,
    '打开当前用户的某个商户的券列表',
    'https://docs.alipay.com/mini/api/sgvgu6',
    '',
  ),
  openTicketDetail: createDescObj(
    2,
    '打开当前用户的某张票的详情页',
    'https://docs.alipay.com/mini/api/ry7ftz',
    '',
  ),
  openTicketList: createDescObj(
    2,
    '打开支付宝票列表',
    'https://docs.alipay.com/mini/api/ezt6u3',
    '',
  ),
  openMerchantTicketList: createDescObj(
    2,
    '打开某个商户的票列表',
    'https://docs.alipay.com/mini/api/yee76y',
    '',
  ),
  openVoucherDetail: createDescObj(
    2,
    '打开当前用户的某张券的（口碑）详情页',
    'https://docs.alipay.com/mini/api/ga4obi',
    '',
  ),
  openVoucherList: createDescObj(
    2,
    '打开支付宝券列表',
    'https://docs.alipay.com/mini/api/vq3mgn',
    '',
  ),
  addCardAuth: createDescObj(
    1,
    '小程序唤起会员开卡授权页面',
    'https://docs.alipay.com/mini/api/add-card-auth',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html',
    {
      msg: '命名不同alipay: addCardAuth, wx: addCard, 参数缺失, 返回值差异',
      params: {
        props: {
          url: {
            type: 0,
            desc: '开卡授权的页面地址，从接口获取',
          },
        },
        returnValue: {
          props: {
            result: {
              type: 1,
              status: 1,
              desc: '结果内容 alipay: result Object, wx: cardList Array.Object',
              props: {
                app_id: {
                  type: 0,
                  desc: '应用id',
                },
                auth_code: {
                  type: 0,
                  desc: '授权码，用于换取 authtoken',
                },
                state: {
                  type: 0,
                  desc: '授权的 state',
                },
                scope: {
                  type: 0,
                  desc: '授权 scope',
                },
                template_id: {
                  type: 0,
                  desc: '会员卡模板 ID',
                },
                request_id: {
                  type: 0,
                  desc: '会员卡表单信息请求 ID',
                },
                out_string: {
                  type: 0,
                  desc: '会员卡领卡链接透传参数',
                },
              },
            },
          },
        },
      },
    },
  ),
  startZMVerify: createDescObj(
    2,
    '芝麻认证接口，调用此接口可以唤起芝麻认证页面并进行人脸身份验证',
    'https://docs.alipay.com/mini/api/zm-service',
    '',
  ),
  'alipay.open.app.mini.templatemessage.send': createDescObj(
    2,
    '小程序通过openapi给用户触达消息，主要为支付后的触达（通过消费id）和用户提交表单后的触达（通过formId）',
    'https://docs.alipay.com/mini/api/templatemessage',
    '',
  ),
  textRiskIdentification: createDescObj(
    2,
    '对用户在使用小程序过程产生用户原创内容（UGC）进行风险识别',
    'https://docs.alipay.com/mini/api/text-identification',
    '',
  ),
  'ap.imgRisk': createDescObj(
    2,
    '图片风险咨询任务提交接口，用于提交',
    'https://docs.alipay.com/mini/api/img_risk',
    '',
  ),
  'ap.imgRiskCallback': createDescObj(
    2,
    '查询图片的风险识别结果',
    'https://docs.alipay.com/mini/api/ze6675',
    '',
  ),
  navigateBackMiniProgram: createDescObj(
    0,
    '跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功',
    'https://docs.alipay.com/mini/api/open-miniprogram',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html',
  ),
  navigateToMiniProgram: createDescObj(
    0,
    '跳转到其他小程序',
    'https://docs.alipay.com/mini/api/yz6gnx',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html',
  ),
  createWebViewContext: createDescObj(
    2,
    '通过创建 webviewContext 提供从小程序向 web-view 发送消息的能力',
    'https://docs.alipay.com/mini/api/webview-context',
    '',
  ),
  'ap.navigateToAlipayPage': createDescObj(
    2,
    '小程序中跳转到支付宝官方业务或运营活动页面，例如共享单车、城市服务',
    'https://docs.alipay.com/mini/api/navigatetoalipaypage',
    '',
  ),
  'ap.updateAlipayClient': createDescObj(
    2,
    '打开支付宝客户端升级界面，用户可主动选择升级支付宝客户端',
    'https://docs.alipay.com/mini/api/updatealipayclient',
    '',
  ),
  'ap.faceVerify': createDescObj(
    2,
    '接口通过活体检测和人脸比对技术，认证当前用户是否为登录支付宝用户的本人和真人',
    'https://docs.alipay.com/mini/api/alipay-face-verify',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html',
    {
      msg: '',
    },
  ),
  zoloz: createDescObj(
    2,
    '服务端接口，商户在认证完成后,调用该接口查询认证的状态和结果',
    'https://docs.alipay.com/mini/api/fs9ukn',
    '',
  ),
  'ap.preventCheat': createDescObj(
    2,
    '调用反作弊接口',
    'https://docs.alipay.com/mini/api/antimarketcheat',
    '',
  ),
  getRunData: createDescObj(
    1,
    '获取用户一天内支付宝运动的步数信息',
    'https://docs.alipay.com/mini/api/gxuu7v',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html',
    {
      msg: '命名不同 alipay: getRunData, wx: getWeRunData, 参数缺失, 返回值属性缺失',
      params: {
        props: {
          countDate: {
            type: 0,
            desc: '要查询的步数日期',
          },
        },
      },
      returnValue: {
        props: {
          response: {
            type: 0,
            desc: '查询到的指定日期的步数，alipay: response, wx: encryptedData',
          },
        },
      },
    },
  ),
  'ap.nsf': createDescObj(
    2,
    '根据用户身份特征以及行为信息，判断用户在先享后付场景下是否有风险',
    'https://docs.alipay.com/mini/api/nsf',
    '',
  ),
}
