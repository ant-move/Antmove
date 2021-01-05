# my.getBatteryInfoSync
### 扫码预览
![getBatteryInfoSync.png](https://cache.amap.com/ecology/tool/miniapp/1563438655643.png)
<br/>获取电量的同步接口。无需传入参，同步获取当前设备的电量和充电状态。<br />


## 入参

Object 类型，属性如下：

| 属性 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |

## 返回值
| 参数名称 | 参数类型 | 参数描述 |
| --- | --- | --- |
| level | int | 当前设备电量 |
| isCharging | bool | 当前设备是否充电中 |

## 示例代码

```html
<view class="page">
  <view class="page-description">获取电量同步接口</view>
  <view class="page-section">
    <view class="page-section-title">getBatteryInfoSync</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getBatteryInfoSync">
        getBatteryInfoSync
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  getBatteryInfoSync() {
    const res = my.getBatteryInfoSync()
    my.alert({ content: `系统信息：${JSON.stringify(res)}` })
    console.log({ content: `系统信息：${JSON.stringify(res)}` })
  },
})
```


