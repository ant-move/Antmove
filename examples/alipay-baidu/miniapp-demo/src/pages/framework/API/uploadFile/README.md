# 上传文件

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563533643961.png)

## my.uploadFile
上传本地资源到开发者服务器。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 开发者服务器地址 | v8.90 |
| filePath | String | 是 | 要上传文件资源的本地定位符 | v8.90 |
| fileName | String | 是 | 文件名，即对应的 key, 开发者在服务器端通过这个 key 可以获取到文件二进制内容 | v8.90 |
| fileType | String | 是 | 文件类型，image / video / audio | v8.90 |
| header | Object | 否 | HTTP 请求 Header | v8.90 |
| formData | Object | 否 | HTTP 请求中其他额外的 form 数据 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| data | String | 服务器返回的数据 |
| statusCode | String | HTTP 状态码 |
| header | Object | 服务器返回的 header |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 文件不存在 | |
| 12 | 上传文件失败 | |
| 13 | 没有权限 | |

### 代码示例
```html
<view class="page">
  <view class="page-description">上传文件</view>
  <view class="page-section">
    <view class="page-section-title">uploadFile</view>
    <view class="page-section-demo">
      <button type="primary" onTap="uploadFile">上传</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  uploadFile() {
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        const path = res.apFilePaths[0]
        console.log(path)
        my.uploadFile({
          url: 'http://httpbin.org/post',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: () => {
            my.alert({ title: '上传成功' })
          },
          fail() {
            my.alert({ title: '上传失败' })
          },
          complete() {
            console.log('complete')
          },
        })
      },
    })
  },
})
```
