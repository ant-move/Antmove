const { createDescObj } = require('./utils');
/**
 * 设备
 */
module.exports = {
    canIUse: createDescObj(
        0,
        '判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持',
        'https://docs.alipay.com/mini/api/can-i-use',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html'
    ),
    SDKVersion: createDescObj(
        1,
        '获取基础库版本号',
        'https://docs.alipay.com/mini/api/sdk-version',
        '',
        {
            msg: '封装后完全支持'
        }
    ),
    getSystemInfo: createDescObj(
        1,
        '获取手机系统信息',
        'https://docs.alipay.com/mini/api/system-info',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
        {
            msg: '返回值参数缺失',
            returnValue: {
                props: {
                    storage: {
                        type: 0,
                        desc: '设备磁盘容量'
                    },
                    currentBattery: {
                        type: 0,
                        desc: '当前电量百分比'
                    },
                    statusBarHeight: {
                        type: 0,
                        desc: '状态栏高度'
                    }
                }
            }
        }
    ),
    getSystemInfoSync: createDescObj(
        1,
        '获取手机系统信息的同步接口',
        'https://docs.alipay.com/mini/api/gawhvz',
        'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html',
        {
            msg: '返回值参数缺失',
            returnValue: {
                props: {
                    storage: {
                        type: 0,
                        desc: '设备磁盘容量'
                    },
                    currentBattery: {
                        type: 0,
                        desc: '当前电量百分比'
                    },
                    statusBarHeight: {
                        type: 0,
                        desc: '状态栏高度'
                    },
                    app: {
                        type: 0,
                        desc: '当前运行的客户端，当前是支付宝则有效值是 alipay'
                    },
                }
            }
        }
    ),
    getNetworkType: createDescObj(
        1,
        '获取当前网络状态',
        'https://docs.alipay.com/mini/api/network-status',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html',
        {
            msg: '返回值属性缺失/属性取值不同',
            returnValue: {
                props: {
                    networkAvailable: {
                        type: 0,
                        desc: '网络是否可用'
                    },
                    networkType: {
                        type: 1,
                        desc: 'alipay: WIFI/2G/3G/4G/UNKNOWN/NOTREACHABLE, wx: wifi/2g/3g/4g/unknown/none'
                    }
                }
            }
        }
    ),
    offNetworkStatusChange: createDescObj(
        2,
        '取消监听网络状态变化',
        'https://docs.alipay.com/mini/api/gxpg1w',
        ''
    ),
    onNetworkStatusChange: createDescObj(
        1,
        '开始监听网络状态变化',
        'https://docs.alipay.com/mini/api/ympi0l',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html',
        {
            msg: '封装后完全支持'
        }
    ),
    getClipboard: createDescObj(
        0,
        '获取剪贴板数据',
        'https://docs.alipay.com/mini/api/clipboard',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html',
        {
            msg: '封装后完全支持'
        }
    ),
    setClipboard: createDescObj(
        0,
        '设置剪贴板数据',
        'https://docs.alipay.com/mini/api/klbkbp',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.setClipboardData.html',
        {
            msg: '封装后完全支持'
        }
    ),
    watchShake: createDescObj(
        2,
        '摇一摇功能',
        'https://docs.alipay.com/mini/api/shake',
        ''
    ),
    vibrate: createDescObj(
        2,
        '调用振动功能',
        'https://docs.alipay.com/mini/api/vibrate',
        ''
    ),
    vibrateLong: createDescObj(
        0,
        '较长时间的振动 (400ms)',
        'https://docs.alipay.com/mini/api/ucm2he',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateLong.html'
    ),
    vibrateShort: createDescObj(
        0,
        '较短时间的振动',
        'https://docs.alipay.com/mini/api/ad6c10',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/vibrate/wx.vibrateShort.html',
        {
            msg: 'alipay振动40ms, wx振动15ms'
        }
    ),
    onAccelerometerChange: createDescObj(
        0,
        '监听加速度数据，回调间隔为 500ms，接口调用后会自动开始监听',
        'https://docs.alipay.com/mini/api/accelerometer',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.onAccelerometerChange.html'
    ),
    offAccelerometerChange: createDescObj(
        0,
        '停止监听加速度数据',
        'https://docs.alipay.com/mini/api/kape7p',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html',
        {
            msg: '封装后完全支持'
        }
    ),
    onGyroscopeChange: createDescObj(
        0,
        '监听陀螺仪数据变化事件，接口调用后会自动开始监听，回调间隔为500ms',
        'https://docs.alipay.com/mini/api/gyroscope',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.onGyroscopeChange.html'
    ),
    offGyroscopeChange: createDescObj(
        0,
        '停止监听陀螺仪数据',
        'https://docs.alipay.com/mini/api/cpt55i',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html',
        {
            msg: '封装后完全支持'
        }
    ),
    onCompassChange: createDescObj(
        0,
        '监听罗盘数据变化事件',
        'https://docs.alipay.com/mini/api/compass',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html',
        {
            msg: '支付宝回调间隔为500ms, 微信频率：5 次/秒'
        }
    ),
    offCompassChange: createDescObj(
        0,
        '停止监听罗盘数据',
        'https://docs.alipay.com/mini/api/xf671t',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html',
        {
            msg: '封装后完全支持'
        }
    ),
    makePhoneCall: createDescObj(
        0,
        '拨打电话',
        'https://docs.alipay.com/mini/api/macke-call',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html',
        {
            msg: '封装后完全支持'
        }
    ),
    getServerTime: createDescObj(
        2,
        '获取当前服务器时间的毫秒数',
        'https://docs.alipay.com/mini/api/get-server-time',
        ''
    ),
    onUserCaptureScreen: createDescObj(
        0,
        '用于监听用户发起的主动截屏事件，可以接收到系统以及第三方截屏工具的截屏事件通知',
        'https://docs.alipay.com/mini/api/user-capture-screen',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.onUserCaptureScreen.html'
    ),
    offUserCaotureScreen: createDescObj(
        2,
        '取消监听截屏事件',
        'https://docs.alipay.com/mini/api/umdxbg',
        ''
    ),
    getScreenBrightness: createDescObj(
        0,
        '获取屏幕亮度',
        'https://docs.alipay.com/mini/api/screen-brightness',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html'
    ),
    setScreenBrightness: createDescObj(
        0,
        '设置屏幕亮度',
        'https://docs.alipay.com/mini/api/ccf32t',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html',
        {
            msg: '封装后完全支持'
        }
    ),
    setKeepScreenOn: createDescObj(
        0,
        '设置是否保持屏幕长亮状态',
        'https://docs.alipay.com/mini/api/qx0sap',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setKeepScreenOn.html'
    ),
    getSetting: createDescObj(
        0,
        '获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限',
        'https://docs.alipay.com/mini/api/xmk3ml',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html'
    ),
    openSetting: createDescObj(
        0,
        '打开小程序设置界面，返回用户权限设置的结果',
        'https://docs.alipay.com/mini/api/qflu8f',
        'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html'
    ),
    addPhoneContact: createDescObj(
        0,
        '用户可以选择将该表单以“创建新联系人”或“添加到现有联系人”的方式，写入到手机系统的通讯录',
        'https://docs.alipay.com/mini/api/contact',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/contact/wx.addPhoneContact.html'
    ),
    showAuthGuide: createDescObj(
        2,
        '通过权限引导模块以图文等形式向用户弹出 Dialog，引导用户打开相应的权限',
        'https://docs.alipay.com/mini/api/show-auth-guide',
        ''
    ),
    scan: createDescObj(
        0,
        '调用扫一扫功能',
        'https://docs.alipay.com/mini/api/scan',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html',
        {
            msg: '命名不同/参数差异/返回值差异',
            params: {
                props: {
                    scan: {
                        type: 1,
                        desc: 'alipay: scan, wx: scanCode'
                    },
                    type: {
                        type: 3,
                        desc: "扫码样式, alipay: type是String类型默认为qr, wx: scanType是Array.string默认为['barCode','qrCode']"
                    }
                }
            },
            returnValue: {
                props: {
                    code: {
                        type: 1,
                        desc: '扫码所得数据, alipay: code, wx: result'
                    },
                    qrCOde: {
                        type: 0,
                        desc: '扫描二维码时返回二维码数据'
                    },
                    barCode: {
                        type: 0,
                        desc: '扫描条形码时返回条形码数据'
                    },
                }
            }
        }
    ),
    onMemoryWarning: createDescObj(
        0,
        '开始监听内存不足的告警事件',
        'https://docs.alipay.com/mini/api/rb9o8p',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html'
    ),
    offMempryWarning: createDescObj(
        2,
        '停止监听内存不足的告警事件',
        'https://docs.alipay.com/mini/api/hszexr',
        ''
    ),
    getBatterytInfo: createDescObj(
        0,
        '获取电量的异步接口',
        'https://docs.alipay.com/mini/api/nrnziy',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfo.html'
    ),
    getBatteryInfoSync: createDescObj(
        0,
        '获取电量的同步接口',
        'https://docs.alipay.com/mini/api/vf7vn3',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/battery/wx.getBatteryInfoSync.html'
    ),
    connectBLEDevice: createDescObj(
        2,
        '连接低功耗蓝牙设备',
        'https://docs.alipay.com/mini/api/tmew6e',
        ''
    ),
    disconnectBLEDevice: createDescObj(
        2,
        '断开与低功耗蓝牙设备的连接',
        'https://docs.alipay.com/mini/api/yqrmmk',
        ''
    ),
    getBLEDeviceCharacteristics: createDescObj(
        1,
        '获取蓝牙设备所有 characteristic（特征值）',
        'https://docs.alipay.com/mini/api/fmg9gg',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html',
        {
            msg: '返回值对象属性差异/缺失',
            returnValue: {
                props: {
                    serviceld: {
                        type: 0,
                        desc: '蓝牙设备特征值对应服务的 uuid'
                    },
                    value: {
                        type: 0,
                        desc: '蓝牙设备特征值对应的16进制值'
                    },
                    characteristicId: {
                        type: 1,
                        desc: '蓝牙设备特征值的 uuid, alipay: characteristicId, wx: uuid'
                    },
                }
            }
        }
    ),
    getBLEDeviceServices: createDescObj(
        1,
        '获取蓝牙设备所有 service（服务）',
        'https://docs.alipay.com/mini/api/uzsg75',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html',
        {
            msg: '参数缺失/返回值参数差异/返回值参数属性差异/缺失',
            params: {
                props: {
                    serviceId: {
                        type: 0,
                        desc: '蓝牙特征值对应 service 的 uuid'
                    }
                }
            },
            returnValue: {
                props: {
                    characteristics: {
                        type: 1,
                        desc: '设备特征值列, alipay: characteristics, wx: services'
                    },
                    serviceld: {
                        type: 0,
                        desc: '蓝牙设备特征值对应服务的 uuid'
                    },
                    value: {
                        type: 0,
                        desc: '蓝牙设备特征值对应的16进制值'
                    },
                    characteristicId: {
                        type: 1,
                        desc: '蓝牙设备特征值的 uuid, alipay: characteristicId, wx: uuid'
                    },
                }
            }
        }
    ),
    notifyBLECharacteristicValueChange: createDescObj(
        1,
        '启用低功耗蓝牙设备特征值变化时的 notify 功能',
        'https://docs.alipay.com/mini/api/pdzk44',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html',
        {
            msg: '参数缺失',
            params: {
                props: {
                    descriptorId: {
                        type: 0,
                        desc: 'notify 的 descriptor 的 uuid'
                    }
                }
            }
        }
    ),
    offBLECharacteristicValueChange: createDescObj(
        0,
        '监听低功耗蓝牙设备的特征值变化的事件',
        'https://docs.alipay.com/mini/api/dlxobk',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html'
    ),
    offBLEConnectionStateChanged: createDescObj(
        2,
        '取消低功耗蓝牙连接状态变化事件的监听',
        'https://docs.alipay.com/mini/api/xfuy7k',
        ''
    ),
    onBLECharacteristicValueChange: createDescObj(
        1,
        '监听低功耗蓝牙设备的特征值变化的事件',
        'https://docs.alipay.com/mini/api/cdu501',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
        {
            msg: '参数缺失',
            params: {
                props: {
                    connected: {
                        type: 0,
                        desc: '连接目前的状态'
                    }
                }
            }
        }
    ),
    onBLEConnectionStateChanged: createDescObj(
        0,
        '监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等',
        'https://docs.alipay.com/mini/api/utgyiu',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html',
        {
            msg: '封装后完全支持'
        }
    ),
    readBLECharacteristicValue: createDescObj(
        0,
        '读取低功耗蓝牙设备特征值中的数据',
        'https://docs.alipay.com/mini/api/zro0ka',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html'
    ),
    writeBLECharacteristicValue: createDescObj(
        0,
        '向低功耗蓝牙设备特征值中写入数据',
        'https://docs.alipay.com/mini/api/vmp2r4',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html'
    ),
    closeBluetoothAdapter: createDescObj(
        0,
        '关闭本机蓝牙模块',
        'https://docs.alipay.com/mini/api/wvko0w',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.closeBluetoothAdapter.html'
    ),
    getBluetoothAdapterState: createDescObj(
        0,
        '获取本机蓝牙模块状态',
        'https://docs.alipay.com/mini/api/eid4o6',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothAdapterState.html'
    ),
    getBluetoothDevices: createDescObj(
        1,
        '获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备',
        'https://docs.alipay.com/mini/api/pelizr',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html',
        {
            msg: '返回值参数属性缺失',
            returnValue: {
                props: {
                    deviceName: {
                        type: 0,
                        desc: '蓝牙设备名称,值与 name 一致'
                    },
                    manufacturerData: {
                        type: 0,
                        desc: '设备的manufacturerData'
                    }
                }
            }
        }
    ),
    getConnectedBluetoothDevices: createDescObj(
        1,
        '获取处于已连接状态的设备',
        'https://docs.alipay.com/mini/api/ge8nue',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html',
        {
            msg: '封装后完全支持'
        }
    ),
    offBluetoothAdapterStateChange: createDescObj(
        2,
        '移除本机蓝牙状态变化的事件的监听',
        'https://docs.alipay.com/mini/api/ocgwfe',
        ''
    ),
    offBluetoothDeviceFound: createDescObj(
        2,
        '移除寻找到新的蓝牙设备事件的监听',
        'https://docs.alipay.com/mini/api/snw2t7',
        ''
    ),
    onBluetoothDeviceFound: createDescObj(
        1,
        '搜索到新的蓝牙设备时触发此事件',
        'https://docs.alipay.com/mini/api/ge8nue',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getConnectedBluetoothDevices.html',
        {
            msg: '返回值参数属性缺失',
            returnValue: {
                props: {
                    deviceName: {
                        type: 0,
                        desc: '蓝牙设备名称,值与 name 一致'
                    },
                    manufacturerData: {
                        type: 0,
                        desc: '设备的manufacturerData'
                    }
                }
            }
        }
    ),
    onBluetoothAdapterStateChange: createDescObj(
        0,
        '监听本机蓝牙状态变化的事件',
        'https://docs.alipay.com/mini/api/eegfbk',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html'
    ),
    openBluetoothAdapter: createDescObj(
        1,
        '初始化小程序蓝牙模块',
        'https://docs.alipay.com/mini/api/kunuy4',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.openBluetoothAdapter.html',
        {
            msg: '参数差异',
            params: {
                props: {
                    autoClose: {
                        type: 0,
                        desc: '是否在离开当前页面时自动断开蓝牙,默认是true'
                    }
                }
            }
        }
    ),
    startBluetoothDevicesDiscovery: createDescObj(
        0,
        '开始搜寻附近的蓝牙外围设备',
        'https://docs.alipay.com/mini/api/ksew43',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html'
    ),
    stopBluetoothDevicesDiscovery: createDescObj(
        0,
        '停止搜寻附近的蓝牙外围设备',
        'https://docs.alipay.com/mini/api/syb4mi',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.stopBluetoothDevicesDiscovery.html'
    ),
    getBeacons: createDescObj(
        1,
        '获取已经搜索到的 iBeacon 设备',
        'https://docs.alipay.com/mini/api/yqleyc',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html',
        {
            msg: '返回值参数缺失',
            returnValue: {
                props: {
                    errCode: {
                        type: 0,
                        desc: 'errorCode=0 ,接口调用成功'
                    },
                    errorMsg: {
                        type: 0,
                        desc: 'ok'
                    }
                }
            }
        }
    ),
    onBeaconServiceChange: createDescObj(
        0,
        '监听 iBeacon 服务的状态变化',
        'https://docs.alipay.com/mini/api/rq1dl7',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html'
    ),
    onBeaconUpdate: createDescObj(
        0,
        '监听 iBeacon 设备的更新事件',
        'https://docs.alipay.com/mini/api/kvdg9y',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html'
    ),
    startBeaconDiscovery: createDescObj(
        0,
        '开始搜索附近的 iBeacon 设备',
        'https://docs.alipay.com/mini/api/cy1g7k',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html'
    ),
    stopBeaconDiscovery: createDescObj(
        0,
        '停止搜索附近的 iBeacon 设备',
        'https://docs.alipay.com/mini/api/yp5owa',
        'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html'
    )
};