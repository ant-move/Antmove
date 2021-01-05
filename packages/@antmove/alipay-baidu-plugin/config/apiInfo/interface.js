const { createDescObj } = require('./utils')

/**
 * 界面部分
 */

module.exports = {
  getTitleColor: createDescObj(
    2,
    '获取导航栏背景色',
    'https://docs.alipay.com/mini/api/dplf2s',
    '',
    {
      msg: '百度小程序不支持此功能',
      params: {
        props: {
          success: {
            type: 0,
            desc: '获取导航栏背景色成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '获取导航栏背景色失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '获取导航栏背景色调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),

  hideBackHome: createDescObj(
    2,
    '隐藏标题栏上的返回首页图标',
    'https://docs.alipay.com/mini/api/ui-navigate',
    '',
    {
      msg: '百度小程序不支持此功能',
    },
  ),

  hideNavigationBarLoading: createDescObj(
    0,
    '在当前页面隐藏导航条的加载动画',
    'https://docs.alipay.com/mini/api/ncgsga',
    'https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#swan-hideNavigationBarLoading/',
    {
      msg: '完整支持',
    },
  ),

  navigateBack: createDescObj(
    0,
    '关闭当前页面，返回上一级或多级页面',
    'https://docs.alipay.com/mini/api/ncgsga',
    'https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateBack/',
  ),
  navigateTo: createDescObj(
    0,
    '从当前页面，跳转到应用内的某个指定页面',
    'https://docs.alipay.com/mini/api/zwi8gx',
    'https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/',
  ),
  redirectTo: createDescObj(
    0,
    '关闭当前页面，跳转到应用内的某个指定页面',
    'https://docs.alipay.com/mini/api/fh18ky',
    'https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-navigateTo/',
  ),
  reLaunch: createDescObj(
    0,
    '关闭当前所有页面，跳转到应用内的某个指定页面',
    'https://docs.alipay.com/mini/api/hmn54z',
    'https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-reLaunch/',
  ),
  setNavigationBar: createDescObj(
    1,
    '隐藏标题栏上的返回首页图标',
    'https://docs.alipay.com/mini/api/xwq8e6',
    'https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#swan-setNavigationBarTitle/',
    {
      msg: 'api名称不同，参数部分支持',
      params: {
        props: {
                   
          image: {
            type: 0,
            desc: '图片连接地址',
          },
          borderBottomColor: {
            type: 0,
            desc: '导航栏底部边框颜色',
          },
          reset: {
            type: 0,
            desc: '是否重置导航栏为支付宝默认配色',
          },
          title: {
            type: 7,
            desc: '完全支持',
          },
          backgroundColor: {
            type: 7,
            desc: '完全支持',
          },

        },
      },
    },
  ),
  showNavigationBarLoading: createDescObj(
    0,
    '关闭当前所有页面，跳转到应用内的某个指定页面',
    'https://docs.alipay.com/mini/api/hmn54z',
    'https://smartprogram.baidu.com/docs/develop/api/show_navigationbar/#swan-showNavigationBarLoading/',
    {
      msg: '完整支持',
    },
  ),
  hideTabBar: createDescObj(
    0,
    '隐藏标签页',
    'https://docs.alipay.com/mini/api/at18z8',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-hideTabBar/',
    {
      msg: '完整支持',
    },
  ),
  hideTabBarRedDot: createDescObj(
    0,
    '隐藏标签页',
    'https://docs.alipay.com/mini/api/mg428a',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-hideTabBarRedDot/',
    {
      msg: '完整支持',
    },
  ),
  removeTabBarBadge: createDescObj(
    0,
    '移除标签页（tabbar） 某一项右上角的文本',
    'https://docs.alipay.com/mini/api/lpbp5g',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-removeTabBarBadge/',
    {
      msg: '完整支持',
    },
  ),
  setTabBarBadge: createDescObj(
    0,
    '移除标签页（tabbar） 某一项右上角的文本',
    'https://docs.alipay.com/mini/api/qm7t3v',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarBadge/',
  ),
  setTabBarItem: createDescObj(
    0,
    '移除标签页（tabbar） 某一项右上角的文本',
    'https://docs.alipay.com/mini/api/zu37bk',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarItem/',
  ),
  setTabBarStyle: createDescObj(
    0,
    '动态设置标签页（tabbar）的整体样式',
    'https://docs.alipay.com/mini/api/wcf0sv',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-setTabBarStyle/',
  ),
  showTabBar: createDescObj(
    0,
    '动态设置标签页（tabbar）的整体样式',
    'https://docs.alipay.com/mini/api/dpq5dh',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-showTabBar/',
  ),
    
  showTabBarRedDot: createDescObj(
    0,
    '显示标签页（tabbar）某一项的右上角的红点',
    'https://docs.alipay.com/mini/api/dpq5dh',
    'https://smartprogram.baidu.com/docs/develop/api/show_tabbar/#swan-showTabBarRedDot/',
  ),
  switchTab: createDescObj(
    0,
    '跳转到指定标签页（tabbar）页面',
    'https://docs.alipay.com/mini/api/ui-tabbar',
    'https://smartprogram.baidu.com/docs/develop/api/show_tab/#swan-switchTab/',
  ),
  alert: createDescObj(
    0,
    '警告框',
    'https://docs.alipay.com/mini/api/ui-feedback',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showToast',
    {
      msg: '百度小程序可用showToast代替',
    },
  ),

  confirm: createDescObj(
    0,
    '提示的确认框',
    'https://docs.alipay.com/mini/api/lt3uqc',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showModal/',
    {
      msg: '百度小程序可用showModal代替',
    },
  ),

  hideLoading: createDescObj(
    0,
    '隐藏加载提示',
    'https://docs.alipay.com/mini/api/nzf540',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-hideLoading',
    {
      msg: '参数差异',
      params: {
        props: {
          page: {
            type: 7,
            desc: '经过封装可实现',
          },
        },
      },
            
    },
  ),
  hideToast: createDescObj(
    0,
    '跳转到指定标签页（tabbar）页面',
    'https://docs.alipay.com/mini/api/iygd4e',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-hideToast/',
  ),
  prompt: createDescObj(
    2,
    '弹出一个对话框，让用户在对话框内输入文本',
    'https://docs.alipay.com/mini/api/vqpy01',
    '',
    {
      msg: '百度小程序不支持',
            
    },
  ),

  showActionSheet: createDescObj(
    1,
    '选项框',
    'https://docs.alipay.com/mini/api/vqpy01',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showActionSheet/',
    {
      msg: '参数和返回值差异',
      params: {
        props: {
          title: {
            type: 0,
            desc: '百度小程序不支持',
          },
                    
          items: {
            type: 7,
            desc: '百度小程序封装实现',
          },
          cancelButtonText: {
            type: 0,
            desc: '百度小程序不支持',
          },
          destructiveBtnIndex: {
            type: 0,
            desc: '百度小程序不支持',
          },
          badges: {
            type: 0,
            desc: '百度小程序不支持',
          },
          success: {
            type: 7,
            desc: '完全支持',
          },
          fail: {
            type: 7,
            desc: '完全支持',
          },
          complete: {
            type: 7,
            desc: '完全支持',
          },
        },
      },
    },
  ),

  showLoading: createDescObj(
    0,
    '显示 loading 提示框',
    'https://docs.alipay.com/mini/api/bm69kb',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showLoading/',
    {
      msg: '百度小程序封装实现',
           
            
    },
  ),
  showToast: createDescObj(
    0,
    '显示一个弱提示，在到达设定的显示时间后，自动消失',
    'https://docs.alipay.com/mini/api/fhur8f',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showToast/',
  ),
  startPullDownRefresh: createDescObj(
    0,
    '开始下拉刷新',
    'https://docs.alipay.com/mini/api/ui-pulldown',
    'https://smartprogram.baidu.com/docs/develop/api/show_toast/#swan-showToast/',
  ),
  stopPullDownRefresh: createDescObj(
    0,
    '停止当前页面的下拉刷新',
    'https://docs.alipay.com/mini/api/pmhkbb',
    'https://smartprogram.baidu.com/docs/develop/api/show_pull/#swan-stopPullDownRefresh/',
  ),


  chooseAlipayContact: createDescObj(
    2,
    '唤起支付宝通讯录',
    'https://docs.alipay.com/mini/api/ui-contact',
    '',
    {
      msg: '百度支付宝不支持',
      params: {
        props: {
          count: {
            type: 0,
            desc: '百度小程序不支持',
          },
          success: {
            type: 0,
            desc: '百度小程序不支持',
          },
          fail: {
            type: 0,
            desc: '百度小程序不支持',
          },
          complete: {
            type: 0,
            desc: '百度小程序不支持',
          },
        },
      },
    },
  ),
  choosePhoneContact: createDescObj(
    2,
    '选择本地系统通信录中某个联系人的电话',
    'https://docs.alipay.com/mini/api/blghgl',
    '',
    {
      msg: '百度支付宝不支持',
    },
  ),
  choosecontact: createDescObj(
    2,
    '唤起支付选择人',
    'https://docs.alipay.com/mini/api/ui-contact',
    '',
    {
      msg: '百度支付宝不支持',
      params: {
        props: {
          chooseType: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMe: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMobileContactMode: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMax: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMaxTips: {
            type: 0,
            desc: '百度小程序不支持',
          },
          success: {
            type: 0,
            desc: '百度小程序不支持',
          },
          fail: {
            type: 0,
            desc: '百度小程序不支持',
          },
          complete: {
            type: 0,
            desc: '百度小程序不支持',
          },
        },
      },
    },
  ),

  chooseCity: createDescObj(
    2,
    '打开城市选择列表',
    'https://docs.alipay.com/mini/api/ui-city',
    '',
    {
      msg: '百度支付宝不支持',
      params: {
        props: {
          chooseType: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMe: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMobileContactMode: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMax: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMaxTips: {
            type: 0,
            desc: '百度小程序不支持',
          },
          success: {
            type: 0,
            desc: '百度小程序不支持',
          },
          fail: {
            type: 0,
            desc: '百度小程序不支持',
          },
          complete: {
            type: 0,
            desc: '百度小程序不支持',
          },
        },
      },
    },
  ),

  datePicker: createDescObj(
    2,
    '打开日期选择列表',
    'https://docs.alipay.com/mini/api/ui-date',
    '',
    {
      msg: '百度支付宝不支持',
      params: {
        props: {
          chooseType: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMe: {
            type: 0,
            desc: '百度小程序不支持',
          },
          includeMobileContactMode: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMax: {
            type: 0,
            desc: '百度小程序不支持',
          },
          multiChooseMaxTips: {
            type: 0,
            desc: '百度小程序不支持',
          },
          success: {
            type: 0,
            desc: '百度小程序不支持',
          },
          fail: {
            type: 0,
            desc: '百度小程序不支持',
          },
          complete: {
            type: 0,
            desc: '百度小程序不支持',
          },
        },
      },
    },
  ),

  createAnimation: createDescObj(
    0,
    '创建动画实例 animation',
    'https://docs.alipay.com/mini/api/ui-animation',
    'https://smartprogram.baidu.com/docs/develop/api/show_createanimation/',
    {
      msg: '可封装支持',
      params: {
        props: {
          timeFunction: {
            type: 1,
            desc: 'timingFunction',
          },
                   
        },
      },
    },
  ),
  createCanvasContext: createDescObj(
    0,
    '创建 canvas 绘图上下文',
    'https://docs.alipay.com/mini/api/ui-canvas',
    'https://smartprogram.baidu.com/docs/develop/api/show_canvas/#swan-createCanvasContext/',
  ),
  createMapContext: createDescObj(
    1,
    '创建并返回一个地图下文对象 mapContext',
    'https://docs.alipay.com/mini/api/ui-map',
    'https://smartprogram.baidu.com/docs/develop/api/location_map/#swan-createMapContext/',
    {
      msg: '部分支持',
            
      returnValue: {
        props: {
          clearRoute: {
            type: 0,
            desc: '清除地图上的步行导航路线',
          },
          gestureEnable: {
            type: 0,
            desc: '设置所有手势是否可用',
          },
          showsCompass: {
            type: 0,
            desc: '设置指南针是否可见',
          },
          showRoute: {
            type: 0,
            desc: '默认规划步行路线，只能显示一条',
          },
          showsScale: {
            type: 0,
            desc: '设置比例尺控件是否可见',
          },
          updateComponents: {
            type: 0,
            desc: '增量更新地图接口',
          },
        },
      },
    },
  ),
  hideKeyboard: createDescObj(
    2,
    '隐藏键盘',
    'https://docs.alipay.com/mini/api/ui-hidekeyboard',
    '',
    {
      msg: '不支持',
           
    },
  ),
  pageScrollTo: createDescObj(
    0,
    '滚动到页面的目标位置',
    'https://docs.alipay.com/mini/api/scroll',
    'https://smartprogram.baidu.com/docs/develop/api/show_pagescrollto/#swan-pageScrollTo/',
  ),
  createIntersectionObserver: createDescObj(
    0,
    '创建并返回一个 IntersectionObserver 对象实例',
    'https://docs.alipay.com/mini/api/intersectionobserver',
    'https://smartprogram.baidu.com/docs/develop/api/show_query/#swan-createIntersectionObserver/',
  ),
  optionsSelect: createDescObj(
    2,
    '类似于 safari 原生 select 的组件',
    'https://docs.alipay.com/mini/api/options-select',
    '',
    {
      msg: '不支持,需要使用组件picker实现',
           
    },
  ),
  multiLevelSelect: createDescObj(
    2,
    '级联选择功能主要使用在于多级关联数据选择',
    'https://docs.alipay.com/mini/api/multi-level-select',
    '',
    {
      msg: '不支持,需要使用组件picker实现',
            
    },
  ),
  setBackgroundColor: createDescObj(
    0,
    '动态设置窗口的背景色',
    'https://docs.alipay.com/mini/api/scroll',
    'https://smartprogram.baidu.com/docs/develop/api/show_background/#swan-setBackgroundColor/',
  ),
  setBackgroundTextStyle: createDescObj(
    0,
    '动态设置下拉背景字体、loading 图的样式',
    'https://docs.alipay.com/mini/api/aamqae',
    'https://smartprogram.baidu.com/docs/develop/api/show_background/#swan-setBackgroundTextStyle/',
  ),
  setCanPullDown: createDescObj(
    2,
    '设置页面是否支持下拉',
    'https://docs.alipay.com/mini/api/set-can-pull-down',
    '',
    {
      msg: '百度的是在json中开启enablePullDownRefresh',
    },
  ),
  setOptionMenu: createDescObj(
    2,
    '配置 optionMenu 导航栏额外图标',
    'https://docs.alipay.com/mini/api/optionmenu',
    '',
    {
      msg: '百度不支持',
      params: {
        props: {
          icon: {
            type: 0,
            desc: '自定义optionMenu所用图标的url',
          },
        },
      },
           
    },
  ),

  loadFontFace: createDescObj(
    2,
    '动态加载网络字体',
    'https://docs.alipay.com/mini/api/ggawf0',
    '',
    {
      msg: '百度不支持',
      params: {
        props: {
          family: {
            type: 0,
            desc: '字体名称',
          },
          source: {
            type: 0,
            desc: '字体资源地址',
          },
          desc: {
            type: 0,
            desc: '字体描述符',
          },
          success: {
            type: 0,
            desc: '调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '调用结束后的回调函数',
          },
        },
      },
    },
  ),
}
