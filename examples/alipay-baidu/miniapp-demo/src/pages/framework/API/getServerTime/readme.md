# 获取服务器时间

### 扫码预览
![getServerTime.png](https://cache.amap.com/ecology/tool/miniapp/1563436768355.png)
## my.getServerTime(OBEJCT)
获取当前服务器时间的毫秒数

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| time | Number | 服务器时间的毫秒数 |


### 代码示例

```html
<view class="page">
  <view class="page-description">获取服务器时间</view>
  <view class="page-section">
    <view class="page-section-title">getServerTime</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getServerTime">
        getServerTime
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  getServerTime() {
    my.getServerTime({
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
      complete: () => {
        console.log('complete')
      },
    })
  },
})
```
