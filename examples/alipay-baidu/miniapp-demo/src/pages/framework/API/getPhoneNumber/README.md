# 获取用户手机号

获取高德用户绑定的手机号<br />因为需要用户主动触发才能发起获取手机号，所以该功能不由 API 直接调用，需用 `<button>` 组件的点击来触发。<br />**注意：目前该功能需要在开发者后台完成敏感信息申请才可以使用此功能，入口为[开发管理]-->[功能列表\添加功能]-->[获取会员手机号]-->[用户信息申请]，此功能需谨慎使用，若高德发现信息存在超出约定范围使用或者不合理使用等情况，高德有权永久回收该小程序的该接口权限。**

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563530429542.png)

### 使用方法
需要将 `<button>` 组件 `open-type` 的值设置为 `getAuthorize`，当用户点击并同意之后，可以通过`my.getPhoneNumber()` 接口获取到高德服务器返回的加密数据， 然后在第三方服务端结合签名算法和AES密钥进行解密获取手机号，方法详见[敏感信息加解密方法](https://docs.alipay.com/mini/introduce/auth)，若用户未授权，直接调用`my.getPhoneNumber()` 接口，则无法返回正确信息。

## 入参

Object 类型，属性如下：

| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.9.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.9.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.9.0 |

### 代码示例
唤起授权框，推荐兼容方案

```html
<button a:if="{{canIUseAuthButton}}" open-type="getAuthorize"
onGetAuthorize="onGetAuthorize" onError="onAuthError"
scope='phoneNumber'>
    授权手机号
</button>
```
Button属性说明

| 属性 | 说明 |
| :--- | :--- |
| open-type | getAuthorize为授权组件 |
| scope | phoneNumber |
| onGetAuthorize | 授权成功回调（在回调里可以调用获取信息的接口） |
| onError | 授权失败回调（包括用户拒绝和系统异常） |

用户点击同意后，即可通过`my.getPhoneNumber()`获取用户绑定的手机号

### 代码示例

```html
<view class="page">
  <view class="page-description">获取用户手机号</view>
  <view class="page-section">
    <view class="page-section-title">getPhoneNumber</view>    
    <view class="page-section-demo">
        <button a:if="{{canIUseAuthButton}}" 
          open-type="getAuthorize"
          type="primary"
          onGetAuthorize="onGetAuthorize" onError="onAuthError" 
          scope='phoneNumber'
        >
          授权手机号
        </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    canIUseAuthButton: true,
  },
  onGetAuthorize() {
    console.log('onGetAuthorize')
    my.getPhoneNumber({
      success: (res) => {
        console.log('success', res)
        my.alert({
          content: res,
        })
      },
      fail: (res) => {
        console.log('fail', res)
        my.alert({
          content: res,
        })
      },
    })
  },
  onAuthError(err) {
    my.alert({
      content: err,
    })
  },
})
```
