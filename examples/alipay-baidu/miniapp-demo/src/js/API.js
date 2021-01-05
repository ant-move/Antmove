/*
 * 常量定义
 * 说明：
 *   titleEn以标签被使用时的名字定义,必填。readme.md也以titleEn的值命名
 *   每个文件内最后的js文件是index.js
 * */

// 对外的API
const API = {
  categories: [
    {
      title: '开放能力',
      titleEn: 'openAPI',
      list: [
        {
          title: '获取授权码',
          titleEn: 'getAuthCode',
          path: '/pages/framework/API/getAuthCode/index',
        },
        {
          title: '客户端获取会员信息',
          titleEn: 'getAuthUserInfo',
          path: '/pages/framework/API/getAuthUserInfo/index',
        },
        {
          title: '获取用户手机号',
          titleEn: 'getPhoneNumber',
          path: '/pages/framework/API/getPhoneNumber/index',
        },
        {
          title: '发起支付',
          titleEn: 'tradePay',
          path: '/pages/framework/API/tradePay/index',
        },
        {
          title: '小程序跳转',
          titleEn: 'navigateMiniProgram',
          path: '/pages/framework/API/navigateMiniProgram/index',
        },
        {
          title: '获取会员的基础信息',
          titleEn: 'getOpenUserInfo',
          path: '/pages/framework/API/getOpenUserInfo/index',
        },
        {
          title: 'webview组件控制',
          titleEn: 'createWebview',
          path: '/pages/framework/API/createWebview/index',
        },
      ],
    },
    {
      title: '界面',
      titleEn: 'interface',
      list: [
        {
          title: '警告框',
          titleEn: 'alert',
          path: '/pages/framework/API/alert/index',
        },
        {
          title: '确认框',
          titleEn: 'confirm',
          path: '/pages/framework/API/confirm/index',
        },
        {
          title: '提示框',
          titleEn: 'prompt',
          path: '/pages/framework/API/prompt/index',
        },
        {
          title: '弱提示',
          titleEn: 'toast',
          path: '/pages/framework/API/toast/index',
        },
        {
          title: '加载提示',
          titleEn: 'loading',
          path: '/pages/framework/API/loading/index',
        },
        {
          title: '操作菜单',
          titleEn: 'showActionSheet',
          path: '/pages/framework/API/showActionSheet/index',
        },
        {
          title: '设置界面导航栏',
          titleEn: 'setNavigationBar',
          path: '/pages/framework/API/setNavigationBar/index',
        },
        {
          title: '设置optionMenu',
          titleEn: 'optionMenu',
          path: '/pages/framework/API/optionMenu/index',
        },
        {
          title: 'tabBar',
          titleEn: 'tabBar',
          path: '/pages/framework/API/tabBar/index',
        },
        {
          title: '动态加载网络字体',
          titleEn: 'loadFontFace',
          path: '/pages/framework/API/loadFontFace/index',
        },
        {
          title: '页面跳转',
          titleEn: 'navigator',
          path: '/pages/framework/API/navigator/index',
        },
        {
          title: '下拉刷新',
          titleEn: 'pullDownRefresh',
          path: '/pages/framework/API/pullDownRefresh/index',
        },
        {
          title: '创建动画',
          titleEn: 'createAnimation',
          path: '/pages/framework/API/createAnimation/index',
        },
        {
          title: '创建绘画',
          titleEn: 'canvas',
          path: '/pages/framework/API/canvas/index',
        },
        {
          title: '创建地图',
          titleEn: 'map',
          path: '/pages/framework/API/map/index',
        },
        {
          title: '选择日期',
          titleEn: 'datePicker',
          path: '/pages/framework/API/datePicker/index',
        },
        {
          title: '滚动页面',
          titleEn: 'pageScrollTo',
          path: '/pages/framework/API/pageScrollTo/index',
        },
        {
          title: '节点查询',
          titleEn: 'createSelectorQuery',
          path: '/pages/framework/API/createSelectorQuery/index',
        },
        // my.ap
        {
          title: '联系人',
          titleEn: 'contact',
          path: '/pages/framework/API/contact/index',
        },
        {
          title: '标题栏加载动画',
          titleEn: 'navigationBarLoading',
          path: '/pages/framework/API/navigationBarLoading/index',
        },
        {
          title: '选择城市',
          titleEn: 'chooseCity',
          path: '/pages/framework/API/chooseCity/index',
        },
        {
          title: '隐藏键盘',
          titleEn: 'keyboard',
          path: '/pages/framework/API/keyboard/index',
        },
        // my.canIUse('multiLevelSelect')
        {
          title: '级联选择',
          titleEn: 'multiLevelSelect',
          path: '/pages/framework/API/multiLevelSelect/index',
        },
        {
          title: '设置导航栏背景透明',
          titleEn: 'setTransparentTitle',
          path: '/pages/framework/API/setTransparentTitle/index',
        },
        {
          title: '选项选择',
          titleEn: 'optionsSelect',
          path: '/pages/framework/API/optionsSelect/index',
        },
        {
          title: '插入自定义菜单',
          titleEn: 'setCustomPopMenu',
          path: '/pages/framework/API/setCustomPopMenu/index',
        },
        {
          title: '设置窗口的背景色',
          titleEn: 'setBackgroundColor',
          path: '/pages/framework/API/setBackgroundColor/index',
        },
        {
          title: '设置页面是否支持下拉',
          titleEn: 'setCanPullDown',
          path: '/pages/framework/API/setCanPullDown/index',
        },
        {
          title: '自定义通用菜单',
          titleEn: 'customGeneralMenu',
          path: '/pages/framework/API/customGeneralMenu/index',
        },
        {
          title: '获取小程序运行版本',
          titleEn: 'getRunScene',
          path: '/pages/framework/API/getRunScene/index',
        },
        {
          title: '隐藏返回首页图标',
          titleEn: 'hideBackHome ',
          path: '/pages/framework/API/hideBackHome/index',
        },
      ],
    },
    {
      title: '设备',
      titleEn: 'device',
      list: [
        {
          title: 'canIUse',
          titleEn: 'canIUse',
          path: '/pages/framework/API/canIUse/index',
        },
        {
          title: '获取手机网络状态',
          titleEn: 'getNetworkType',
          path: '/pages/framework/API/getNetworkType/index',
        },
        {
          title: '获取手机系统信息',
          titleEn: 'getSystemInfo',
          path: '/pages/framework/API/getSystemInfo/index',
        },
        {
          title: '振动',
          titleEn: 'vibrate',
          path: '/pages/framework/API/vibrate/index',
        },
        {
          title: '剪贴板',
          titleEn: 'clipboard',
          path: '/pages/framework/API/clipboard/index',
        },
        {
          title: '打开小程序设置',
          titleEn: 'openSetting',
          path: '/pages/framework/API/openSetting/index',
        },
        {
          title: '获取用户的当前设置',
          titleEn: 'getSetting',
          path: '/pages/framework/API/getSetting/index',
        },
        {
          title: '权限引导',
          titleEn: 'showAuthGuide',
          path: '/pages/framework/API/showAuthGuide/index',
        },
        // my.ap
        {
          title: '获取基础版本库',
          titleEn: 'SDKVersion',
          path: '/pages/framework/API/SDKVersion/index',
        },
        {
          title: '屏幕亮度',
          titleEn: 'screen',
          path: '/pages/framework/API/screen/index',
        },
        {
          title: '摇一摇',
          titleEn: 'watchShake',
          path: '/pages/framework/API/watchShake/index',
        },
        {
          title: '拨打电话',
          titleEn: 'makePhoneCall',
          path: '/pages/framework/API/makePhoneCall/index',
        },
        {
          title: '用户截屏事件',
          titleEn: 'captureScreen',
          path: '/pages/framework/API/captureScreen/index',
        },
        {
          title: '获取服务器时间',
          titleEn: 'getServerTime',
          path: '/pages/framework/API/getServerTime/index',
        },
        {
          title: '内存不足告警',
          titleEn: 'memoryWarning',
          path: '/pages/framework/API/memoryWarning/index',
        },
        {
          title: '加速度计',
          titleEn: 'accelerometerChange',
          path: '/pages/framework/API/accelerometerChange/index',
        },
        {
          title: '陀螺仪',
          titleEn: 'gyroscopeChange',
          path: '/pages/framework/API/gyroscopeChange/index',
        },
        {
          title: '罗盘',
          titleEn: 'compassChange',
          path: '/pages/framework/API/compassChange/index',
        },
      ],
    },
    {
      title: '网络',
      titleEn: 'network',
      list: [
        {
          title: '发起HTTP请求',
          titleEn: 'request',
          path: '/pages/framework/API/request/index',
        },
        {
          title: '上传文件',
          titleEn: 'uploadFile',
          path: '/pages/framework/API/uploadFile/index',
        },
        {
          title: '下载文件',
          titleEn: 'downloadFile',
          path: '/pages/framework/API/downloadFile/index',
        },
        {
          title: 'Websocket',
          titleEn: 'websocket',
          path: '/pages/framework/API/websocket/index',
        },
      ],
    },
    {
      title: '媒体',
      titleEn: 'media',
      list: [
        {
          title: '图片',
          titleEn: 'image',
          path: '/pages/framework/API/image/index',
        },
        {
          title: '获取图片信息',
          titleEn: 'getImageInfo',
          path: '/pages/framework/API/getImageInfo/index',
        },
        {
          title: '压缩图片',
          titleEn: 'compressImage',
          path: '/pages/framework/API/compressImage/index',
        },
      ],
    },
    {
      title: '位置',
      titleEn: 'location',
      list: [
        {
          title: '获取当前位置',
          titleEn: 'getLocation',
          path: '/pages/framework/API/getLocation/index',
        },
        {
          title: '使用原生地图查看位置',
          titleEn: 'openLocation',
          path: '/pages/framework/API/openLocation/index',
        },
        {
          title: '打开地图选择位置',
          titleEn: 'chooseLocation',
          path: '/pages/framework/API/chooseLocation/index',
        },
      ],
    },
    {
      title: '其他',
      titleEn: 'other',
      list: [
        {
          title: '缓存',
          titleEn: 'storage',
          path: '/pages/framework/API/storage/index',
        },
        {
          title: '扫码 Scan',
          titleEn: 'scanCode',
          path: '/pages/framework/API/scanCode/index',
        },
        {
          title: '自定义分享',
          titleEn: 'customShare',
          path: '/pages/framework/API/customShare/index',
        },
        // mp.ap
        {
          title: '文件',
          titleEn: 'file',
          path: '/pages/framework/API/file/index',
        },
        {
          title: '蓝牙',
          titleEn: 'bluetooth',
          path: '/pages/framework/API/bluetooth/index',
        },
        {
          title: '数据安全',
          titleEn: 'rsa',
          path: '/pages/framework/API/rsa/index',
        },
        {
          title: '自定义分析',
          titleEn: 'reportAnalytics',
          path: '/pages/framework/API/reportAnalytics/index',
        },
        {
          title: '更新管理',
          titleEn: 'getUpdateManager',
          path: '/pages/framework/API/getUpdateManager/index',
        },
      ],
    },
  ],
}
// @if OUTPUT_ENV='inner'
API.categories = [
  {
    title: '开放能力',
    titleEn: 'openAPI',
    list: [
      {
        title: '获取授权码',
        titleEn: 'getAuthCode',
        path: '/pages/framework/API/getAuthCode/index',
      },
      {
        title: '客户端获取会员信息',
        titleEn: 'getAuthUserInfo',
        path: '/pages/framework/API/getAuthUserInfo/index',
      },
      {
        title: '获取用户手机号',
        titleEn: 'getPhoneNumber',
        path: '/pages/framework/API/getPhoneNumber/index',
      },
      {
        title: '发起支付',
        titleEn: 'tradePay',
        path: '/pages/framework/API/tradePay/index',
      },
      {
        title: '开放认证',
        titleEn: 'startAPVerify',
        path: '/pages/framework/API/startAPVerify__inner/index',
      },
      {
        title: '小程序跳转',
        titleEn: 'navigateMiniProgram',
        path: '/pages/framework/API/navigateMiniProgram/index',
      },
      {
        title: '支付代扣签约',
        titleEn: 'paySignCenter',
        path: '/pages/framework/API/paySignCenter__inner/index',
      },
      {
        title: '获取加密用户标示',
        titleEn: 'getAmapUserData',
        path: '/pages/framework/API/getAmapUserData__inner/index',
      },
      {
        title: '获取会员的基础信息',
        titleEn: 'getOpenUserInfo',
        path: '/pages/framework/API/getOpenUserInfo/index',
      },
      {
        title: '打开高德页面',
        titleEn: 'navigateToAMapPage',
        path: '/pages/framework/API/navigateToAMapPage__inner/index',
      },
      {
        title: 'webview组件控制',
        titleEn: 'createWebview',
        path: '/pages/framework/API/createWebview/index',
      },
    ],
  },
  {
    title: '界面',
    titleEn: 'interface',
    list: [
      {
        title: '警告框',
        titleEn: 'alert',
        path: '/pages/framework/API/alert/index',
      },
      {
        title: '确认框',
        titleEn: 'confirm',
        path: '/pages/framework/API/confirm/index',
      },
      {
        title: '提示框',
        titleEn: 'prompt',
        path: '/pages/framework/API/prompt/index',
      },
      {
        title: '弱提示',
        titleEn: 'toast',
        path: '/pages/framework/API/toast/index',
      },
      {
        title: '加载提示',
        titleEn: 'loading',
        path: '/pages/framework/API/loading/index',
      },
      {
        title: '操作菜单',
        titleEn: 'showActionSheet',
        path: '/pages/framework/API/showActionSheet/index',
      },
      {
        title: '设置界面导航栏',
        titleEn: 'setNavigationBar',
        path: '/pages/framework/API/setNavigationBar/index',
      },
      {
        title: '设置optionMenu',
        titleEn: 'optionMenu',
        path: '/pages/framework/API/optionMenu/index',
      },
      {
        title: 'tabBar',
        titleEn: 'tabBar',
        path: '/pages/framework/API/tabBar/index',
      },
      {
        title: '动态加载网络字体',
        titleEn: 'loadFontFace',
        path: '/pages/framework/API/loadFontFace/index',
      },
      {
        title: '页面跳转',
        titleEn: 'navigator',
        path: '/pages/framework/API/navigator/index',
      },
      {
        title: '下拉刷新',
        titleEn: 'pullDownRefresh',
        path: '/pages/framework/API/pullDownRefresh/index',
      },
      {
        title: '创建动画',
        titleEn: 'createAnimation',
        path: '/pages/framework/API/createAnimation/index',
      },
      {
        title: '创建绘画',
        titleEn: 'canvas',
        path: '/pages/framework/API/canvas/index',
      },
      {
        title: '创建地图',
        titleEn: 'map',
        path: '/pages/framework/API/map/index',
      },
      {
        title: '选择日期',
        titleEn: 'datePicker',
        path: '/pages/framework/API/datePicker/index',
      },
      {
        title: '滚动页面',
        titleEn: 'pageScrollTo',
        path: '/pages/framework/API/pageScrollTo/index',
      },
      {
        title: '节点查询',
        titleEn: 'createSelectorQuery',
        path: '/pages/framework/API/createSelectorQuery/index',
      },
      // my.ap
      {
        title: '联系人',
        titleEn: 'contact',
        path: '/pages/framework/API/contact/index',
      },
      {
        title: '标题栏加载动画',
        titleEn: 'navigationBarLoading',
        path: '/pages/framework/API/navigationBarLoading/index',
      },
      {
        title: '选择城市',
        titleEn: 'chooseCity',
        path: '/pages/framework/API/chooseCity/index',
      },
      {
        title: '隐藏键盘',
        titleEn: 'keyboard',
        path: '/pages/framework/API/keyboard/index',
      },
      // my.canIUse('multiLevelSelect')
      {
        title: '级联选择',
        titleEn: 'multiLevelSelect',
        path: '/pages/framework/API/multiLevelSelect/index',
      },
      // my.canIUse('getTitleColor')
      {
        title: '获取导航栏背景颜色',
        titleEn: 'getTitleColor',
        path: '/pages/framework/API/getTitleColor__inner/index',
      },
      {
        title: '设置导航栏背景透明',
        titleEn: 'setTransparentTitle',
        path: '/pages/framework/API/setTransparentTitle/index',
      },
      {
        title: '选项选择',
        titleEn: 'optionsSelect',
        path: '/pages/framework/API/optionsSelect/index',
      },
      {
        title: '插入自定义菜单',
        titleEn: 'setCustomPopMenu',
        path: '/pages/framework/API/setCustomPopMenu/index',
      },
      {
        title: '设置窗口的背景色',
        titleEn: 'setBackgroundColor',
        path: '/pages/framework/API/setBackgroundColor/index',
      },
      {
        title: '设置页面是否支持下拉',
        titleEn: 'setCanPullDown',
        path: '/pages/framework/API/setCanPullDown/index',
      },
      {
        title: '自定义通用菜单',
        titleEn: 'customGeneralMenu',
        path: '/pages/framework/API/customGeneralMenu/index',
      },
      {
        title: '获取小程序运行版本',
        titleEn: 'getRunScene',
        path: '/pages/framework/API/getRunScene/index',
      },
      {
        title: '隐藏返回首页图标',
        titleEn: 'hideBackHome ',
        path: '/pages/framework/API/hideBackHome/index',
      },
    ],
  },
  {
    title: '设备',
    titleEn: 'device',
    list: [
      {
        title: 'canIUse',
        titleEn: 'canIUse',
        path: '/pages/framework/API/canIUse/index',
      },
      {
        title: '获取手机网络状态',
        titleEn: 'getNetworkType',
        path: '/pages/framework/API/getNetworkType/index',
      },
      {
        title: '获取手机系统信息',
        titleEn: 'getSystemInfo',
        path: '/pages/framework/API/getSystemInfo/index',
      },
      {
        title: '振动',
        titleEn: 'vibrate',
        path: '/pages/framework/API/vibrate/index',
      },
      {
        title: '剪贴板',
        titleEn: 'clipboard',
        path: '/pages/framework/API/clipboard/index',
      },
      {
        title: '打开小程序设置',
        titleEn: 'openSetting',
        path: '/pages/framework/API/openSetting/index',
      },
      {
        title: '获取用户的当前设置',
        titleEn: 'getSetting',
        path: '/pages/framework/API/getSetting/index',
      },
      {
        title: '权限引导',
        titleEn: 'showAuthGuide',
        path: '/pages/framework/API/showAuthGuide/index',
      },
      // my.ap
      {
        title: '获取基础版本库',
        titleEn: 'SDKVersion',
        path: '/pages/framework/API/SDKVersion/index',
      },
      {
        title: '屏幕亮度',
        titleEn: 'screen',
        path: '/pages/framework/API/screen/index',
      },
      {
        title: '摇一摇',
        titleEn: 'watchShake',
        path: '/pages/framework/API/watchShake/index',
      },
      {
        title: '拨打电话',
        titleEn: 'makePhoneCall',
        path: '/pages/framework/API/makePhoneCall/index',
      },
      {
        title: '用户截屏事件',
        titleEn: 'captureScreen',
        path: '/pages/framework/API/captureScreen/index',
      },
      {
        title: '获取服务器时间',
        titleEn: 'getServerTime',
        path: '/pages/framework/API/getServerTime/index',
      },
      {
        title: '内存不足告警',
        titleEn: 'memoryWarning',
        path: '/pages/framework/API/memoryWarning/index',
      },
      {
        title: '获取电量异步接口',
        titleEn: 'getBatteryInfo',
        path: '/pages/framework/API/getBatteryInfo__inner/index',
      },
      {
        title: '获取电量同步接口',
        titleEn: 'getBatteryInfoSync',
        path: '/pages/framework/API/getBatteryInfoSync__inner/index',
      },
      {
        title: '加速度计',
        titleEn: 'accelerometerChange',
        path: '/pages/framework/API/accelerometerChange/index',
      },
      {
        title: '陀螺仪',
        titleEn: 'gyroscopeChange',
        path: '/pages/framework/API/gyroscopeChange/index',
      },
      {
        title: '罗盘',
        titleEn: 'compassChange',
        path: '/pages/framework/API/compassChange/index',
      },
    ],
  },
  {
    title: '网络',
    titleEn: 'network',
    list: [
      {
        title: '发起HTTP请求',
        titleEn: 'request',
        path: '/pages/framework/API/request/index',
      },
      {
        title: '上传文件',
        titleEn: 'uploadFile',
        path: '/pages/framework/API/uploadFile/index',
      },
      {
        title: '下载文件',
        titleEn: 'downloadFile',
        path: '/pages/framework/API/downloadFile/index',
      },
      {
        title: 'Websocket',
        titleEn: 'websocket',
        path: '/pages/framework/API/websocket/index',
      },
    ],
  },
  {
    title: '媒体',
    titleEn: 'media',
    list: [
      {
        title: '图片',
        titleEn: 'image',
        path: '/pages/framework/API/image/index',
      },
      {
        title: '获取图片信息',
        titleEn: 'getImageInfo',
        path: '/pages/framework/API/getImageInfo/index',
      },
      {
        title: '压缩图片',
        titleEn: 'compressImage',
        path: '/pages/framework/API/compressImage/index',
      },
      {
        title: '前景音频播放',
        titleEn: 'createInnerAudioContext',
        path: '/pages/framework/API/createInnerAudioContext__inner/index',
      },
      {
        title: '背景音频管理器',
        titleEn: 'getBackgroundAudioManager',
        path: '/pages/framework/API/getBackgroundAudioManager__inner/index',
      },
    ],
  },
  {
    title: '位置',
    titleEn: 'location',
    list: [
      {
        title: '获取当前位置',
        titleEn: 'getLocation',
        path: '/pages/framework/API/getLocation/index',
      },
      {
        title: '使用原生地图查看位置',
        titleEn: 'openLocation',
        path: '/pages/framework/API/openLocation/index',
      },
      {
        title: '打开地图选择位置',
        titleEn: 'chooseLocation',
        path: '/pages/framework/API/chooseLocation/index',
      },
      {
        title: '持续定位',
        titleEn: 'startContinuousLocation',
        path: '/pages/framework/API/startContinuousLocation__inner/index',
      },
    ],
  },
  {
    title: '其他',
    titleEn: 'other',
    list: [
      {
        title: '缓存',
        titleEn: 'storage',
        path: '/pages/framework/API/storage/index',
      },
      {
        title: '扫码 Scan',
        titleEn: 'scanCode',
        path: '/pages/framework/API/scanCode/index',
      },
      {
        title: '自定义分享',
        titleEn: 'customShare',
        path: '/pages/framework/API/customShare/index',
      },
      // mp.ap
      {
        title: '文件',
        titleEn: 'file',
        path: '/pages/framework/API/file/index',
      },
      {
        title: '蓝牙',
        titleEn: 'bluetooth',
        path: '/pages/framework/API/bluetooth/index',
      },
      {
        title: 'iBeacon',
        titleEn: 'iBeacon',
        path: '/pages/framework/API/iBeacon/index',
      },
      {
        title: '数据安全',
        titleEn: 'rsa',
        path: '/pages/framework/API/rsa/index',
      },
      {
        title: '自定义分析',
        titleEn: 'reportAnalytics',
        path: '/pages/framework/API/reportAnalytics/index',
      },
      // my.canIUse('ocr')
      {
        title: 'OCR',
        titleEn: 'ocr',
        path: '/pages/framework/API/ocr__inner/index',
      },
      {
        title: '更新管理',
        titleEn: 'getUpdateManager',
        path: '/pages/framework/API/getUpdateManager/index',
      },
    ],
  },
]
console.log('输出对内API文档列表')
// @endif

// @if OUTPUT_ENV!='inner'
console.log('输出对外API文档列表')
// @endif
export const API_LIST = API.categories.reduce((res, item) => {
  res.push(...item.list)
  return res
}, [])

export default API
