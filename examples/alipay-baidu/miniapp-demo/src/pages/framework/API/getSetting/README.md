# 设置

## my.getSetting(OBJECT)

获取用户的当前设置，返回值中只会出现小程序已经向用户请求过的权限。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563446163886.png)

**Object 参数说明：**

| 参数 | 类型 | 必填 | 说明 | 最低支持 |
| --- | --- | --- | --- | --- |
| success | Function | 否 | 接口调用成功的回调函数，返回内容详见返回参数说明。 | v9.10.0 |
| fail | Function | 否 | 接口调用失败的回调函数 | v9.10.0 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） | v9.10.0 |

**success返回参数说明：**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| authSetting | Object | 用户授权结果，其中 key 为 scope 值，value 为 Bool 值，表示用户是否允许授权，详见[scope列表](https://docs.alipay.com/mini/introduce/authcode) |


### 代码示例
```html
<view class="page">
  <view class="page-description">获取用户的当前设置</view>
  <view class="page-section">
    <view class="page-section-title">getSetting</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getSetting">获取用户的当前设置</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  getSetting() {
    my.getSetting({
      success: (res) => {
        console.log(res)
        my.alert({
          content: JSON.stringify(res),
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
})
```

### scope 列表

| scope | 对应接口 | 描述 |
| --- | --- | --- |
| userInfo | my.getAuthCode | 用户信息 |
| location | my.getLocation, my.getCurrentLocation | 地理位置 |
| album | my.chooseImage,<br />my.chooseVideo,<br />saveImage,<br />saveVideoToPhotosAlbum | 保存到相册 |
| camera | my.scan | 摄像头 |
| audioRecord | my.startAudioRecord<br />my.stopAudioRecord,<br />my.cancelAudioRecord | 录音功能 |
