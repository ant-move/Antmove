# 用户授权

详细用户授权接入参考 [指引](https://docs.alipay.com/mini/introduce/auth)。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563529900323.png)

## my.getAuthCode
获取授权码。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| scopes | String/Array | 否 | 授权类型，默认 auth_base。支持 auth_base（静默授权）/ auth_user（主动授权） / auth_zhima（芝麻信用） | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| authCode | String | 授权码 |
| authErrorScope | Key-Value | 失败的授权类型，key是授权失败的 scope，value 是对应的错误码 |
| authSucessScope | Array | 成功的授权 scope |

### 代码示例

```html
<view class="page">
  <view class="page-description">获取授权码</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">
        getAuthCode
      </view>
      请不要一进入小程序就弹框授权，建议先了解小程序的服务内容
    </view>
    <view class="page-section-demo">
      <button type="primary" onTap="getAuthCode">
        获取授权码
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  onLoad() {},
  data: {},
  getAuthCode: () => {
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        console.log(res)
        const { authCode } = res
        my.alert({
          content: authCode,
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
