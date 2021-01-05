# iBeacon

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534965987.png)

## my.startBeaconDiscovery
开始搜索附近的 iBeacon 设备

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| uuids | StringArray | 是 | 目标 iBeacon 设备广播的 uuids | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.startBeaconDiscovery({
  uuids:['uuid1','uuid2'],
  success: (res) => {
    console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```
**_Bug & Tip_**

1. `tip`: uuid1、uuid2 为目标 iBeacon 的UUID，可从硬件厂商获取，如果为空，无法搜索到 iBeacon
1. `tip`: iBeacon 需要位置权限，iOS 11 之前需要蓝牙开关打开，iOS 11 以后，需要 设置->蓝牙->开关开启(控制中心的蓝牙开关不影响 iBeacon 使用)
1. `tip`: 推荐在 `my.onBeaconUpdate` 回调中处理发现到的iBeacon设备信息

## my.stopBeaconDiscovery
停止搜索附近的 iBeacon 设备

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 示例代码

```javascript
my.stopBeaconDiscovery({
  success: (res) => {
    console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```

## my.getBeacons
获取已经搜索到的 iBeacon 设备

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

#### success返回参数说明：
| 参数名 | 类型 | 说明 |
| :--- | :--- | :--- |
| beacons | ObjectArray | iBeacon 设备列表 |
| errCode | String | errorCode=0 ,接口调用成功 |
| errorMsg | String | ok |

#### iBeacon 结构：
| 参数名 | 类型 | 说明 |
| :--- | :--- | :--- |
| uuid | String | iBeacon 设备广播的 uuid |
| major | String | iBeacon 设备的主 id |
| minor | String | iBeacon 设备的次 id |
| proximity | Number | 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远) |
| accuracy | Number | iBeacon 设备的距离 |
| rssi | Number | iBeacon 信号强度 |

### 示例代码

```javascript
my.getBeacons({
  success: (res) => {
    console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```

## my.onBeaconUpdate()
监听 iBeacon 设备的更新事件

### CALLBACK返回参数说明：
| 参数名 | 类型 | 说明 |
| :--- | :--- | :--- |
| beacons | ObjectArray | 当前搜寻到的所有 iBeacon 设备列表 |

### iBeacon 结构：
| 参数名 | 类型 | 说明 |
| :--- | :--- | :--- |
| uuid | String | iBeacon 设备广播的 uuid |
| major | String | iBeacon 设备的主 id |
| minor | String | iBeacon 设备的次 id |
| proximity | Number | 表示设备距离的枚举值(0-3分别代表：未知、极近、近、远) |
| accuracy | Number | iBeacon 设备的距离 |
| rssi | Number | iBeacon 信号强度 |

### 示例代码：

```javascript
my.onBeaconUpdate({
  success: (res) => {
  },
})
```

## my.onBeaconServiceChange()
监听 iBeacon 服务的状态变化

### CALLBACK返回参数说明：
| 参数名 | 类型 | 说明 |
| :--- | :--- | :--- |
| available | Boolean | 服务目前是否可用 |
| discovering | Boolean | 目前是否处于搜索状态 |

### 示例代码：

```javascript
my.onBeaconServiceChange({
  success: (res) => {
  },
})
```
**_Bug & Tip_**

1. `tip`: iOS 11及以后版本 “控制中心蓝牙开关” 和 “设置->蓝牙->开关” 分离，控制中心蓝牙开关不再影响 iBeacon 使用，但是 `my.onBeaconServiceChange` 事件仍然会回调，建议iOS 11以后该事件回调以后继续等待 `my.onBeaconUpdate` 以确认是否提示用户开启蓝牙。

## 错误码梳理
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11000 | 系统或设备不支持 | |
| 11001 | 蓝牙服务不可用 | |
| 11002 | 位置服务不可用 | |
| 11003 | 位置服务权限禁止 | |
| 11004 | 已经开始搜索 | |
| 11006 |  UUID格式错误 | |
| 11008 |  参数错误，UUID 数组为空 | |
