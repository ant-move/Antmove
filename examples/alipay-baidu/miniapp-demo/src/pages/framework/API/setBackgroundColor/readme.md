# 菜单
### 扫码预览
![setBackgroundColor.png](https://cache.amap.com/ecology/tool/miniapp/1563435358614.png)
# my.setBackgroundColor

动态设置窗口的背景色

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| backgroundColor | HexColor | 是 | 窗口的背景色 | v9.05 |
| backgroundColorTop | HexColor | 是 | 顶部窗口的背景色，仅 iOS 支持 | v9.05 |
| backgroundColorBottom | HexColor | 是 | 底部窗口的背景色，仅 iOS 支持 | v9.05 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |


### 代码示例

```html
<view class="page">
  <view class="page-description">设置窗口的背景色</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">setBackgroundColor</view>
      设置窗口的背景色，请先点击按钮，然后进行下拉操作，查看展示效果
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="setBackgroundColor">
        setBackgroundColor
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  setBackgroundColor() {
    my.setBackgroundColor({
      backgroundColor: '#CC0000',
      backgroundColorTop: '#00FF00',
      backgroundColorBottom: '#0000FF',
    })
  },
})
```

