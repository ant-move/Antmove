module.exports = {
  apiInfo: [
    {
      name: '基础',
      type: 'basic',
      body: {
        canIUse: {
          status: 0,
          desc: '判断小程序的 API，回调，参数，组件等是否在当前版本可用',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html',
            alipay: 'https://docs.alipay.com/mini/api/can-i-use',
          },
          body: {},
        },
        getSystemInfoSync: {
          status: 1,
          desc: '获取系统信息同步版本',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html',
            alipay: 'https://docs.alipay.com/mini/api/system-info',
          },
          body: {
            msg: '返回值属性值缺失',
            returnValue: {
              props: {
                SDKVersion: {
                  type: 0,
                  desc: '客户端基础库版本',
                },
                benchmarkLevel: {
                  type: 0,
                  desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
                },
                albumAuthorized: {
                  type: 0,
                  desc: '允许微信使用相册的开关 仅 iOS 有效',
                },
                cameraAuthorized: {
                  type: 0,
                  desc: '允许微信使用摄像头的开关',
                },
                locationAuthorized: {
                  type: 0,
                  desc: '允许微信使用定位的开关',
                },
                microphoneAuthorized: {
                  type: 0,
                  desc: '允许微信使用麦克风的开关',
                },
                notificationAuthorized: {
                  type: 0,
                  desc: '允许微信通知的开关',
                },
                notificationAlertAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
                },
                notificationBadgeAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有标记的开关 仅 iOS 有效',
                },
                notificationSoundAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有声音的开关 仅 iOS 有效',
                },
                bluetoothEnabled: {
                  type: 0,
                  desc: '蓝牙的系统开关',
                },
                locationEnabled: {
                  type: 0,
                  desc: '地理位置的系统开关',
                },
                wifiEnabled: {
                  type: 0,
                  desc: 'Wi-Fi 的系统开关',
                },
              },
            },
          },
        },
        getSystemInfo: {
          status: 1,
          desc: '获取系统信息',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
            alipay: 'https://docs.alipay.com/mini/api/system-info',
          },
          body: {
            msg: '返回值属性值缺失',
            returnValue: {
              props: {
                SDKVersion: {
                  type: 0,
                  desc: '客户端基础库版本',
                },
                benchmarkLevel: {
                  type: 0,
                  desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
                },
                albumAuthorized: {
                  type: 0,
                  desc: '允许微信使用相册的开关 仅 iOS 有效',
                },
                cameraAuthorized: {
                  type: 0,
                  desc: '允许微信使用摄像头的开关',
                },
                locationAuthorized: {
                  type: 0,
                  desc: '允许微信使用定位的开关',
                },
                microphoneAuthorized: {
                  type: 0,
                  desc: '允许微信使用麦克风的开关',
                },
                notificationAuthorized: {
                  type: 0,
                  desc: '允许微信通知的开关 仅 iOS 有效',
                },
                notificationAlertAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
                },
                notificationBadgeAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有标记的开关 仅 iOS 有效',
                },
                notificationSoundAuthorized: {
                  type: 0,
                  desc: '允许微信通知带有声音的开关 仅 iOS 有效',
                },
                bluetoothEnabled: {
                  type: 0,
                  desc: '蓝牙的系统开关',
                },
                locationEnabled: {
                  type: 0,
                  desc: '地理位置的系统开关',
                },
                wifiEnabled: {
                  type: 0,
                  desc: 'Wi-Fi 的系统开关',
                },
              },
            },
          },
        },
      },
    },
    {
      name: '画布',
      type: 'canvas',
      body: {
        canvasToTempFilePath: {
          status: 0,
          desc: '把当前画布指定区域的内容导出生成指定大小的图片',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html',
            alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
          },
          body: {},
        },
        canvasPutImageData: {
          status: 0,
          desc: '将像素数据绘制到画布',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html',
            alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
          },
          body: {},
        },
        canvasGetImageData: {
          status: 0,
          desc: '获取 canvas 区域隐含的像素数据。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html',
            alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
          },
          body: {},
        },
      },
    },
    {
      name: '设备相关',
      type: 'equipment',
      body: {
        stopBeaconDiscovery: {
          status: 0,
          desc: '停止搜索附近的 iBeacon 设备',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html',
            alipay: 'https://docs.alipay.com/mini/api/yp5owa',
          },
          body: {},
        },
        startBeaconDiscovery: {
          status: 1,
          desc: '开始搜索附近的 iBeacon 设备',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html',
            alipay: 'https://docs.alipay.com/mini/api/cy1g7k',
          },
          body: {
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
        },
        onBeaconUpdate: {
          status: 0,
          desc: '监听 iBeacon 设备更新事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html',
            alipay: 'https://docs.alipay.com/mini/api/kvdg9y',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        onBeaconServiceChange: {
          status: 1,
          desc: '监听 iBeacon 服务状态变化事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html',
            alipay: 'https://docs.alipay.com/mini/api/rq1dl7',
          },
          body: {
            msg: '参数类型不同，wx: Function , alipay: Object',
          },
        },
        getBeacons: {
          status: 0,
          desc: '获取所有已搜索到的 iBeacon 设备',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html',
            alipay: 'https://docs.alipay.com/mini/api/yqleyc',
          },
          body: {},
        },
        writeBLECharacteristicValue: {
          status: 0,
          desc: '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html',
            alipay: 'https://docs.alipay.com/mini/api/vmp2r4',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        onBLEConnectionStateChange: {
          status: 0,
          desc: '监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html',
            alipay: 'https://docs.alipay.com/mini/api/utgyiu',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        onBLECharacteristicValueChange: {
          status: 0,
          desc: '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
            alipay: 'https://docs.alipay.com/mini/api/cdu501',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getBLEDeviceServices: {
          status: 0,
          desc: '获取蓝牙设备所有服务(service)',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html',
            alipay: 'https://docs.alipay.com/mini/api/uzsg75',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getBLEDeviceCharacteristics: {
          status: 0,
          desc: '获取蓝牙设备某个服务中所有特征值(characteristic)。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html',
            alipay: 'https://docs.alipay.com/mini/api/fmg9gg',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        startBluetoothDevicesDiscovery: {
          status: 0,
          desc: '开始搜寻附近的蓝牙外围设备',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html',
            alipay: 'https://docs.alipay.com/mini/api/ksew43',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        onBluetoothDeviceFound: {
          status: 1,
          desc: '监听寻找到新设备的事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html',
            alipay: 'https://docs.alipay.com/mini/api/mhzls9',
          },
          body: {
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
        },
        getBluetoothDevices: {
          status: 1,
          desc: '获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html',
            alipay: 'https://docs.alipay.com/mini/api/pelizr',
          },
          body: {
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
        },
        onNetworkStatusChange: {
          status: 0,
          desc: '监听网络状态变化事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html',
            alipay: 'https://docs.alipay.com/mini/api/ympi0l',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getNetworkType: {
          status: 0,
          desc: '获取网络类型',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html',
            alipay: 'https://docs.alipay.com/mini/api/network-status#mygetnetworktype',
          },
          body: {
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
        },
        setScreenBrightness: {
          status: 0,
          desc: '设置屏幕亮度',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html',
            alipay: 'https://docs.alipay.com/mini/api/ccf32t',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getScreenBrightness: {
          status: 0,
          desc: '获取屏幕亮度',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html',
            alipay: 'https://docs.alipay.com/mini/api/screen-brightness',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        makePhoneCall: {
          status: 1,
          desc: '拨打电话',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html',
            alipay: 'https://docs.alipay.com/mini/api/macke-call',
          },
          body: {
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
        },
        stopAccelerometer: {
          status: 1,
          desc: '停止监听加速度数据。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html',
            alipay: 'https://docs.alipay.com/mini/api/accelerometer',
          },
          body: {
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
        },
        onCompassChange: {
          status: 1,
          desc: '监听罗盘数据变化事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html',
            alipay: 'https://docs.alipay.com/mini/api/compass#a-name5i0ewaamyoncompasschangefunction-callback',
          },
          body: {
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
        },
        stopCompass: {
          status: 1,
          desc: '停止监听罗盘数据',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html',
            alipay: 'https://docs.alipay.com/mini/api/xf671t',
          },
          body: {
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
        },
        stopGyroscope: {
          status: 1,
          desc: '停止监听陀螺仪数据。',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html',
            alipay: 'https://docs.alipay.com/mini/api/cpt55i',
          },
          body: {
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
        },
        scanCode: {
          status: 1,
          desc: '调起客户端扫码界面进行扫码',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html',
            alipay: 'https://docs.alipay.com/mini/api/scan',
          },
          body: {
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
        },
      },
    },
    {
      name: '文件系统',
      type: 'file',
      body: {
        saveFile: {
          status: 0,
          desc: '保存文件到本地',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html',
            alipay: 'https://docs.alipay.com/mini/api/xbll1q',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        removeSavedFile: {
          status: 0,
          desc: '删除本地缓存文件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
            alipay: 'https://docs.alipay.com/mini/api/dgi1fr',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getSavedFileList: {
          status: 0,
          desc: '获取保存的所有文件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html',
            alipay: 'https://docs.alipay.com/mini/api/cgohg1',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getSavedFileInfo: {
          status: 0,
          desc: '获取保存的文件信息',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
            alipay: 'https://docs.alipay.com/mini/api/qrx6ze',
          },
          body: {
            msg: '封装后支持',
          },
        },
        getFileInfo: {
          status: 0,
          desc: '获取文件信息',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html',
            alipay: 'https://docs.alipay.com/mini/api/file',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
      },
    },
    {
      name: '位置',
      type: 'location',
      body: {
        openLocation: {
          status: 0,
          desc: '打开位置',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html',
            alipay: 'https://docs.alipay.com/mini/api/as9kin',
          },
          body: {},
        },
        getLocation: {
          status: 1,
          desc: '获取位置',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
            alipay: 'https://docs.alipay.com/mini/api/mkxuqd',
          },
          body: {
            msg: '参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异',
            params: {
              props: {
                altitude: {
                  type: 0,
                  desc: '传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度',
                },
                type的取值: {
                  type: 4,
                  desc: 'wx: 默认值wgs84, alipay: 默认值0',
                },
              },
            },
            returnValue: {
              props: {
                speed: {
                  type: 0,
                  desc: '速度，单位 m/s',
                },
                altitude: {
                  type: 0,
                  desc: '高度，单位 m',
                },
                verticalAccuracy: {
                  type: 0,
                  desc: '垂直精度，单位 m（Android 无法获取，返回 0）',
                },
                error返回值差异: {
                  type: 3,
                  desc: "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”",
                },
              },
            },
          },
        },
      },
    },
    {
      name: '媒体',
      type: 'media',
      body: {
        createMapContext: {
          status: 1,
          desc: '创建 map 上下文 MapContext 对象',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html',
            alipay: 'https://docs.alipay.com/mini/api/ui-map',
          },
          body: {
            msg: '返回值对象方法缺失',
            returnValue: {
              props: {
                getRegion: {
                  type: 0,
                  desc: '获取当前地图的视野范围',
                },
                getScale: {
                  type: 0,
                  desc: '获取当前地图的缩放级别',
                },
                includePoints: {
                  type: 0,
                  desc: '缩放视野展示所有经纬度',
                },
              },
            },
          },
        },
        saveImageToPhotosAlbum: {
          status: 0,
          desc: '保存图片到系统相册不支持网络图片路径',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html',
            alipay: 'https://docs.alipay.com/mini/api/izfoiz',
          },
          body: {
            msg: '完全支持',
          },
        },
        previewImage: {
          status: 0,
          desc: '在新页面中全屏预览图片',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html',
            alipay: 'https://docs.alipay.com/mini/api/eei0av',
          },
          body: {},
        },
        compressImage: {
          status: 0,
          desc: '压缩图片接口，可选压缩质量',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html',
            alipay: 'https://docs.alipay.com/mini/api/ehndze',
          },
          body: {
            msg: '封装后可完全支持',
          },
        },
        chooseImage: {
          status: 1,
          desc: '从本地相册选择图片或使用相机拍照',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html',
            alipay: 'https://docs.alipay.com/mini/api/media-image#a-nameeh9ddfamychooseimage',
          },
          body: {
            msg: '返回值属性缺失',
            returnValue: {
              props: {
                tempFiles: {
                  type: 0,
                  desc: '图片的本地临时文件列表',
                },
              },
            },
          },
        },
      },
    },
    {
      name: '网络',
      type: 'network',
      body: {
        request: {
          status: 1,
          desc: '发起 HTTPS 网络请求',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
            alipay: 'https://docs.alipay.com/mini/api/owycmh',
          },
          body: {
            msg: '入参参数名称差异/参数缺失/返回值名称差异',
            params: {
              props: {
                header: {
                  type: 1,
                  desc: '设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json, wx: header, alipay: headers',
                },
                responseType: {
                  type: 0,
                  desc: '响应的数据类型, alipay缺失: responseType',
                },
                method合法值: {
                  type: 0,
                  desc: 'OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT',
                },
              },
            },
            returnValue: {
              props: {
                statusCode: {
                  type: 1,
                  desc: 'wx: statusCode, alipay: status',
                },
                header: {
                  type: 1,
                  desc: 'wx: header, alipay: headers',
                },
              },
            },
          },
        },
        downloadFile: {
          status: 1,
          desc: '下载文件资源到本地',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html',
            alipay: 'https://docs.alipay.com/mini/api/xr054r',
          },
          body: {
            msg: '参数缺失, 返回值属性值/方法缺失, 返回值名称差异',
            params: {
              props: {
                filePath: {
                  type: 0,
                  desc: '指定文件下载后存储的路径',
                },
              },
            },
            returnValue: {
              props: {
                tempFilePath: {
                  type: 1,
                  desc: '临时文件路径, wx: tempFilePath, alipay: apFilePath',
                },
                filePath: {
                  type: 0,
                  desc: '用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致',
                },
                statusCode: {
                  type: 0,
                  desc: '开发者服务器返回的 HTTP 状态码',
                },
                abort: {
                  type: 0,
                  desc: '中断下载任务',
                },
                offHeadersReceived: {
                  type: 0,
                  desc: '监听下载进度变化事件',
                },
                offProgressUpdate: {
                  type: 0,
                  desc: '取消监听下载进度变化事件',
                },
                onHeadersReceived: {
                  type: 0,
                  desc: '监听 HTTP Response Header 事件。会比请求完成事件更早',
                },
                onProgressUpdate: {
                  type: 0,
                  desc: '取消监听 HTTP Response Header 事件',
                },
              },
            },
          },
        },
        uploadFile: {
          status: 1,
          desc: '上传本地资源到开发者服务器',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html',
            alipay: 'https://docs.alipay.com/mini/api/kmq4hc',
          },
          body: {
            msg: '参数名称差异, 返回值方法缺失',
            params: {
              props: {
                name: {
                  type: 1,
                  desc: '文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, wx: name, alipay: fileName',
                },
              },
            },
            returnValue: {
              props: {
                abort: {
                  type: 0,
                  desc: 'missing',
                },
                offHeadersReceived: {
                  type: 0,
                  desc: 'missing',
                },
                offProgressUpdate: {
                  type: 0,
                  desc: 'missing',
                },
                onHeadersReceived: {
                  type: 0,
                  desc: 'missing',
                },
                onProgressUpdate: {
                  type: 0,
                  desc: 'missing',
                },
              },
            },
          },
        },
        connectSocket: {
          status: 1,
          desc: '创建一个 WebSocket 的连接',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html',
            alipay: 'https://docs.alipay.com/mini/api/vx19c3',
          },
          body: {
            msg: '参数缺失, 返回值缺失',
            params: {
              props: {
                protocols: {
                  type: 0,
                  desc: '子协议数组',
                },
                tcpNoDelay: {
                  type: 0,
                  desc: '建立 TCP 连接的时候的 TCP_NODELAY 设置',
                },
              },
            },
            returnValue: {
              props: {
                close: {
                  type: 0,
                  desc: 'missing',
                },
                cloonClosese: {
                  type: 0,
                  desc: 'missing',
                },
                onError: {
                  type: 0,
                  desc: 'missing',
                },
                onMessage: {
                  type: 0,
                  desc: 'missing',
                },
                onOpen: {
                  type: 0,
                  desc: 'missing',
                },
                send: {
                  type: 0,
                  desc: 'missing',
                },
              },
            },
          },
        },
        onSocketOpen: {
          status: 1,
          desc: '监听WebSocket连接打开事件',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html',
            alipay: 'https://docs.alipay.com/mini/api/itm5og',
          },
          body: {
            msg: '返回值属性值缺失',
            returnValue: {
              props: {
                header: {
                  type: 0,
                  desc: '连接成功的 HTTP 响应 Header',
                },
              },
            },
          },
        },
        closeSocket: {
          status: 1,
          desc: '关闭 WebSocket 连接',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html',
            alipay: 'https://docs.alipay.com/mini/api/network',
          },
          body: {
            msg: '参数缺失',
            params: {
              props: {
                code: {
                  type: 0,
                  desc: '一个数字值表示关闭连接的状态号，表示连接被关闭的原因。',
                },
                reason: {
                  type: 0,
                  desc: '一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）',
                },
              },
            },
          },
        },
      },
    },
    {
      name: '开放能力',
      type: 'openAbility',
      body: {
        login: {
          status: 0,
          desc: '调用接口获取登录凭证（code）',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
            alipay: 'https://docs.alipay.com/mini/api/openapi-authorize',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getUserInfo: {
          status: 1,
          desc: '获取用户信息',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html',
            alipay: 'https://docs.alipay.com/mini/api/userinfo',
          },
          body: {
            msg: '命名不同, 参数缺失, 返回值属性缺失',
            params: {
              props: {
                getUserInfo: {
                  type: 1,
                  desc: 'wx: getUserInfo, alipay: getAuthUserInfo',
                },
                withCredentials: {
                  type: 0,
                  desc: '是否带上登录态信息',
                },
                lang: {
                  type: 0,
                  desc: '显示用户信息的语言',
                },
              },
            },
            returnValue: {
              props: {
                userInfo: {
                  type: 0,
                  desc: '用户信息对象，不包含 openid 等敏感信息',
                },
                rawData: {
                  type: 0,
                  desc: '不包括敏感信息的原始数据字符串，用于计算签名',
                },
                signature: {
                  type: 0,
                  desc: '使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
                },
                encryptedData: {
                  type: 0,
                  desc: '包括敏感数据在内的完整用户信息的加密数据',
                },
                iv: {
                  type: 0,
                  desc: '加密算法的初始向量',
                },
                cloudID: {
                  type: 0,
                  desc: '敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据',
                },
              },
            },
          },
        },
        reportAnalytics: {
          status: 0,
          desc: '自定义分析数据上报接口',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html',
            alipay: 'https://docs.alipay.com/mini/api/report',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        requestPayment: {
          status: 2,
          desc: '发起支付',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html',
            alipay: '',
          },
          body: {
            msg: '支付宝与微信支付功能差异较大，请参考支付宝支付文档做兼容处理',
          },
        },
        authorize: {
          status: 1,
          desc: '提前向用户发起授权请求',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html',
            alipay: 'https://docs.alipay.com/mini/api/openapi-authorize',
          },
          body: {
            msg: '命名不同wx: authorize, alipay: getAuthCode, 参数差异',
            params: {
              props: {
                scope: {
                  type: 1,
                  desc: '授权类型, wx: scope, alipay: scopes, 且取值不同',
                },
              },
            },
          },
        },
        getSetting: {
          status: 0,
          desc: '获取用户的当前设置',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html',
            alipay: 'https://docs.alipay.com/mini/api/xmk3ml',
          },
          body: {},
        },
      },
    },
    {
      name: '数据缓存',
      type: 'storage',
      body: {
        setStorageSync: {
          status: 0,
          desc: '将数据存储在本地缓存中指定的 key 中',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html',
            alipay: 'https://docs.alipay.com/mini/api/cog0du',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        removeStorageSync: {
          status: 0,
          desc: '从本地缓存中同步移除指定 key',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html',
            alipay: 'https://docs.alipay.com/mini/api/ytfrk4',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
        getStorageSync: {
          status: 0,
          desc: '获取缓存数据',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html',
            alipay: 'https://docs.alipay.com/mini/api/ox0wna',
          },
          body: {
            msg: '封装后完全支持',
          },
        },
      },
    },
    {
      name: 'wxml 模板',
      type: 'template',
      body: {
        createSelectorQuery: {
          status: 1,
          desc: '返回一个 SelectorQuery 对象实例',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html',
            alipay: 'https://docs.alipay.com/mini/api/selector-query',
          },
          body: {
            msg: '返回值方法缺失',
            returnValue: {
              props: {
                in: {
                  type: 0,
                  desc: '将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）',
                },
              },
            },
          },
        },
      },
    },
    {
      name: '界面',
      type: 'view',
      body: {
        showToast: {
          status: 1,
          desc: '显示消息提示框',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html',
            alipay: 'https://docs.alipay.com/mini/api/fhur8f',
          },
          body: {
            msg: '入参参数差异/缺失',
            params: {
              props: {
                title: {
                  type: 1,
                  desc: '提示的内容, wx: title, alipay: content',
                },
                icon: {
                  type: 1,
                  desc: '图标, wx: icon, alipay: type',
                },
                image: {
                  type: 0,
                  desc: '自定义图标的本地路径，image 的优先级高于 icon',
                },
                mask: {
                  type: 0,
                  desc: '是否显示透明蒙层，防止触摸穿透',
                },
                icon的合法值: {
                  type: 0,
                  desc: '显示加载图标，此时 title 文本最多显示 7 个汉字长度',
                },
              },
            },
          },
        },
        showModal: {
          status: 1,
          desc: '显示模态对话框',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
            alipay: 'https://docs.alipay.com/mini/api/lt3uqc',
          },
          body: {
            msg: '入参参数名称差异/参数缺失/返回值名称差异',
            params: {
              props: {
                confirmText: {
                  type: 1,
                  desc: '确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText',
                },
                cancelText: {
                  type: 1,
                  desc: '取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText',
                },
                showCancel: {
                  type: 0,
                  desc: '是否显示取消按钮',
                },
                cancelColor: {
                  type: 0,
                  desc: '取消按钮的文字颜色，必须是 16 进制格式的颜色字符串',
                },
                confirmColor: {
                  type: 0,
                  desc: '确认按钮的文字颜色，必须是 16 进制格式的颜色字符串',
                },
              },
            },
            returnValue: {
              props: {
                confirm: {
                  type: 1,
                  desc: 'wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false',
                },
                cancel: {
                  type: 1,
                  desc: 'wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）',
                },
              },
            },
          },
        },
        showLoading: {
          status: 1,
          desc: '显示 loading 提示框',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html',
            alipay: 'https://docs.alipay.com/mini/api/bm69kb',
          },
          body: {
            msg: '入参参数名称差异/参数缺失',
            params: {
              props: {
                title: {
                  type: 1,
                  desc: '提示的内容, wx: title, alipay: content',
                },
                mask: {
                  type: 0,
                  desc: '是否显示透明蒙层，防止触摸穿透',
                },
              },
            },
          },
        },
        showActionSheet: {
          status: 1,
          desc: '显示操作菜单',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html',
            alipay: 'https://docs.alipay.com/mini/api/hr092g',
          },
          body: {
            msg: '入参参数名称差异/参数缺失',
            params: {
              props: {
                itemList: {
                  type: 1,
                  desc: '按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items',
                },
                itemColor: {
                  type: 0,
                  desc: '按钮的文字颜色',
                },
              },
            },
          },
        },
        hideToast: {
          status: 0,
          desc: '隐藏消息提示框',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html',
            alipay: 'https://docs.alipay.com/mini/api/iygd4e',
          },
          body: {},
        },
        hideLoading: {
          status: 0,
          desc: '隐藏 loading 提示框',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html',
            alipay: 'https://docs.alipay.com/mini/api/nzf540',
          },
          body: {},
        },
        showNavigationBarLoading: {
          status: 0,
          desc: '在当前页面显示导航条加载动画',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html',
            alipay: 'https://docs.alipay.com/mini/api/lydg2a',
          },
          body: {},
        },
        setNavigationBarTitle: {
          status: 0,
          desc: '动态设置当前页面的标题',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html',
            alipay: 'https://docs.alipay.com/mini/api/xwq8e6',
          },
          body: {},
        },
        hideNavigationBarLoading: {
          status: 0,
          desc: '在当前页面隐藏导航条加载动画',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html',
            alipay: 'https://docs.alipay.com/mini/api/ncgsga',
          },
          body: {},
        },
        setTabBarStyle: {
          status: 0,
          desc: '动态设置 tabBar 的整体样式',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html',
            alipay: 'https://docs.alipay.com/mini/api/wcf0sv',
          },
          body: {},
        },
        setTabBarItem: {
          status: 0,
          desc: '动态设置 tabBar 某一项的内容',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html',
            alipay: 'https://docs.alipay.com/mini/api/zu37bk',
          },
          body: {},
        },
        stopPullDownRefresh: {
          status: 0,
          desc: '停止当前页面下拉刷新',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html',
            alipay: 'https://docs.alipay.com/mini/api/pmhkbb',
          },
          body: {},
        },
        pageScrollTo: {
          status: 1,
          desc: '将页面滚动到目标位置',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html',
            alipay: 'https://docs.alipay.com/mini/api/scroll#mypagescrollto',
          },
          body: {
            msg: '参数缺失',
            params: {
              props: {
                duration: {
                  type: 0,
                  desc: '滚动动画的时长，单位 ms',
                },
              },
            },
          },
        },
        createAnimation: {
          status: 0,
          desc: '创建一个动画实例 animation',
          url: {
            wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html',
            alipay: 'https://docs.alipay.com/mini/api/ui-animation#a-namen93ndhamycreateanimation',
          },
          body: {},
        },
      },
    }
  ],
  descObject: {
    canIUse: {
      status: 0,
      desc: '判断小程序的 API，回调，参数，组件等是否在当前版本可用',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.canIUse.html',
        alipay: 'https://docs.alipay.com/mini/api/can-i-use',
      },
      body: {},
    },
    getSystemInfoSync: {
      status: 1,
      desc: '获取系统信息同步版本',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wx.getSystemInfoSync.html',
        alipay: 'https://docs.alipay.com/mini/api/system-info',
      },
      body: {
        msg: '返回值属性值缺失',
        returnValue: {
          props: {
            SDKVersion: {
              type: 0,
              desc: '客户端基础库版本',
            },
            benchmarkLevel: {
              type: 0,
              desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
            },
            albumAuthorized: {
              type: 0,
              desc: '允许微信使用相册的开关 仅 iOS 有效',
            },
            cameraAuthorized: {
              type: 0,
              desc: '允许微信使用摄像头的开关',
            },
            locationAuthorized: {
              type: 0,
              desc: '允许微信使用定位的开关',
            },
            microphoneAuthorized: {
              type: 0,
              desc: '允许微信使用麦克风的开关',
            },
            notificationAuthorized: {
              type: 0,
              desc: '允许微信通知的开关',
            },
            notificationAlertAuthorized: {
              type: 0,
              desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
            },
            notificationBadgeAuthorized: {
              type: 0,
              desc: '允许微信通知带有标记的开关 仅 iOS 有效',
            },
            notificationSoundAuthorized: {
              type: 0,
              desc: '允许微信通知带有声音的开关 仅 iOS 有效',
            },
            bluetoothEnabled: {
              type: 0,
              desc: '蓝牙的系统开关',
            },
            locationEnabled: {
              type: 0,
              desc: '地理位置的系统开关',
            },
            wifiEnabled: {
              type: 0,
              desc: 'Wi-Fi 的系统开关',
            },
          },
        },
      },
    },
    getSystemInfo: {
      status: 1,
      desc: '获取系统信息',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html',
        alipay: 'https://docs.alipay.com/mini/api/system-info',
      },
      body: {
        msg: '返回值属性值缺失',
        returnValue: {
          props: {
            SDKVersion: {
              type: 0,
              desc: '客户端基础库版本',
            },
            benchmarkLevel: {
              type: 0,
              desc: '仅 Android 小游戏 设备性能等级取值为：-2 或 0',
            },
            albumAuthorized: {
              type: 0,
              desc: '允许微信使用相册的开关 仅 iOS 有效',
            },
            cameraAuthorized: {
              type: 0,
              desc: '允许微信使用摄像头的开关',
            },
            locationAuthorized: {
              type: 0,
              desc: '允许微信使用定位的开关',
            },
            microphoneAuthorized: {
              type: 0,
              desc: '允许微信使用麦克风的开关',
            },
            notificationAuthorized: {
              type: 0,
              desc: '允许微信通知的开关 仅 iOS 有效',
            },
            notificationAlertAuthorized: {
              type: 0,
              desc: '允许微信通知带有提醒的开关 仅 iOS 有效',
            },
            notificationBadgeAuthorized: {
              type: 0,
              desc: '允许微信通知带有标记的开关 仅 iOS 有效',
            },
            notificationSoundAuthorized: {
              type: 0,
              desc: '允许微信通知带有声音的开关 仅 iOS 有效',
            },
            bluetoothEnabled: {
              type: 0,
              desc: '蓝牙的系统开关',
            },
            locationEnabled: {
              type: 0,
              desc: '地理位置的系统开关',
            },
            wifiEnabled: {
              type: 0,
              desc: 'Wi-Fi 的系统开关',
            },
          },
        },
      },
    },
    canvasToTempFilePath: {
      status: 0,
      desc: '把当前画布指定区域的内容导出生成指定大小的图片',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasToTempFilePath.html',
        alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
      },
      body: {},
    },
    canvasPutImageData: {
      status: 0,
      desc: '将像素数据绘制到画布',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasPutImageData.html',
        alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
      },
      body: {},
    },
    canvasGetImageData: {
      status: 0,
      desc: '获取 canvas 区域隐含的像素数据。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/canvas/wx.canvasGetImageData.html',
        alipay: 'https://docs.alipay.com/mini/api/ui-canvas#a-namez4dtttamycreatecanvascontextcanvasid',
      },
      body: {},
    },
    stopBeaconDiscovery: {
      status: 0,
      desc: '停止搜索附近的 iBeacon 设备',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.stopBeaconDiscovery.html',
        alipay: 'https://docs.alipay.com/mini/api/yp5owa',
      },
      body: {},
    },
    startBeaconDiscovery: {
      status: 1,
      desc: '开始搜索附近的 iBeacon 设备',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.startBeaconDiscovery.html',
        alipay: 'https://docs.alipay.com/mini/api/cy1g7k',
      },
      body: {
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
    },
    onBeaconUpdate: {
      status: 0,
      desc: '监听 iBeacon 设备更新事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconUpdate.html',
        alipay: 'https://docs.alipay.com/mini/api/kvdg9y',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    onBeaconServiceChange: {
      status: 1,
      desc: '监听 iBeacon 服务状态变化事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.onBeaconServiceChange.html',
        alipay: 'https://docs.alipay.com/mini/api/rq1dl7',
      },
      body: {
        msg: '参数类型不同，wx: Function , alipay: Object',
      },
    },
    getBeacons: {
      status: 0,
      desc: '获取所有已搜索到的 iBeacon 设备',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/wx.getBeacons.html',
        alipay: 'https://docs.alipay.com/mini/api/yqleyc',
      },
      body: {},
    },
    writeBLECharacteristicValue: {
      status: 0,
      desc: '读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.writeBLECharacteristicValue.html',
        alipay: 'https://docs.alipay.com/mini/api/vmp2r4',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    onBLEConnectionStateChange: {
      status: 0,
      desc: '监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLEConnectionStateChange.html',
        alipay: 'https://docs.alipay.com/mini/api/utgyiu',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    onBLECharacteristicValueChange: {
      status: 0,
      desc: '监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.onBLECharacteristicValueChange.html',
        alipay: 'https://docs.alipay.com/mini/api/cdu501',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getBLEDeviceServices: {
      status: 0,
      desc: '获取蓝牙设备所有服务(service)',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html',
        alipay: 'https://docs.alipay.com/mini/api/uzsg75',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getBLEDeviceCharacteristics: {
      status: 0,
      desc: '获取蓝牙设备某个服务中所有特征值(characteristic)。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html',
        alipay: 'https://docs.alipay.com/mini/api/fmg9gg',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    startBluetoothDevicesDiscovery: {
      status: 0,
      desc: '开始搜寻附近的蓝牙外围设备',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html',
        alipay: 'https://docs.alipay.com/mini/api/ksew43',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    onBluetoothDeviceFound: {
      status: 1,
      desc: '监听寻找到新设备的事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothDeviceFound.html',
        alipay: 'https://docs.alipay.com/mini/api/mhzls9',
      },
      body: {
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
    },
    getBluetoothDevices: {
      status: 1,
      desc: '获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.getBluetoothDevices.html',
        alipay: 'https://docs.alipay.com/mini/api/pelizr',
      },
      body: {
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
    },
    onNetworkStatusChange: {
      status: 0,
      desc: '监听网络状态变化事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.onNetworkStatusChange.html',
        alipay: 'https://docs.alipay.com/mini/api/ympi0l',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getNetworkType: {
      status: 0,
      desc: '获取网络类型',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/network/wx.getNetworkType.html',
        alipay: 'https://docs.alipay.com/mini/api/network-status#mygetnetworktype',
      },
      body: {
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
    },
    setScreenBrightness: {
      status: 0,
      desc: '设置屏幕亮度',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.setScreenBrightness.html',
        alipay: 'https://docs.alipay.com/mini/api/ccf32t',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getScreenBrightness: {
      status: 0,
      desc: '获取屏幕亮度',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/screen/wx.getScreenBrightness.html',
        alipay: 'https://docs.alipay.com/mini/api/screen-brightness',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    makePhoneCall: {
      status: 1,
      desc: '拨打电话',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/phone/wx.makePhoneCall.html',
        alipay: 'https://docs.alipay.com/mini/api/macke-call',
      },
      body: {
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
    },
    stopAccelerometer: {
      status: 1,
      desc: '停止监听加速度数据。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/accelerometer/wx.stopAccelerometer.html',
        alipay: 'https://docs.alipay.com/mini/api/accelerometer',
      },
      body: {
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
    },
    onCompassChange: {
      status: 1,
      desc: '监听罗盘数据变化事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html',
        alipay: 'https://docs.alipay.com/mini/api/compass#a-name5i0ewaamyoncompasschangefunction-callback',
      },
      body: {
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
    },
    stopCompass: {
      status: 1,
      desc: '停止监听罗盘数据',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.stopCompass.html',
        alipay: 'https://docs.alipay.com/mini/api/xf671t',
      },
      body: {
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
    },
    stopGyroscope: {
      status: 1,
      desc: '停止监听陀螺仪数据。',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/gyroscope/wx.stopGyroscope.html',
        alipay: 'https://docs.alipay.com/mini/api/cpt55i',
      },
      body: {
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
    },
    scanCode: {
      status: 1,
      desc: '调起客户端扫码界面进行扫码',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html',
        alipay: 'https://docs.alipay.com/mini/api/scan',
      },
      body: {
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
    },
    saveFile: {
      status: 0,
      desc: '保存文件到本地',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html',
        alipay: 'https://docs.alipay.com/mini/api/xbll1q',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    removeSavedFile: {
      status: 0,
      desc: '删除本地缓存文件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html',
        alipay: 'https://docs.alipay.com/mini/api/dgi1fr',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getSavedFileList: {
      status: 0,
      desc: '获取保存的所有文件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html',
        alipay: 'https://docs.alipay.com/mini/api/cgohg1',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getSavedFileInfo: {
      status: 0,
      desc: '获取保存的文件信息',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html',
        alipay: 'https://docs.alipay.com/mini/api/qrx6ze',
      },
      body: {
        msg: '封装后支持',
      },
    },
    getFileInfo: {
      status: 0,
      desc: '获取文件信息',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html',
        alipay: 'https://docs.alipay.com/mini/api/file',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    openLocation: {
      status: 0,
      desc: '打开位置',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.openLocation.html',
        alipay: 'https://docs.alipay.com/mini/api/as9kin',
      },
      body: {},
    },
    getLocation: {
      status: 1,
      desc: '获取位置',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html',
        alipay: 'https://docs.alipay.com/mini/api/mkxuqd',
      },
      body: {
        msg: '参数缺失, 参数type的取值/默认值差异, 返回值缺失/差异',
        params: {
          props: {
            altitude: {
              type: 0,
              desc: '传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度',
            },
            type的取值: {
              type: 4,
              desc: 'wx: 默认值wgs84, alipay: 默认值0',
            },
          },
        },
        returnValue: {
          props: {
            speed: {
              type: 0,
              desc: '速度，单位 m/s',
            },
            altitude: {
              type: 0,
              desc: '高度，单位 m',
            },
            verticalAccuracy: {
              type: 0,
              desc: '垂直精度，单位 m（Android 无法获取，返回 0）',
            },
            error返回值差异: {
              type: 3,
              desc: "app未授权定位：alipay返回错误码11, wx返回errMsg：'getLocation:fail 1', app授权，小程序弹框询问权限时拒绝：alipay返回错误码2001；wx返回errMsg: “getLocation:fail authorize no response”",
            },
          },
        },
      },
    },
    createMapContext: {
      status: 1,
      desc: '创建 map 上下文 MapContext 对象',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html',
        alipay: 'https://docs.alipay.com/mini/api/ui-map',
      },
      body: {
        msg: '返回值对象方法缺失',
        returnValue: {
          props: {
            getRegion: {
              type: 0,
              desc: '获取当前地图的视野范围',
            },
            getScale: {
              type: 0,
              desc: '获取当前地图的缩放级别',
            },
            includePoints: {
              type: 0,
              desc: '缩放视野展示所有经纬度',
            },
          },
        },
      },
    },
    saveImageToPhotosAlbum: {
      status: 0,
      desc: '保存图片到系统相册不支持网络图片路径',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html',
        alipay: 'https://docs.alipay.com/mini/api/izfoiz',
      },
      body: {
        msg: '完全支持',
      },
    },
    previewImage: {
      status: 0,
      desc: '在新页面中全屏预览图片',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html',
        alipay: 'https://docs.alipay.com/mini/api/eei0av',
      },
      body: {},
    },
    compressImage: {
      status: 0,
      desc: '压缩图片接口，可选压缩质量',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.compressImage.html',
        alipay: 'https://docs.alipay.com/mini/api/ehndze',
      },
      body: {
        msg: '封装后可完全支持',
      },
    },
    chooseImage: {
      status: 1,
      desc: '从本地相册选择图片或使用相机拍照',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html',
        alipay: 'https://docs.alipay.com/mini/api/media-image#a-nameeh9ddfamychooseimage',
      },
      body: {
        msg: '返回值属性缺失',
        returnValue: {
          props: {
            tempFiles: {
              type: 0,
              desc: '图片的本地临时文件列表',
            },
          },
        },
      },
    },
    request: {
      status: 1,
      desc: '发起 HTTPS 网络请求',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
        alipay: 'https://docs.alipay.com/mini/api/owycmh',
      },
      body: {
        msg: '入参参数名称差异/参数缺失/返回值名称差异',
        params: {
          props: {
            header: {
              type: 1,
              desc: '设置请求的 header，header 中不能设置 Referer。content-type 默认为 application/json, wx: header, alipay: headers',
            },
            responseType: {
              type: 0,
              desc: '响应的数据类型, alipay缺失: responseType',
            },
            method合法值: {
              type: 0,
              desc: 'OPTIONS,HEAD,PUT,DELETE,TRACE,CONNECT',
            },
          },
        },
        returnValue: {
          props: {
            statusCode: {
              type: 1,
              desc: 'wx: statusCode, alipay: status',
            },
            header: {
              type: 1,
              desc: 'wx: header, alipay: headers',
            },
          },
        },
      },
    },
    downloadFile: {
      status: 1,
      desc: '下载文件资源到本地',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html',
        alipay: 'https://docs.alipay.com/mini/api/xr054r',
      },
      body: {
        msg: '参数缺失, 返回值属性值/方法缺失, 返回值名称差异',
        params: {
          props: {
            filePath: {
              type: 0,
              desc: '指定文件下载后存储的路径',
            },
          },
        },
        returnValue: {
          props: {
            tempFilePath: {
              type: 1,
              desc: '临时文件路径, wx: tempFilePath, alipay: apFilePath',
            },
            filePath: {
              type: 0,
              desc: '用户文件路径。传入 filePath 时会返回，跟传入的 filePath 一致',
            },
            statusCode: {
              type: 0,
              desc: '开发者服务器返回的 HTTP 状态码',
            },
            abort: {
              type: 0,
              desc: '中断下载任务',
            },
            offHeadersReceived: {
              type: 0,
              desc: '监听下载进度变化事件',
            },
            offProgressUpdate: {
              type: 0,
              desc: '取消监听下载进度变化事件',
            },
            onHeadersReceived: {
              type: 0,
              desc: '监听 HTTP Response Header 事件。会比请求完成事件更早',
            },
            onProgressUpdate: {
              type: 0,
              desc: '取消监听 HTTP Response Header 事件',
            },
          },
        },
      },
    },
    uploadFile: {
      status: 1,
      desc: '上传本地资源到开发者服务器',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html',
        alipay: 'https://docs.alipay.com/mini/api/kmq4hc',
      },
      body: {
        msg: '参数名称差异, 返回值方法缺失',
        params: {
          props: {
            name: {
              type: 1,
              desc: '文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容, wx: name, alipay: fileName',
            },
          },
        },
        returnValue: {
          props: {
            abort: {
              type: 0,
              desc: 'missing',
            },
            offHeadersReceived: {
              type: 0,
              desc: 'missing',
            },
            offProgressUpdate: {
              type: 0,
              desc: 'missing',
            },
            onHeadersReceived: {
              type: 0,
              desc: 'missing',
            },
            onProgressUpdate: {
              type: 0,
              desc: 'missing',
            },
          },
        },
      },
    },
    connectSocket: {
      status: 1,
      desc: '创建一个 WebSocket 的连接',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.connectSocket.html',
        alipay: 'https://docs.alipay.com/mini/api/vx19c3',
      },
      body: {
        msg: '参数缺失, 返回值缺失',
        params: {
          props: {
            protocols: {
              type: 0,
              desc: '子协议数组',
            },
            tcpNoDelay: {
              type: 0,
              desc: '建立 TCP 连接的时候的 TCP_NODELAY 设置',
            },
          },
        },
        returnValue: {
          props: {
            close: {
              type: 0,
              desc: 'missing',
            },
            cloonClosese: {
              type: 0,
              desc: 'missing',
            },
            onError: {
              type: 0,
              desc: 'missing',
            },
            onMessage: {
              type: 0,
              desc: 'missing',
            },
            onOpen: {
              type: 0,
              desc: 'missing',
            },
            send: {
              type: 0,
              desc: 'missing',
            },
          },
        },
      },
    },
    onSocketOpen: {
      status: 1,
      desc: '监听WebSocket连接打开事件',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketOpen.html',
        alipay: 'https://docs.alipay.com/mini/api/itm5og',
      },
      body: {
        msg: '返回值属性值缺失',
        returnValue: {
          props: {
            header: {
              type: 0,
              desc: '连接成功的 HTTP 响应 Header',
            },
          },
        },
      },
    },
    closeSocket: {
      status: 1,
      desc: '关闭 WebSocket 连接',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.closeSocket.html',
        alipay: 'https://docs.alipay.com/mini/api/network',
      },
      body: {
        msg: '参数缺失',
        params: {
          props: {
            code: {
              type: 0,
              desc: '一个数字值表示关闭连接的状态号，表示连接被关闭的原因。',
            },
            reason: {
              type: 0,
              desc: '一个可读的字符串，表示连接被关闭的原因。这个字符串必须是不长于 123 字节的 UTF-8 文本（不是字符）',
            },
          },
        },
      },
    },
    login: {
      status: 0,
      desc: '调用接口获取登录凭证（code）',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html',
        alipay: 'https://docs.alipay.com/mini/api/openapi-authorize',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getUserInfo: {
      status: 1,
      desc: '获取用户信息',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html',
        alipay: 'https://docs.alipay.com/mini/api/userinfo',
      },
      body: {
        msg: '命名不同, 参数缺失, 返回值属性缺失',
        params: {
          props: {
            getUserInfo: {
              type: 1,
              desc: 'wx: getUserInfo, alipay: getAuthUserInfo',
            },
            withCredentials: {
              type: 0,
              desc: '是否带上登录态信息',
            },
            lang: {
              type: 0,
              desc: '显示用户信息的语言',
            },
          },
        },
        returnValue: {
          props: {
            userInfo: {
              type: 0,
              desc: '用户信息对象，不包含 openid 等敏感信息',
            },
            rawData: {
              type: 0,
              desc: '不包括敏感信息的原始数据字符串，用于计算签名',
            },
            signature: {
              type: 0,
              desc: '使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息',
            },
            encryptedData: {
              type: 0,
              desc: '包括敏感数据在内的完整用户信息的加密数据',
            },
            iv: {
              type: 0,
              desc: '加密算法的初始向量',
            },
            cloudID: {
              type: 0,
              desc: '敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据',
            },
          },
        },
      },
    },
    reportAnalytics: {
      status: 0,
      desc: '自定义分析数据上报接口',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/data-analysis/wx.reportAnalytics.html',
        alipay: 'https://docs.alipay.com/mini/api/report',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    requestPayment: {
      status: 2,
      desc: '发起支付',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html',
        alipay: '',
      },
      body: {
        msg: '支付宝与微信支付功能差异较大，请参考支付宝支付文档做兼容处理',
      },
    },
    authorize: {
      status: 1,
      desc: '提前向用户发起授权请求',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html',
        alipay: 'https://docs.alipay.com/mini/api/openapi-authorize',
      },
      body: {
        msg: '命名不同wx: authorize, alipay: getAuthCode, 参数差异',
        params: {
          props: {
            scope: {
              type: 1,
              desc: '授权类型, wx: scope, alipay: scopes, 且取值不同',
            },
          },
        },
      },
    },
    getSetting: {
      status: 0,
      desc: '获取用户的当前设置',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html',
        alipay: 'https://docs.alipay.com/mini/api/xmk3ml',
      },
      body: {},
    },
    setStorageSync: {
      status: 0,
      desc: '将数据存储在本地缓存中指定的 key 中',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html',
        alipay: 'https://docs.alipay.com/mini/api/cog0du',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    removeStorageSync: {
      status: 0,
      desc: '从本地缓存中同步移除指定 key',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.removeStorageSync.html',
        alipay: 'https://docs.alipay.com/mini/api/ytfrk4',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    getStorageSync: {
      status: 0,
      desc: '获取缓存数据',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.getStorageSync.html',
        alipay: 'https://docs.alipay.com/mini/api/ox0wna',
      },
      body: {
        msg: '封装后完全支持',
      },
    },
    createSelectorQuery: {
      status: 1,
      desc: '返回一个 SelectorQuery 对象实例',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html',
        alipay: 'https://docs.alipay.com/mini/api/selector-query',
      },
      body: {
        msg: '返回值方法缺失',
        returnValue: {
          props: {
            in: {
              type: 0,
              desc: '将选择器的选取范围更改为自定义组件 component 内。（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）',
            },
          },
        },
      },
    },
    showToast: {
      status: 1,
      desc: '显示消息提示框',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html',
        alipay: 'https://docs.alipay.com/mini/api/fhur8f',
      },
      body: {
        msg: '入参参数差异/缺失',
        params: {
          props: {
            title: {
              type: 1,
              desc: '提示的内容, wx: title, alipay: content',
            },
            icon: {
              type: 1,
              desc: '图标, wx: icon, alipay: type',
            },
            image: {
              type: 0,
              desc: '自定义图标的本地路径，image 的优先级高于 icon',
            },
            mask: {
              type: 0,
              desc: '是否显示透明蒙层，防止触摸穿透',
            },
            icon的合法值: {
              type: 0,
              desc: '显示加载图标，此时 title 文本最多显示 7 个汉字长度',
            },
          },
        },
      },
    },
    showModal: {
      status: 1,
      desc: '显示模态对话框',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html',
        alipay: 'https://docs.alipay.com/mini/api/lt3uqc',
      },
      body: {
        msg: '入参参数名称差异/参数缺失/返回值名称差异',
        params: {
          props: {
            confirmText: {
              type: 1,
              desc: '确认按钮的文字，最多 4 个字符, wx: confirmText, alipay: confirmButtonText',
            },
            cancelText: {
              type: 1,
              desc: '取消按钮的文字，最多 4 个字符, wx: cancelText, alipay: cancelButtonText',
            },
            showCancel: {
              type: 0,
              desc: '是否显示取消按钮',
            },
            cancelColor: {
              type: 0,
              desc: '取消按钮的文字颜色，必须是 16 进制格式的颜色字符串',
            },
            confirmColor: {
              type: 0,
              desc: '确认按钮的文字颜色，必须是 16 进制格式的颜色字符串',
            },
          },
        },
        returnValue: {
          props: {
            confirm: {
              type: 1,
              desc: 'wx: 为true时，表示用户点击了确定按钮, alipay: 点击confirm返回true，点击cancel返回false',
            },
            cancel: {
              type: 1,
              desc: 'wx: 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭）',
            },
          },
        },
      },
    },
    showLoading: {
      status: 1,
      desc: '显示 loading 提示框',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showLoading.html',
        alipay: 'https://docs.alipay.com/mini/api/bm69kb',
      },
      body: {
        msg: '入参参数名称差异/参数缺失',
        params: {
          props: {
            title: {
              type: 1,
              desc: '提示的内容, wx: title, alipay: content',
            },
            mask: {
              type: 0,
              desc: '是否显示透明蒙层，防止触摸穿透',
            },
          },
        },
      },
    },
    showActionSheet: {
      status: 1,
      desc: '显示操作菜单',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showActionSheet.html',
        alipay: 'https://docs.alipay.com/mini/api/hr092g',
      },
      body: {
        msg: '入参参数名称差异/参数缺失',
        params: {
          props: {
            itemList: {
              type: 1,
              desc: '按钮的文字数组, wx: itemList(数组长度最大为6), alipay: items',
            },
            itemColor: {
              type: 0,
              desc: '按钮的文字颜色',
            },
          },
        },
      },
    },
    hideToast: {
      status: 0,
      desc: '隐藏消息提示框',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideToast.html',
        alipay: 'https://docs.alipay.com/mini/api/iygd4e',
      },
      body: {},
    },
    hideLoading: {
      status: 0,
      desc: '隐藏 loading 提示框',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.hideLoading.html',
        alipay: 'https://docs.alipay.com/mini/api/nzf540',
      },
      body: {},
    },
    showNavigationBarLoading: {
      status: 0,
      desc: '在当前页面显示导航条加载动画',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.showNavigationBarLoading.html',
        alipay: 'https://docs.alipay.com/mini/api/lydg2a',
      },
      body: {},
    },
    setNavigationBarTitle: {
      status: 0,
      desc: '动态设置当前页面的标题',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.setNavigationBarTitle.html',
        alipay: 'https://docs.alipay.com/mini/api/xwq8e6',
      },
      body: {},
    },
    hideNavigationBarLoading: {
      status: 0,
      desc: '在当前页面隐藏导航条加载动画',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/navigation-bar/wx.hideNavigationBarLoading.html',
        alipay: 'https://docs.alipay.com/mini/api/ncgsga',
      },
      body: {},
    },
    setTabBarStyle: {
      status: 0,
      desc: '动态设置 tabBar 的整体样式',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html',
        alipay: 'https://docs.alipay.com/mini/api/wcf0sv',
      },
      body: {},
    },
    setTabBarItem: {
      status: 0,
      desc: '动态设置 tabBar 某一项的内容',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html',
        alipay: 'https://docs.alipay.com/mini/api/zu37bk',
      },
      body: {},
    },
    stopPullDownRefresh: {
      status: 0,
      desc: '停止当前页面下拉刷新',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/pull-down-refresh/wx.stopPullDownRefresh.html',
        alipay: 'https://docs.alipay.com/mini/api/pmhkbb',
      },
      body: {},
    },
    pageScrollTo: {
      status: 1,
      desc: '将页面滚动到目标位置',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/scroll/wx.pageScrollTo.html',
        alipay: 'https://docs.alipay.com/mini/api/scroll#mypagescrollto',
      },
      body: {
        msg: '参数缺失',
        params: {
          props: {
            duration: {
              type: 0,
              desc: '滚动动画的时长，单位 ms',
            },
          },
        },
      },
    },
    createAnimation: {
      status: 0,
      desc: '创建一个动画实例 animation',
      url: {
        wechat: 'https://developers.weixin.qq.com/miniprogram/dev/api/ui/animation/wx.createAnimation.html',
        alipay: 'https://docs.alipay.com/mini/api/ui-animation#a-namen93ndhamycreateanimation',
      },
      body: {},
    },
  },
}
