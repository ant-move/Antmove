# 开放认证

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563530837024.png)

# my.startAPVerify
开放认证接口，调用此接口可以唤起开放认证页面并进行人脸身份验证。<br />需要通过蚂蚁开发平台，调用certification.initialize接口进行[认证初始化](https://docs.alipay.com/zmxy/271/105914)。获得biz_no 后，方能通过以下接口激活开放认证小程序。

## 入参
Object 类型，属性如下：

| 属性 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| bizNo | string | 是 | 认证标识。 |
| success | Function | 否 | 调用成功的回调函数。 |
| fail | Function | 否 | 调用失败的回调函数。 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行）。 |

### success 回调函数
入参为 Object 类型，属性如下：

| 属性 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| token | string | 是 | 认证标识。 |
| passed | string | 是 | 认证是否通过。 |
| reason | string | 否 | 认证不通过原因。 |

### fail 回调函数
入参为 Object 类型，属性如下：

| 属性 | **类型** | **描述** |
| :--- | :--- | :--- |
| error | String | 错误码 |
| errorMessage | String | 错误信息 |

#### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 6001 | 用户取消了业务流程。 | |
| 6002 | 网络异常。 | |

## 示例代码

```html
<view class="page">
  <view class="page-description">开放认证</view>
  <view class="page-section">
    <view class="page-section-title">startAPVerify</view>
    <view class="page-section-demo">
      <button type="primary" onTap="startAPVerify">唤起认证页面</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  startAPVerify() {
    console.log('唤起', my.canIUse('startAPVerify'))
    if (!my.canIUse('startAPVerify')) {
      my.alert({
        title: '客户端版本过低',
        content: '请升级高德版本',
      })
      return
    }
    my.startAPVerify({
      bizNo: 'your-biz-No',
      success: (res) => {
        my.alert({ title: `success:${JSON.stringify(res)}` })
      },
      fail: (res) => {
        my.alert({ title: `fail: ${JSON.stringify(res)}` })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
