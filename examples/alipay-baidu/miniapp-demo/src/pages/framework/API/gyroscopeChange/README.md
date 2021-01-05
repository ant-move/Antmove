# 陀螺仪
### 扫码预览
![gyroscopeChange.png](https://cache.amap.com/ecology/tool/miniapp/1563436428119.png)
## my.onGyroscopeChange(function callback)
监听陀螺仪数据变化事件（v9.05），接口调用后会自动开始监听，回调间隔为500ms，可使用`my.offGyroscopeChange()`停止监听。
## 入参

Object 类型，属性如下：

| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.0.5 |
| fail | Function | 否 | 调用失败的回调函数 | v9.0.5 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.0.5 |

### 参数
function callback ，陀螺仪数据变化事件的回调函数

### CALLBACK出参说明
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| x | number | x轴方向角速度 |
| y | number | y轴方向角速度 |
| z | number | z轴方向角速度 |


## my.offGyroscopeChange()
停止监听陀螺仪数据（v9.05）。

### 代码示例

```html
<view class="page">
  <view class="page-description">陀螺仪</view>
  <view class="page-section">
    <view class="page-section-title">onGyroscopeChange</view>
    <view class="page-section-demo">
      <view>X: {{currentX}}</view>
      <view>Y: {{currentY}}</view>
      <view>Z: {{currentZ}}</view>
    </view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="onGyroscopeChange">
        onGyroscopeChange
      </button>
    </view>
    <view class="page-section-title">offGyroscopeChange</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offGyroscopeChange">
        offGyroscopeChange
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
  onGyroscopeChange() {
    my.onGyroscopeChange((res) => {
      this.setData({
        currentX: res.x,
        currentY: res.y,
        currentZ: res.z,
      })
    })
  },
  offGyroscopeChange() {
    my.offGyroscopeChange()
  },
})
```
