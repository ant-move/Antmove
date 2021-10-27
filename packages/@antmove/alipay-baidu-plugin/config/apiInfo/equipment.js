const { createDescObj } = require('./utils')

/**
 * 设备相关
 */
module.exports = {
  canIUse: createDescObj(
    0,
    '判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持',
    'https://docs.alipay.com/mini/api/can-i-use',
    'https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-canIUse/',
    {
      msg: '完整支持',
            
    },
  ),

  SDKVersion: createDescObj(
    2,
    '客户端基础库版本',
    'https://docs.alipay.com/mini/api/sdk-version',
    'https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo',
    {
      msg: '请使用getSystemInfo',
    },
  ),
  getSystemInfo: createDescObj(
    1,
    '获取系统信息',
    'https://docs.alipay.com/mini/api/sdk-version',
    'https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfo/',
    {
      msg: '部分支持',
           
      returnValue: {
        props: {
          storage: {
            type: 1,
            desc: '设备磁盘容量',
          },
          currentBattery: {
            type: 1,
            desc: '当前电量百分比',
          },

        },
      },
    },
  ),
  getSystemInfoSync: createDescObj(
    1,
    '获取系统信息',
    'https://docs.alipay.com/mini/api/sdk-version',
    'https://smartprogram.baidu.com/docs/develop/api/device_sys/#swan-getSystemInfoSync/',
    {
      msg: '部分支持',
      returnValue: {
        props: {
          storage: {
            type: 1,
            desc: '设备磁盘容量',
          },
          currentBattery: {
            type: 1,
            desc: '当前电量百分比',
          },

        },
      },
    },
  ),
  getNetworkType: createDescObj(
    1,
    '获取系统信息',
    'https://docs.alipay.com/mini/api/network-status',
    'https://smartprogram.baidu.com/docs/develop/api/device_network/#swan-getNetworkType/',
    {
      msg: '部分支持',
    },
  ),
  onNetworkStatusChange: createDescObj(
    0,
    '开始监听网络状态变化',
    'https://docs.alipay.com/mini/api/ympi0l',
    'https://smartprogram.baidu.com/docs/develop/api/device_network/#swan-onNetworkStatusChange/',
    {
      msg: '完整支持',
    },
  ),
  offNetworkStatusChange: createDescObj(
    2,
    '取消监听网络状态变化',
    'https://docs.alipay.com/mini/api/gxpg1w',
    '',
    {
      msg: '不支持',
    },
  ),
  getClipboard: createDescObj(
    0,
    '获取剪贴板数据',
    'https://docs.alipay.com/mini/api/clipboard',
    'https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#swan-getClipboardData/',
    {
      msg: '完整支持',
    },
  ),
  setClipboardData: createDescObj(
    0,
    '获取剪贴板数据',
    'https://docs.alipay.com/mini/api/klbkbp',
    'https://smartprogram.baidu.com/docs/develop/api/device_clipboard/#swan-setClipboardData/',
    {
      msg: '完整支持',
    },
  ),
  vibrateLong: createDescObj(
    0,
    '使手机发生较长时间的振动（400ms）',
    'https://docs.alipay.com/mini/api/ucm2he',
    'https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#swan-vibrateLong/',
    {
      msg: '完整支持',
    },
  ),
  watchShake: createDescObj(
    2,
    '摇一摇功能',
    'https://docs.alipay.com/mini/api/shake',
    '',
    {
      msg: '不支持',
    },
  ),
  vibrate: createDescObj(
    2,
    '调用振动功能',
    'https://docs.alipay.com/mini/api/vibrate',
    '',
    {
      msg: '不支持',
    },
  ),
  vibrateShort: createDescObj(
    1,
    '使手机发生较短时间的振动',
    'https://docs.alipay.com/mini/api/ad6c10',
    'https://smartprogram.baidu.com/docs/develop/api/device_vibrate/#swan-vibrateShort',
    {
      msg: '震动15ms，仅在iPhone7/7 Plus以上及Android机型生效',
    },
  ),
  onAccelerometerChange: createDescObj(
    0,
    '监听加速度数据',
    'https://docs.alipay.com/mini/api/accelerometer',
    'https://smartprogram.baidu.com/docs/develop/api/device_accelerometer/#swan-onAccelerometerChange/',
    {
      msg: '完整支持',
    },
  ),
  offAccelerometerChange: createDescObj(
    2,
    '停止监听加速度数据',
    'https://docs.alipay.com/mini/api/kape7p',
    '',
    {
      msg: '不支持',
    },
  ),
  onGyroscopeChange: createDescObj(
    2,
    '监听陀螺仪数据变化事件',
    'https://docs.alipay.com/mini/api/gyroscope',
    '',
    {
      msg: '不支持',
    },
  ),
  offGyroscopeChange: createDescObj(
    2,
    '停止监听陀螺仪数据',
    'https://docs.alipay.com/mini/api/gyroscope',
    '',
    {
      msg: '不支持',
    },
  ),
  onCompassChange: createDescObj(
    0,
    '监听罗盘数据变化事件',
    'https://docs.alipay.com/mini/api/compass',
    'https://smartprogram.baidu.com/docs/develop/api/device_compass/#swan-onCompassChange/',
    {
      msg: '完整支持',
    },
  ),
  offCompassChange: createDescObj(
    2,
    '停止监听罗盘数据',
    'https://docs.alipay.com/mini/api/xf671t',
    '',
    {
      msg: '不支持',
    },
  ),
  makePhoneCall: createDescObj(
    0,
    '拨打电话',
    'https://docs.alipay.com/mini/api/macke-call',
    'https://smartprogram.baidu.com/docs/develop/api/device_call/#swan-makePhoneCall/',
    {
      msg: '完整支持',
    },
  ),
  getServerTime: createDescObj(
    2,
    '获取当前服务器时间的毫秒数',
    'https://docs.alipay.com/mini/api/get-server-time',
    '',
    {
      msg: '不支持',
    },
  ),
  onUserCaptureScreen: createDescObj(
    0,
    '监听用户发起的主动截屏事件',
    'https://docs.alipay.com/mini/api/compass',
    'https://smartprogram.baidu.com/docs/develop/api/device_capture/#swan-onUserCaptureScreen/',
    {
      msg: '完整支持',
    },
  ),
  offUserCaptureScreen: createDescObj(
    2,
    '取消监听截屏事件',
    'https://docs.alipay.com/mini/api/umdxbg',
    '',
    {
      msg: '不支持',
    },
  ),
  getScreenBrightness: createDescObj(
    0,
    '获取屏幕亮度',
    'https://docs.alipay.com/mini/api/screen-brightness',
    'https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-getScreenBrightness/',
    {
      msg: '完整支持',
    },
  ),
  setScreenBrightness: createDescObj(
    0,
    '设置屏幕亮度',
    'https://docs.alipay.com/mini/api/ccf32t',
    'https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-setScreenBrightness/',
    {
      msg: '完整支持',
    },
  ),
  setKeepScreenOn: createDescObj(
    0,
    '设置屏幕亮度',
    'https://docs.alipay.com/mini/api/ccf32t',
    'https://smartprogram.baidu.com/docs/develop/api/device_screen/#swan-setKeepScreenOn/',
    {
      msg: '完整支持',
    },
  ),
  getSetting: createDescObj(
    0,
    '获取用户的当前设置',
    'https://docs.alipay.com/mini/api/xmk3ml',
    'https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-getSetting/',
    {
      msg: '完整支持',
    },
  ),
  openSetting: createDescObj(
    0,
    '打开小程序设置界面',
    'https://docs.alipay.com/mini/api/qflu8f',
    'https://smartprogram.baidu.com/docs/develop/api/open_setting/#swan-openSetting/',
    {
      msg: '完整支持',
    },
  ),
  addPhoneContact: createDescObj(
    1,
    '用户可以选择将该表单以“创建新联系人”或“添加到现有联系人”的方式，写入到手机系统的通讯录',
    'https://docs.alipay.com/mini/api/umdxbg',
    'https://smartprogram.baidu.com/docs/develop/api/device_phonecontact/#swan-addPhoneContact/',
    {
      msg: '部分支持',
      params: {
        props: {
          alipayAccount: {
            type: 1,
            desc: '支付宝账号',
          },
        },
      },
    },
  ),
  showAuthGuide: createDescObj(
    2,
    '通过权限引导',
    'https://docs.alipay.com/mini/api/show-auth-guide',
    '',
    {
      msg: '不支持',
    },
  ),
  scan: createDescObj(
    1,
    '调用扫一扫功能',
    'https://docs.alipay.com/mini/api/scan',
    'http://smartprogram.baidu.com/docs/develop/api/device_scan/#swan-scanCode/',
    {
      msg: '仅支持二维码',
      params: {
        props: {
          type: {
            type: 0,
            desc: '扫码样式',
          },
          hideAlbum: {
            type: 0,
            desc: '是否隐藏相册',
          },
        },
      },
      returnValue: {
        props: {
          barCode: {
            type: 0,
            desc: '扫描条形码时返回条形码数据',
          },
        },
      },
    },
  ),
  onMemoryWarning: createDescObj(
    0,
    '开始监听内存不足的告警事件',
    'https://docs.alipay.com/mini/api/rb9o8p',
    'https://smartprogram.baidu.com/docs/develop/api/device_onmemory/#swan-onMemoryWarning/',
    {
      msg: '完整支持',
    },
  ),
  offMemoryWarning: createDescObj(
    2,
    '停止监听内存不足的告警事件',
    'https://docs.alipay.com/mini/api/hszexr',
    '',
    {
      msg: '不支持',
    },
  ),
  getBatteryInfo: createDescObj(
    0,
    '开始监听内存不足的告警事件',
    'https://docs.alipay.com/mini/api/nrnziy',
    'https://smartprogram.baidu.com/docs/develop/api/device_battery/#swan-getBatteryInfo/',
    {
      msg: '完整支持',
    },
  ),
  getBatteryInfoSync: createDescObj(
    1,
    '获取电量的同步接口',
    'https://docs.alipay.com/mini/api/vf7vn3',
    'http://smartprogram.baidu.com/docs/develop/api/device_battery/#swan-getBatteryInfoSync',
    {
      msg: 'ios系统不可用',
    },
  ),
  connectBLEDevice: createDescObj(
    2,
    '连接低功耗蓝牙设备',
    'https://docs.alipay.com/mini/api/tmew6e',
    '',
    {
      msg: '不支持',
    },
  ),
  disconnectBLEDevice: createDescObj(
    2,
    '断开与低功耗蓝牙设备的连接',
    'https://docs.alipay.com/mini/api/yqrmmk',
    '',
    {
      msg: '不支持',
    },
  ),
  getBLEDeviceCharacteristics: createDescObj(
    2,
    '获取蓝牙设备所有 characteristic',
    'https://docs.alipay.com/mini/api/fmg9gg',
    '',
    {
      msg: '不支持',
    },
  ),
  getBLEDeviceServices: createDescObj(
    2,
    '获取蓝牙设备所有 service',
    'https://docs.alipay.com/mini/api/uzsg75',
    '',
    {
      msg: '不支持',
    },
  ),
  notifyBLECharacteristicValueChange: createDescObj(
    2,
    '启用低功耗蓝牙设备特征值变化时的 notify 功能',
    'https://docs.alipay.com/mini/api/pdzk44',
    '',
    {
      msg: '不支持',
    },
  ),
  offBLECharacteristicValueChange: createDescObj(
    2,
    '监听低功耗蓝牙设备的特征值变化的事件',
    'https://docs.alipay.com/mini/api/dlxobk',
    '',
    {
      msg: '不支持',
    },
  ),
  offBLEConnectionStateChanged: createDescObj(
    2,
    '取消低功耗蓝牙连接状态变化事件的监听',
    'https://docs.alipay.com/mini/api/xfuy7k',
    '',
    {
      msg: '不支持',
    },
  ),
  onBLECharacteristicValueChange: createDescObj(
    2,
    '监听低功耗蓝牙设备的特征值变化的事件',
    'https://docs.alipay.com/mini/api/cdu501',
    '',
    {
      msg: '不支持',
    },
  ),
  onBLEConnectionStateChanged: createDescObj(
    2,
    '监听低功耗蓝牙连接的错误事件',
    'https://docs.alipay.com/mini/api/utgyiu',
    '',
    {
      msg: '不支持',
    },
  ),
  readBLECharacteristicValue: createDescObj(
    2,
    '读取低功耗蓝牙设备特征值中的数据',
    'https://docs.alipay.com/mini/api/zro0ka',
    '',
    {
      msg: '不支持',
    },
  ),
  writeBLECharacteristicValue: createDescObj(
    2,
    '向低功耗蓝牙设备特征值中写入数据',
    'https://docs.alipay.com/mini/api/vmp2r4',
    '',
    {
      msg: '不支持',
    },
  ),
  closeBluetoothAdapter: createDescObj(
    2,
    '关闭本机蓝牙模块',
    'https://docs.alipay.com/mini/api/wvko0w',
    '',
    {
      msg: '不支持',
    },
  ),
  getBluetoothAdapterState: createDescObj(
    2,
    '获取本机蓝牙模块状态',
    'https://docs.alipay.com/mini/api/eid4o6',
    '',
    {
      msg: '不支持',
    },
  ),
  getBluetoothDevices: createDescObj(
    2,
    '获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备',
    'https://docs.alipay.com/mini/api/pelizr',
    '',
    {
      msg: '不支持',
    },
  ),
  getConnectedBluetoothDevices: createDescObj(
    2,
    '获取处于已连接状态的设备',
    'https://docs.alipay.com/mini/api/ge8nue',
    '',
    {
      msg: '不支持',
    },
  ),
  offBluetoothAdapterStateChange: createDescObj(
    2,
    '移除本机蓝牙状态变化的事件的监听',
    'https://docs.alipay.com/mini/api/ocgwfe',
    '',
    {
      msg: '不支持',
    },
  ),
  offBluetoothDeviceFound: createDescObj(
    2,
    '移除寻找到新的蓝牙设备事件的监听',
    'https://docs.alipay.com/mini/api/snw2t7',
    '',
    {
      msg: '不支持',
    },
  ),
  onBluetoothDeviceFound: createDescObj(
    2,
    '搜索到新的蓝牙设备时触发此事件',
    'https://docs.alipay.com/mini/api/mhzls9',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  onBluetoothAdapterStateChange: createDescObj(
    2,
    '监听本机蓝牙状态变化的事件',
    'https://docs.alipay.com/mini/api/eegfbk',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  openBluetoothAdapter: createDescObj(
    2,
    '初始化小程序蓝牙模块',
    'https://docs.alipay.com/mini/api/kunuy4',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  startBluetoothDevicesDiscovery: createDescObj(
    2,
    '开始搜寻附近的蓝牙外围设备',
    'https://docs.alipay.com/mini/api/ksew43',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  stopBluetoothDevicesDiscovery: createDescObj(
    2,
    '停止搜寻附近的蓝牙外围设备',
    'https://docs.alipay.com/mini/api/syb4mi',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  getBeacons: createDescObj(
    2,
    '获取已经搜索到的 iBeacon 设备',
    'https://docs.alipay.com/mini/api/yqleyc',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  onBeaconServiceChange: createDescObj(
    2,
    '监听 iBeacon 服务的状态变化',
    'https://docs.alipay.com/mini/api/rq1dl7',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  onBeaconUpdate: createDescObj(
    2,
    '监听 iBeacon 设备的更新事件',
    'https://docs.alipay.com/mini/api/kvdg9y',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  startBeaconDiscovery: createDescObj(
    2,
    '开始搜索附近的 iBeacon 设备',
    'https://docs.alipay.com/mini/api/cy1g7k',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
  stopBeaconDiscovery: createDescObj(
    2,
    '停止搜索附近的 iBeacon 设备',
    'https://docs.alipay.com/mini/api/yp5owa',
    '',
    {
      msg: '不支持',
      params: {
        props: {
                    
        },
      },
      returnValue: {
        props: {
                    
        },
      },
    },
  ),
    
   
}
