# 数据安全

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563535320692.png)

## my.rsa
非对称加密。

**注：加密与解密过程分别放置在客户端与服务端，且私钥放在服务端，私钥放在客户端易泄露将导致安全问题。**

### 入参
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| action | String | 是 | 使用rsa加密还是rsa解密，`encrypt`加密，`decrypt`解密 | v8.90 |
| text | String | 是 | 要处理的文本，加密为原始文本，解密为Base64编码格式文本 | v8.90 |
| key | String | 是 | rsa秘钥，加密使用公钥，解密使用私钥 | v8.90 |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| text | String | 经过处理过后得到的文本，加密为Base64编码文本，解密为原始文本 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 10 | 参数错误 | |
| 11 | key错误 | |

### 代码示例
```html
<view class="page">
  <view class="page-section">
    <view class="page-section-title">输入：</view>
    <view class="page-section-demo">
      <textarea placeholder="请输入..." value="{{inputValue}}" maxlength="500" onInput="onInput" />
    </view>

    <view class="page-section-title">输出：</view>
    <view class="page-section-demo">
      <textarea value="{{outputValue}}" disabled maxlength="500" />
    </view>
    <view class="page-section-btns">
      <view>
        <button plain type="primary" onTap="onEncrypt">加密</button>
      </view>
      <view>
        <button plain type="primary" onTap="onDecrypt">解密</button>
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    inputValue: '',
    outputValue: '',
  },
  onInput(e) {
    this.setData({ inputValue: e.detail.value })
  },
  onEncrypt() {
    my.rsa({
      action: 'encrypt',
      text: this.data.inputValue,
      key: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKmi0dUSVQ04hL6GZGPMFK8+d6\n' +
      'GzulagP27qSUBYxIJfE04KT+OHVeFFb6K+8nWDea5mkmZrIgp022zZVDgdWPNM62\n' +
      '3ouBwHlsfm2ekey8PpQxfXaj8lhM9t8rJlC4FEc0s8Qp7Q5/uYrowQbT9m6t7BFK\n' +
      '3egOO2xOKzLpYSqfbQIDAQAB',
      success: (result) => {
        console.log(result)
        this.setData({ outputValue: result.text })
      },
      fail(e) {
        my.alert({
          content: e.errorMessage || e.error,
        })
      },
    })
  },
  onDecrypt() {
    my.rsa({
      action: 'decrypt',
      text: this.data.inputValue,
      key: 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMqaLR1RJVDTiEvo\n' +
      'ZkY8wUrz53obO6VqA/bupJQFjEgl8TTgpP44dV4UVvor7ydYN5rmaSZmsiCnTbbN\n' +
      'lUOB1Y80zrbei4HAeWx+bZ6R7Lw+lDF9dqPyWEz23ysmULgURzSzxCntDn+5iujB\n' +
      'BtP2bq3sEUrd6A47bE4rMulhKp9tAgMBAAECgYBjsfRLPdfn6v9hou1Y2KKg+F5K\n' +
      'ZsY2AnIK+6l+sTAzfIAx7e0ir7OJZObb2eyn5rAOCB1r6RL0IH+MWaN+gZANNG9g\n' +
      'pXvRgcZzFY0oqdMZDuSJjpMTj7OEUlPyoGncBfvjAg0zdt9QGAG1at9Jr3i0Xr4X\n' +
      '6WrFhtfVlmQUY1VsoQJBAPK2Qj/ClkZNtrSDfoD0j083LcNICqFIIGkNQ+XeuTwl\n' +
      '+Gq4USTyaTOEe68MHluiciQ+QKvRAUd4E1zeZRZ02ikCQQDVscINBPTtTJt1JfAo\n' +
      'wRfTzA0Lvgig136xLLeQXREcgq1lzgkf+tGyUGYoy9BXsV0mOuYAT9ldja4jhJeq\n' +
      'cEulAkEAuSJ5KjV9dyb0RIFAz5C8d8o5KAodwaRIxJkPv5nCZbT45j6t9qbJxDg8\n' +
      'N+vghDlHI4owvl5wwVlAO8iQBy8e8QJBAJe9CVXFV0XJR/n/XnER66FxGzJjVi0f\n' +
      '185nOlFARI5CHG5VxxT2PUCo5mHBl8ctIj+rQvalvGs515VQ6YEVDCECQE3S0AU2\n' +
      'BKyFVNtTpPiTyRUWqig4EbSXwjXdr8iBBJDLsMpdWsq7DCwv/ToBoLg+cQ4Crc5/\n5DChU8P30EjOiEo=',
      success: (result) => {
        this.setData({ outputValue: result.text })
      },
      fail(e) {
        console.log(e)
        my.alert({
          content: e.errorMessage || e.error,
        })
      },
    })
  },
})
```
