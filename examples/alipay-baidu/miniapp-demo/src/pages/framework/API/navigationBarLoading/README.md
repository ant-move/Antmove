# 标题栏加载动画

## my.showNavigationBarLoading
显示导航栏 loading。

扫码体验：

![navigation-bar-loading.png](https://cache.amap.com/ecology/tool/miniapp/1563525987947.png)

## my.hideNavigationBarLoading
隐藏导航栏 loading。

### 代码示例
```html
<view class="page">
  <view class="page-description">标题栏加载动画</view>
  <view class="page-section">
    <view class="page-section-title">navigationBarLoading</view>
    <view class="page-section-demo">
      <button type="primary" onTap="showNavigationBarLoading">显示加载动画</button>
      <button type="primary" onTap="hideNavigationBarLoading">隐藏加载动画</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  showNavigationBarLoading() {
    my.showNavigationBarLoading()
  },
  hideNavigationBarLoading() {
    my.hideNavigationBarLoading()
  },
})
```
