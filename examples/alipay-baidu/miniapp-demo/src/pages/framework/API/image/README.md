# 图片

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563531259937.png)

## my.chooseImage
拍照或从手机相册中选择图片。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| count | Number | 否 | 最大可选照片数，默认1张 | v8.90 |
| sizeType | StringArray | 否 | original 原图，compressed 压缩图，默认二者都有 | v8.90 |
| sourceType | String Array | 否 | 相册选取或者拍照，默认 [‘camera’,‘album’] | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| apFilePaths | String Array | 图片文件描述 |

### 错误码描述
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 用户取消操作 | |

## my.previewImage
> 暂不支持本地图片路径

预览图片。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| urls | Array | 是 | 要预览的图片链接列表 | v8.90 |
| current | Number | 否 | 当前显示图片索引，默认 0 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

## my.saveImage
保存在线图片到手机相册。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 要保存的图片链接 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### 错误码描述
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 2 | 参数无效，没有传 url 参数 | |
| 15 | 没有开启相册权限(ios only) | |
| 16 | 手机相册存储空间不足(ios only) | |
| 17 | 保存图片过程中的其他错误 | |

### 代码示例

```html
<view class="page">
  <view class="page-description">图片</view>
  <view class="page-section">
    <view class="page-section-title">image</view>
    <view class="page-section-demo">
      <button type="primary" onTap="chooseImage">选择照片</button>
      <button type="primary" onTap="previewImage">预览照片</button>
      <button type="primary" onTap="saveImage">保存照片</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  chooseImage() {
    my.chooseImage({
      count: 2,
      success: (res) => {
        console.log('success')
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: (err) => {
        my.showToast({
          content: `chooseImage/fail${JSON.stringify(err)}`, // 文字内容
        })
      },
      complete() {
        console.log('chooseImage/complete')
      },
    })
  },
  previewImage() {
    my.previewImage({
      current: 2,
      urls: [
        'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
        'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg',
      ],
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      fail: () => {
        my.showToast({
          content: 'previewImage/fail', // 文字内容
        })
      },
      complete() {
        console.log('previewImage/complete')
      },
    })
  },
  saveImage() {
    my.saveImage({
      url: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: () => {
        my.alert({
          title: '保存成功',
        })
      },
      fail() {
        console.log('保存失败')
      },
      complete() {
        console.log('saveImage/complete')
      },
    })
  },
})
```
