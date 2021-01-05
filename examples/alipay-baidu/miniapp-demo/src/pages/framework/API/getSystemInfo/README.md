# 系统信息

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534037022.png)

## my.getSystemInfo
获取系统信息。

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| model | String | 手机型号 | v8.90 |
| pixelRatio | Number | 设备像素比 | v8.90 |
| windowWidth | Number | 窗口宽度 | v8.90 |
| windowHeight | Number | 窗口高度 | v8.90 |
| language | String | 高德地图设置的语言 | v8.90 |
| version | String | 高德地图版本号 | v8.90 |
| storage | String | 设备磁盘容量 | v8.90 |
| currentBattery | String | 当前电量百分比 | v8.90 |
| system | String | 系统版本 | v8.90 |
| platform | String | 系统名：Android，iOS | v8.90 |
| titleBarHeight | Number | 标题栏高度 | v8.90 |
| screenWidth | Number | 屏幕宽度 | v8.90 |
| screenHeight | Number | 屏幕高度 | v8.90 |
| brand | String | 手机品牌 | v8.90 |
| fontSizeSetting | Number | 用户设置字体大小 | v8.90 |
| app | String | 当前运行的客户端，当前是高德地图则有效值是"amap" | v8.90 |

## my.getSystemInfoSync
返回值同 getSystemInfo success 回调参数（v8.90）

### 代码示例

```html
<view class="page">
  <view class="page-section">
    <view class="page-section-demo">
      <text>手机型号</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.model}}"></input>
    </view>
    <view class="page-section-demo">
      <text>语言</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.language}}"></input>
    </view>
    <view class="page-section-demo">
      <text>版本</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.version}}"></input>
    </view>
    <view class="page-section-demo">
      <text>window宽度</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.windowWidth}}"></input>
    </view>
    <view class="page-section-demo">
      <text>window高度</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.windowHeight}}"></input>
    </view>
    <view class="page-section-demo">
      <text>DPI</text>
      <input type="text" disabled="{{true}}" value="{{systemInfo.pixelRatio}}"></input>
    </view>
    <view class="page-section-btns">
      <view><button type="primary" plain onTap="getSystemInfo">获取手机系统信息</button></view>
      <view><button type="primary" plain onTap="getSystemInfoSync">同步获取手机系统信息</button></view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    systemInfo: {},
  },
  getSystemInfo() {
    my.getSystemInfo({
      success: (res) => {
        console.log(res)
        this.setData({
          systemInfo: res,
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
  getSystemInfoSync() {
    this.setData({
      systemInfo: my.getSystemInfoSync(),
    })
    console.log(this.data.systemInfo)
  },
})
```
