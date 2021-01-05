# 罗盘
### 扫码预览
![compassChange.png](https://cache.amap.com/ecology/tool/miniapp/1563436671931.png)
## my.onCompassChange(function callback)
监听罗盘数据（v9.05），接口调用后会自动开始监听，回调间隔为500ms，可使用`my.offCompassChange`停止监听。
### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.0.5 |
| fail | Function | 否 | 调用失败的回调函数 | v9.0.5 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.0.5 |
### 参数
function callback ，陀螺仪数据变化事件的回调函数<br />**CALLBACK返回参数：**

| 参数 | 类型 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- |
| direction | Number | 面对的方向与正北方向的度数[0,360) | v9.05 |

## my.offCompassChange()
停止监听罗盘数据（v9.05）.


## **示例代码：**

```html
<view class="page">
  <view class="page-description">罗盘</view>
  <view class="page-section">
    <view class="page-section-demo">
      <view>值：{{currentValue}}</view>
    </view>
    <view class="page-section-title">onCompassChange</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="onCompassChange">onCompassChange</button>
    </view>
    <view class="page-section-title">offCompassChange</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="offCompassChange">offCompassChange</button>
    </view>
  </view>
</view>
```

``` javascript
Page({
  data: {
    currentValue: '',
  },
  onLoad() { },
  onCompassChange() {
    my.onCompassChange((res) => {
      console.log(res.direction)
      this.setData({
        currentValue: res.direction,
      })
    })
  },
  offCompassChange() {
    my.offCompassChange()
  },
})
```
