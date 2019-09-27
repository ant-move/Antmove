const { createDescObj } = require('./utils');
/**
 * 设备相关
 */
module.exports = {
    // iBeacon
    stopBeaconDiscovery: createDescObj(
        2,
        '停止搜索附近的 iBeacon 设备',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html',
        ''
    ),
    startBeaconDiscovery: createDescObj(
        2,
        '开始搜索附近的 iBeacon 设备',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html',
        ''
    ),
    onBeaconUpdate: createDescObj(
        2,
        '监听 iBeacon 设备更新事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html',
        ''
    ),
    onBeaconServiceChange: createDescObj(
        2,
        '监听 iBeacon 服务状态变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html',
        ''
    ),
    getBeacons: createDescObj(
        2,
        '获取所有已搜索到的 iBeacon 设备',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html',
        ''
    ),
    // WiFi
    stopWifi: createDescObj(
        2,
        '关闭 Wi-Fi 模块',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.stopWifi.html',
        ''
    ),
    startWifi: createDescObj(
        2,
        '初始化 Wi-Fi 模块',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.startWifi.html',
        ''
    ),
    setWifiList: createDescObj(
        2,
        '设置 wifiList 中 AP 的相关信息。在 onGetWifiList 回调后调用，iOS特有接口',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html',
        ''
    ),
    onWifiConnected: createDescObj(
        2,
        '监听连接上 Wi-Fi 的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onWifiConnected.html',
        ''
    ),
    onGetWifiList: createDescObj(
        2,
        '监听获取到 Wi-Fi 列表数据事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.onGetWifiList.html',
        ''
    ),
    getWifiList: createDescObj(
        2,
        '监听连接上 Wi-Fi 的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getWifiList.html',
        ''
    ),
    getConnectedWifi: createDescObj(
        0,
        '监听连接上 Wi-Fi 的事件。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.getConnectedWifi.html',
        'https://developer.toutiao.com/dev/miniapp/uADMz4CMwMjLwAzM'
    ),
    connectWifi: createDescObj(
        2,
        '连接 Wi-Fi。若已知 Wi-Fi 信息，可以直接利用该接口连接。仅 Android 与 iOS 11 以上版本支持。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.connectWifi.html',
        ''
    ),
    // 低功耗蓝牙
    writeBLECharacteristicValue: createDescObj(
        2,
        '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html',
        ''
    ),
    readBLECharacteristicValue: createDescObj(
        2,
        '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html',
        ''
    ),
    onBLEConnectionStateChange: createDescObj(
        2,
        '监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html',
        ''
    ),
    onBLECharacteristicValueChange: createDescObj(
        2,
        '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
        ''
    ),
    notifyBLECharacteristicValueChange: createDescObj(
        2,
        '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
        ''
    ),
    getBLEDeviceServices: createDescObj(
        2,
        '获取蓝牙设备所有服务(service)',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html',
        ''
    ),
    getBLEDeviceCharacteristics: createDescObj(
        2,
        '获取蓝牙设备某个服务中所有特征值(characteristic)。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html',
        ''
    ),
    createBLEConnection: createDescObj(
        2,
        '连接低功耗蓝牙设备。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.createBLEConnection.html',
        ''
    ),
    closeBLEConnection: createDescObj(
        2,
        '断开与低功耗蓝牙设备的连接。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.closeBLEConnection.html',
        ''
    ),
    // 联系人
    addPhoneContact: createDescObj(
        2,
        '添加手机通讯录联系人。用户可以选择将该表单以「新增联系人」或「添加到已有联系人」的方式，写入手机系统通讯录。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html',
        ''
    ),
    // 蓝牙
    stopBluetoothDevicesDiscovery: createDescObj(
        2,
        '停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html',
        ''
    ),
    startBluetoothDevicesDiscovery: createDescObj(
        2,
        '开始搜寻附近的蓝牙外围设备',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html',
        ''
    ),
    openBluetoothAdapter: createDescObj(
        2,
        '初始化蓝牙模块',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html',
        ''
    ),
    onBluetoothDeviceFound: createDescObj(
        2,
        '监听寻找到新设备的事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html',
        ''
    ),
    onBluetoothAdapterStateChange: createDescObj(
        2,
        '监听蓝牙适配器状态变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html',
        ''
    ),
    getConnectedBluetoothDevices: createDescObj(
        2,
        '根据 uuid 获取处于已连接状态的设备。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html',
        ''
    ),
    getBluetoothDevices: createDescObj(
        2,
        '获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html',
        ''
    ),
    getBluetoothAdapterState: createDescObj(
        2,
        '获取本机蓝牙适配器状态。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html',
        ''
    ),
    closeBluetoothAdapter: createDescObj(
        2,
        '关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 wx.openBluetoothAdapter 成对调用。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html',
        ''
    ),
    // 电量
    getBatteryInfoSync: createDescObj(
        2,
        'wx.getBatteryInfo 的同步版本',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html',
        ''
    ),
    getBatteryInfo: createDescObj(
        2,
        '获取设备电量。同步 API wx.getBatteryInfoSync 在 iOS 上不可用。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html',
        ''
    ),
    // NFC
    stopHCE: createDescObj(
        2,
        '关闭 NFC 模块。仅在安卓系统下有效。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.stopHCE.html',
        ''
    ),
    startHCE: createDescObj(
        2,
        '初始化 NFC 模块。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.startHCE.html',
        ''
    ),
    sendHCEMessage: createDescObj(
        2,
        '发送 NFC 消息。仅在安卓系统下有效。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.sendHCEMessage.html',
        ''
    ),
    onHCEMessage: createDescObj(
        2,
        '监听接收 NFC 设备消息事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.onHCEMessage.html',
        ''
    ),
    getHCEState: createDescObj(
        2,
        '判断当前设备是否支持 HCE 能力。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/nfc/wx.getHCEState.html',
        ''
    ),
    // 网络
    onNetworkStatusChange: createDescObj(
        0,
        '监听网络状态变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html',
        'https://developer.toutiao.com/dev/miniapp/uITMz4iMxMjLyEzM',
        {
            msg: '封装后完全支持',
        }
    ),
    getNetworkType: createDescObj(
        0,
        '获取网络类型',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html',
        'https://developer.toutiao.com/dev/miniapp/uMTMz4yMxMjLzEzM'
    ),
    // 屏幕
    setScreenBrightness: createDescObj(
        2,
        '设置屏幕亮度',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html',
        ''
    ),
    setKeepScreenOn: createDescObj(
        0,
        '设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html',
        'https://developer.toutiao.com/dev/miniapp/ugjMz4COyMjL4IzM'
    ),
    onUserCaptureScreen: createDescObj(
        2,
        '监听用户主动截屏事件。用户使用系统截屏按键截屏时触发',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html',
        ''
    ),
    getScreenBrightness: createDescObj(
        2,
        '获取屏幕亮度',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html',
        ''
    ),
    makePhoneCall: createDescObj(
        0,
        '拨打电话',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html',
        'https://developer.toutiao.com/dev/miniapp/uEDNz4SM0MjLxQzM'
    ),
    // 加速器
    onAccelerometerChange: createDescObj(
        0,
        '监听加速度数据事件。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html',
        'https://developer.toutiao.com/dev/miniapp/uYTMz4iNxMjL2EzM'
    ),
    startAccelerometer: createDescObj(
        0,
        '开始监听罗盘数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.startAccelerometer.html',
        'https://developer.toutiao.com/dev/miniapp/uQjMz4CNyMjL0IzM',
        {
            msg: '封装后完全支持'
        }
    ),
    stopAccelerometer: createDescObj(
        0,
        '停止监听加速度数据。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html',
        'https://developer.toutiao.com/dev/miniapp/uQDNz4CN0MjL0QzM'
    ),
    // 罗盘
    onCompassChange: createDescObj(
        1,
        '监听罗盘数据变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html',
        'https://developer.toutiao.com/dev/miniapp/uETOy4SM5IjLxkjM',
        {
            msg: '返回值属性缺失',
            returnValue: {
                props: {
                    accuracy: {
                        type: 0,
                        desc: '精度'
                    }
                }
            }
        }
    ),
    startCompass: createDescObj(
        0,
        '开始监听罗盘数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.startCompass.html',
        'https://developer.toutiao.com/dev/miniapp/uQzMz4CNzMjL0MzM'
    ),
    stopCompass: createDescObj(
        1,
        '停止监听罗盘数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html',
        'https://developer.toutiao.com/dev/miniapp/uMDNz4yM0MjLzQzM'
    ),
    // 设备方向
    onDeviceMotionChange: createDescObj(
        2,
        '监听设备方向变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.onDeviceMotionChange.html',
        ''
    ),
    startDeviceMotionListening: createDescObj(
        2,
        '开始监听设备方向的变化',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.startDeviceMotionListening.html',
        ''
    ),
    stopDeviceMotionListening: createDescObj(
        2,
        '停止监听设备方向的变化',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/motion/wx.stopDeviceMotionListening.html',
        ''
    ),
    // 陀螺仪
    onGyroscopeChange: createDescObj(
        2,
        '监听陀螺仪数据变化事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html',
        ''
    ),
    startGyroscope: createDescObj(
        2,
        '开始监听陀螺仪数据',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.startGyroscope.html',
        ''
    ),
    stopGyroscope: createDescObj(
        2,
        '停止监听陀螺仪数据。',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html',
        ''
    ),
    // 性能
    onMemoryWarning: createDescObj(
        2,
        '监听内存不足告警事件',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html',
        ''
    ),
    // 扫码
    scanCode: createDescObj(
        1,
        '调起客户端扫码界面进行扫码',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html',
        'https://developer.toutiao.com/dev/miniapp/uMjMz4yMyMjLzIzM',
        {
            msg: ' 参数差异, 返回值差异/缺失',
            params: {
                props: {
                    onlyFromCamera: {
                        type: 0,
                        desc: '是否只能从相机扫码，不允许从相册选择图片'
                    },
                    scanType: {
                        type: 0,
                        desc: "扫码类型"
                    }
                }
            },
            returnValue: {
                props: {
                    scanType: {
                        type: 0,
                        desc: '所扫码的类型'
                    },
                    charSet: {
                        type: 0,
                        desc: '所扫码的字符集'
                    },
                    path: {
                        type: 0,
                        desc: '当所扫的码为当前小程序二维码时，会返回此字段，内容为二维码携带的 path'
                    },
                    rawData: {
                        type: 0,
                        desc: '原始数据，base64编码'
                    }
                }
            }
        }
    ),
    // 震动
    vibrateLong: createDescObj(
        0,
        '使手机发生较长时间的振动',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
        'https://developer.toutiao.com/dev/miniapp/ukTMz4SOxMjL5EzM'
    ),
    vibrateShort: createDescObj(
        0,
        '使手机发生较短时间的振动',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html',
        'https://developer.toutiao.com/dev/miniapp/ugDNz4CO0MjL4QzM'
    )
};