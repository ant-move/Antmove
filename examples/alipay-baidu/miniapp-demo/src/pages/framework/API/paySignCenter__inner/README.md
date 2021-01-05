# 支付代扣签约
## my.paySignCenter(Object)
### 扫码预览
![paySignCenter.png](https://cache.amap.com/ecology/tool/miniapp/1563441308555.png)
### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| signStr | String | 是 | 签约字符串 | v9.05 |
| success | Function | 否 | 调用成功的回调函数 | v9.05 |
| fail | Function | 否 | 调用失败的回调函数 | v9.05 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v9.05 |

### 返回

| 返回码 | 描述 |
| :--- | :--- |
| 7000 | 协议签约成功 |

### 错误码

| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 7001 | 签约结果未知（有可能已经签约成功），请根据外部签约号查询签约状态 |
| 7002 | 协议签约失败 |
| 6001 | 用户中途取消 |
| 6002 | 网络连接错误 |

### 代码示例

```html
<view class="page">
  <view class="page-description">支付代扣签约</view>
  <view class="page-section">
    <view class="page-section-title">paySignCenter</view>
    <view class="page-section-demo">
      <button size="default" type="primary" onTap="paySignCenter">paySignCenter</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {},
  paySignCenter() {
    my.paySignCenter({
      signStr: 'biz_content%3D%257B%2522access_params%2522%253A%257B%2522channel%2522%253A%2522ALIPAYAPP%2522%257D%252C%2522external_agreement_no%2522%253A%2522xidong___2317%2522%252C%2522external_logon_id%2522%253A%252213852852877%2522%252C%2522personal_product_code%2522%253A%2522GENERAL_WITHHOLDING_P%2522%252C%2522product_code%2522%253A%2522GENERAL_WITHHOLDING%2522%252C%2522sign_scene%2522%253A%2522INDUSTRY%257CCARRENTAL%2522%252C%2522third_party_type%2522%253A%2522PARTNER%2522%257D%26sign%3Df3pjBDTRftOwXWnCqAMAnkBfGTFlcMmZI8hEgmV6uREZRXVDuLsSjD8WO%252FeZ1fjDG8GqVO9t1AN7q6yCUHKX%252Bw%252FE7efXwpVDWldr4iVuXDtNd3UJDJUiRJhIm6b73czWacVzm1XIery%252F2DyKI2y08tBf5NNWuQCC3d%252FITxziTl8%253D%26timestamp%3D2017-06-27%2B14%253A44%253A00%26sign_type%3DRSA%26notify_url%3Dhttp%253A%252F%252Fapi.test.alipay.net%252Fatinterface%252Freceive_notify.htm%26charset%3DUTF-8%26app_id%3D2017060101317939%26method%3Dalipay.user.agreement.page.sign%26return_url%3Dhttp%253A%252F%252Fapi.test.alipay.net%252Fatinterface%252Freceive_notify.htm%26version%3D1.0',
      success: (res) => {
        my.alert({
          title: 'success', // alert框的标题
          content: JSON.stringify(res),
        })
      },
      fail: (res) => {
        my.alert({
          title: 'fail', // alert框的标题
          content: JSON.stringify(res),
        })
      },
    })
  },
})
```
