# 权限引导

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563534632857.png)

## my.showAuthGuide (Object)

通过权限引导模块以图文等形式向用户弹出 Dialog，引导用户打开相应的权限。权限引导的核心是引导而非权限判断，调用时机应该在业务方确认所需权限被限制的时候；此外权限引导弹框受疲劳度等因素控制。

#### 入参说明
| 名称 | 类型 | 必填 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| authType | String | Y | 引导的权限标识，用于标识该权限类型(如 LBS) | v8.90 |
| success | Function | 否 | 接口调用成功的回调函数。 |v8.90|
| fail | Function | 否 | 接口调用失败的回调函数。 |v8.90|
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行）。 |v8.90|

**支持的 authType 如下：**

| 权限名称 | 权限码 | 支持平台 |
| :--- | :--- | :--- |
| 后台保活权限 | BACKGROUNDER | Android |
| 桌面快捷权限 | SHORTCUT | Android |
| 麦克风权限 | MICROPHONE | iOS |
| 通讯录权限 | ADDRESSBOOK | iOS |
| 相机权限 | CAMERA | iOS |
| 照片权限 | PHOTO | iOS |
| push通知栏权限 | NOTIFICATION | iOS |
| 自启动权限 | SELFSTARTING | Android |
| lbs总开关 | LBSSERVICE | iOS |
| lbs开关(app) | LBS | iOS |

#### 示例代码

```html
<view class="page">
  <view class="page-description">权限引导</view>
  <view class="page-section">
    <view class="page-section-title">showAuthGuide</view>
    <view class="page-section-demo">
      <button type="primary" onTap="showAuthGuide">权限引导</button>
    </view>
  </view>
</view>
```

```Javascript
Page({
  showAuthGuide() {
    my.showAuthGuide({
      authType: 'LBS',
      success: (res) => {
        // shown为true时表示会显示权限引导弹窗，为false时表示用户已经授权
        my.alert({ content: `调用成功：${JSON.stringify(res)}` })
      },
      fail: (error) => {
        my.alert({ content: `调用失败：${JSON.stringify(error)}` })
      },
    })
  },
})
```
