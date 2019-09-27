const { createDescObj } = require('./utils');
/**
 * 界面
 */
module.exports = {
    showToast: createDescObj(
        1,
        '显示消息提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html',
        'https://developer.toutiao.com/dev/miniapp/ucDMz4yNwMjL3AzM',
        {
            msg: '入参参数差异/缺失',
            params: {
                props: {
                    image: {
                        type: 0,
                        desc: '自定义图标的本地路径，image 的优先级高于 icon'
                    },
                    mask: {
                        type: 0,
                        desc: '是否显示透明蒙层，防止触摸穿透'
                    }
                }
            }
        }
    ),
    showModal: createDescObj(
        1,
        '显示模态对话框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        'https://developer.toutiao.com/dev/miniapp/uUjMz4SNyMjL1IzM',
        {
            msg: '入参参数缺失',
            params: {
                props: {
                    cancelColor: {
                        type: 0,
                        desc: '取消按钮的文字颜色，必须是 16 进制格式的颜色字符串'
                    },
                    confirmColor: {
                        type: 0,
                        desc: '确认按钮的文字颜色，必须是 16 进制格式的颜色字符串'
                    }
                }
            }
        }
    ),
    showLoading: createDescObj(
        1,
        '显示 loading 提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html',
        'https://developer.toutiao.com/dev/miniapp/uIDMz4iMwMjLyAzM',
        {
            msg: '入参参数缺失',
            params: {
                props: {
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
        'https://developer.toutiao.com/dev/miniapp/ukDMz4SOwMjL5AzM',
        {
            msg: '入参参数缺失',
            params: {
                props: {
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
        'https://developer.toutiao.com/dev/miniapp/ugTMz4COxMjL4EzM'
    ),
    hideLoading: createDescObj(
        0,
        '隐藏 loading 提示框',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html',
        'https://developer.toutiao.com/dev/miniapp/uYDOy4iN4IjL2gjM'
    ),
    showNavigationBarLoading: createDescObj(
        2,
        '在当前页面显示导航条加载动画',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html',
        ''
    ),
    setNavigationBarTitle: createDescObj(
        0,
        '动态设置当前页面的标题',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html',
        'https://developer.toutiao.com/dev/miniapp/ugDMz4COwMjL4AzM'
    ),
    setNavigationBarColor: createDescObj(
        2,
        '设置页面导航条颜色',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarColor.html',
        ''
    ),
    hideNavigationBarLoading: createDescObj(
        2,
        '在当前页面隐藏导航条加载动画',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html',
        ''
    ),
    setBackgroundTextStyle: createDescObj(
        2,
        '动态设置下拉背景字体、loading 图的样式',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundTextStyle.html',
        ''
    ),
    setBackgroundColor: createDescObj(
        2,
        '动态设置窗口的背景色',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html',
        ''
    ),
    showTabBarRedDot: createDescObj(
        2,
        '显示tabBar某一项的右上角的红点',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html',
        ''
    ),
    showTabBar: createDescObj(
        2,
        '显示 tabBar',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html',
        ''
    ),
    setTabBarStyle: createDescObj(
        2,
        '动态设置 tabBar 的整体样式',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html',
        ''
    ),
    setTabBarItem: createDescObj(
        2,
        '动态设置 tabBar 某一项的内容',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html',
        ''
    ),
    setTabBarBadge: createDescObj(
        2,
        '为 tabBar 某一项的右上角添加文本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html',
        ''
    ),
    removeTabBarBadge: createDescObj(
        2,
        '移除 tabBar 某一项右上角的文本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html',
        ''
    ),
    hideTabBarRedDot: createDescObj(
        2,
        '隐藏 tabBar 某一项的右上角的红点',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html',
        ''
    ),
    hideTabBar: createDescObj(
        2,
        '隐藏 tabBar',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html',
        ''
    ),
    loadFontFace: createDescObj(
        2,
        '动态加载网络字体',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html',
        ''
    ),
    stopPullDownRefresh: createDescObj(
        0,
        '停止当前页面下拉刷新',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html',
        'https://developer.toutiao.com/dev/miniapp/ucjMz4yNyMjL3IzM'
    ),
    startPullDownRefresh: createDescObj(
        0,
        '开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.startPullDownRefresh.html',
        'https://developer.toutiao.com/dev/miniapp/ukjMz4SOyMjL5IzM'
    ),
    pageScrollTo: createDescObj(
        1,
        '将页面滚动到目标位置',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html',
        'https://developer.toutiao.com/dev/miniapp/uETNz4SM1MjLxUzM',
        {
            msg: '参数缺失',
            params: {
                props: {
                    selector: {
                        type: 0,
                        desc: '选择器'
                    }
                }
            }
        }
    ),
    createAnimation: createDescObj(
        0,
        '创建一个动画实例 animation',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html',
        'https://developer.toutiao.com/dev/miniapp/uATNy4CM1IjLwUjM'
    ),
    setTopBarText: createDescObj(
        2,
        '动态设置置顶栏文字内容',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/sticky/wx.setTopBarText.html',
        ''
    ),
    nextTick: createDescObj(
        2,
        '延迟一部分操作到下一个时间片再执行',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/custom-component/wx.nextTick.html',
        ''
    ),
    getMenuButtonBoundingClientRect: createDescObj(
        2,
        '获取菜单按钮（右上角胶囊按钮）的布局位置信息',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html',
        ''
    ),
    onWindowResize: createDescObj(
        2,
        '监听窗口尺寸变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html',
        ''
    ),
    offWindowResize: createDescObj(
        2,
        '取消监听窗口尺寸变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.offWindowResize.html',
        ''
    )
};