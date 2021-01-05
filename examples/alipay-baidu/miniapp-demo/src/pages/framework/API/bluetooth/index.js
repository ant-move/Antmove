Page({
  data: {
    devid: '71:54:7B:A0:96:3B', // 若这里不输入默认值，请在输入框输入
    serid: '',
    charid: '',
    alldev: [{ deviceId: '' }],
  },
  onLoad() {
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res.platform,
        })
        if (this.data.systemInfo !== 'Android') {
          my.redirectTo({
            url: '../ios-bluetooth/ios-bluetooth',
          })
        }
      },
      fail: () => {
        my.alert({ content: '获取手机设备信息失败，请重现尝试！' })
      },
    })
  },

  // 获取本机蓝牙开关状态
  openBluetoothAdapter() {
    my.openBluetoothAdapter({
      success: (res) => {
        if (!res.isSupportBLE) {
          console.log('openBluetoothAdapter', '您的手机蓝牙暂不可用')
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' })
          return
        }
        console.log('openBluetoothAdapter', '初始化成功！')
        my.alert({
          content: `初始化成功！${JSON.stringify(res)}`,
        })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },

  closeBluetoothAdapter() {
    my.closeBluetoothAdapter({
      success: () => {
        my.alert({ content: '关闭蓝牙成功！' })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  getBluetoothAdapterState() {
    my.getBluetoothAdapterState({
      success: (res) => {
        if (!res.available) {
          my.alert({ content: '抱歉，您的手机蓝牙暂不可用' })
          return
        }
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  // 扫描蓝牙设备
  startBluetoothDevicesDiscovery() {
    my.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      interval: 3000,
      success: () => {
        my.onBluetoothDeviceFound({
          success: (res) => {
            for (let i = 0; i < res.devices.length - 1; i++) {
              if (res.devices[i].name === 'Blank') {
                this.setData({
                  devid: res.devices[i].deviceId,
                })
                my.alert({ content: `监听新设备${JSON.stringify(res)}` })
              }
              // my.alert({ content: '监听新设备' + JSON.stringify(res) });
            }
          },
          fail: (error) => {
            my.alert({ content: `监听新设备失败${JSON.stringify(error)}` })
          },
        })
      },
      fail: (error) => {
        my.alert({ content: `启动扫描失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  // 扫描指定服务的设备
  specifiedBluetoothDevicesDiscovery() {
    my.startBluetoothDevicesDiscovery({
      services: ['0000fff0-0000-1000-8000-00805f9b34fb'],
      interval: '3000',
      success: () => {
        my.onBluetoothDeviceFound({
          success: (res) => {
            my.alert({ content: `监听新设备${JSON.stringify(res)}` })
          },
          fail: (error) => {
            my.alert({ content: `监听新设备失败${JSON.stringify(error)}` })
          },
        })
      },
      fail: (error) => {
        my.alert({ content: `启动扫描失败${JSON.stringify(error)}` })
      },
    })
  },
  // 停止扫描
  stopBluetoothDevicesDiscovery() {
    my.stopBluetoothDevicesDiscovery({
      success: () => {
        my.offBluetoothDeviceFound()
        my.alert({ content: '操作成功！' })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  // 停止监听发现新设备
  offBluetoothDeviceFound() {
    my.offBluetoothDeviceFound()
  },
  // 获取正在连接中的设备
  getConnectedBluetoothDevices() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有在连接中的设备！' })
          return
        }
        my.alert({
          content: JSON.stringify(res),
        })
        this.setData({
          devid: res.devices[0].deviceId,
        })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },

  // 获取所有搜索到的设备
  getBluetoothDevices() {
    my.getBluetoothDevices({
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },

  bindKeyInput(e) {
    this.setData({
      devid: e.detail.value,
    })
  },

  // 连接设备
  connectBLEDevice() {
    my.connectBLEDevice({
      deviceId: this.data.devid,
      success: () => {
        my.alert({ content: '连接成功' })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
    })
  },
  // 断开连接
  disconnectBLEDevice() {
    my.disconnectBLEDevice({
      deviceId: this.data.devid,
      success: () => {
        my.alert({ content: '断开连接成功！' })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  // 获取连接设备的server
  getBLEDeviceServices() {
    my.getConnectedBluetoothDevices({
      success: (result) => {
        if (result.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' })
          return
        }
        my.getBLEDeviceServices({
          deviceId: this.data.devid,
          success: (res) => {
            my.alert({
              content: JSON.stringify(res),
            })
            this.setData({
              serid: res.services[0].serviceId,
            })
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error) })
          },
          complete: () => {
            my.showToast({ content: 'complete回调' })
          },
        })
      },
    })
  },
  // 获取连接设备的charid
  getBLEDeviceCharacteristics() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' })
          return
        }
        this.setData({
          devid: res.devices[0].deviceId,
        })
        my.getBLEDeviceCharacteristics({
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          // ios模拟设备服务(可指定对应serverId，获取到charid后会默认保存第一个)
          // serviceId:"1111",
          success: (result) => {
            my.alert({ content: JSON.stringify(result) })
            this.setData({
              charid: result.characteristics[0].characteristicId,
            })
          },
          fail: (error) => {
            my.alert({ content: JSON.stringify(error) })
          },
          complete: () => {
            my.showToast({ content: 'complete回调' })
          },
        })
      },
    })
  },
  // 读写数据
  readBLECharacteristicValue() {
    my.readBLECharacteristicValue({
      deviceId: this.data.devid,
      // serviceId:this.data.serid,
      // characteristicId:this.data.charid,
      // 1、ios读取测试（需要开启read的权限才能读取到）
      // serviceId: "0000fff0-0000-1000-8000-00805f9b34fb",
      // characteristicId: "000036F8-0000-1000-8000-00805f9b34fb",
      serviceId: '00001800-0000-1000-8000-00805f9b34fb',
      characteristicId: '00002a00-0000-1000-8000-00805f9b34fb',
      // 2、安卓读取服务（需要通道支持权限才能读取到）
      // serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
      // characteristicId:'00002a38-0000-1000-8000-00805f9b34fb',
      success: (res) => {
        my.alert({ content: JSON.stringify(res) })
      },
      fail: (error) => {
        my.alert({ content: `读取失败${JSON.stringify(error)}` })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },

  writeBLECharacteristicValue() {
    my.writeBLECharacteristicValue({
      deviceId: this.data.devid,
      //    serviceId:this.data.serid,
      //    characteristicId:this.data.charid,
      // 1、ios写入测试（需要开启write权限才能读取到）
      // serviceId: "0000fff0-0000-1000-8000-00805f9b34fb",
      // characteristicId: "000036F8-0000-1000-8000-00805f9b34fb",
      serviceId: '00001800-0000-1000-8000-00805f9b34fb',
      characteristicId: '00002a00-0000-1000-8000-00805f9b34fb',
      // 2、安卓写入服务
      // serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
      // characteristicId:'00002a39-0000-1000-8000-00805f9b34fb',
      value: 'ABCD',
      success: () => {
        my.alert({ content: '写入数据成功！' })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  notifyBLECharacteristicValueChange() {
    my.getConnectedBluetoothDevices({
      success: (res) => {
        if (res.devices.length === 0) {
          my.alert({ content: '没有已连接的设备' })
          return
        }
        this.setData({
          devid: res.devices[0].deviceId,
        })

        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: this.data.devid,
          //    serviceId:this.data.serid,
          //    characteristicId:this.data.charid,
          // 1、获取indicate服务监听
          // serviceId:'0000fff0-0000-1000-8000-00805f9b34fb',
          // characteristicId:'0000fff4-0000-1000-8000-00805f9b34fb',

          // 2、普通服务特征值监听
          // serviceId: '0000fff0-0000-1000-8000-00805f9b34fb',
          // characteristicId: '000036F8-0000-1000-8000-00805f9b34fb',
          serviceId: '00001800-0000-1000-8000-00805f9b34fb',
          characteristicId: '00002a00-0000-1000-8000-00805f9b34fb',

          // 3、ios普通特征值监听
          //    serviceId: "abcd",
          //    characteristicId: "36f8",

          // 4、ios测试indicate服务监听
          //   serviceId: "1111",
          //   characteristicId: "36F2",

          success: () => {
            // 监听特征值变化的事件
            my.onBLECharacteristicValueChange({
              success: (result) => {
                my.alert({ content: `特征值变化：${JSON.stringify(result)}` })
              },
            })
            my.alert({ content: '监听成功' })
          },
          fail: (error) => {
            my.alert({ content: `监听失败${JSON.stringify(error)}` })
          },
          complete: () => {
            my.showToast({ content: 'complete回调' })
          },
        })
      },
    })
  },
  offBLECharacteristicValueChange() {
    my.offBLECharacteristicValueChange()
  },
  // 其他事件
  bluetoothAdapterStateChange() {
    my.onBluetoothAdapterStateChange({
      success: (res) => {
        my.alert({ content: `本机蓝牙状态变化：${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  offBluetoothAdapterStateChange() {
    my.offBluetoothAdapterStateChange()
  },

  BLEConnectionStateChanged() {
    my.onBLEConnectionStateChanged({
      success: (res) => {
        my.alert({ content: `连接状态变化：${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: JSON.stringify(error) })
      },
      complete: () => {
        my.showToast({ content: 'complete回调' })
      },
    })
  },
  offBLEConnectionStateChanged() {
    my.offBLEConnectionStateChanged()
  },
})
