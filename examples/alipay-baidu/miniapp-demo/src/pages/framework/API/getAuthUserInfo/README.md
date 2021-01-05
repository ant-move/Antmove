# 获取用户信息

获取会员信息首先需要获取用户授权，详细会员信息获取参考[指引](https://docs.alipay.com/mini/introduce/auth)，采用 jsapi 调用的方式。

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563530181021.png)

## my.getAuthUserInfo
客户端获取会员信息。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| success | Function | 否 | 调用成功的回调函数 | v8.90 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90 |

### success 返回值
| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| nickName | String | 用户昵称 |
| avatar | String | 用户头像链接 |

### 代码示例

```html
<view class="page">
  <view class="page-description">客户端获取会员信息</view>
  <view class="page-section">
    <view class="page-section-title">
      <view class="page-section-name">getAuthUserInfo</view>
      请先设置高德的头像和昵称后生效
    </view>
    <view class="page-section-demo">
      <block a:if="{{hasUserInfo === false}}">
        <text>点击 [获取] 可获取用户头像及昵称</text>
      </block>
      <block a:if="{{hasUserInfo === true}}">
        <view class="userinfo-avatar">
          <image class="userinfo-avatar-img" src="{{userInfo.avatar}}"></image>
        </view>
        <view class="userinfo-nickname">{{userInfo.nickName}}</view>
      </block>
    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="getUserInfo">获取</button></view>
      <view><button type="primay" plain onTap="clear">清空</button></view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    hasUserInfo: false,
  },
  getUserInfo() {
    my.getAuthCode({
      scopes: 'auth_user',
      fail: (error) => {
        console.error('getAuthCode', error)
      },
      success: () => {
        my.getAuthUserInfo({
          fail: (error) => {
            console.error('getAuthUserInfo', error)
          },
          success: (userInfo) => {
            console.log('userInfo', userInfo)
            this.setData({
              userInfo,
              hasUserInfo: true,
            })
            my.alert({
              content: JSON.stringify(userInfo), // alert 框的标题
            })
          },
        })
      },
      complete() {
        console.log('complete')
      },
    })
  },
  clear() {
    this.setData({
      hasUserInfo: false,
      userInfo: {},
    })
  },
})
```
