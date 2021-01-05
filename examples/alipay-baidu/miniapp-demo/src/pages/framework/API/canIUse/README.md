# canIUse

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563533900920.png)

## my.canIUse(String)
判断当前小程序的 API、入参或返回值、组件、属性等在当前版本是否支持。（v8.90）<br />参数使用 `${API}.${type}.${param}.${option}` 或者 `${component}.${attribute}.${option}` 方式来调用

- API 表示 api 名字
- type 取值 object/return/callback 表示 api 的判断类型
- param 表示参数的某一个属性名
- option 表示参数属性的具体属性值
- component 表示组件名称
- attribute 表示组件属性名
- option 表示组件属性值

#### 示例代码

```html
<view class="page">
  <view class="page-description">CanIUse</view>
  <view class="page-section">
    <view class="page-section-title">CanIUse</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="isSupport">
        是否支持button的open-type为share
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  onShow() {
    my.alert({
      content: `当前版本是否支持:getFileInfo ${my.canIUse('getFileInfo')}`,
    })
    my.alert({
      content: `当前版本是否支持lifestyle: ${my.canIUse('lifestyle')}`,
    })
    console.log(`closeSocket: ${my.canIUse('closeSocket.object.code')}`)
    console.log(`getLocation: ${my.canIUse('getLocation.object.type')}`)
    console.log(`getSystemInfo: ${my.canIUse('getSystemInfo.return.brand')}`)
  },
  isSupport() {
    my.alert({
      content: my.canIUse('button.open-type.share'),
    })
  },
})
```
