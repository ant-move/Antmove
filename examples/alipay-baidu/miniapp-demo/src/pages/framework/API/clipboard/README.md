# 剪贴板

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534324505.png)

## my.getClipboard
获取剪贴板数据。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| text | String | 剪贴板数据 |

## my.setClipboard
设置剪贴板数据。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| text | String | 是 | 剪贴板数据 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 代码示例

```html
<view class="page">
  <view class="page-description">剪贴板</view>
  <view class="page-section">
    <view class="page-section-title">setClipboard</view>
    <view class="page-section-demo">
      <input onInput="handleInput" value="{{text}}" />
      <button class="clipboard-button" type="primary" size="mini" onTap="handleCopy">复制</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">getClipboard</view>
    <view class="page-section-demo">
      <input onInput="bindInput" value="{{copy}}" disabled />
      <button class="clipboard-button" type="default" size="mini" onTap="handlePaste">粘贴</button>
    </view>
  </view>
</view>
```

```Javascript
Page({
  data: {
    text: '3.1415926',
    copy: '',
  },
  handleInput(e) {
    this.setData({
      text: e.detail.value,
    })
  },
  handleCopy() {
    my.setClipboard({
      text: this.data.text,
      success(res) {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('setClipboard/complete')
      },
    })
  },
  handlePaste() {
    my.getClipboard({
      success: ({ text }) => {
        this.setData({ copy: text })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('getClipboard/complete')
      },
    })
  },
})
```
```css
.clipboard-button {
  margin-left: 5px;
}
```
