# 键盘

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563529457021.png)

## my.hideKeyboard
隐藏键盘。

### 代码示例
```html
<view class="page">
  <view class="page-description">隐藏键盘</view>
  <view class="page-section">
    <view class="page-section-title">hideKeyboard</view>
    <view class="form-row">
      <view class="form-row-label">密码键盘</view>
      <view class="form-row-content">
        <input class="input" password type="text" onInput="bindHideKeyboard" placeholder="输入 123 自动收起键盘" />
      </view>
    </view>
    <view class="form-row">
      <view class="form-row-label">数字键盘</view>
      <view class="form-row-content">
        <input class="input" type="digit" onInput="bindHideKeyboard" placeholder="输入 123 自动收起键盘" />
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  bindHideKeyboard(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      my.hideKeyboard()
    }
  },
})
```
