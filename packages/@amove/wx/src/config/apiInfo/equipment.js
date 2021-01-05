const { createDescObj } = require('./utils')

/**
 * 设备相关
 */
module.exports = {
  // iBeacon
  stopBeaconDiscovery: createDescObj(
    0,
    '停止搜索附近的 iBeacon 设备',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html',
    'https://docs.alipay.com/mini/api/yp5owa',
  ),
  startBeaconDiscovery: createDescObj(
    1,
    '开始搜索附近的 iBeacon 设备',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html',
    'https://docs.alipay.com/mini/api/cy1g7k',
    {
      msg: '参数缺失',
      params: {
        props: {
          ignoreBluetoothAvailable: {
            type: 0,
            desc: '是否校验蓝牙开关，仅在 iOS 下有效',
          },
        },
      },
    },
  ),
  onBeaconUpdate: createDescObj(
    0,
    '监听 iBeacon 设备更新事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html',
    'https://docs.alipay.com/mini/api/kvdg9y',
    {
      msg: '封装后完全支持',
    },
  ),
  onBeaconServiceChange: createDescObj(
    1,
    '监听 iBeacon 服务状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html',
    'https://docs.alipay.com/mini/api/rq1dl7',
    {
      msg: '参数类型不同，wx: Function , alipay: Object',
    },
  ),
  getBeacons: createDescObj(
    0,
    '获取所有已搜索到的 iBeacon 设备',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html',
    'https://docs.alipay.com/mini/api/yqleyc',
  ),
  // WiFi
  stopWifi: createDescObj(
    2,
    '关闭 Wi-Fi 模块',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html',
    '',
  ),
  startWifi: createDescObj(
    2,
    '初始化 Wi-Fi 模块',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html',
    '',
  ),
  setWifiList: createDescObj(
    2,
    '设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html',
    '',
  ),
  onWifiConnected: createDescObj(
    2,
    '监听连接上 Wi-Fi 的事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html',
    '',
  ),
  onGetWifiList: createDescObj(
    2,
    '监听获取到 Wi-Fi 列表数据事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html',
    '',
  ),
  getWifiList: createDescObj(
    2,
    '监听连接上 Wi-Fi 的事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html',
    '',
  ),
  getConnectedWifi: createDescObj(
    2,
    '监听连接上 Wi-Fi 的事件。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html',
    '',
  ),
  connectWifi: createDescObj(
    2,
    '连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html',
    '',
  ),
  // 低功耗蓝牙
  writeBLECharacteristicValue: createDescObj(
    0,
    '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html',
    'https://docs.alipay.com/mini/api/vmp2r4',
    {
      msg: '封装后完全支持',
    },
  ),
  readBLECharacteristicValue: createDescObj(
    0,
    '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html',
    'https://docs.alipay.com/mini/api/zro0ka',
  ),
  onBLEConnectionStateChange: createDescObj(
    0,
    '监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html',
    'https://docs.alipay.com/mini/api/utgyiu',
    {
      msg: '封装后完全支持',
    },
  ),
  onBLECharacteristicValueChange: createDescObj(
    0,
    '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
    'https://docs.alipay.com/mini/api/cdu501',
    {
      msg: '封装后完全支持',
    },
  ),
  notifyBLECharacteristicValueChange: createDescObj(
    1,
    '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
    'https://docs.alipay.com/mini/api/pdzk44',
    {
      msg: 'wx中state为必填参数',
    },
  ),
  getBLEDeviceServices: createDescObj(
    0,
    '获取蓝牙设备所有服务(service)',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html',
    'https://docs.alipay.com/mini/api/uzsg75',
    {
      msg: '封装后完全支持',
    },
  ),
  getBLEDeviceCharacteristics: createDescObj(
    0,
    '获取蓝牙设备某个服务中所有特征值(characteristic)。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html',
    'https://docs.alipay.com/mini/api/fmg9gg',
    {
      msg: '封装后完全支持',
    },
  ),
  createBLEConnection: createDescObj(
    2,
    '连接低功耗蓝牙设备。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html',
    '',
  ),
  closeBLEConnection: createDescObj(
    2,
    '断开与低功耗蓝牙设备的连接。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html',
    '',
  ),
  // 联系人
  addPhoneContact: createDescObj(
    0,
    '添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html',
    'https://docs.alipay.com/mini/api/contact',
    {
      msg: '参数名不同',
    },
  ),
  // 蓝牙
  stopBluetoothDevicesDiscovery: createDescObj(
    0,
    '停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html',
    'https://docs.alipay.com/mini/api/syb4mi',
  ),
  startBluetoothDevicesDiscovery: createDescObj(
    0,
    '开始搜寻附近的蓝牙外围设备',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html',
    'https://docs.alipay.com/mini/api/ksew43',
    {
      msg: '封装后完全支持',
    },
  ),
  openBluetoothAdapter: createDescObj(
    0,
    '初始化蓝牙模块',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html',
    'https://docs.alipay.com/mini/api/kunuy4',
    {
      msg: '封装后完全支持',
    },
  ),
  onBluetoothDeviceFound: createDescObj(
    1,
    '监听寻找到新设备的事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html',
    'https://docs.alipay.com/mini/api/mhzls9',
    {
      msg: '参数类型不同, 返回值缺失',
      params: {
        props: {
          advertisData: {
            type: 3,
            desc: '当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。wx: ArrayBuffer, alipay: Hex String',
          },
        },
      },
      returnValue: {
        props: {
          advertisServiceUUIDs: {
            type: 0,
            desc: '当前蓝牙设备的广播数据段中的ServiceUUIDs 数据段',
          },
          serviceData: {
            type: 0,
            desc: '当前蓝牙设备的广播数据段中的 ServiceData 数据段',
          },
        },
      },
    },
  ),
  onBluetoothAdapterStateChange: createDescObj(
    0,
    '监听蓝牙适配器状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html',
    'https://docs.alipay.com/mini/api/eegfbk',
  ),
  getConnectedBluetoothDevices: createDescObj(
    1,
    '根据 uuid 获取处于已连接状态的设备。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html',
    'https://docs.alipay.com/mini/api/ge8nue',
    {
      msg: '参数名差异',
      params: {
        props: {
          services: {
            type: 1,
            desc: '蓝牙设备主 service 的 uuid 列表, wx: services, alipay: deviceId',
          },
        },
      },
    },
  ),
  getBluetoothDevices: createDescObj(
    1,
    '获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html',
    'https://docs.alipay.com/mini/api/pelizr',
    {
      msg: '返回值属性类型差异/缺失',
      returnValue: {
        props: {
          advertisData: {
            type: 3,
            desc: '设备的广播内容, wx: ArrayBuffer, alipay: Hex String',
          },
          advertisServiceUUIDs: {
            type: 0,
            desc: '当前蓝牙设备的广播数据段中的ServiceUUIDs 数据段',
          },
          serviceData: {
            type: 0,
            desc: '当前蓝牙设备的广播数据段中的 ServiceData 数据段',
          },
        },
      },
    },
  ),
  getBluetoothAdapterState: createDescObj(
    0,
    '获取本机蓝牙适配器状态。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html',
    'https://docs.alipay.com/mini/api/eid4o6',
  ),
  closeBluetoothAdapter: createDescObj(
    0,
    '关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html',
    'https://docs.alipay.com/mini/api/wvko0w',
  ),
  // 电量
  getBatteryInfoSync: createDescObj(
    2,
    'wx.getBatteryInfo 的同步版本',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html',
    '',
  ),
  getBatteryInfo: createDescObj(
    2,
    '获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html',
    '',
  ),
  // NFC
  stopHCE: createDescObj(
    2,
    '关闭 NFC 模块。仅在安卓系统下有效。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html',
    '',
  ),
  startHCE: createDescObj(
    2,
    '初始化 NFC 模块。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html',
    '',
  ),
  sendHCEMessage: createDescObj(
    2,
    '发送 NFC 消息。仅在安卓系统下有效。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html',
    '',
  ),
  onHCEMessage: createDescObj(
    2,
    '监听接收 NFC 设备消息事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html',
    '',
  ),
  getHCEState: createDescObj(
    2,
    '判断当前设备是否支持 HCE 能力。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html',
    '',
  ),
  // 网络
  onNetworkStatusChange: createDescObj(
    0,
    '监听网络状态变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html',
    'https://docs.alipay.com/mini/api/ympi0l',
    {
      msg: '封装后完全支持',
    },
  ),
  getNetworkType: createDescObj(
    0,
    '获取网络类型',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html',
    'https://docs.alipay.com/mini/api/network-status#mygetnetworktype',
    {
      msg: '返回值属性差异',
      returnValue: {
        props: {
          networkType: {
            type: 1,
            desc: 'wx: wifi/2g/3g/4g/unknown/none, alipay: WIFI/2G/3G/4G/UNKNOWN/NOTREACHABLE',
          },
        },
      },
    },
  ),
  // 屏幕
  setScreenBrightness: createDescObj(
    0,
    '设置屏幕亮度',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html',
    'https://docs.alipay.com/mini/api/ccf32t',
    {
      msg: '封装后完全支持',
           
    },
  ),
  setKeepScreenOn: createDescObj(
    0,
    '设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html',
    'https://docs.alipay.com/mini/api/qx0sap',
  ),
  onUserCaptureScreen: createDescObj(
    0,
    '监听用户主动截屏事件。用户使用系统截屏按键截屏时触发',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html',
    'https://docs.alipay.com/mini/api/user-capture-screen',
  ),
  getScreenBrightness: createDescObj(
    0,
    '获取屏幕亮度',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html',
    'https://docs.alipay.com/mini/api/screen-brightness',
    {
      msg: '封装后完全支持',
    },
  ),
  makePhoneCall: createDescObj(
    1,
    '拨打电话',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html',
    'https://docs.alipay.com/mini/api/macke-call',
    {
      msg: '封装后不支持回调',
      params: {
        props: {
          success: {
            type: 0,
            desc: '接口调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '接口调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
    },
  ),
  // 加速器
  onAccelerometerChange: createDescObj(
    0,
    '监听加速度数据事件。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html',
    'https://docs.alipay.com/mini/api/accelerometer',
  ),
  startAccelerometer: createDescObj(
    2,
    '开始监听罗盘数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html',
    '',
  ),
  stopAccelerometer: createDescObj(
    1,
    '停止监听加速度数据。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html',
    'https://docs.alipay.com/mini/api/accelerometer',
    {
      msg: '名称不同wx: stopAccelerometer, alipay: offAccelerometerChange, 参数缺失',
      params: {
        props: {
          success: {
            type: 0,
            desc: '接口调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '接口调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
    },
  ),
  // 罗盘
  onCompassChange: createDescObj(
    1,
    '监听罗盘数据变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html',
    'https://docs.alipay.com/mini/api/compass#a-name5i0ewaamyoncompasschangefunction-callback',
    {
      msg: '返回值属性缺失',
      returnValue: {
        props: {
          accuracy: {
            type: 0,
            desc: '精度',
          },
        },
      },
    },
  ),
  startCompass: createDescObj(
    2,
    '开始监听罗盘数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html',
    '',
  ),
  stopCompass: createDescObj(
    1,
    '停止监听罗盘数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html',
    'https://docs.alipay.com/mini/api/xf671t',
    {
      msg: '命名不同wx: stopCompass, alipay: offCompassChange, 参数缺失',
      params: {
        props: {
          success: {
            type: 0,
            desc: '接口调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '接口调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
    },
  ),
  // 设备方向
  onDeviceMotionChange: createDescObj(
    2,
    '监听设备方向变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html',
    '',
  ),
  startDeviceMotionListening: createDescObj(
    2,
    '开始监听设备方向的变化',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html',
    '',
  ),
  stopDeviceMotionListening: createDescObj(
    2,
    '停止监听设备方向的变化',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html',
    '',
  ),
  // 陀螺仪
  onGyroscopeChange: createDescObj(
    0,
    '监听陀螺仪数据变化事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html',
    'https://docs.alipay.com/mini/api/gyroscope#a-namep1rwcgamyoffgyroscopechange',
  ),
  startGyroscope: createDescObj(
    2,
    '开始监听陀螺仪数据',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html',
    '',
  ),
  stopGyroscope: createDescObj(
    1,
    '停止监听陀螺仪数据。',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html',
    'https://docs.alipay.com/mini/api/cpt55i',
    {
      msg: '命名不同wx: stopGyroscope, alipay: offGyroscopeChange, 参数缺失',
      params: {
        props: {
          success: {
            type: 0,
            desc: '接口调用成功的回调函数',
          },
          fail: {
            type: 0,
            desc: '接口调用失败的回调函数',
          },
          complete: {
            type: 0,
            desc: '接口调用结束的回调函数（调用成功、失败都会执行）',
          },
        },
      },
    },
  ),
  // 性能
  onMemoryWarning: createDescObj(
    2,
    '监听内存不足告警事件',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html',
    '',
  ),
  // 扫码
  scanCode: createDescObj(
    1,
    '调起客户端扫码界面进行扫码',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html',
    'https://docs.alipay.com/mini/api/scan',
    {
      msg: ' 参数差异, 返回值差异/缺失',
      params: {
        props: {
          onlyFromCamera: {
            type: 1,
            desc: '是否只能从相机扫码，不允许从相册选择图片, wx: onlyFromCamera, alipay: hideAlbum',
          },
          scanType: {
            type: 1,
            desc: "扫码类型, wx: scanType 支持数组类型；默认值是['barCode', 'qrCode']；取值范围：barCode、qrCode、datamatrix、pdf417, alipay: type 不支持数组类型；默认值是qr；取值范围：qr、bar",
          },
        },
      },
      returnValue: {
        props: {
          scanType: {
            type: 0,
            desc: '所扫码的类型',
          },
          charSet: {
            type: 0,
            desc: '所扫码的字符集',
          },
          path: {
            type: 0,
            desc: '当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path',
          },
          rawData: {
            type: 0,
            desc: '原始数据，base64编码',
          },
        },
      },
    },
  ),
  // 震动
  vibrateLong: createDescObj(
    0,
    '使手机发生较长时间的振动',
    'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
    'https://docs.alipay.com/mini/api/ucm2he',
  ),
  vibrateShort: createDescObj(
    0,
    '使手机发生较长时间的振动',
    'https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html',
    'https://docs.alipay.com/mini/api/ad6c10',
    {
      msg: '震动时间不同wx: 15ms, alipay: 40ms',
    },
  ),
}
