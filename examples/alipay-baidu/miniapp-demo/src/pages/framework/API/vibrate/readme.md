# 震动
### 扫码预览
![vibrate.png](https://cache.amap.com/ecology/tool/miniapp/1563436245541.png)
## my.vibrate(OBJECT)
调用震动功能。（ v9.05）

## my.vibrateLong(OBJECT)
较长时间的振动 (400ms) （ v9.05）

## my.vibrateShort(OBJECT)
较短时间的振动 (40ms) ( v9.05 )

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 代码示例

```html
<view class="page">
  <view class="page-description">振动</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">vibrate</view>
      
    </view>
    <view class="page-section-demo">
      <button type="primary" onTap="vibrate">vibrate</button>
    </view>
    <view class="page-section-title">vibrateLong</view>
    <view class="page-section-demo">
      <button type="primary" onTap="vibrateLong">vibrateLong</button>
    </view>
    <view class="page-section-title">vibrateShort</view>
    <view class="page-section-demo">
      <button type="primary" onTap="vibrateShort">vibrateShort</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
  vibrateShort() {
    my.vibrateShort({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
  vibrateLong() {
    my.vibrateLong({
      success: () => {
        my.alert({ title: '振动起来了' })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete: () => {
        my.alert({
          content: 'complete',
        })
      },
    })
  },
})
```
