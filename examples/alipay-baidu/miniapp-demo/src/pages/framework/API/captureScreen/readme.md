# 用户截图事件
### 扫码预览
![captureScreen.png](https://cache.amap.com/ecology/tool/miniapp/1563436879232.png)
## my.onUserCaptureScreen(CALLBACK)
用于监听用户发起的主动截屏事件，可以接收到系统以及第三方截屏工具的截屏事件通知。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.0.5 |
| fail | Function | 否 | 调用失败的回调函数 | v9.0.5 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.0.5 |

## my.offUserCaptureScreen()
取消监听截屏事件。一般需要与 `my.onUserCaptureScreen` 成对出现。

#### 示例代码

```html
<view class="page">
  <view class="page-description">用户截图</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">onUserCaptureScreen</view>
      用于监听用户发起的主动截屏事件，请先点击监听按钮后，进行截屏操作，可监听到回调
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="onUserCaptureScreen">
        onUserCaptureScreen
      </button>
    </view>
    <view class="page-section-title">offUserCaptureScreen</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offUserCaptureScreen">
        offUserCaptureScreen
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  onUserCaptureScreen() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: '收到用户截屏事件',
      })
    })
  },
  offUserCaptureScreen() {
    my.offUserCaptureScreen()
  },
})
```
