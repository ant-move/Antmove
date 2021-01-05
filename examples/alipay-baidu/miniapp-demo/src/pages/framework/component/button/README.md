# button

按钮。扫码体验：<br />![button.png](https://cache.amap.com/ecology/tool/miniapp/1563519687716.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| size | String | default | 有效值 default, mini | v8.90.0 |
| open-type | String |  | 开放能力 | v8.90.0 |
| scope | String |  | 当 open-type 为 getAuthorize 时有效 | v8.90.0 |
| type | String | default | 按钮的样式类型，有效值 primary, default, warn | v8.90.0 |
| plain | Boolean | false | 是否镂空 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 | v8.90.0 |
| loading | Boolean | false | 按钮文字前是否带 loading 图标 | v8.90.0 |
| onTap | EventHandle |  | 点击 | v8.90.0 |
| form-type | String |  | 有效值：submit, reset，用于 组件，点击分别会触发 submit/reset 事件 | v8.90.0 |
| hover-class | String | button-hover | 按钮按下去的样式类。hover-class="none" 时表示没有点击态效果 | v8.90.0 |
| hover-start-time | Number | 20 | 按住后多少时间后出现点击状态，单位毫秒 | v8.90.0 |
| hover-stay-time | Number | 70 | 手指松开后点击状态保留时间，单位毫秒 | v8.90.0 |
| hover-stop-propagation | Boolean | false | 是否阻止当前元素的祖先元素出现点击态 | v8.90.0 |
| public-id | String | 生活号 id, 必须是当前小程序同主体且已关联的生活号，open-type="lifestyle" 时有效 | v10.0.0 |

注：`button-hover` 默认为 `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`<br />open-type 有效值:

| 值 | 说明 | 最低版本 |
| :--- | :--- | :--- |
| share | 触发自定义分享，可使用 canIUse('button.open-type.share') 判断 | v8.90.0 |
| getAuthorize | 支持小程序授权，可使用 `canIUse('button.open-type.getAuthorize')` 判断 | v9.10.0 |
| contactShare | 分享到通讯录好友，可使用 `canIUse('button.open-type.contactShare')` 判断 | v10.0.0 |
| lifestyle | 关注生活号，可使用 `canIUse('button.open-type.lifestyle')` 判断 | v10.0.0 |

### scope 有效值

当 `open-type` 为 `getAuthorize` 时，可以设置 scope 为以下值：

| 值 | 说明 | 最低版本 |
| :--- | :--- | :--- |
| [phoneNumber](../api/getPhoneNumber) | 唤起授权界面，用户可以授权小程序获取用户手机号 | v9.10.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/xBzWvSnLypwqLLEdZmvK.png#align=left&display=inline&height=1142&originHeight=1148&originWidth=750&status=done&width=746)

### 示例

```html
<view class="page">
  <view class="page-description">按钮</view>
  <view class="page-section">
    <view class="page-section-title">type-primary/ghost</view>
    <view class="page-section-demo">
      <button type="primary" onTap="tap">主要操作 Normal</button>
      <button type="primary" loading>操作</button>
      <button type="primary" disabled>主要操作 Disable</button>
      <button type="ghost">ghost操作</button>
      <button type="ghost" loading>ghost操作</button>
      <button type="ghost" disabled>ghost操作 Disable</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">type-default</view>
    <view class="page-section-demo">
      <button>辅助操作 Normal</button>
      <button disabled>辅助操作 Disable</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">type-warn</view>
    <view class="page-section-demo">
      <button type="warn">警告类操作 Normal</button>
      <button type="warn" disabled>警告类操作 Disable</button>
      <button type="warn" hover-class="red">hover-red</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Size</view>
    <view class="page-section-demo">
      <button size="mini" loading>提交</button>
      <button style="margin-left: 10px;" type="primary" size="mini">选项</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">open</view>
    <view class="page-section-demo">
      <button open-type="share" hover-start-time="5000" hover-stay-time="5000" hover-stop-propagation="true" plain="true">share</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Form</view>
    <view class="page-section-demo">
      <form onSubmit="onSubmit" onReset="onReset">
        <button form-type="submit" type="primary">submit</button>
        <button form-type="reset">reset</button>
      </form>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {},
  onLoad() {
    console.log(`share:${my.canIUse('button.open-type.share')}`)
    console.log(`getAuthorize:${my.canIUse('button.open-type.getAuthorize')}`)
    console.log(`contactShare: ${my.canIUse('button.open-type.contactShare')}`)
    console.log(`lifestyle: ${my.canIUse('button.open-type.lifestyle')}`)
  },
  onShareAppMessage() {
    return {
      title: 'view page',
      path: 'pages/framework/component/view/index',
    }
  },
  onSubmit() {
    my.alert({ title: 'You click submit' })
  },
  onReset() {
    my.alert({ title: 'You click reset' })
  },
  tap() {
    console.log('tap')
  },
})
```
