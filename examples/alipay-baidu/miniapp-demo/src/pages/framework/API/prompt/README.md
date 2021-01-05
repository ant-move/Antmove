# 提示框

扫码体验：

![prompt.png](https://cache.amap.com/ecology/tool/miniapp/1563527366493.png)

## my.prompt
可留言的提示

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | prompt框标题 | v8.90.0 |
| message | String | 是 | prompt框文本，默认‘请输入内容’ | v8.90.0 |
| placeholder | String | 否 | 输入框内的提示文案 | v8.90.0 |
| align | String | 否 | message对齐方式，可用枚举left/center/right，iOS ‘center’, android ‘left’ | v8.90.0 |
| okButtonText | String | 否 | 确认按钮文字，默认‘确定’ | v8.90.0 |
| cancelButtonText | String | 否 | 确认按钮文字，默认‘取消’ | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| ok | Boolean | 点击 ok 返回 true，点击 cancel 返回false |
| inputValue | String | 当ok为true时，返回用户输入的内容 |

### 代码示例

```html
<view class="page">
  <view class="page-description">提示框</view>
  <view class="page-section">
    <view class="page-section-title">prompt</view>
    <view class="page-section-demo">
      <button type="primary" onTap="prompt">可留言的提示</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  prompt() {
    my.prompt({
      title: '温馨提示',
      message: '请输入内容',
      placeholder: '请输入',
      align: 'right',
      okButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        my.alert({
          title: `${result.inputValue}`,
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
