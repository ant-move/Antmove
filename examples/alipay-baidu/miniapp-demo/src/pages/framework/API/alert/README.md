# my.alert
- alert 警告框。
### 使用高德地图 app 扫码预览：
![alert.png](https://cache.amap.com/ecology/tool/miniapp/1563527036442.png)

### 入参
Object 类型，属性如下：
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | alert框的标题 | v8.90.0 |
| content | String | 否 | alert框的内容 | v8.90.0 |
| buttonText | String | 否 | 按钮文字，默认确定 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

## 代码示例

```html
<view class="page">
  <view class="page-description">警告框</view>
  <view class="page-section">
    <view class="page-section-title">alert</view>
    <view class="page-section-demo">
      <button type="primary" onTap="alert">显示警告框</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  alert() {
    my.alert({
      title: '标题',
      content: '这是一段内容',
      buttonText: '我知道了',
      success: () => {
        my.alert({
          title: '用户点击了「我知道了」',
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
