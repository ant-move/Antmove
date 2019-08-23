const { createDescObj } = require('./utils');
/**
 * 开放能力
 */
module.exports = {
    getAuthCode: createDescObj(
        2,
        '获取授权码',
        'https://docs.alipay.com/mini/api/openapi-authorize',
        'https://smartprogram.baidu.com/docs/develop/api/open_authorize/#swan-authorize/',
        {
            msg: '实现机制不同，需要自己根据使用场景进行修改'
        }
    ),
    getAuthUserInfo: createDescObj(
        0,
        '客户端获取会员信息',
        'https://docs.alipay.com/mini/api/userinfo',
        'https://smartprogram.baidu.com/docs/develop/api/open_userinfo/#swan-getUserInfo/',
        {
            msg: '封装后支持'
        }
    ),
    getOpenUserInfo: createDescObj(
        2,
        '获取支付宝会员的基础信息',
        'https://docs.alipay.com/mini/api/ch8chh',
        '',
        {
            msg: '不支持'
        }
    ),
    getPhoneNumber: createDescObj(
        2,
        '获取用户的电话号码',
        'https://docs.alipay.com/mini/api/getphonenumber',
        'https://smartprogram.baidu.com/docs/develop/component/formlist/',
        {
            msg: '获取方案不同'
        }
    ),
    tradePay: createDescObj(
        2,
        '发起支付',
        'https://docs.alipay.com/mini/api/openapi-pay',
        'https://smartprogram.baidu.com/docs/develop/api/open_payment/#swan-requestPolymerPayment/',
        {
            msg: '用户需要主动开通百度支付'
        }
    ),
    'alipay.open.app.qrcode.create': createDescObj(
        2,
        '生成小程序推广二维码',
        'https://docs.alipay.com/mini/api/openapi-qrcode',
        '',
        {
            msg: '不支持'
        }
    ),

    openCardDetail: createDescObj(
        2,
        '生成小程序推广二维码',
        'https://docs.alipay.com/mini/api/card-voucher-ticket',
        '',
        {
            msg: '不支持'
        }
    ),
    openCardList: createDescObj(
        2,
        '打开支付宝卡列表',
        'https://docs.alipay.com/mini/api/qxxpsh',
        '',
        {
            msg: '不支持'
        }
    ),
    openKBVoucherDetail: createDescObj(
        2,
        '打开当前用户的某张券的（口碑）详情页',
        'https://docs.alipay.com/mini/api/tfa5s0',
        '',
        {
            msg: '不支持'
        }
    ),
    openMerchantCardList: createDescObj(
        2,
        '打开当前用户的某个商户的卡列表',
        'https://docs.alipay.com/mini/api/axfplw',
        '',
        {
            msg: '不支持'
        }
    ),
    openMerchantVoucherList: createDescObj(
        2,
        '打开当前用户的某个商户的券列表',
        'https://docs.alipay.com/mini/api/sgvgu6',
        '',
        {
            msg: '不支持'
        }
    ),
    openTicketDetail: createDescObj(
        2,
        '打开当前用户的某张票的详情页',
        'https://docs.alipay.com/mini/api/ry7ftz',
        '',
        {
            msg: '不支持'
        }
    ),
    openTicketList: createDescObj(
        2,
        '打开支付宝票列表',
        'https://docs.alipay.com/mini/api/ezt6u3',
        '',
        {
            msg: '不支持'
        }
    ),
    openMerchantTicketList: createDescObj(
        2,
        '打开某个商户的票列表',
        'https://docs.alipay.com/mini/api/yee76y',
        '',
        {
            msg: '不支持'
        }
    ),
    openVoucherDetail: createDescObj(
        2,
        '打开当前用户的某张券的（口碑）详情页',
        'https://docs.alipay.com/mini/api/ga4obi',
        '',
        {
            msg: '不支持'
        }
    ),
    openVoucherList: createDescObj(
        2,
        '打开支付宝券列表',
        'https://docs.alipay.com/mini/api/vq3mgn',
        '',
        {
            msg: '不支持'
        }
    ),
    addCardAuth: createDescObj(
        2,
        '小程序唤起会员开卡授权页面',
        'https://docs.alipay.com/mini/api/add-card-auth',
        '',
        {
            msg: '不支持'
        }
    ),
    startZMVerify: createDescObj(
        2,
        '芝麻认证接口',
        'https://docs.alipay.com/mini/api/zm-service',
        '',
        {
            msg: '不支持'
        }
    ),
    'alipay.open.app.mini.templatemessage.send': createDescObj(
        2,
        '详细模板消息接入参考',
        'https://docs.alipay.com/mini/api/templatemessage',
        '',
        {
            msg: '不支持'
        }
    ),

    textRiskIdentification: createDescObj(
        2,
        '对用户在使用小程序过程产生用户原创内容（UGC）进行风险识别',
        'https://docs.alipay.com/mini/api/text-identification',
        '',
        {
            msg: '不支持'
        }
    ),
    ap: createDescObj(
        1,
        '部分开放能力',
        'https://docs.alipay.com/mini/api/img_risk',
        '',
        {
            msg: '封装后支持',
            
            returnValue: {
                props: {
                    navigateToAlipayPage: {
                        type: 0,
                        desc: '小程序中跳转到支付宝官方业务或运营活动页面'
                    },
                    imgRisk: {
                        type: 0,
                        desc: '图片风险咨询任务提交接口'
                    },
                    imgRiskCallback: {
                        type: 0,
                        desc: '查询图片的风险识别结果'
                    },
                    updateAlipayClient: {
                        type: 0,
                        desc: '打开支付宝客户端升级界面'
                    },
                    faceVerify: {
                        type: 1,
                        desc: '唤起刷脸认证得到的返回数据'
                    },
                    preventCheat: {
                        type: 0,
                        desc: '调用反作弊接口'
                    },
                    nsf: {
                        type: 0,
                        desc: '判断用户在先享后付场景下是否有风险'
                    },
                }
            }
        }
    ),
    
    navigateToMiniProgram: createDescObj(
        0,
        '跳转到其他小程序',
        'https://docs.alipay.com/mini/api/yz6gnx',
        'https://smartprogram.baidu.com/docs/develop/api/open_smartprogram/#swan-navigateToSmartProgram/',
        {
            msg: '封装支持'
        }
    ),
    navigateBackMiniProgram: createDescObj(
        0,
        '跳转回上一个小程序',
        'https://docs.alipay.com/mini/api/open-miniprogram',
        'https://smartprogram.baidu.com/docs/develop/function/navigation/',
        {
            msg: '封装支持'
        }
    ),
    createWebViewContext: createDescObj(
        1,
        '创建并返回 web-view 上下文 webViewContext 对象',
        'https://docs.alipay.com/mini/api/webview-context',
        'https://smartprogram.baidu.com/docs/develop/component/open/#web-view/',
        {
            msg: '百度的传递消息方案不同'
        }
    ),
    getRunData: createDescObj(
        2,
        '获取用户一天内支付宝运动的步数信息',
        'https://docs.alipay.com/mini/api/gxuu7v',
        'https://docs.alipay.com/mini/api/gxuu7v',
        {
            msg: '不支持'
        }
    ),
    
};