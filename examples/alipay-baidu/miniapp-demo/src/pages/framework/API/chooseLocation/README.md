# 选择位置

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563532537583.png)

## my.chooseLocation

**请先进行权限申请**

使用高德内置地图选择地理位置。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| name | String | 位置名称 |
| address | String | 详细地址 |
| latitude | Number | 纬度，浮点数，范围为-90~90，负数表示南纬 |
| longitude | Number | 经度，浮点数，范围为-180~180，负数表示西经 |

### 代码示例
```html
<view class="page">
  <view class="page-description">打开地图选择位置</view>
  <view class="page-section">
    <view class="page-section-demo">
      <text>经度:</text>
      <input value="{{longitude}}"></input>
    </view>
    <view class="page-section-demo">
      <text>纬度:</text>
      <input value="{{latitude}}"></input>
    </view>
    <view class="page-section-demo">
      <text>位置名称:</text>
      <input value="{{name}}"></input>
    </view>
    <view class="page-section-demo">
      <text>详细位置:</text>
      <input value="{{address}}"></input>
    </view>    
    <view class="page-section-demo">
      <button onTap="chooseLocation" type="primary">选择位置</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    longitude: '120.126293',
    latitude: '30.274653',
    name: '黄龙万科中心',
    address: '学院路77号',
  },
  chooseLocation() {
    const that = this
    my.chooseLocation({
      success: (res) => {
        console.log(JSON.stringify(res))
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          name: res.name,
          address: res.address,
        })
      },
      fail: (error) => {
        my.alert({ content: `调用失败：${JSON.stringify(error)}` })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```

```css
.page-section-demo {
  display: flex;
  align-items: center;
}
.page-section-demo > text {
  white-space: nowrap;
}
.page-section-demo > input {
  width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.page-section-demo > button {
  width: 100%;
}
```

> 注意：`chooseLocation`的第一个返回结果`name`都是空字符串，原因：页面默认会搜索小蓝标附近的poi显示，第一条一定是小蓝标的经纬度，是没有poi信息，只有地址信息的经纬度点，所以不会返回poi的`name`，只会返回经纬度
