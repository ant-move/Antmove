# 扫码

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563535091570.png)

## my.scan
调用扫一扫功能。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| type | String | 否 | 扫码样式(默认 qr)：<br />1. qr,扫码框样式为二维码扫码框2. bar，扫码样式为条形码扫码框 | v8.90 |
| hideAlbum | Boolean | 否 | 是否隐藏相册（不允许从相册选择图片），只能从相机扫码 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| code | String | 扫码所得数据 |
| qrCode | String | 扫描二维码时返回二维码数据 |
| barCode | String | 扫描条形码时返回条形码数据 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 10 | 用户取消 | |
| 11 | 操作失败 | |

### 代码示例
```html
<view class="page">
  <view class="page-description">扫码Scan</view>
  <view class="page-section">
    <view class="page-section-title">scan</view>
    <view class="page-section-demo">
      <form onSubmit="scanCode">
        <view>
          <button type="primary" onTap="scan">扫码</button>
        </view>
      </form>
    </view>
  </view>
</view>
```

```javascript
Page({
  scan() {
    my.scan({
      type: 'qr',
      hideAlbum: false,
      success: (res) => {
        my.alert({ title: res.code })
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
