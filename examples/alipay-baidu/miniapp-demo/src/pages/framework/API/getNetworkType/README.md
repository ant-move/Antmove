# 网络状态

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534163342.png)

## my.getNetworkType
获取当前网络状态。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| networkAvailable | Boolean | 网络是否可用 |
| networkType | String | 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN |

### 代码示例

```javascript
Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  },
});
```

## my.onNetworkStatusChange (CALLBACK)
开始网络状态变化的监听

### 返回值
| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| isConnected | Boolean | 网络是否可用 | v8.90 |
| networkType | String | 网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN | v8.90 |

### 代码示例

```javascript
my.onNetworkStatusChange(function(res){
	console.log(JSON.stringify(res))
})
```
## my.offNetworkStatusChange
取消网络状态变化的监听（v8.90）

### 代码示例

```javascript
my.offNetworkStatusChange()
```
