# API列表

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534720691.png)

> 目前不支持在开发者工具上进行调试，需要使用真机才能正常调用小程序蓝牙接口

## my.openBluetoothAdapter

初始化小程序蓝牙模块，生效周期为调用 `my.openBluetoothAdapter` 至调用 `my.closeBluetoothAdapter` 或小程序被销毁为止。 在小程序蓝牙适配器模块生效期间，开发者可以正常调用下面的小程序API，并会收到蓝牙模块相关的 on 事件回调。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| autoClose | Boolean | 否 | 不传的话默认是true，表示是否在离开当前页面时自动断开蓝牙(仅对android有效) | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| isSupportBLE | Boolean | 是否支持 BLE |

### 错误码描述
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 12 | 蓝牙未打开 | |
| 13 | 与系统服务的链接暂时丢失 | |
| 14 | 未授权高德使用蓝牙功能 | |
| 15 | 未知错误 | |

### 示例代码

```javascript
my.openBluetoothAdapter({
  success: (res) => {
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 在调用 `my.openBluetoothAdapter` API之前，调用小程序其它蓝牙模块相关API，API会返回错误，错误码:10000,错误描述:未初始化蓝牙适配器
1. `bug`: 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 `my.openBluetoothAdapter` 会返回错误，错误码见错误码描述；此时小程序蓝牙模块已经初始化完成，可通过 `my.onBluetoothAdapterStateChange` 监听手机蓝牙状态的改变

## my.closeBluetoothAdapter
关闭本机蓝牙模块。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.closeBluetoothAdapter({
  success: (res) => {
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 调用该方法将断开所有已建立的蓝牙连接并释放系统资源。
1. `tip`: 建议在结束小程序蓝牙流程时调用，与 `my.openBluetoothAdapter` 成对调用。
1. `tip`: 调用 `my.closeBluetoothAdapter` 释放资源为异步操作，不建议使用 `my.closeBluetoothAdapter` 和 `my.openBluetoothAdapter` 作为异常处理流程（相当于先关闭再开启，重新初始化，效率低，易发生线程同步问题）

## my.getBluetoothAdapterState

获取本机蓝牙模块状态。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| discovering | Boolean | 是否正在搜索设备 |
| available | Boolean | 蓝牙模块是否可用(需支持 BLE 并且蓝牙是打开状态) |

### 示例代码

```javascript
my.getBluetoothAdapterState({
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
## my.startBluetoothDevicesDiscovery

开始搜寻附近的蓝牙外围设备。搜索结果将在 `my.onBluetoothDeviceFound` 事件中返回。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| services | Array | 否 | 蓝牙设备主 service 的 uuid 列表 | v8.90 |
| allowDuplicatesKey | Boolean | 否 | 是否允许重复上报同一设备， 如果允许重复上报，则onBluetoothDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同 | v8.90 |
| interval | Integer | 否 | 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.startBluetoothDevicesDiscovery({
  services: ['fff0'],
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 该操作比较耗费系统资源，请在搜索并连接到设备后调用 stop 方法停止搜索。

## my.stopBluetoothDevicesDiscovery
停止搜寻附近的蓝牙外围设备。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.stopBluetoothDevicesDiscovery({
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
## my.getBluetoothDevices
获取所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| devices | Array | 已发现的设备列表 |

#### device对象
| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| name | String | 蓝牙设备名称，某些设备可能没有 | v8.90 |
| deviceName(兼容旧版本) | String | 值与 name 一致 | v8.90 |
| localName | String | 广播设备名称 | v8.90 |
| deviceId | String | 设备 Id | v8.90 |
| RSSI | Number | 设备信号强度 | v8.90 |
| advertisData | Hex String | 设备的广播内容 | v8.90 |
| manufacturerData | Hex String | 设备的manufacturerData | v8.90 |

### 示例代码

```javascript
my.getBluetoothDevices({
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 模拟器可能无法获取 advertisData 及 RSSI，请使用真机调试
1. `tip`: 开发者工具和 Android 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid; 因此 deviceId 不能硬编码到代码中，需要分平台处理，iOS可根据设备属性（ localName/advertisData/manufacturerData 等属性）进行动态匹配。

## my.getConnectedBluetoothDevices

获取处于已连接状态的设备。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| services | Array | 否 | 蓝牙设备主 service 的 uuid 列表 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| devices | Array | 已连接的设备列表 |

#### device对象
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| name | String | 蓝牙设备名称，某些设备可能没有 |
| deviceName(兼容旧版本) | String | 值与 name 一致 |
| localName | String | 广播设备名称 |
| deviceId | String | 设备 Id |
| RSSI | Number | 设备信号强度 |
| advertisData | Hex String | 设备的广播内容 |
| manufacturerData | Hex String | 设备的manufacturerData |

### 示例代码

```javascript
my.getConnectedBluetoothDevices({
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 如果传递的 services 为空，则返回所有的已经连接的设备。
1. `tip`: Android 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。因此deviceId不能硬编码到代码中，需要区分处理。

## my.connectBLEDevice
连接低功耗蓝牙设备。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备id | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.connectBLEDevice({
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: deviceId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 若小程序在之前已有搜索过某个蓝牙设备，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
1. `tip`: 若指定的蓝牙设备已经连接，重复连接直接返回成功。

## my.disconnectBLEDevice
断开与低功耗蓝牙设备的连接。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备id | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.disconnectBLEDevice({
  deviceId: deviceId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 蓝牙连接随时可能断开，建议监听 `my.onBLEConnectionStateChanged` 回调事件，当蓝牙设备断开时按需执行重连操作
1. `tip`: 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回10006错误，详见错误码，建议进行重连操作

## my.writeBLECharacteristicValue
向低功耗蓝牙设备特征值中写入数据。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备 id，参考 device 对象 | v8.90 |
| serviceId | String | 是 | 蓝牙特征值对应 service 的 uuid | v8.90 |
| characteristicId | String | 是 | 蓝牙特征值的 uuid | v8.90 |
| value | Hex String | 是 | 蓝牙设备特征值对应的值，16进制字符串，限制在20字节内 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |


### 示例代码

```javascript
my.writeBLECharacteristicValue({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  value: 'fffe',
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 设备的特征值必须支持 write 才可以成功调用，具体参照 characteristic 的 properties 属性。
1. `tip`: 写入的二进制数据需要进行 hex 编码。

## my.readBLECharacteristicValue
读取低功耗蓝牙设备特征值中的数据。调用后在 `my.onBLECharacteristicValueChange()` 事件中接收数据返回。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备 id，参考 device 对象 | v8.90 |
| serviceId | String | 是 | 蓝牙特征值对应 service 的 uuid | v8.90 |
| characteristicId | String | 是 | 蓝牙特征值的 uuid | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| characteristic | Object | 设备特征值信息 |

#### characteristic对象
蓝牙设备characteristic(特征值)信息

| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| characteristicId | String | 蓝牙设备特征值的 uuid | v8.90 |
| serviceId | String | 蓝牙设备特征值对应服务的 uuid | v8.90 |
| value | Hex String | 蓝牙设备特征值的value | v8.90 |

### 示例代码

```javascript
my.readBLECharacteristicValue({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 设备的特征值必须支持read才可以成功调用，具体参照 characteristic 的 properties 属性
1. `tip`: 并行多次调用读写接口存在读写失败的可能性。
1. `tip`: 如果读取超时，错误码 10015，`my.onBLECharacteristicValueChange` 接口之后可能返回数据，需要接入方酌情处理。

## my.notifyBLECharacteristicValueChange
启用低功耗蓝牙设备特征值变化时的 notify 功能。注意：设备的特征值必须支持 notify/indicate 才可以成功调用，具体参照 characteristic 的 properties 属性 另外，必须先启用 notify 才能监听到设备 characteristicValueChange 事件。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备 id，参考 device 对象 | v8.90 |
| serviceId | String | 是 | 蓝牙特征值对应 service 的 uuid | v8.90 |
| characteristicId | String | 是 | 蓝牙特征值的 uuid | v8.90 |
| descriptorId | String | 否 | notify 的 descriptor 的 uuid （只有android 会用到，非必填，默认值00002902-0000-10008000-00805f9b34fb） | v8.90 |
| state | Boolean | 否 | 是否启用notify或indicate | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.notifyBLECharacteristicValueChange({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 订阅操作成功后需要设备主动更新特征值的 value，才会触发 `my.onBLECharacteristicValueChange` 。
1. `tip`: 订阅方式效率比较高，推荐使用订阅代替 read 方式。

## my.getBLEDeviceServices
获取蓝牙设备所有 service（服务）

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备 id，参考 device 对象 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| services | Array | 设备service 对象列表，详见下表特征值信息 |

#### service对象
蓝牙设备service(服务)信息

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| serviceId | String | 蓝牙设备服务的 uuid |
| isPrimary | Boolean | 该服务是否为主服务 |

### 示例代码

```javascript
my.getBLEDeviceServices({
  deviceId: deviceId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 建立连接后先执行 `my.getBLEDeviceServices` 与 `my.getBLEDeviceCharacteristics` 后再进行与蓝牙设备的数据交互。

## my.getBLEDeviceCharacteristics
获取蓝牙设备所有 characteristic（特征值）

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| deviceId | String | 是 | 蓝牙设备 id，参考 device 对象 | v8.90 |
| serviceId | String | 是 | 蓝牙特征值对应 service 的 uuid | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| characteristics | Array | 设备特征值列 |

#### characteristic对象
蓝牙设备 characteristic （特征值）信息

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| characteristicId | String | 蓝牙设备特征值的 uuid |
| serviceId | String | 蓝牙设备特征值对应服务的 uuid |
| value | Hex String | 蓝牙设备特征值对应的16进制值 |
| properties | Object | 该特征值支持的操作类型 |

#### properties 对象
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| read | boolean | 该特征值是否支持 read 操作 |
| write | boolean | 该特征值是否支持 write 操作 |
| notify | boolean | 该特征值是否支持 notify 操作 |
| indicate | boolean | 该特征值是否支持 indicate 操作 |

### 示例代码

```javascript
my.getBLEDeviceCharacteristics({
  deviceId: deviceId,
  serviceId: serviceId,
  success: (res) => {
  	console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
_**Bug & Tip**_

1. `tip`: 建立连接后先执行 `my.getBLEDeviceServices` 与 `my.getBLEDeviceCharacteristics` 后再进行与蓝牙设备的数据交互。

## my.onBluetoothDeviceFound(callback)
搜索到新的蓝牙设备时触发此事件。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| callback | Function | 是 | 事件发生时回调 | v8.90 |

### callback 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| devices | Array | 新搜索到的设备列表 |

#### device对象
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| name | String | 蓝牙设备名称，某些设备可能没有 |
| deviceName(兼容旧版本) | String | 值与 name 一致 |
| localName | String | 广播设备名称 |
| deviceId | String | 设备 Id |
| RSSI | Number | 设备信号强度 |
| advertisData | Hex String | 设备的广播内容 |

### 示例代码

```javascript
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onBluetoothDeviceFound(this.callback);
  },
  onUnload() {
    my.offBluetoothDeviceFound(this.callback);
  },
  callback(res) {
    console.log(res);
  },
})
```
_**Bug & Tip**_

1. `tip`: 模拟器可能无法获取 advertisData 及 RSSI ，请使用真机调试。
1. `tip`: 开发者工具和 Android 上获取到的deviceId为设备 MAC 地址，iOS 上则为设备 uuid。因此deviceId不能硬编码到代码中，需要分平台处理，iOS可根据设备属性（localName/advertisData/manufacturerData等）进行动态匹配。
1. `tip`: 若在 `my.onBluetoothDeviceFound` 回调中包含了某个蓝牙设备，则此设备会添加到 `my.getBluetoothDevices` 接口获取到的数组中。

## my.offBluetoothDeviceFound
移除寻找到新的蓝牙设备事件的监听。（v8.90）

### 示例代码

```javascript
my.offBluetoothDeviceFound();
```
_**Bug & Tip**_

1. `tip`: 为防止多次注册事件监听导致一次事件多次回调，建议每次调用on方法监听事件之前，先调用off方法，关闭之前的事件监听。

## my.onBLECharacteristicValueChange(callback)

监听低功耗蓝牙设备的特征值变化的事件。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| callback | Function | 是 | 事件回调函数 | v8.90 |

### callback 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| deviceId | String | 蓝牙设备 id，参考 device 对象 |
| serviceId | String | 蓝牙特征值对应 service 的 uuid |
| characteristicId | String | 蓝牙特征值的 uuid |
| value | Hex String | 特征值最新的16进制值 |

### 示例代码

```javascript
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onBLECharacteristicValueChange(this.callback);
  },
  onUnload() {
    my.offBLECharacteristicValueChange(this.callback);
  },
  callback(res) {
    console.log(res);
  },
})
```

## my.offBLECharacteristicValueChange

移除低功耗蓝牙设备的特征值变化事件的监听。（v8.90）

### 示例代码

```javascript
my.offBLECharacteristicValueChange();
```

## my.onBLEConnectionStateChanged(callback)
监听低功耗蓝牙连接的错误事件，包括设备丢失，连接异常断开等。

| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| callback | Function | 是 | 事件回调函数 | v8.90 |

### callback 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| deviceId | String | 蓝牙设备 id，参考 device 对象 |
| connected | Boolean | 连接目前的状态 |

_**Bug & Tip**_

1. `tip`: 为防止多次注册事件监听导致一次事件多次回调，建议每次调用on方法监听事件之前，先调用off方法，关闭之前的事件监听。

## my.offBLEConnectionStateChanged
移除低功耗蓝牙连接状态变化事件的监听。（v8.90）

### 示例代码

```javascript
my.offBLEConnectionStateChanged();
```
_**Bug & Tip**_

1. `tip`: 为防止多次注册事件监听导致一次事件多次回调，建议每次调用on方法监听事件之前，先调用off方法，关闭之前的事件监听。

## my.onBluetoothAdapterStateChange(callback)
监听本机蓝牙状态变化的事件。（v8.90）

| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| callback | Function | 是 | 事件回调函数 | v8.90 |

### callback 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| available | Boolean | 蓝牙模块是否可用 |
| discovering | Boolean | 蓝牙模块是否处于搜索状态 |

## my.offBluetoothAdapterStateChange

移除本机蓝牙状态变化的事件的监听。（v8.90）
### 示例代码

```javascript
my.offBluetoothAdapterStateChange();
```
_**Bug & Tip**_

1. tip: 为防止多次注册事件监听导致一次事件多次回调，建议每次调用on方法监听事件之前，先调用off方法，关闭之前的事件监听。

## 错误码

| **错误码** | **描述** | **解决方案** |
| :--- | :--- | :--- |
| 10000 | 未初始化蓝牙适配器 | 调用my.openBluetoothAdapter |
| 10001 | 当前蓝牙适配器不可用 | 检查当前设备是否支持BLE并开启蓝牙功能 |
| 10002 | 没有找到指定设备 | 检查deviceId是否错误，或者是否开启外设广播 |
| 10003 | 连接失败 | 检查deviceId是否错误，目标蓝牙外设是否开启广播 |
| 10004 | 没有找到指定服务 | 检查serviceId，确认目标外设是否拥有该服务 |
| 10005 | 没有找到指定特征值 | 检查characteristId是否正确、检查目标外设特定service下是否具备该特征 |
| 10006 | 当前连接已断开 | 连接断开，重新连接 |
| 10007 | 当前特征值不支持此操作 | 检查特征是否具备读\\写\\通知等功能 |
| 10008 | 其余所有系统上报的异常 | 其他未知错误，具体问题具体分析 |
| 10009 | Android 系统特有，系统版本低于 4.3 不支持BLE | 提示用户不支持 |
| 10010 | 没有找到指定描述符 | 检查serviceId、characteristId是否正确 |
| 10011 | 设备 id 不可用/为空 | 使用正确的deviceId |
| 10012 | 服务 id 不可用/为空 | 使用正确的serviceId |
| 10013 | 特征 id 不可用/为空 | 使用正确的characteristId |
| 10014 | 发送的数据为空或格式错误 | 检查写数据或者HEX转化是否错误 |
| 10015 | 操作超时 | 重新操作 |
| 10016 | 缺少参数 | 检查调用的参数，并重新操作 |
| 10017 | 写入特征值失败 | 写失败，检查外设特征是否支持写操作，是否断开连接 |
| 10018 | 读取特征值失败 | 读失败，检查外设特征是否支持读操作，是否断开连接 |
