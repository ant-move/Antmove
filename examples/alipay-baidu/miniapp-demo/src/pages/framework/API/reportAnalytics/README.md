# 自定义分析

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563535432744.png)

## my.reportAnalytics
自定义分析数据的上报接口。使用前需要在[小程序管理后台](https://openhome.alipay.com/)的事件管理中新建事件，并配置好事件名和字段。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| eventName | String | 是 | 自定义事件名，需申请 | v8.90 |
| data | Object | 是 | 上报的数据 | v8.90 |

### 示例代码
```html
<view class="page">
  <view class="page-description">自定义分析 API</view>
  <view class="page-section">
    <view class="page-section-title">my.reportAnalytics</view>
    <view class="page-section-demo">
      <view class="report" onTap="reportAnalytics">自定义分析</view>
    </view>
  </view>
</view>
```

```javascript
Page({
  reportAnalytics() {
    my.reportAnalytics('demo_click', {})
    my.alert({
      content: '数据上报成功，请到小程序管理后台-数据分析中查看',
    })
  },
})
```

```css
.report {
  width: 100%;
  background: #108ee9;
  color: #fff;
  border: 1px solid #108ee9;
  height: 47px;
  line-height: 47px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
}
```
