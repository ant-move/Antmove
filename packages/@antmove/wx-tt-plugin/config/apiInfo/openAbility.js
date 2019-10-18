const { createDescObj } = require('./utils');
/**
 * 开放能力
 */
module.exports = {
    login: createDescObj(
        1,
        '调用接口获取登录凭证（code）',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
        'https://developer.toutiao.com/dev/miniapp/uAzMy4CMzIjLwMjM',
        {
            msg: '参数缺失',
            params: {
                props: {
                    timeout: {
                        type: 0,
                        desc: '超时时间，单位ms'
                    }
                }
            }
        }
    ),
    checkSession: createDescObj(
        0,
        '检查登录态是否过期',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html',
        'https://developer.toutiao.com/dev/miniapp/uUjMy4SNyIjL1IjM'
    ),
    navigateToMiniProgram: createDescObj(
        0,
        '打开另一个小程序',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateToMiniProgram.html',
        'https://developer.toutiao.com/dev/miniapp/uYjMy4iNyIjL2IjM'
    ),
    navigateBackMiniProgram: createDescObj(
        0,
        '返回到上一个小程序',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/miniprogram-navigate/wx.navigateBackMiniProgram.html',
        'https://developer.toutiao.com/dev/miniapp/uMjMy4yMyIjLzIjM'
    ),
    getAccountInfoSync: createDescObj(
        2,
        '获取当前帐号信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html',
        ''
    ),
    getUserInfo: createDescObj(
        1,
        '获取用户信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html',
        'https://developer.toutiao.com/dev/miniapp/uAjMy4CMyIjLwIjM',
        {
            msg: '命名不同, 参数缺失, 返回值属性缺失',
            params: {
                props: {
                    lang: {
                        type: 0,
                        desc: '显示用户信息的语言'
                    }
                }
            },
            returnValue: {
                props: {
                    cloudID: {
                        type: 0,
                        desc: '敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据'
                    }
                }
            }
        }
    ),
    reportMonitor: createDescObj(
        2,
        '自定义业务数据监控上报接口',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/report/wx.reportMonitor.html',
        ''
    ),
    reportAnalytics: createDescObj(
        0,
        '自定义分析数据上报接口',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html',
        'https://developer.toutiao.com/dev/miniapp/ugzMy4COzIjL4MjM'
    ),
    requestPayment: createDescObj(
        0,
        '发起支付',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html',
        'https://developer.toutiao.com/dev/miniapp/ukjMy4SOyIjL5IjM',
        {
            msg: '微信与头条支付功能差异较大，请参考头条支付文档做兼容处理',
        }
    ),
    authorize: createDescObj(
        0,
        '提前向用户发起授权请求',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html',
        'https://developer.toutiao.com/dev/miniapp/uUzMy4SNzIjL1MjM'
    ),
    openSetting: createDescObj(
        0,
        '调起客户端小程序设置界面',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html',
        'https://developer.toutiao.com/dev/miniapp/uQzMy4CNzIjL0MjM'
    ),
    getSetting: createDescObj(
        1,
        '获取用户的当前设置',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html',
        'https://developer.toutiao.com/dev/miniapp/uEjMy4SMyIjLxIjM',
        {
            msg: '返回值属性差异',
            returnValue: {
                props: {
                    writePhotosAlbum: {
                        type: 1,
                        desc: '是否授权保存到相册, tt: album'
                    },
                    werun: {
                        type: 0,
                        desc: '是否授权微信运动步数'
                    },
                    invoice: {
                        type: 0,
                        desc: '是否授权获取发票'
                    },
                    invoiceTitle: {
                        type: 0,
                        desc: '是否授权发票抬头'
                    }
                }
            }
        }
    ),
    chooseAddress: createDescObj(
        1,
        '打开地图选择位置',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html',
        'https://yuque.antfin-inc.com/mpaas-tiny-site/api/choose-address',
        {
            msg: '返回值参数缺失',
            returnValue: {
                props: {
                    postalCode: {
                        type: 0,
                        desc: '邮编'
                    },
                    nationalCode: {
                        type: 0,
                        desc: '收货地址国家码'
                    }
                }
            }
        }
    ),
    openCard: createDescObj(
        2,
        '查看微信卡包中的卡券',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.openCard.html',
        ''
    ),
    addCard: createDescObj(
        2,
        '添加卡券',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/card/wx.addCard.html',
        ''
    ),
    chooseInvoiceTitle: createDescObj(
        2,
        '选择用户的发票抬头',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html',
        ''
    ),
    chooseInvoice: createDescObj(
        2,
        '选择用户已有的发票',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html',
        ''
    ),
    startSoterAuthentication: createDescObj(
        2,
        '开始 SOTER 生物认证',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.startSoterAuthentication.html',
        ''
    ),
    checkIsSupportSoterAuthentication: createDescObj(
        2,
        '获取本机支持的 SOTER 生物认证方式',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSupportSoterAuthentication.html',
        ''
    ),
    checkIsSoterEnrolledInDevice: createDescObj(
        2,
        '获取设备内是否录入如指纹等生物信息的接口',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/soter/wx.checkIsSoterEnrolledInDevice.html',
        ''
    ),
    getWeRunData: createDescObj(
        2,
        '获取用户过去三十天微信运动步数',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html',
        ''
    )
};