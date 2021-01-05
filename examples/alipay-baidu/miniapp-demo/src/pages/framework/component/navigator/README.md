# navigator

页面链接。

扫码体验：

![navigator.png](https://cache.amap.com/ecology/tool/miniapp/1563520604970.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| hover-class | String | none | 点击时附加的类 | v8.90.0 |
| hover-start-time | Number |  | 按住后多事件后出现点击状态，单位毫秒 | v8.90.0 |
| hover-stay-time | Number |  | 手指松开后点击状态保留时间，单位毫秒 | v8.90.0 |
| url | String |  | 应用内的跳转链接 | v8.90.0 |
| open-type | String | navigate | 跳转方式 | v8.90.0 |

open-type 有效值：

| 属性名 | 描述 | 最低版本 |
| :--- | :--- | :--- |
| navigate | 对应 my.navigateTo 的功能 | v8.90.0 |
| redirect | 对应 my.redirectTo 的功能 | v8.90.0 |
| switchTab | 对应 my.switchTab 的功能 | v8.90.0 |
| navigateBack | 对应 my.navigateBack 的功能 | v8.90.0 |
| reLaunch | 对应 my.reLaunch 的功能 | v8.90.0 |

### 示例

```html
<view class="page">
  <view class="page-description">导航</view>
  <view class="page-section">
    <view class="page-section-demo">
      <navigator url="/pages/framework/component/view/index?title=navigate" hover-class="active" hover-start-time="5000" hover-stay-time="5000">
        <button type="primary">跳转到新页面</button>
      </navigator>
      <view onTap="navigate" data-url="/pages/framework/component/text/index?title=redirect" data-open-type="redirectTo">
        <button type="primary">在当前页打开</button>
      </view>
      <view onTap="navigate" data-url="/pages/tab-bar/page-APIs/index" data-open-type="switchTab">
        <button type="primary">跳转到另外一个 Tab - “组件”</button>
      </view>
      <view a:if="{{canReLaunch}}" onTap="navigate" data-url="/pages/framework/component/icon/index" data-open-type="reLaunch">
        <button type="primary">reLaunch</button>
      </view>
      <view onTap="navigate" data-open-type="navigateBack">
        <button type="primary">navigateBack</button>
      </view>
      <button type="primary" onTap="index">点击回到首页</button>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    canReLaunch: !!my.reLaunch,
  },
  navigate(e) {
    const { url, openType = 'navigateTo' } = e.currentTarget.dataset
    my[openType]({ url })
  },
  index() {
    my.reLaunch({
      url: '/pages/tab-bar/page-components/index',
    })
  },
})
```
