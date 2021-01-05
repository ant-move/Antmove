# 设置界面导航栏

扫码体验：

![set-navigation-bar.png](https://cache.amap.com/ecology/tool/miniapp/1563525771707.png)

## my.setNavigationBar
设置导航栏文字及样式。

### 入参
| 名称 | 类型 | 必填 | 描述 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| title | String | 否 | 导航栏标题 | v8.90.0 |
| image | String | 否 | 图片连接地址，必须是https，请使用3x高清图片。若设置了image则title参数失效 | v8.90.0 |
| backgroundColor | String | 否 | 导航栏背景色，支持十六进制颜色值 | v8.90.0 |
| borderBottomColor | String | 否 | 导航栏底部边框颜色，支持十六进制颜色值。若设置了 backgroundColor，则borderBottomColor 不会生效，默认会和 backgroundColor 颜色一样 | v8.90.0 |
| reset | Boolean | 否 | 是否重置导航栏为高德默认配色，默认 false | v8.90.0 |
| success | Function | 否 | 调用成功的回调函数 | v8.90.0 |
| fail | Function | 否 | 调用失败的回调函数 | v8.90.0 |
| complete | Function | 否 | 调用结束的回调函数（调用成功、失败都会执行） | v8.90.0 |

### 代码示例
```html
<view class="page">
  <view class="page-description">设置界面导航栏</view>
  <form onSubmit="setNavigationBar" style="align-self:stretch">
    <view class="page-section">
      <view class="page-section-title">setNavigationBar</view>
      <view class="page-section-demo">
        <input class="page-body-form-value" type="text" placeholder="标题" name="title"></input>
        <input class="page-body-form-value" type="text" placeholder="导航栏背景色" name="backgroundColor"></input>
        <input class="page-body-form-value" type="text" placeholder="导航栏底部边框颜色" name="borderBottomColor"></input>
        <input class="page-body-form-value" type="text" placeholder="导航栏图片地址" name="image"></input>
      </view>
      <view class="page-section-btns">
        <view>
          <button plain type="primary" formType="submit">设置</button>
        </view>
        <view>
          <button plain type="primary" onTap="resetNavigationBar">重置</button>
        </view>
      </view>
    </view>
  </form>
  <view class="tips">
    <view class="item">tips:</view>
    <view class="item">1. image:图片链接地址，必须 https，请使用一张3x高清图。若设置了 image，则 title 参数失效</view>
    <view class="item">2. backgroundColor: 导航栏背景色，支持 16 进制颜色值</view>
    <view class="item">3. borderBottomColor: 导航栏底部边框颜色，支持16进制颜色值。若设置了 backgroundColor，borderBottomColor 会不生效，默认会和 backgroundColor 颜色一样。</view>
  </view>
</view>
```

```javascript
Page({
  setNavigationBar(e) {
    const { title } = e.detail.value
    const { backgroundColor } = e.detail.value
    const { borderBottomColor } = e.detail.value
    const { image } = e.detail.value
    my.setNavigationBar({
      title,
      backgroundColor,
      borderBottomColor,
      image,
      success() {
        my.alert({
          content: '设置成功',
        })
      },
      fail() {
        my.alert({
          content: '设置失败',
        })
      },
      complete: () => {
        console.log('complete')
      },
    })
  },
  resetNavigationBar() {
    my.setNavigationBar({
      reset: true,
      title: '重置导航栏样式',
    })
  },
})
```

```css
.page-section-btns {
  padding: 26rpx;
}
.item {
  line-height: 25px;
}
```