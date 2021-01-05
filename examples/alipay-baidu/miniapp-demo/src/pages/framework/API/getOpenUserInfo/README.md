# my.getOpenUserInfo
### 扫码预览
![getOpenUserInfo.png](https://cache.amap.com/ecology/tool/miniapp/1563438421694.png)

此接口可获取高德会员的基础信息，接入方法可参考 [获取会员基础信息介绍](https://docs.alipay.com/mini/introduce/twn8vq)。另外，此功能需要用户主动触发才能激活，所以该功能不由 API 直接调用，需用 [`<button>`](../component/button) 组件的点击来触发。
## 入参

Object 类型，属性如下：

| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v10.0.0 |
| fail | Function | 否 | 调用失败的回调函数 | v10.0.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v10.0.0 |

## 使用注意

需要将 `<button>` 组件 `open-type` 的值设置为 `getAuthorize`，当用户点击并同意之后，可以通过`my.getOpenUserInfo()` 接口获取到高德服务器返回的基础信息，若用户未授权，直接调用`my.getOpenUserInfo()` 接口，则无法返回正确信息。

## 示例代码
唤起授权框，推荐兼容方案如下：
```html
<view class="page">
  <view class="page-description">获取会员的基础信息</view>
  <view class="page-section">
    <view class="page-section-title">getOpenUserInfo</view>
    <view class="page-section-demo">
      <button
        open-type="getAuthorize"
        type="primary"
        onGetAuthorize="onGetAuthorize"
        onError="onAuthError"
        scope='userInfo'
      >
        会员基础信息授权
      </button>
    </view>
  </view>
</view>
```

### Button 属性说明
| 属性 | 说明 |
| --- | --- |
| open-type | getAuthorize为授权组件（固定值）。 |
| scope | userInfo（固定值）。 |
| onGetAuthorize | 授权成功回调（在回调里可以调用获取信息的接口）。 |
| onError | 授权失败回调（包括用户拒绝和系统异常）。 |

### 获取用户基础信息
用户点击同意后，即可通过 `my.getOpenUserInfo()` 获取用户基础信息：
```javascript
Page({
  data: {},
  onLoad() { },
  onGetAuthorize(data) {
    console.log(data)
    my.getOpenUserInfo({
      fail: (res) => {
        console.log('error', res)
      },
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      complete: (res) => {
        console.log('complete', res)
      },
    })
  },
})
```

### 返回 res 报文格式

- 成功返回 res 报文格式示例如下：

`{"response": "{"response": {"code": "10000","msg": "Success","countryCode": "CN","gender": "f","nickName": "XXX","avatar": "https://tfs.alipayobjects.com/images/partner/XXXXXXXX","city": "南通市","province": "江苏省"}}"}`

- 未接入“获取用户基础信息”的功能包，返回 res 报文格式示例如下：

`{"response":"{"response":{"code":"40006","msg":"Insufficient Permissions","subCode":"isv.insufficient-isv-permissions","subMsg":"ISV权限不足，建议在开发者中心检查对应功能是否已经添加"}}"}`

## success 回调函数
入参为 res 对象，Object 类型，属性被解析后如下表所示：

| 名称 | 类别 | 类型 | 描述 |
| --- | --- | --- | --- |
| avatar | 基础类型 | String | 头像图片地址 |
| nickName | 基础类型 | String | 昵称 |
| gender | 基础类型 | String | 性别，男对应“m”，女对应“f” |
| countryCode | 基础类型 | String | 国家码 |
| province | 基础类型 | String | 省份 |
| city | 基础类型 | String | 所在市区 |
