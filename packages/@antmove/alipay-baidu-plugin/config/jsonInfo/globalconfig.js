module.exports = {
    pages: {
        status: 0,
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/tutorial/process/#%E9%85%8D%E7%BD%AE-app-json-%E6%96%87%E4%BB%B6/',
            original: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: '设置页面路径',
        msg: '完全支持'
    },
    window: {
        status: 1,
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/tutorial/process/#%E9%85%8D%E7%BD%AE-app-json-%E6%96%87%E4%BB%B6/',
            original: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: '设置默认页面的窗口表现',
        msg: '部分支持',
        props: {
            defaultTitle: {
                type: 1,
                status: 0,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '页面默认标题',
                msg: '封装后支持',
                key: 'navigationBarTitleText'
            },
            allowsBounceVertical: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '是否允许向下拉拽。默认 YES',
                msg: '百度小程序不支持修改'
            },
            pullRefresh: {
                type: 1,
                status: 0,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '是否允许下拉刷新。默认NO',
                msg: '封装后支持',
                key: 'enablePullDownRefresh'
            },
            transparentTitle: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '导航栏透明设置',
                msg: '百度小程序不支持'
                
            },
            titlePenetrate: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '是否允许导航栏点击穿透',
                msg: '百度小程序不支持'
            },
            showTitleLoading: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '是否进入时显示导航栏的 loading',
                msg: '百度小程序不支持'
            },
            titleImage: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '导航栏图片地址',
                msg: '百度小程序不支持'
            },
            titleBarColor: {
                type: 1,
                status: 0,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '导航栏背景色',
                msg: '封装后支持',
                key: 'navigationBarBackgroundColor'
            },
            backgroundColor: {
                type: 7,
                status: 0,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '背景颜色',
                msg: '完全支持'
            },
            backgroundImageColor: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '下拉露出显示的背景图底色',
                msg: '百度小程序不支持'
            },
            backgroundImageUrl: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '下拉露出显示的背景图链接',
                msg: '百度小程序不支持'
            },
            gestureBack: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: 'iOS 用，是否支持手势返回',
                msg: '百度小程序不支持'
            },
            enableScrollBar: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: 'Android 用，是否显示 WebView 滚动条',
                msg: '百度小程序不支持'
            },
            optionMenu: {
                type: 0,
                status: 2,
                url: {
                    target: 'https://smartprogram.baidu.com/docs/develop/tutorial/dev/#%E5%BC%80%E5%8F%91-json-%E6%96%87%E4%BB%B6/',
                    original: 'https://docs.alipay.com/mini/framework/page-json'
                },
                desc: '设置导航栏额外图标，目前支持设置属性 icon',
                msg: '百度小程序不支持'
            }
            
        }

    },
    tabBar: {
        name: '底部 tab 栏的表现',
        status: 0,
        url: {
            target: 'https://smartprogram.baidu.com/docs/develop/tutorial/process/#%E9%85%8D%E7%BD%AE-app-json-%E6%96%87%E4%BB%B6/',
            original: 'https://docs.alipay.com/mini/framework/app-json'
        },
        desc: '底部 tabbar 的表现',
        msg: '完全支持',
        props: {
            textColor: {
                type: 7,
                status: 0,
                desc: 'tab 上的文字默认颜色，仅支持十六进制颜色',
                msg: '封装后完全支持'
            },

            selectedColor: {
                type: 7,
                status: 0,
                desc: 'tab 上的文字选中时的颜色',
                msg: '完全支持'
            },
            items: {
                type: 1,
                status: 0,
                desc: 'tab 上的文字选中时的颜色',
                msg: '封装后支持',
                key: 'list',
                props: {
                    pagePath: {
                        type: 7,
                        status: 0,
                        desc: '设置页面路径',
                        msg: '完全支持',
                    },
                    name: {
                        type: 1,
                        status: 0,
                        desc: '名称',
                        msg: '封装后支持',
                        key: 'text',
                    },
                    icon: {
                        type: 1,
                        status: 0,
                        desc: '平常图标路径',
                        msg: '封装后支持',
                        key: 'iconPath',

                    },
                    activeIcon: {
                        type: 1,
                        status: 0,
                        desc: '高亮图标路径',
                        msg: '封装后支持',
                        key: 'selectedIconPath',
                        
                    }
                } 
            }


        }
         
    }

};