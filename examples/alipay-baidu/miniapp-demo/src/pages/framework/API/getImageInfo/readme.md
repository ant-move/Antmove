# 图片
### 扫码预览
![getImageInfo.png](https://cache.amap.com/ecology/tool/miniapp/1563435574663.png)
### 入参
| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| src | String | 否 | 图片路径，目前支持：<br />-网络图片路径 <br />-apFilePath路径 <br /> -相对路径
| success | Function | 否 | 调用成功的回调函数 |
| fail | Function | 否 | 调用失败的回调函数 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） |

### success 返回值
| 名称 | 类型 | 描述 | 版本 |
| :--- | :--- | :--- | :--- |
| width | Number | 图片宽度（单位px） | v9.05 |
| height | Number | 图片高度（单位px） | v9.05 |
| path | String | 图片本地路径 | v9.05 |
| orientation | String | 返回图片的方向，有效值见下表 | v9.05 |
| type | String | 返回图片的格式 | v9.05 |

**orientation参数说明：**

| 枚举值 | 说明 |
| :--- | :--- |
| up | 默认 |
| down | 180度旋转 |
| left | 逆时针旋转90度 |
| right | 顺时针旋转90度 |
| up-mirrored | 同up，但水平翻转 |
| down-mirrored | 同down，但水平翻转 |
| left-mirrored | 同left，但垂直翻转 |
| right-mirrored | 同right，但垂直翻转 |

### 代码示例
```html
<view class="page">
  <view class="page-description">获取图片信息</view>
  <view class="page-section">
    <view class="page-section-title">getImageInfo</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getImageInfo">获取</button>
    </view>
  </view>
</view>
```
```javascript
Page({
  data: {},
  onLoad() {},
  getImageInfo() {
    my.getImageInfo({
      src: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
      success: (res) => {
        my.alert({
          content: `成功，${JSON.stringify(res)}`,
        })
      },
    })
  },
})
```
