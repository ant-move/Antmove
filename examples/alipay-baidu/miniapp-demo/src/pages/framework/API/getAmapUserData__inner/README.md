# 用户标识

# my.getOpenUserData
### 扫码预览
![getOpenUserData.png](https://cache.amap.com/ecology/tool/miniapp/1563441060585.png)

<br/>获取用户标识（加密的数据）

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| --- | --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### success 返回值
| 名称 | 类型 | 描述 |
| --- | --- | --- |
| uid | String | 用户唯一标识 |

### 代码示例

```html
<view class="page">
  <view class="page-description">获取加密用户标示</view>
  <view class="page-section">
    <view class="page-section-title">getAmapUserData</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="getAmapUserData">getAmapUserData</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  getAmapUserData() {
    my.getAmapUserData({
      success(res) {
        my.alert({
          content: `success，${JSON.stringify(res)}`,
        })
      },
      fail: (res) => {
        my.alert({
          content: `fail，${JSON.stringify(res)}`,
        })
      },
      complete: (res) => {
        my.alert({
          content: `complete：${JSON.stringify(res)}`,
        })
      },
    })
  },
})
```
