# 打开高德页面
### 扫码预览
![navigateToAMapPage.png](https://cache.amap.com/ecology/tool/miniapp/1563441651690.png)
## my.navigateToAMapPage(Object)  - 内部接口
### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| url | String | 是 | 目标地址链接 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 代码示例

```html
<view class="page">
  <view class="page-description">打开高德页面</view>
  <view class="page-section">
    <view class="page-section-title">navigateToAMapPage</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="navigateToAMapPage">
        navigateToAMapPage
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() { },
  navigateToAMapPage() {
    my.navigateToAMapPage({
      url: 'amapuri://search/around?keywords=%e9%a6%96%e5%bc%80%e5%b9%bf%e5%9c%ba&lat=39.99325&lon=116.473209',
      success: (res) => {
        console.log(`success|navigateToAMapPage|${encodeURIComponent(JSON.stringify(res))}`)
        my.alert({ content: `系统信息${JSON.stringify(res)}` })
      },
      fail: (error) => {
        console.log(`fail|navigateToAMapPage|${encodeURIComponent(JSON.stringify(error))}`)
        my.alert({ content: `系统信息${JSON.stringify(error)}` })
      },
      complete: () => {
        console.log('complete|navigateToAMapPage')
      },
    })
  },
})
```
