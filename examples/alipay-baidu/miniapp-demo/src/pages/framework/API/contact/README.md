# 联系人

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563527827639.png)

## my.choosePhoneContact
选择本地系统通信录中某个联系人的电话。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| name | String | 选中的联系人姓名 |
| mobile | String | 选中的联系人手机号 |

### 错误码
| 错误码 | 描述 | 解决方案 |
| :--- | :--- | :--- |
| 10 | 没有权限 | |
| 11 | 用户取消操作(或设备未授权使用通讯录) | |

### 代码示例
```html
<view class="page">
  <view class="page-description">联系人</view>
  <view class="page-section">
    <view class="page-section-title">choosePhoneContact</view>
    <view class="page-section-demo">
      <button type="primary" onTap="choosePhoneContact">唤起本地通讯录</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: `choosePhoneContact response: ${JSON.stringify(res)}`,
        })
      },
      fail: (res) => {
        my.alert({
          content: `choosePhoneContact response: ${JSON.stringify(res)}`,
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
})
```
