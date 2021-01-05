# 加载提示

扫码体验：

![loading.png](https://cache.amap.com/ecology/tool/miniapp/1563527577617.png)

## my.showLoading
显示加载提示。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| content | String | 否 | loading的文字内容 | v8.90.0 |
| delay | Number | 否 | 延迟显示，单位 ms，默认 0。如果在此时间之前调用了 my.hideLoading 则不会显示 | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

## my.hideLoading
隐藏加载提示。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| page | Object | 否 | 具体指当前page实例，某些场景下，需要指明在哪个page执行hideLoading。 | v8.90.0 |

### 代码示例

```html
<view class="page">
  <view class="page-description">加载提示</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">
        loading
      </view>
      显示 loading 后，会覆盖整个h5页面，页面元素不能交互。
    </view>
    <view class="page-section-demo">
      <button size='default' type="primary" onTap="showLoading">显示加载提示</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  showLoading() {
    my.showLoading({
      content: '加载中...',
      delay: '1000',
    })
    const that = this
    setTimeout(() => {
      my.hideLoading({
        page: that,
      })
    }, 5000)
  },
})
```
