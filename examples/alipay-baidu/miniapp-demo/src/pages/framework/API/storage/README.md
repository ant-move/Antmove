# 缓存

扫码体验：

![storage.png](https://cache.amap.com/ecology/tool/miniapp/1563442969242.png)

## my.setStorage
将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据。
> 这是异步接口。
> 支持内嵌webview的存储与小程序存储隔离，内嵌webview中指定key存储数据不会覆盖小程序自身相同key对应的数据

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |
| data | Object/String | 是 | 要缓存的数据 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 代码示例

```javascript
my.setStorage({
  key: 'currentCity',
  data: {
    cityName: '杭州',
    adCode: '330100',
    spell: ' hangzhou',
  },
  success: function() {
    my.alert({content: '写入成功'});
  }
});
```
> 注意：单条数据转换成字符串后，字符串长度最大200*1024。同一个高德用户，同一个小程序缓存总上限为10MB

## my.setStorageSync
同步将数据存储在本地缓存中指定的 key 中。
> 这是同步接口。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |
| data | Object/String | 是 | 要缓存的数据 | v8.90 |

```javascript
my.setStorageSync({
  key: 'currentCity',
  data: {
    cityName: '杭州',
    adCode: '330100',
    spell: ' hangzhou',
  }
});
```

## my.getStorage
获取缓存数据。
> 这是异步接口。
> 支持内嵌webview内缓与小程序缓存隔离，获取内嵌webview指定key的缓存不会同时返回小程序相同key下的缓存数据

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success返回值
| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| data | Object/String | key对应的内容 |

### 代码示例

```javascript
my.getStorage({
  key: 'currentCity',
  success: function(res) {
    my.alert({content: '获取成功：' + res.data.cityName});
  },
  fail: function(res){
    my.alert({content: res.errorMessage});
  }
});
```

## my.getStorageSync
同步获取缓存数据。
> 这是同步接口

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |

### 返回值
| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| data | Object/String | key对应的内容 |

### 代码示例

```javascript
let res = my.getStorageSync({ key: 'currentCity' });
 my.alert({
    content: JSON.stringify(res.data),
 });
```

## my.removeStorage
删除缓存数据。
> 这是异步接口。
> 移除内嵌webview的存储数据时不会移除当前小程序的存储数据

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 代码示例

```javascript
my.removeStorage({
  key: 'currentCity',
  success: function(){
    my.alert({content: '删除成功'});
  }
});
```

## my.removeStorageSync
同步删除缓存数据。
> 这是同步接口。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| key | String | 是 | 缓存数据的key | v8.90 |

```javascript
my.removeStorageSync({
  key: 'currentCity',
});
```

## my.clearStorage
清除本地数据缓存。（v9.05）
> 这是异步接口。
> 清空内嵌内嵌webview的存储时不会同时清空当前小程序本身的存储数据

### 代码示例

```javascript
my.clearStorage()
```

## my.clearStorageSync
同步清除本地数据缓存。（v8.90）
> 这是同步接口。

### 代码示例

```javascript
my.clearStorageSync()
```

## my.getStorageInfo
异步获取当前storage的相关信息。（v9.05）
> 这是异步接口。
> 在内嵌webview内获取当前storage的相关信息不会获取到当前小程序storage的相关信息

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success返回值
| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| keys | String Array | 当前storage中所有的key |
| currentSize | Number | 当前占用的空间大小, 单位KB |
| limitSize | Number | 限制的空间大小，单位KB |

### 代码示例

```javascript
my.getStorageInfo({
  success: function(res) {
    console.log(res.keys)
    console.log(res.currentSize)
    console.log(res.limitSize)
  }
})
```
## my.getStorageInfoSync
同步获取当前storage的相关信息。
> 这是同步接口。

### 返回值
| 名称 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| keys | String Array | 当前storage中所有的key | v9.05 |
| currentSize | Number | 当前占用的空间大小, 单位KB | v9.05 |
| limitSize | Number | 限制的空间大小，单位KB | v9.05 |

### 代码示例

```javascript
var res = my.getStorageInfoSync()
console.log(res.keys)
console.log(res.currentSize)
console.log(res.limitSize)
```
### Tips:

- 缓存数据本地加密存储，通过API读取时会自动解密返回。
- 覆盖安装高德(不是先删除再安装)，不会导致小程序缓存失效；
- 高德设置中心清除缓存不会导致小程序缓存失效；
- 小程序缓存默认具有高德账号和小程序id两级隔离；
- iOS支持iTunes备份；
