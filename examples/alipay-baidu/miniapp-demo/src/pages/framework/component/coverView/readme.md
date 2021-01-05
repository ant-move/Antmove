# cover-view
### 扫码体验：
![coverView.png](https://cache.amap.com/ecology/tool/miniapp/1563433808061.png)
### cover-view
覆盖在原生组件之上的文本视图。可覆盖的原生组件包括`map`，暂时不支持嵌套。

| 属性名 | 类型 | 默认值 | 说明 | 兼容 |
| :--- | :--- | :--- | :--- | :--- |
| onTap | EventHandle |  | 点击事件回调 | v9.05.0 |

```html
<view class="page">
  <view class="page-description">原生视图</view>
  <view class="page-section">
    <view class="page-section-demo" style="position: relative;">
      <map
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        scale="{{scale}}"
        style="width: 100%; height: 200px;"
        include-points="{{includePoints}}"
      />
      <cover-view class="cover-view">
        <cover-view class="cover-view-item cover-view-item-1"></cover-view>
        <cover-view class="cover-view-item cover-view-item-2"></cover-view>
        <cover-view class="cover-view-item cover-view-item-3"></cover-view>
      </cover-view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    scale: 14,
    longitude: 120.10675,
    latitude: 30.266786,
    includePoints: [{
      latitude: 30.266786,
      longitude: 120.10675,
    }],
  },
})
```

```css
cover-image {
  position: absolute;
  left: 20px;
  top: 100px;
  height: 50px;
  width: 50px;
}
.cover-view {
  position: absolute;
  top: calc(50% - 75rpx);
  left: calc(50% - 150rpx);
  display:flex;
  flex-direction:row;
  background-color: rgba(0, 0, 0, 0);
}
.cover-view-item{
  width: 100rpx;
  height: 150rpx;
  font-size: 26rpx;
}
.cover-view-item-1 {
  background-color: rgba(26, 173, 25, 0.7);
}
.cover-view-item-2 {
  background-color: rgba(39, 130, 215, 0.7);
}
.cover-view-item-3 {
  background-color: rgba(255, 255, 255, 0.7);
}
```

