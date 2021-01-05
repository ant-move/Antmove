# 兼容

我们提供接口 `my.canIUse(String)` 实现兼容性判断，详见 [接口说明](../api/canIUse) 。

以下为兼容示例。

## 新增 API 兼容性处理

对于新增 API，可以参照下面的代码来判断当前基础库是否支持该 API：

```javascript
if (my.getLocation) {
  my.getLocation()
} else {
  // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
  my.alert({
    title: '提示',
    content: '当前高德版本过低，无法使用此功能，请升级最新版本高德',
  })
}
```

## API 新增参数兼容性处理

```javascript
if (my.canIUse('getLocation.object.type')) {
  // ...
} else {
  console.log('当前版本不支持该参数')
}
```

## API 新增返回值兼容性处理

```javascript
if (my.canIUse('getSystemInfo.return.storage')) {
  // ...
} else {
  console.log('当前版本不支持该返回值')
}
```

## 组件新增属性兼容性处理

组件新增属性在旧版本高德客户端上无法实现，也不会报错。若要对属性做降级处理可参照以下代码：

```javascript
Page({
  data: {
    canIUse: my.canIUse('button.open-type.share'),
  },
})
```

```xml
<button a:if="{{canIUse}}" open-type="share">分享小程序</button>
<button a:else onTap="shareApp">分享小程序</button>
```


