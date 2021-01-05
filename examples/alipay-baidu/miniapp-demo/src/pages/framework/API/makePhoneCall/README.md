# 拨打电话

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534539708.png)

## my.makePhoneCall(OBJECT)
拨打电话。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| number | String | 是 | 电话号码 | v8.90 |

### 代码示例

```html
<view class="page">
  <view class="page-description">拨打电话</view>
  <view class="page-section">
    <view class="page-section-title">makePhoneCall</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="makePhoneCall">
        打电话
      </button>
    </view>
  </view>
</view>
```

```Javascript
Page({
  makePhoneCall() {
    my.makePhoneCall({ number: '95888' })
  },
})
```
