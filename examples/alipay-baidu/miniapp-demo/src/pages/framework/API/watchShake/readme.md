# 摇一摇
### 扫码预览
![watchShake.png](https://cache.amap.com/ecology/tool/miniapp/1563436097462.png)

## my.watchShake(OBJECT)
摇一摇功能。（v9.05）每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API.

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 代码示例

```html
<view class="page">
  <view class="page-description">摇一摇</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">watchShake</view>
      摇一摇功能。请先点击按钮操作，在摇一摇手机后触发回调，如需再次监听需要再次点击按钮。
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="watchShake">
        watchShake
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  watchShake() {
    my.watchShake({
      success() {
        my.alert({ title: '动起来了 o.o' })
      },
      fail(err) {
        my.alert({
          content: JSON.stringify(err),
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
