// index.js
// 获取应用实例

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    apiList: ['startBeaconDiscovery', 'stopBeaconDiscovery','onBeaconUpdate','onBeaconServiceChange','getBeacons','writeBLECharacteristicValue','onBLEConnectionStateChange','onBLECharacteristicValueChange','getBLEDeviceServices','getBLEDeviceCharacteristics','addPhoneContact'
  ,'startBluetoothDevicesDiscovery','onBluetoothDeviceFound','getBluetoothDevices','setClipboardData','getClipboardData','onNetworkStatusChange','setScreenBrightness','getScreenBrightness','scanCode','stopGyroscope','onCompassChange','stopCompass','stopAccelerometer','makePhoneCall']
  },
  // 事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function () {},
  onShow () {},
  currentTap (e) {
    let curApi = e.currentTarget.dataset.item;
    switch (curApi) {
      case 'startBeaconDiscovery':
        {
          wx.startBeaconDiscovery({
            uuids: ['HUWEI P20'],
            ignoreBluetoothAvailable: false
          });
          break;
        }     
      case 'stopBeaconDiscovery':
        {
          wx.stopBeaconDiscovery({
            success: (res) => {
              console.log(res);
            },
            fail: (err)=>{
              console.log(err);
            }
          });
          break;
        }     
      case 'onBeaconUpdate':
        {
          wx.onBeaconUpdate(
            function (res) {
                console.log(res);
              },             
            );
          break;
        } 
      case 'onBeaconServiceChange':
        {
          wx.onBeaconServiceChange(
            (res) => {
                console.log(res);
              }             
            );
          break;
        }
      case 'getBeacons':
        {
          wx.getBeacons({
            success: (res) => {
              console.log(res);
            },
            fail: (res) => {
              console.log(res);
            },
            complete: (res)=>{
              console.log(res);
            }
          });
          break;
        }
      case 'writeBLECharacteristicValue': {
          const buffer = new ArrayBuffer(1);
          const dataView = new DataView(buffer);
          dataView.setUint8(0, 0);
          wx.openBluetoothAdapter({
            success (res) {
              console.log(res);
            },
            fail (res) {
              console.log(res);
            }
          });
          wx.getBluetoothDevices({
            success: (res)=>{
              console.log(res);
            },
            fail: (err)=>{
              console.log(err);
            }
          });
          wx.writeBLECharacteristicValue({
            deviceId: 'HUWEI P20',
            serviceId: 'HUWEI P20',
            characteristicId: 'HUWEI P20',
            value: buffer,
            success (res) {
              console.log('123:', res);
            },
            fail (res) {
              console.log(res);
            }
          });
          break;
      }   
      case 'readBLECharacteristicValue':
      {
        wx.readBLECharacteristicValue({
          deviceId: '123',
          serviceId: '123',
          characteristicId: '123',
          success (res) {
            console.log('readBLECharacteristicValue:', res.errCode);
          },
          fail (res) {
            console.log(res);
          }
        });
        break;
      }  
      case 'onBLEConnectionStateChange': {
        wx.onBLEConnectionStateChange(function (res) {
          console.log(res);
        });
        break;
      }  
      case 'onBLECharacteristicValueChange': {
        wx.onBLECharacteristicValueChange(
          function (res) {
            console.log(res);
          }
        );  
        break;
      }
      case 'getBLEDeviceServices': {
        wx.getBLEDeviceServices({
          deviceId: 'HUWEI P20',
          success (res) {
            console.log('device services:', res.services);
          },
          fail (res) {
            console.log(res);
          }
        });
        break;
      } 
      case 'getBLEDeviceCharacteristics': {
        wx.getBLEDeviceCharacteristics({
          deviceId: 'HUWEI P20',
          serviceId: '123',
          success (res) {
            console.log('device characteristics:', res.characteristics);
          },
          fail (res) {
            console.log(res);
          }
        });
        break;
      } 
      case 'addPhoneContact': {
        wx.addPhoneContact({
          firstName: 'shi',
          weChatNumber: '123456',
          success: (res)=>{
            console.log(res);
          },
          fail: (res)=>{
            console.log(res);
          }
        });
        break;
      }
      case 'startBluetoothDevicesDiscovery': {
        wx.openBluetoothAdapter({
          success (res) {
            console.log(res);
          },
          fail (res) {
            console.log(res);
          }
        });
        wx.startBluetoothDevicesDiscovery({
          services: ['FEE7'],
          success (res) {
            console.log(res);
          },
          fail (res) {
            console.log(res);
          }
        });
        break;
      }
      case 'onBluetoothDeviceFound': {
       
        wx.onBluetoothDeviceFound(function (devices) {
          console.log('new device list has founded');
          console.dir(devices);
          // console.log(ab2hex(devices[0].advertisData))
        });
        break;
      }
      case 'getBluetoothDevices': {
        wx.openBluetoothAdapter({
          success (res) {
            console.log(res);
          },
          fail (res) {
            console.log(res);
          }
        });
        wx.getBluetoothDevices({
          success: (res)=>{
            console.log(res);
          },
          fail: (err)=>{
            console.log(err);
          }
        });
        break;
      }
      case 'onCompassChange': {
        wx.onCompassChange(function (res) {
          console.log(res);
        });
        break;
      }
      case 'stopCompass': {
        wx.stopCompass({
          success () {
            console.log('success');
          },
          fail () {
            console.log('fail');
          }
        });
        break;
      }
      case 'setClipboardData': {
        wx.setClipboardData({
          data: 'data'
        });
        break;
      }
      case 'getClipboardData': {
        wx.getClipboardData({
          success: (res)=>{
            console.log(res);
          }
        });
        break;
      }
      case 'stopAccelerometer': {
        wx.stopAccelerometer({
          success () {
            console.log('success');
          },
          fail () {
            console.log('fail');
          }
        });
        break;
      }
      case 'makePhoneCall': {
        wx.makePhoneCall({
          phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
        });
        break;
      }
      case 'onNetworkStatusChange': {
        wx.onNetworkStatusChange(function (res) {
          console.log(res);
        });
        break;
      }
      case 'setScreenBrightness': {
        wx.setScreenBrightness({
          value: 0.5,
          success: (res) => {
            console.log(res);
          },
          // fail: (res) => {
          // },
        });
        break;
      }
      case 'getScreenBrightness': {
        wx.getScreenBrightness({
          success: (res)=>{
            console.log(res);
          },
          fail:(res)=>{
            console.log(res)
          },
          complete:(res)=>{
            console.log(res)
          }
        });
        break;
      }
      case 'scanCode': {
        wx.scanCode({
          // scanType:['barCode', 'qrCode'],
          success (res) {
            console.log(res);
          },
          fail () {
            console.log('fail');
          }
        });
        break;
      }
      case 'stopGyroscope': {
        wx.stopGyroscope({
          success () {
            console.log('success');
          },
          fail () {
            console.log('fail');
          }
        });
        break;
      }
      default:
        console.log();
    }
  }
});