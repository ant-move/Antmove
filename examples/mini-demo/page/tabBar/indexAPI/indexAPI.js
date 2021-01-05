import { filterPage } from '../../../util/debounce';
let openAPIList =
[
  {
    scopes: ['getAuthCode'],
    name: '获取授权码',
    path: '/page/API/get-auth-code/get-auth-code'
  },
  {
    scopes: ['createWebViewContext'],
    name: 'webview组件控制',
    path: '/page/API/web-view/web-view'
  },
  {
    scopes: ['startAPVerify'],
    name: '支付宝开放认证',
    path: '/page/API/start-ap-verify/start-ap-verify'
  },
  {
    scopes: ['getPhoneNumber'],
    name: '获取手机号',
    path: '/page/API/get-phone-number/get-phone-number'
  },
  {
    scopes: ['showActionSheet'],
    name: 'mtop',
    path: '/page/API/mtop/mtop'
  },
  {
    scopes: ['paySignCenter'],
    name: '支付宝代扣',
    path: '/page/API/pay-sign-center/pay-sign-center'
  },
  {
    scopes: ['tradePay'],
    name: '发起支付',
    path: '/page/API/request-payment/request-payment'
  },
  {
    scopes: ['view'],
    name: '通过图片获取行驶证信息',
    path: '/page/API/get-card-info/get-card-info'
  },
  {
    scopes: ['view'],
    name: '根据autocode获取userid',
    path: '/page/API/get-userid/get-userid'
  },
  {
    scopes: ['view'],
    name: '验签加解密',
    path: '/page/API/check-decrypt/check-decrypt'
  },
  {
    scopes: ['call'],
    name: 'rpc',
    path: '/page/API/rpc/rpc'
  },
  {
    scopes: ['textRiskIdentification'],
    name: '文本风险识别',
    path: '/page/API/text-risk-identification/text-risk-identification'
  },
  {
    scopes: ['getAuthUserInfo', 'getSystemInfoSync'],
    name: '获取用户信息',
    path: '/page/API/get-user-info/get-user-info'
  }
];

let ability = [
  {
    scopes: ['getExtConfigSync'],
    name: 'ext-config-sync',
    path: '/page/API/ext-config-sync/ext-config-sync'
  },
  {
    scopes: ['call'],
    name: '在浏览器中打开',
    path: '/page/API/open-in-browser/open-in-browser'
  },
  {
    scopes: ['call'],
    name: '在高德中导航',
    path: '/page/API/open-amap-navi/open-amap-navi'
  },
  {
    scopes: ['call'],
    name: '高德中打开url',
    path: '/page/API/amap-open-url/amap-open-url'
  },
  {
    scopes: ['showToast', 'scan'],
    name: 'startApp',
    path: '/page/API/start-app/start-app'
  }
];
let interfaceList = [
  {
    scopes: ['showActionSheet'],
    name: '操作菜单',
    path: '/page/API/action-sheet/action-sheet'
  },
  {
    scopes: ['alert'],
    name: '警告框',
    path: '/page/API/alert/alert'
  },
  {
    scopes: ['prompt'],
    name: 'prompt',
    path: '/page/API/prompt/prompt'
  },
  {
    scopes: ['confirm'],
    name: '确认框',
    path: '/page/API/confirm/confirm'
  },
  {
    scopes: ['showToast'],
    name: '弱提示',
    path: '/page/API/toast/toast'
  },
  {
    scopes: ['showLoading'],
    name: '加载提示',
    path: '/page/API/loading/loading'
  },
  {
    scopes: ['stopPullDownRefresh'],
    name: '下拉刷新',
    path: '/page/API/pull-down-refresh/pull-down-refresh'
  },
  {
    scopes: ['createAnimation'],
    name: '创建动画',
    path: '/page/API/animation/animation'
  },
  {
    scopes: ['datePicker'],
    name: '选择日期',
    path: '/page/API/date-picker/date-picker'
  },
  {
    scopes: ['pageScrollTo'],
    name: '滚动页面',
    path: '/page/API/page-scroll-to/page-scroll-to'
  },
  {
    scopes: ['createSelectorQuery'],
    name: '节点查询',
    path: '/page/API/create-selector-query/create-selector-query'
  },
  {
    scopes: ['chooseCity'],
    name: '选择城市',
    path: '/page/API/choose-city/choose-city'
  },
  {
    scopes: ['hideKeyboard'],
    name: '隐藏键盘',
    path: '/page/API/keyboard/keyboard'
  },
  {
    scopes: ['hideAddToDesktopMenu', 'hideAllAddToDesktopMenu', 'hideFavoriteMenu', 'hideAllFavoriteMenu', 'setCustomPopMenu'],
    name: '设置optionMenu',
    path: '/page/API/option-menu/option-menu'
  },
  {
    scopes: ['setNavigationBar', 'setTransparentTitle'],
    name: '设置界面导航栏',
    path: '/page/API/set-navigation-bar/set-navigation-bar'
  },
  {
    scopes: ['navigateTo', 'navigateBack', 'redirectTo', 'switchTab'],
    name: '页面跳转',
    path: '/page/API/navigator/navigator'
  },
  {
    scopes: ['hideNavigationBarLoading', 'showNavigationBarLoading'],
    name: '标题栏加载动画',
    path: '/page/API/navigation-bar-loading/navigation-bar-loading'
  },
  {
    scopes: ['navigateBackMiniProgram', 'navigateToMiniProgram'],
    name: '跳转到其他小程序',
    path: '/page/API/navigate-to-miniprogram/navigate-to-miniprogram'
  },
  {
    scopes: ['createCanvasContext', 'previewImage'],
    name: '创建绘画',
    path: '/page/API/canvas/canvas'
  },
  {
    scopes: ['addPhoneContact', 'choosePhoneContact', 'chooseAlipayContact', 'chooseContact'],
    name: '联系人',
    path: '/page/API/contact/contact'
  },
  {
    scopes: ['multiLevelSelect'],
    name: '级联选择',
    path: '/page/API/multi-level-select/multi-level-select'
  },
  {
    scopes: ['optionsSelect'],
    name: '选项选择器',
    path: '/page/API/options-select/options-select'
  },
  {
    scopes: ['getTitleColor'],
    name: '获取导航栏背景颜色',
    path: '/page/API/get-title-color/get-title-color'
  }
];

let deviceAPIList = [
  {
    scopes: ['openSetting'],
    name: '设置',
    path: '/page/API/open-setting/open-setting'
  },
  {
    scopes: ['getNetworkType', 'onNetworkStatusChange', 'offNetworkStatusChange'],
    name: '获取手机网络状态',
    path: '/page/API/get-network-type/get-network-type'
  },
  {
    scopes: ['getSystemInfo'],
    name: '获取手机系统信息',
    path: '/page/API/get-system-info/get-system-info'
  },
  {
    scopes: ['showAuthGuide'],
    name: 'showAuthGuide',
    path: '/page/API/show-auth-guide/show-auth-guide'
  },
  {
    scopes: ['vibrate'],
    name: '振动',
    path: '/page/API/vibrate/vibrate'
  },
  {
    scopes: ['setClipboard'],
    name: '剪贴板',
    path: '/page/API/clipboard/clipboard'
  },
  {
    scopes: ['makePhoneCall'],
    name: '拨打电话',
    path: '/page/API/make-phone-call/make-phone-call'
  },
  {
    scopes: ['view'],
    name: '获取基础版本库',
    path: '/page/API/sdk-version/sdk-version'
  },
  {
    scopes: ['getScreenBrightness'],
    name: '屏幕亮度',
    path: '/page/API/screen/screen'
  },
  {
    scopes: ['watchShake'],
    name: '摇一摇',
    path: '/page/API/watch-shake/watch-shake'
  },
  {
    scopes: ['onUserCaptureScreen', 'offUserCaptureScreen'],
    name: '用户截屏事件',
    path: '/page/API/user-capture-screen/user-capture-screen'
  },
  {
    scopes: ['watchShake'],
    name: '摇一摇',
    path: '/page/API/watch-shake/watch-shake'
  },
  {
    scopes: ['watchShake'],
    name: '摇一摇',
    path: '/page/API/watch-shake/watch-shake'
  },
  {
    scopes: ['getServerTime'],
    name: '获取服务器时间',
    path: '/page/API/get-server-time/get-server-time'
  },
  {
    scopes: ['onMemoryWarning'],
    name: '内存不足告警',
    path: '/page/API/memory-warning/memory-warning'
  }
];

const networkAPIList = [
  {
    scopes: ['httpRequest'],
    name: '发起HTTP请求',
    path: '/page/API/request/request'
  },
  {
    scopes: ['uploadFile'],
    name: '上传文件',
    path: '/page/API/upload-file/upload-file'
  },
  {
    scopes: ['downloadFile'],
    name: '下载文件',
    path: '/page/API/download-file/download-file'
  },
  {
    scopes: ['closeSocket', 'sendSocketMessage', 'connectSocket', 'onSocketClose', 'onSocketOpen', 'onSocketError', 'onSocketMessage'],
    name: 'Websocket',
    path: '/page/API/websocket/websocket'
  }
];

const mediaAPIList = [
  {
    scopes: ['saveImage', 'previewImage', 'chooseImage'],
    name: '图片',
    path: '/page/API/image/image'
  },
  {
    scopes: ['getImageInfo'],
    name: '获取图片信息',
    path: '/page/API/get-image-info/get-image-info'
  },
  {
    scopes: ['compressImage'],
    name: '压缩图片',
    path: '/page/API/compress-image/compress-image'
  },
  {
    scopes: ['createInnerAudioContext'],
    name: '前景音乐',
    path: '/page/API/create-inner-audiocontext/create-inner-audiocontext'
  },
  {
    scopes: ['getBackgroundAudioManager'],
    name: '背景音乐',
    path: '/page/API/get-background-audio-manager/get-background-audio-manager'
  }
];

const locationAPIList = [
  {
    scopes: ['getLocation'],
    name: '获取当前位置',
    path: '/page/API/get-location/get-location'
  },
  {
    scopes: ['openLocation'],
    name: '使用原生地图查看位置',
    path: '/page/API/open-location/open-location'
  },
  {
    scopes: ['chooseLocation'],
    name: '打开地图选择位置',
    path: '/page/API/choose-location/choose-location'
  }
];

let otherAPIList = [
  {
    scopes: ['getStorageInfoSync', 'clearStorageSync', 'removeStorageSync', 'getStorageSync', 'setStorageSync', 'getStorageInfo', 'clearStorage', 'removeStorage', 'getStorage', 'setStorage'],
    name: '缓存',
    path: '/page/API/storage/storage'
  },
  {
    scopes: ['scan'],
    name: '扫码 Scan',
    path: '/page/API/scan-code/scan-code'
  },
  {
    scopes: ['view'],
    name: '自定义分享',
    path: '/page/API/share/share'
  },
  {
    scopes: ['removeSavedFile', 'getSavedFileList', 'getSavedFileInfo', 'getFileInfo', 'saveFile'],
    name: '文件',
    path: '/page/API/file/file'
  },
  {
    scopes: ['openBluetoothAdapter', 'closeBluetoothAdapter', 'getBluetoothAdapterState', 'startBluetoothDevicesDiscovery', 'getBluetoothDevices', 'getConnectedBluetoothDevices', 'stopBluetoothDevicesDiscovery', 'connectBLEDevice', 'getBLEDeviceServices', 'getBLEDeviceCharacteristics', 'disconnectBLEDevice', 'notifyBLECharacteristicValueChange', 'readBLECharacteristicValue', 'writeBLECharacteristicValue', 'offBLECharacteristicValueChange', 'bluetoothAdapterStateChange', 'offBluetoothAdapterStateChange', 'BLEConnectionStateChanged', 'offBLEConnectionStateChanged', 'stopBeaconDiscovery', 'getBeacons', 'onBeaconUpdate', 'onBeaconServiceChange'],
    name: '蓝牙',
    path: '/page/API/bluetooth/bluetooth'
  },
  {
    scopes: ['rsa'],
    name: '数据安全',
    path: '/page/API/rsa/rsa'
  },
  {
    scopes: ['reportAnalytics'],
    name: '自定义分析',
    path: '/page/API/report-analytics/report-analytics'
  },
  {
    scopes: ['on'],
    name: '容器事件',
    path: '/page/API/events/events'
  },
  {
    scopes: ['view'],
    name: 'OCR',
    path: '/page/API/ocr/ocr'
  }
];

const APIList = [
  {
    type: '内部能力',
    list: filterPage(ability)
  },
  {
    type: '开放接口',
    list: filterPage(openAPIList)
  },
  {
    type: '界面',
    list: filterPage(interfaceList)
  },
  {
    type: '设备',
    list: filterPage(deviceAPIList)
  },
  {
    type: '网络',
    list: filterPage(networkAPIList)
  },
  {
    type: '多媒体',
    list: filterPage(mediaAPIList)
  },
  {
    type: '位置',
    list: filterPage(locationAPIList)
  },
  {
    type: '其他',
    list: filterPage(otherAPIList)
  }
];
Page({
  data: {
    headline: 'AMAP API',
    subtitle: '包含AMAP小程序支持的所有jsapi，具体用法可以查看文档及demo代码示例',
    active: 1,
    APIList
  },
  onLoad() {},
  Change(e) {
    this.setData({
      active: e.target.dataset.index
    });
  }
});
