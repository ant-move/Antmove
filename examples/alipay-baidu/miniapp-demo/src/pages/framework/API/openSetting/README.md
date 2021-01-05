# 设置

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534431255.png)

## my.openSetting(OBJECT)
> IDE模拟器暂未支持，请在真机上调试。

打开小程序设置界面，返回用户权限设置的结果；设置界面只会出现小程序已经向用户请求过的权限。

**Object 参数说明：**

| 参数 | 类型 | 必填 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 接口调用成功的回调函数，返回内容详见返回参数说明。 | Android:v8.90, ios:v9.10 |
| fail | Function | 否 | 接口调用失败的回调函数 | Android:v8.90, ios:v9.10 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | Android:v8.90, ios:v9.10 |

**success返回参数说明：**

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，详见[scope列表](https://docs.alipay.com/mini/introduce/authcode) |

### 代码示例
```html
<view class="page">
  <view class="page-description">打开小程序设置</view>
  <view class="page-section">
    <view class="page-section-title">openSetting</view>
    <view class="page-section-demo">
      <button type="primary" onTap="openSetting">打开小程序设置界面</button>
    </view>
  </view>
</view>
```

```Javascript
Page({
  openSetting() {
    my.openSetting({
      success: (res) => {
        console.log(res)
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
