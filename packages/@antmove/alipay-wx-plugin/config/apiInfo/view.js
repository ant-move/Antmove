const { createDescObj } = require('./utils');
/**
 * 界面
 */
module.exports = {
    getTitleColor: createDescObj(
        2,
        '获取导航栏背景色',
        'https://docs.alipay.com/mini/api/dplf2s',
        ''
    ),
    hideBackHome: createDescObj(
        2,
        '隐藏标题栏上的返回首页图标和右上角通用菜单中的返回首页功能',
        'https://docs.alipay.com/mini/api/ui-navigate',
        ''
    ),
    hideNavigationBarLoading: createDescObj(
        0,
        '在当前页面隐藏导航条的加载动画',
        'https://docs.alipay.com/mini/api/kc5zbx',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html'
    ),
    navigateBack: createDescObj(
        0,
        '关闭当前页面，返回上一级或多级页面',
        'https://docs.alipay.com/mini/api/ncgsga',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html'
    ),
    navigateTo: createDescObj(
        0,
        '从当前页面，跳转到应用内的某个指定页面',
        'https://docs.alipay.com/mini/api/zwi8gx',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html'
    ),
    redirectTo: createDescObj(
        0,
        '关闭当前页面，跳转到应用内的某个指定页面',
        'https://docs.alipay.com/mini/api/fh18ky',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html'
    ),
    reLaunch: createDescObj(
        0,
        '关闭当前所有页面，跳转到应用内的某个指定页面',
        'https://docs.alipay.com/mini/api/hmn54z',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html'
    ),
    setNavigationBar: createDescObj(
        1,
        '设置导航栏文字及样式',
        'https://docs.alipay.com/mini/api/xwq8e6',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html',
        {
            msg: '入参参数缺失',
            params: {
                props: {
                    image: {
                        type: 0,
                        desc: '图片连接地址，必须是https，请使用 iOS @3x 分辨率标准的高清图片。若设置了 image 则 title 参数失效'
                    },
                    borderBottomColor: {
                        type: 0,
                        desc: '导航栏底部边框颜色，支持十六进制颜色值'
                    },
                    reset: {
                        type: 0,
                        desc: '是否重置导航栏为支付宝默认配色，默认为 false'
                    }
                }
            }
        }
    ),
    showNavigationBarLoading: createDescObj(
        0,
        '显示导航栏加载栏',
        'https://docs.alipay.com/mini/api/lydg2a',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html'
    ),
    hideTabBar: createDescObj(
        0,
        '隐藏标签页（tabbar）',
        'https://docs.alipay.com/mini/api/at18z8',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html'
    ),
    hideTabBarRedDot: createDescObj(
        0,
        '隐藏标签页（tabbar）某一项右上角的红点',
        'https://docs.alipay.com/mini/api/mg428a',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html'
    ),
    removeTabBarBadge: createDescObj(
        0,
        '移除标签页（tabbar） 某一项右上角的文本',
        'https://docs.alipay.com/mini/api/lpbp5g',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html'
    ),
    setTabBarBadge: createDescObj(
        0,
        '为标签页（tabbar）某一项的右上角添加文本',
        'https://docs.alipay.com/mini/api/qm7t3v',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html'
    ),
    setTabBarItem: createDescObj(
        0,
        '动态设置标签页（tabbar）某一项的内容',
        'https://docs.alipay.com/mini/api/zu37bk',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html'
    ),
    setTabBarStyle: createDescObj(
        0,
        '动态设置标签页（tabbar）的整体样式，如文字颜色、标签背景色、标签边框颜色等',
        'https://docs.alipay.com/mini/api/wcf0sv',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html'
    ),
    showTabBar: createDescObj(
        0,
        '显示标签页（tabbar）',
        'https://docs.alipay.com/mini/api/dpq5dh',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html'
    ),
    showTabBarRedDot: createDescObj(
        0,
        '显示标签页（tabbar）某一项的右上角的红点',
        'https://docs.alipay.com/mini/api/dquxiq',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html'
    ),
    switchTab: createDescObj(
        0,
        '跳转到指定标签页（tabbar）页面，并关闭其他所有非标签页页面',
        'https://docs.alipay.com/mini/api/ui-tabbar',
        'https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html'
    ),
    onTabItemTap: createDescObj(
        0,
        '点击标签（tab）时触发',
        'https://docs.alipay.com/mini/api/navg36',
        'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onTabItemTap-Object-object'
    ),
    alert: createDescObj(
        0,
        '警告框，可以配置警告框的标题、内容、按钮文字等',
        'https://docs.alipay.com/mini/api/ui-feedback',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        {
            msg: "封装后完全支持"
        }
    ),
    confirm: createDescObj(
        0,
        '用于提示的确认框，可以配置确认框标题、内容、确认或取消按钮的文字等',
        'https://docs.alipay.com/mini/api/lt3uqc',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        {
            msg: '封装后完全支持'
        }
    ),
    hideLoading: createDescObj(
        1,
        '隐藏加载提示的过渡效果',
        'https://docs.alipay.com/mini/api/nzf540',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        {
            msg: '入参参数缺失',
            params: {
                props: {
                    page: {
                        type: 0,
                        desc: '具体指当前 page 实例，某些场景下，需要指明在哪个 page 执行hideLoading'
                    }
                }
            }
        }
    ),
    hideToast: createDescObj(
        0,
        '隐藏弱提示',
        'https://docs.alipay.com/mini/api/iygd4e',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html'
    ),
    prompt: createDescObj(
        2,
        '弹出一个对话框，让用户在对话框内输入文本',
        'https://docs.alipay.com/mini/api/vqpy01',
        ''
    ),
    showActionSheet: createDescObj(
        1,
        '显示操作菜单',
        'https://docs.alipay.com/mini/api/hr092g',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html',
        {
            msg: '入参参数名称差异/缺失',
            params: {
                props: {
                    title: {
                        type: 0,
                        desc: '菜单标题'
                    },
                    cancelButtonText: {
                        type: 0,
                        desc: '取消按钮文案'
                    },
                    destructiveBtnIndex: {
                        type: 0,
                        desc: '（iOS特殊处理）指定按钮的索引号，从0开始，使用场景：需要删除或清除数据等类似场景，默认红色'
                    },
                    badges: {
                        type: 0,
                        desc: '需飘红选项的数组，数组内部对象字段见下表'
                    },
                    items: {
                        type: 1,
                        desc: '提示的内容, alipay: items, wx: itemList, 最大数组长度为6'
                    },
                }
            }
        }
    ),
    showLoading: createDescObj(
        1,
        '显示加载提示的过渡效果',
        'https://docs.alipay.com/mini/api/bm69kb',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html',
        {
            msg: '入参参数名称差异/缺失',
            params: {
                props: {
                    delay: {
                        type: 0,
                        desc: '延迟显示，单位 ms，默认 0'
                    },
                    content: {
                        type: 1,
                        desc: '提示的内容, alipay: content, wx: title'
                    },
                }
            }
        }
    ),
    showToast: createDescObj(
        1,
        '显示一个弱提示，在到达设定的显示时间后，自动消失',
        'https://docs.alipay.com/mini/api/fhur8f',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html',
        {
            msg: '入参参数名称差异',
            params: {
                props: {
                    content: {
                        type: 1,
                        desc: '提示的内容, alipay: content, wx: title'
                    },
                    type: {
                        type: 1,
                        desc: '支付宝type,默认none, 支持 success / fail / exception / none; 微信是icon,默认success, 支持 success / loading / none'
                    },
                    duration: {
                        type: 4,
                        desc: '支付宝默认2000; 微信默认1500'
                    },
                }
            }
        }
    ),
    startPullDownRefresh: createDescObj(
        0,
        '开始下拉刷新',
        'https://docs.alipay.com/mini/api/ui-pulldown',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html'
    ),
    stopPullDownRefresh: createDescObj(
        0,
        '停止当前页面的下拉刷新',
        'https://docs.alipay.com/mini/api/pmhkbb',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html'
    ),
    onPullDownRefresh: createDescObj(
        0,
        '监听该页面用户的下拉刷新事件',
        'https://docs.alipay.com/mini/api/wo21qk',
        'https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPullDownRefresh'
    ),
    chooseAlipayContact: createDescObj(
        2,
        '唤起支付宝通讯录，选择一个或者多个支付宝联系人',
        'https://docs.alipay.com/mini/api/ui-contact',
        ''
    ),
    chooseContact: createDescObj(
        2,
        '唤起选择人，默认只包含支付宝联系人，可通过修改参数选择手机通讯录联系人或者双向通讯录联系人',
        'https://docs.alipay.com/mini/api/eqx2u5',
        ''
    ),
    choosePhoneContact: createDescObj(
        2,
        '选择本地系统通信录中某个联系人的电话',
        'https://docs.alipay.com/mini/api/blghgl',
        ''
    ),
    chooseCity: createDescObj(
        2,
        '打开城市选择列表',
        'https://docs.alipay.com/mini/api/ui-city',
        ''
    ),
    datePicker: createDescObj(
        2,
        '打开日期选择列表',
        'https://docs.alipay.com/mini/api/ui-date',
        ''
    ),
    createAnimation: createDescObj(
        0,
        '创建动画实例 animation',
        'https://docs.alipay.com/mini/api/ui-animation',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html'
    ),
    createCanvasContext: createDescObj(
        1,
        '创建 canvas 绘图上下文',
        'https://docs.alipay.com/mini/api/ui-canvas',
        'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.createCanvasContext.html',
        {
            msg: '返回值对象方法缺失',
            returnValue: {
                props: {
                    toDataURL: {
                        type: 0,
                        desc: '获取画布指定区域的 data URL 数据'
                    },
                    toTempFilePath: {
                        type: 0,
                        desc: '把当前画布的内容导出生成图片，并返回文件路径'
                    },
                }
            }
        }
    ),
    createMapContext: createDescObj(
        1,
        '创建并返回一个地图下文对象 mapContext',
        'https://docs.alipay.com/mini/api/ui-map',
        'https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html',
        {
            msg: '返回值对象方法缺失',
            returnValue: {
                props: {
                    cleaerRoute: {
                        type: 0,
                        desc: '清除地图上的步行导航路线'
                    },
                    gestureEnable: {
                        type: 0,
                        desc: '设置所有手势是否可用'
                    },
                    showRoute: {
                        type: 0,
                        desc: '默认规划步行路线，只能显示一条'
                    },
                    showsCompass: {
                        type: 0,
                        desc: '设置指南针是否可见'
                    },
                    showsScale: {
                        type: 0,
                        desc: '设置比例尺控件是否可见'
                    },
                    updateComponents: {
                        type: 0,
                        desc: '增量更新地图接口'
                    }
                }
            }
        }
    ),
    hideKeyboard: createDescObj(
        2,
        '隐藏键盘',
        'https://docs.alipay.com/mini/api/ui-hidekeyboard',
        ''
    ),
    pageScrollTo: createDescObj(
        0,
        '滚动到页面的目标位置',
        'https://docs.alipay.com/mini/api/scroll',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html'
    ),
    createIntersectionObserver: createDescObj(
        0,
        '创建并返回一个 IntersectionObserver 对象实例',
        'https://docs.alipay.com/mini/api/intersectionobserver',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createIntersectionObserver.html',
        {
            msg: '封装后完全支持'
        }
    ),
    createSelectorQuery: createDescObj(
        1,
        '创建并返回一个 SelectorQuery 对象实例',
        'https://docs.alipay.com/mini/api/selector-query',
        'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html',
        {
            msg: '入参参数缺失',
            params: {
                props: {
                    params: {
                        type: 0,
                        desc: '可以指定 page 属性，默认为当前页面'
                    }
                }
            }
        }
    ),
    optionSelect: createDescObj(
        2,
        '类似于 safari 原生 select 的组件，但是功能更加强大，一般用来替代 select，或者 2 级数据的选择',
        'https://docs.alipay.com/mini/api/options-select',
        ''
    ),
    multiLevelSelect: createDescObj(
        2,
        '级联选择功能主要使用在于多级关联数据选择，比如说省市区的信息选择',
        'https://docs.alipay.com/mini/api/multi-level-select',
        ''
    ),
    setBackgroundColor: createDescObj(
        0,
        '动态设置窗口的背景色',
        'https://docs.alipay.com/mini/api/set-background',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html'
    ),
    setBackgroundTextStyle: createDescObj(
        0,
        '动态设置下拉背景字体、loading 图的样式',
        'https://docs.alipay.com/mini/api/aamqae',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html'
    ),
    setCanPullDown: createDescObj(
        2,
        '设置页面是否支持下拉（小程序内页面默认支持下拉）',
        'https://docs.alipay.com/mini/api/set-can-pull-down',
        ''
    ),
    setOptionMenu: createDescObj(
        2,
        '配置 optionMenu 导航栏额外图标，点击后触发 onOptionMenuClick',
        'https://docs.alipay.com/mini/api/optionmenu',
        ''
    ),
    loadFontFace: createDescObj(
        0,
        '动态加载网络字体，文件地址需为下载类型',
        'https://docs.alipay.com/mini/api/ggawf0',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html'
    )
};