# 确认框

扫码体验：

![confirm.png](https://cache.amap.com/ecology/tool/miniapp/1563527282020.png)

## my.confirm

confirm 确认框。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | confirm框的标题 | v8.90.0 |
| content | String | 否 | confirm框的内容 | v8.90.0 |
| confirmButtonText | String | 否 | 确认按钮文字，默认‘确定’ | v8.90.0 |
| cancelButtonText | String | 否 | 确认按钮文字，默认‘取消’ | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| confirm | Boolean | 点击 confirm 返回 true，点击 cancel 返回false |

### 代码示例

```html
<view class="page">
  <view class="page-description">确认框</view>
  <view class="page-section">
    <view class="page-section-title">confirm</view>
    <view class="page-section-demo">
      <button type="primary" onTap="comfirm">显示确认框</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  comfirm() {
    my.confirm({
      title: '温馨提示',
      content: '您是否想查询快递单号：\n1234567890',
      confirmButtonText: '马上查询',
      cancelButtonText: '暂不需要',
      success: (result) => {
        my.alert({
          title: `${result.confirm}`,
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
