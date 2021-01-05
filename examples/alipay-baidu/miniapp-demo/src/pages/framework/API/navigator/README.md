# 导航栏

扫码体验：

![navigator.png](https://cache.amap.com/ecology/tool/miniapp/1563525372460.png)

## my.navigateTo
保留当前页面，跳转到应用内的某个指定页面，可以使用 `my.navigateBack` 返回到原来页面。<br />**注意：页面最大深度为10，即可连续调用 10 次 navigateTo**<br />**

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。参数规则如下：路径与参数之间使用`?`分隔，参数键与参数值用`=`相连，不同参数必须用`&`分隔；如 `path?key1=value1&key2=value2` | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### 代码示例

```javascript
my.navigateTo({
  url: 'new_page?count=100'
})
```

```javascript
Page({
  onLoad(query){
    my.alert({
      content: JSON.stringify(query),
    });
  }
})
```

## my.redirectTo
关闭当前页面，跳转到应用内的某个指定页面。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 需要跳转的应用内非 tabBar 的目标页面路径 ,路径后可以带参数。参数规则如下：路径与参数之间使用`?`分隔，参数键与参数值用`=`相连，不同参数必须用`&`分隔；如`path?key1=value1&key2=value2` | v.8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v.8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v.8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v.8.90.0 |

### 代码示例
```javascript
my.redirectTo({
  url: 'new_page?count=100'
})
```

## my.navigateBack
关闭当前页面，返回上一级或多级页面。可通过 `getCurrentPages` 获取当前的页面栈信息，决定需要返回几层。

### 入参
| 名称 | 类型 | 默认值 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| delta | Number | 1 | 返回的页面数，如果 delta 大于现有打开的页面数，则返回到首页 | v8.90.0 |

### 代码示例
```javascript
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，
// 而 redirectTo 方法则不会。见下方示例代码
// 此处是one页面
my.navigateTo({
  url: 'two?pageId=10000'
})
// 此处是two页面
my.navigateTo({
  url: 'one?pageId=99999'
})
// 在three页面内 navigateBack，将返回one页面
my.navigateBack({
  delta: 2
})
```
> my.navigateTo 和 my.redirectTo 不允许跳转到 tabbar 页面；如果需要跳转到 tabbar 页面，请使用 my.switchTab。

## my.reLaunch
关闭当前所有页面，跳转到应用内的某个指定页面。<br />基础库 `1.4.0+` & 高德客户端 `10.1.8+` 支持

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 页面路径。如果页面不为 tabbar 页面则路径后可以带参数。参数规则如下：路径与参数之间使用`?`分隔，参数键与参数值用`=`相连，不同参数必须用`&`分隔；如`path?key1=value1&key2=value2` | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### 代码示例
```javascript
my.reLaunch({
  url: '/page/index'
})
```

## my.switchTab
跳转到指定 tabBar 页面，并关闭其他所有非 tabBar 页面。

### 入参
| 参数 | 类型 | 必填 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 跳转的 tabBar 页面的路径（需在 app.json 的 tabBar 字段定义的页面）。注意：路径后不能带参数 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### 代码示例
```javascript
// app.json
{
  "tabBar": {
    "items": [{
      "pagePath": "page/home/index",
      "name": "首页"
    },{
      "pagePath": "page/user/index",
      "name": "用户"
    }]
  }
}
```
```javascript
my.switchTab({
  url: 'page/home/index'
})
```
