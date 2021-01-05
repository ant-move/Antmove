# 屏幕亮度
### 扫码预览
![screen.png](https://cache.amap.com/ecology/tool/miniapp/1563437146277.png)
## my.setKeepScreenOn(OBJECT)
设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效。

### OBJECT 参数说明
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| keepScreenOn | Boolean | 是 | 是否保持屏幕长亮状态 | v9.05 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

## my.getScreenBrightness(OBJECT)
> 获取屏幕亮度

### OBJECT 参数说明
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |


## my.setScreenBrightness(OBJECT)
> 设置屏幕亮度
### OBJECT 参数说明
| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| brightness | Number | 是 | 需要设置的屏幕亮度，取值范围0-1 | v9.05 |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 示例代码

```html
<view class="page">
  <view class="page-description">屏幕亮度</view>
  <view class="page-section">
    <view class="page-section-title">setKeepScreenOn</view>
    <view class="page-section-demo">
      <button type="primary" onTap="setKeepScreenOn">
        setKeepScreenOn
      </button>
    </view>
    <view class="page-section-title">getScreenBrightness</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getScreenBrightness">
        getScreenBrightness
      </button>
    </view>
    <view class="page-section-title">setScreenBrightness</view>
    <view class="page-section-demo">
      <button type="primary" onTap="setScreenBrightness">
        setScreenBrightness
      </button>      
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  setKeepScreenOn() {
    my.setKeepScreenOn({
      keepScreenOn: true,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
  setScreenBrightness() {
    my.setScreenBrightness({
      brightness: 0.5,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
  getScreenBrightness() {
    my.getScreenBrightness({
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.alert({
          content: JSON.stringify(err),
        })
      },
    })
  },
})
```
