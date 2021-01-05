# 位置
### 扫码预览
![openLocation.png](https://cache.amap.com/ecology/tool/miniapp/1563435692938.png)
## my.openLocation 
### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| longitude | String | 是 | 经度 | v9.05 |
| latitude | String | 是 | 纬度 | v9.05 |
| name | String | 是 | 位置名称 | v9.05 |
| address | String | 是 | 地址的详细说明 | v9.05 |
| scale | Number | 否 | 缩放比例，范围 3~19，默认为 15 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 代码示例
```html
<view class="page">
  <view class="page-description">使用原生地图查看位置</view>
  <view class="page-section">
    <view class="page-section-title">openLocation</view>
    <view class="page-section-demo">
      <button onTap="openLocation" type="primary">打开地图查看</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  openLocation() {
    my.openLocation({
      longitude: '121.549697',
      latitude: '31.227250',
      name: '阿里',
      address: '杨高路地铁站',
    })
  },
})
```