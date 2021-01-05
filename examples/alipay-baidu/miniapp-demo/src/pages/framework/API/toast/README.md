# 弱提示

## my.showToast
显示一个弱提示，可选择多少秒之后消失。

扫码体验：

![toast.png](https://cache.amap.com/ecology/tool/miniapp/1563527461883.png)

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| content | String | 否 | 文字内容 | v8.90.0 |
| type | String | 否 | toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息 | v8.90.0 |
| duration | Number | 否 | 显示时长，单位为 ms，默认 2000 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

## my.hideToast
隐藏弱提示。

### 代码示例
```html
<view class="page">
  <view class="page-description">弱提示</view>
  <view class="page-section">
    <view class="page-section-title">showToast</view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="showToastSuccess">显示 success 提示</button></view>
      <view><button type="primay" plain onTap="showToastFail">显示 fail 提示</button></view>

    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="showToastException">显示 exception 提示</button></view>
      <view><button type="primay" plain onTap="showToastNone">显示 none 提示</button></view>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">hideToast</view>
      请先点击弹出toast按钮，然后点击该按钮进行隐藏
    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="hideToast">隐藏弱提示</button></view>
    </view>
  </view>
</view>
```
```javascript
Page({
  showToastSuccess() {
    my.showToast({
      type: 'success',
      content: '操作成功',
      duration: 3000,
      success: () => {
        console.log('toast 消失了')
      },
    })
  },
  showToastFail() {
    my.showToast({
      type: 'fail',
      content: '操作失败',
      duration: 3000,
      success: () => {
        console.log('toast 消失了')
      },
    })
  },
  showToastException() {
    my.showToast({
      type: 'exception',
      content: '网络异常',
      duration: 3000,
      success: () => {
        console.log('toast 消失了')
      },
    })
  },
  showToastNone() {
    my.showToast({
      type: 'none',
      content: '提醒',
      duration: 3000,
      success: () => {
        console.log('toast 消失了')
      },
    })
  },
  hideToast() {
    my.hideToast()
  },
})
```
