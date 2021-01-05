# 下载文件

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563533798309.png)

## my.downloadFile

下载文件资源到本地。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 下载文件地址 | v8.90 |
| header | Object | 否 | HTTP 请求 Header | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| apFilePath | String | 文件临时存放的位置 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 12 | 下载失败 | |
| 13 | 没有权限 | |

### 代码示例
```html
<view class="page">
  <view class="page-description">下载文件</view>
  <view class="page-section">
    <view class="page-section-title">download</view>
    <view class="page-section-demo">
      <button type="primary" onTap="download">下载图片并显示</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  download() {
    my.downloadFile({
      url: 'http://img.alicdn.com/tfs/TB1x669SXXXXXbdaFXXXXXXXXXX-520-280.jpg',
      success(res) {
        // console.log(res)
        const { apFilePath } = res
        my.previewImage({
          urls: [apFilePath],
        })
      },
      fail(res) {
        my.alert({
          content: res.errorMessage || res.error,
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
