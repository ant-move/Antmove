const { createDescObj } = require('./utils');
/**
 * 界面
 */
module.exports = {
    showToast: createDescObj(
        1,
        '显示消息提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html',
        'https://docs.alipay.com/mini/api/fhur8f',
        {
            msg: '入参参数差异/缺失',
            params: {
                props: {
                    title: {
                        type: 1,
                        desc: '提示的内容, wx: title, alipay: content'
                    },
                    icon: {
                        type: 1,
                        desc: '图标, wx: icon, alipay: type'
                    },
                    image: {
                        type: 0,
                        desc: '自定义图标的本地路径，image 的优先级高于 icon'
                    },
                    mask: {
                        type: 0,
                        desc: '是否显示透明蒙层，防止触摸穿透'
                    },
                    'icon的合法值': {
                        type: 0,
                        desc: '显示加载图标，此时 title 文本最多显示 7 个汉字长度'
                    }
                }
            }
        }
    ),
    showModal: createDescObj(
        1,
        '显示模态对话框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        'https://docs.alipay.com/mini/api/lt3uqc',
        {
            msg: '入参参数名称差异/参数缺失/返回值名称差异',
            params: {
                props: {
                    confirmText: {
                        type: 1,
                        desc: '确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText'
                    },
                    cancelText: {
                        type: 1,
                        desc: '取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText'
                    },
                    showCancel: {
                        type: 0,
                        desc: '是否显示取消按钮'
                    },
                    cancelColor: {
                        type: 0,
                        desc: '取消按钮的文字颜色，必须是 16 进制格式的颜色字符串'
                    },
                    confirmColor: {
                        type: 0,
                        desc: '确认按钮的文字颜色，必须是 16 进制格式的颜色字符串'
                    }
                }
            },
            returnValue: {
                props: {
                    confirm: {
                        type: 1,
                        desc: 'wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false'
                    },
                    cancel: {
                        type: 1,
                        desc: 'wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）'
                    }
                }
            }
        }
    ),
    showLoading: createDescObj(
        1,
        '显示 loading 提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html',
        'https://docs.alipay.com/mini/api/bm69kb',
        {
            msg: '入参参数名称差异/参数缺失',
            params: {
                props: {
                    title: {
                        type: 1,
                        desc: '提示的内容, wx: title, alipay: content'
                    },
                    mask: {
                        type: 0,
                        desc: '是否显示透明蒙层，防止触摸穿透'
                    }
                }
            }
        }
    ),
    showActionSheet: createDescObj(
        1,
        '显示操作菜单',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html',
        'https://docs.alipay.com/mini/api/hr092g',
        {
            msg: '入参参数名称差异/参数缺失',
            params: {
                props: {
                    itemList: {
                        type: 1,
                        desc: '按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items'
                    },
                    itemColor: {
                        type: 0,
                        desc: '按钮的文字颜色'
                    }
                }
            }
        }
    ),
    hideToast: createDescObj(
        0,
        '隐藏消息提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html',
        'https://docs.alipay.com/mini/api/iygd4e'
    ),
    hideLoading: createDescObj(
        0,
        '隐藏 loading 提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html',
        'https://docs.alipay.com/mini/api/nzf540'
    ),
    showNavigationBarLoading: createDescObj(
        0,
        '在当前页面显示导航条加载动画',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html',
        'https://docs.alipay.com/mini/api/lydg2a'
    ),
    setNavigationBarTitle: createDescObj(
        0,
        '动态设置当前页面的标题',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html',
        'https://docs.alipay.com/mini/api/xwq8e6'
    ),
    setNavigationBarColor: createDescObj(
        2,
        '设置页面导航条颜色',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html',
        '无'
    ),
    hideNavigationBarLoading: createDescObj(
        0,
        '在当前页面隐藏导航条加载动画',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html',
        'https://docs.alipay.com/mini/api/ncgsga'
    ),
    setBackgroundTextStyle: createDescObj(
        0,
        '动态设置下拉背景字体、loading 图的样式',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html',
        'https://docs.alipay.com/mini/api/aamqae'
    ),
    setBackgroundColor: createDescObj(
        0,
        '动态设置窗口的背景色',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html',
        'https://docs.alipay.com/mini/api/set-background#mysetBackgroundColor'
    ),
    showTabBarRedDot: createDescObj(
        0,
        '显示tabBar某一项的右上角的红点',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html',
        'https://docs.alipay.com/mini/api/dquxiq'
    ),
    showTabBar: createDescObj(
        0,
        '显示 tabBar',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html',
        'https://docs.alipay.com/mini/api/dpq5dh'
    ),
    setTabBarStyle: createDescObj(
        0,
        '动态设置 tabBar 的整体样式',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html',
        'https://docs.alipay.com/mini/api/wcf0sv'
    ),
    setTabBarItem: createDescObj(
        0,
        '动态设置 tabBar 某一项的内容',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html',
        'https://docs.alipay.com/mini/api/zu37bk'
    ),
    setTabBarBadge: createDescObj(
        0,
        '为 tabBar 某一项的右上角添加文本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html',
        'https://docs.alipay.com/mini/api/qm7t3v'
    ),
    removeTabBarBadge: createDescObj(
        0,
        '移除 tabBar 某一项右上角的文本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html',
        'https://docs.alipay.com/mini/api/lpbp5g'
    ),
    hideTabBarRedDot: createDescObj(
        0,
        '隐藏 tabBar 某一项的右上角的红点',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html',
        'https://docs.alipay.com/mini/api/mg428a'
    ),
    hideTabBar: createDescObj(
        0,
        '隐藏 tabBar',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html',
        'https://docs.alipay.com/mini/api/at18z8'
    ),
    loadFontFace: createDescObj(
        0,
        '动态加载网络字体',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html',
        'https://docs.alipay.com/mini/api/ggawf0'
    ),
    stopPullDownRefresh: createDescObj(
        0,
        '停止当前页面下拉刷新',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html',
        'https://docs.alipay.com/mini/api/pmhkbb'
    ),
    startPullDownRefresh: createDescObj(
        0,
        '开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html',
        'https://docs.alipay.com/mini/api/ui-pulldown'
    ),
    pageScrollTo: createDescObj(
        1,
        '将页面滚动到目标位置',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html',
        'https://docs.alipay.com/mini/api/scroll#mypagescrollto',
        {
            msg: '参数缺失',
            params: {
                props: {
                    duration: {
                        type: 0,
                        desc: '滚动动画的时长，单位 ms'
                    }
                }
            }
        }
    ),
    createAnimation: createDescObj(
        0,
        '创建一个动画实例 animation',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html',
        'https://docs.alipay.com/mini/api/ui-animation#a-namen93ndhamycreateanimation'
    ),
    setTopBarText: createDescObj(
        2,
        '动态设置置顶栏文字内容',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html',
        '无'
    ),
    nextTick: createDescObj(
        2,
        '延迟一部分操作到下一个时间片再执行',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html',
        '无'
    ),
    getMenuButtonBoundingClientRect: createDescObj(
        2,
        '获取菜单按钮（右上角胶囊按钮）的布局位置信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html',
        '无'
    ),
    onWindowResize: createDescObj(
        2,
        '监听窗口尺寸变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html',
        '无'
    ),
    offWindowResize: createDescObj(
        2,
        '取消监听窗口尺寸变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.offWindowResize.html',
        '无'
    )
};