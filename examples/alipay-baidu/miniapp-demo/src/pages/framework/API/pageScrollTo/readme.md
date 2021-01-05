# 滚动
### 扫码预览
![pageScrollTo.png](https://cache.amap.com/ecology/tool/miniapp/1563434934840.png)
## my.pageScrollTo
滚动到页面的目标位置。

### 参数说明
| 参数名 | 类型 | 说明 | 版本 |
| :--- | :--- | :--- | :--- |
| scrollTop | Number | 滚动到页面的目标位置，单位 px | v9.05 |

### 示例

```html
<view class="page" style="height:1500rpx;">
  <view class="page-description">滚动页面</view>  
  <view class="page-section">
    <view class="page-section-title">pageScrollTo</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="pageScrollTo">
        pageScrollTo
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  pageScrollTo() {
    my.pageScrollTo({ scrollTop: 100 })
  },
})
```
