# my.getBatteryInfo
### 扫码预览
![getBatteryInfo.png](https://cache.amap.com/ecology/tool/miniapp/1563438762681.png)
<br/>获取电量的异步接口。无需传入参，异步获取当前设备的电量和充电状态。

## 入参

Object 类型，属性如下：

| 属性 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

### success 回调函数

入参为 Object 类型，属性如下：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| level | int | 当前设备电量。 |
| isCharging | bool | 当前设备是否充电中。 |

## 示例代码

```html
<view class="page">
  <view class="page-description">获取电量异步接口</view>
  <view class="page-section">
    <view class="page-section-title">getBatteryInfo</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getBatteryInfo">
        getBatteryInfo
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  getBatteryInfo() {
    my.getBatteryInfo({
      success: (res) => {
        my.alert({ content: `系统信息：${JSON.stringify(res)}` })
        console.log({ content: `系统信息：${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `获取失败${JSON.stringify(error)}` })
      },
      complete: () => {
        console.log('complete回调')
      },
    })
  },
})
```

