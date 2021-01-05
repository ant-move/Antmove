# 获取当前位置

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563532212308.png)

## my.getLocation(OBJECT)
获取用户当前的地理位置信息。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| cacheTimeout | Number | 否 | 高德客户端经纬度定位缓存过期时间，单位秒。默认 30s。使用缓存会加快定位速度，缓存过期会重新定位 | v8.90 |
| type | Number | 否 | 0：默认，获取经纬度<br />1：获取经纬度和详细到区县级别的逆地理编码数据<br />2：获取经纬度和详细到街道级别的逆地理编码数据，不推荐使用<br />3：获取经纬度和详细到POI级别的逆地理编码数据，不推荐使用 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| longitude | String | 经度 | v8.90 |
| latitude | String | 纬度 | v8.90 |
| accuracy | String | 精确度，单位m | v8.90 |
| horizontalAccuracy | String | 水平精确度，单位m | v8.90 |
| country | String | 国家(type>0生效) | v8.90 |
| countryCode | String | 国家编号 (type>0生效) | v8.90 |
| province | String | 省份(type>0生效) | v8.90 |
| city | String | 城市(type>0生效) | v8.90 |
| cityAdcode | String | 城市级别的地区代码(type>0生效) | v8.90 |
| district | String | 区县(type>0生效) | v8.90 |
| districtAdcode | String | 区县级别的地区代码(type>0生效) | v8.90 |
| streetNumber | Object | 需要街道级别逆地理的才会有的字段,街道门牌信息，结构是：{street, number} (type>1生效) | v8.90 |
| pois | array | 需要POI级别逆地理的才会有的字段,定位点附近的 POI 信息，结构是：{name, address}（type>2生效） | v8.90 |

### 错误码描述
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 11 | 请确认定位相关权限已开启 | 提示用户打开定位权限 |
| 12 | 网络异常，请稍后再试 | 提示用户检查当前网络 |
| 13 | 定位失败，请稍后再试 |  |
| 14 | 业务定位超时 | 提示用户再次尝试 |
| 2001 | 小程序没有定位权限 | my.openSetting打开 |

### 代码示例
```html
<view class="page">
  <view class="page-description">获取当前位置</view>
  <view class="page-section">
    <view class="page-section-demo">
      <view class="description">当前位置经纬度</view>
      <block a:if="{{hasLocation === false}}">
        <text>未获取</text>
      </block>
      <block a:if="{{hasLocation === true}}">
        <view class="page-body-text-location">
          <text>E{{location.longitude[0]}}°{{location.longitude[1]}}′</text>
          <text>N{{location.latitude[0]}}°{{location.latitude[1]}}′</text>
        </view>
      </block>
    </view>
    <view class="page-section-btns">
      <view>
        <button type="primary" plain onTap="getLocation">获取</button>
      </view>
      <view>
        <button plain type="primary" onTap="clear">清空</button>
      </view>
    </view>
  </view>
</view>
```

```javascript
import formatLocation from './format-location.js'
Page({
  data: {
    hasLocation: false,
  },
  getLocation() {
    const that = this
    my.showLoading()
    my.getLocation({
      cacheTimeout: 20,
      type: 3,
      success(res) {
        my.hideLoading()
        console.log(res)
        that.setData({
          hasLocation: true,
          location: formatLocation(res.longitude, res.latitude),
        })
      },
      fail() {
        my.hideLoading()
        my.alert({ title: '定位失败' })
      },
      complete() {
        console.log('complete')
      },
    })
  },
  clear() {
    this.setData({
      hasLocation: false,
    })
  },
})
```

```css
.description{
  margin-bottom:24rpx;
}
```
