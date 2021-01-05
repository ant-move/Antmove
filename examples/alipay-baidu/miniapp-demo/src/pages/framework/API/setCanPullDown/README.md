# 设置页面是否支持下拉

## my.setCanPullDown
> 设置页面是否支持下拉（小程序内页面默认支持下拉）

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563445865359.png)

### 入参
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| canPullDown | Boolean | 是 | 是否支持下拉 | v9.10.0 |

### 示例代码

```html
<view class="page">
  <view class="page-description">设置页面是否支持下拉</view>
    <view class="page-section">
      <view class="page-section-title">setCanPullDown</view>
      <view class="page-section-demo">  
        设置页面是否支持下拉（小程序内页面默认支持下拉）
        <button type="primary" onTap="pullDown"> {{isSupport}} </button>
      </view>
    </view>
</view>
```

```javascript
Page({
  data: {
    isSupport: '开启下拉功能',
    canPullDown: true,
  },
  onLoad() {
    my.setCanPullDown({
      canPullDown: false,
    })
  },
  pullDown() {
    const { canPullDown } = this.data
    if (canPullDown) {
      this.setData({
        isSupport: '开启下拉功能',
        canPullDown: false,
      })
      my.setCanPullDown({
        canPullDown: false,
      })
    } else {
      this.setData({
        isSupport: '关闭下拉功能',
        canPullDown: true,
      })
      my.setCanPullDown({
        canPullDown: true,
      })
    }
  },
})
```
