# 压缩图片
### 扫码预览
![compressImage.png](https://cache.amap.com/ecology/tool/miniapp/1563435472491.png)
### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| apFilePaths | String Array | 是 | 要压缩的图片地址数组 | v9.05 |
| compressLevel | Number | 否 | 压缩级别，支持 0 ~ 4 的整数，默认 4。详见「compressLevel表 说明表」 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| apFilePaths | String Array | 压缩后的路径数组 |

### compressLevel表
| compressLevel | 说明 |
| :--- | :--- |
| 0 | 低质量 |
| 1 | 中等质量 |
| 2 | 高质量 |
| 3 | 不压缩 |
| 4 | 根据网络适应 |

## 代码示例
```html

<view class="page">
  <view class="page-description">压缩图片</view>
  <view class="page-section">
    <view class="page-section-title">compressImage</view>
    <view class="page-section-demo">
      <button type="primary" onTap="compressImage">压缩图片</button>
    </view>
  </view>
</view>
```
```javascript
Page({
  data: {},
  onLoad() {},
  compressImage() {
    my.compressImage({
      apFilePaths: ['https://resource/apmlcc0ed184daffc5a0d8da86b2f518cf7b.image'],
      compressLevel: 1,
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
```
