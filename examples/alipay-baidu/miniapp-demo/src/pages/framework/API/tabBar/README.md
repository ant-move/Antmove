# Tabbar

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563443242004.png)

## my.setTabBarBadge
为 tabBar 某一项的右上角添加文本。


### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| index | Number | 是 | tabBar的哪一项，从左边算起 | v9.10.0 |
| text | String | 是 | 显示的文本，超过 3 个字符则显示成前两个字符+“…”，例如：“高德”显示"高德"，“蚂蚁金服”显示"蚂蚁…" | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.setTabBarBadge({
  index: 0,
  text: '1'
})
```

## my.removeTabBarBadge
移除 tabBar 某一项右上角的文本。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| index | Number | 是 | tabBar的哪一项，从左边算起 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.removeTabBarBadge({
  index: 0
})
```

## my.showTabBarRedDot

显示 tabBar 某一项的右上角的红点。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| index | Number | 是 | tabBar的哪一项，从左边算起 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.showTabBarBadge({
  index: 0
})
```

## my.hideTabBarRedDot
隐藏 tabBar 某一项的右上角的红点。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| index | Number | 是 | tabBar的哪一项，从左边算起 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.hideTabBarBadge({
  index: 0
})
```

## my.setTabBarStyle
动态设置 tabBar 的整体样式。

### 入参
| 参数 | 类型 | 说明 | 最低版本 |
| --- | --- | --- | --- |
| color | HexColor | tab 上的文字默认颜色 | v9.10.0 |
| selectedColor | HexColor | tab 上的文字选中时的颜色 | v9.10.0 |
| backgroundColor | HexColor | tab 的背景色 | v9.10.0 |
| borderStyle | String | tabbar上边框的颜色， 仅支持 black/white | v9.10.0 |
| success | Function | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 示例代码

```javascript
my.setTabBarStyle({
  color: '#FF0000',
  selectedColor: '#00FF00',
  backgroundColor: '#0000FF',
  borderStyle: 'white'
})
```

## my.setTabBarItem
动态设置 tabBar 某一项的内容。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| index | Number | 是 | tabBar 的哪一项，从左边算起 | v9.10.0 |
| text | String | 是 | tab 上按钮文字 | v9.10.0 |
| iconPath | String | 是 | 图片路径，建议尺寸为 81px * 81px，支持网络图片 | v9.10.0 |
| selectedIconPath | String | 是 | 选中时的图片路径，建议尺寸为 81px * 81px，支持网络图片 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.setTabBarItem({
  index: 0,
  text: 'text',
  iconPath: '/image/iconPath',
  selectedIconPath: '/image/selectedIconPath'
})
```

## my.showTabBar
显示 tabBar。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| animation | Boolean | 否 | 是否需要动画效果，默认无 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.showTabBar({
  animation: true
})
```

## my.hideTabBar
隐藏 tabBar。

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| --- | --- | --- | --- | --- |
| animation | Boolean | 否 | 是否需要动画效果，默认无 | v9.10.0 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

### 代码示例

```javascript
my.hideTabBar({
  animation: true
})
```

## onTabItemTap
点击 tab 时触发，最低版本v9.10.0。

### 示例代码

```javascript
Page({
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  }
})
```

### Tips:

- v10.05.0版本以下，iOS上在非tab上的页面调用以上API无效。
