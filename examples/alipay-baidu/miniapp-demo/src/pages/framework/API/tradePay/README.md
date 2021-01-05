# 小程序唤起支付

详细接入支付方式参考[指引](https://docs.alipay.com/mini/introduce/pay)。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563530576245.png)

## my.tradePay

发起支付。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| tradeNO | String | 条件 | 接入小程序支付时传入此参数。此参数为高德交易号，**注意参数有大小写区分** | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| resultCode | String | 支付结果状态码，详见下表 |

resultCode 支付状态码说明：

| resultCode | 描述 |
| :--- | :--- |
| 9000 | 订单支付成功 |
| 8000 | 正在处理中 |
| 4000 | 订单支付失败 |
| 6001 | 用户中途取消 |
| 6002 | 网络连接出错 |
| 6004 | 支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态 |
| 99 | 用户点击忘记密码导致快捷界面退出(only iOS) |

### 代码示例

```html
<view class="page">
<view class="page-description">发起支付</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">
        tradePay
      </view>
      本 demo 不具备支付功能，仅展示 API 的使用，具体接入支付请参考小程序官方文档 API 的支付部分。
    </view>
    <view class="page-section-demo">
      <button type="primary" onTap="tradePay">
        发起支付请求
      </button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  tradePay() {
    my.tradePay({
      orderStr: '201711152100110410533667792', // 完整的支付参数拼接成的字符串，从服务端获取，具体是方法请参考小程序开发文档
      success: (res) => {
        my.alert({
          title: res.resultCode,
        })
      },
      fail: (res) => {
        my.alert({
          content: JSON.stringify(res),
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
