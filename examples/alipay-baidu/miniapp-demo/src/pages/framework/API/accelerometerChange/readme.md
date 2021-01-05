# my.onAccelerometerChange
- 监听加速度数据（v9.05），回调间隔为500ms，接口调用后会自动开始监听，可使用my.offAccelermeterChange()停止监听。

### 使用高德地图 app 扫码预览
![accelerometerChange.png](https://cache.amap.com/ecology/tool/miniapp/1563436317859.png)

## 入参
Object 类型，属性如下：
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.0.5 |
| fail | Function | 否 | 调用失败的回调函数 | v9.0.5 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.0.5 |


### success回调参数
入参为 Object 类型，属性如下：
| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| x | Number | X 轴 |
| y | Number | Y 轴 |
| z | Number | Z 轴 |

# my.offAccelerometerChange
- 停止监听加速度数据（v9.05）。

## **示例代码**
```html
<view class="page">
  <view class="page-description">加速度计</view>
  <view class="page-section">
    <view class="page-section-title">onAccelerometerChange</view>
    <view class="page-section-demo">
      <view>X: {{currentX}}</view>
      <view>Y: {{currentY}}</view>
      <view>Z: {{currentZ}}</view>
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="onAccelerometerChange">
        onAccelerometerChange
      </button>
    </view>
    <view class="page-section-title">offAccelerometerChange</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offAccelerometerChange">
        offAccelerometerChange
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    currentX: '',
    currentY: '',
    currentZ: '',
  },
  onLoad() { },
  onAccelerometerChange() {
    my.onAccelerometerChange((res) => {
      console.log(JSON.stringify(res))
      this.setData({
        currentX: res.x,
        currentY: res.y,
        currentZ: res.z,
      })
    })
  },
  offAccelerometerChange() {
    my.offAccelerometerChange()
  },
})
```
