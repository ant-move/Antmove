
# 获取基础库版本号
### 扫码预览
![SDKversion.png](https://cache.amap.com/ecology/tool/miniapp/1563436031075.png)
## my.SDKVersion
获取基础库版本号（v9.05），仅供参考，代码逻辑请不要依赖这个值

#### 示例代码

```html
<view class="page">
  <view class="page-description">获取基础库版本号</view>
  <view class="page-section">
    <view class="page-section-title">SDKVersion</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="SDKVersion">
        SDKVersion
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  SDKVersion() {
    my.alert({
      content: `SDKversion: ${my.SDKVersion}`,
    })
  },
})
```
