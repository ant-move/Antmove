# scroll-view

可滚动视图区域。<br />扫码体验：<br />![scroll-view.png](https://cache.amap.com/ecology/tool/miniapp/1563519199174.png)

| 属性名 | 类型 | 默认值 | 描述 | 兼容性 |
| :--- | :--- | :--- | :--- | :--- |
| class | String |  | 外部样式名 | v8.90.0 |
| style | String |  | 内联样式名 | v8.90.0 |
| scroll-x | Boolean | false | 允许横向滚动 | v8.90.0 |
| scroll-y | Boolean | false | 允许纵向滚动 | v8.90.0 |
| upper-threshold | Number | 50 | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件 | v8.90.0 |
| lower-threshold | Number | 50 | 距底部/右边多远时（单位px），触发 scrolltolower 事件 | v8.90.0 |
| scroll-top | Number |  | 设置竖向滚动条位置 | v8.90.0 |
| scroll-left | Number |  | 设置横向滚动条位置 | v8.90.0 |
| scroll-into-view | String |  | 值应为某子元素id，则滚动到该元素，元素顶部对齐滚动区域顶部 | v8.90.0 |
| scroll-with-animation | Boolean | false | 在设置滚动条位置时使用动画过渡 | v8.90.0 |
| scroll-animation-duration | Number |  | 当scroll-with-animation设置为true时，可以设置scroll-animation-duration来控制动画的执行时间，单位ms | v8.90.0 |
| enable-back-to-top | Boolean | false | 当点击 iOS 顶部状态栏或者双击安卓标题栏时，滚动条返回顶部，只支持竖向 | 安卓v8.90.0 IOSv9.10.0 |
| trap-scroll | Boolean | false | 纵向滚动时，当滚动到顶部或底部时，强制禁止触发页面滚动，仍然只触发scroll-view自身的滚动。 | v8.90.0 |
| onScrollToUpper | EventHandle |  | 滚动到顶部/左边，会触发 scrolltoupper 事件 | v8.90.0 |
| onScrollToLower | EventHandle |  | 滚动到底部/右边，会触发 scrolltolower 事件 | v8.90.0 |
| onScroll | EventHandle |  | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth} | v8.90.0 |

使用竖向滚动时，需要给一个固定高度，通过 acss 设置 height。

### 示例代码

```html
<view class="page">
  <view class="page-description">滚动视图</view>
  <view class="page-section">
    <view class="page-section-title">vertical scroll</view>
    <view class="page-section-demo">
      <scroll-view
        scroll-y="{{scrollY}}"
        style="height: 200px;"
        onScrollToUpper="upper"
        onScrollToLower="lower"
        onScroll="scroll"
        scroll-into-view="{{toView}}"
        scroll-top="{{scrollTop}}"
        enable-back-to-top="true"
        onTouchStart="start"
        onTouchMove="move"
        onTouchEnd="end"
        onTouchCancel="cancel"
      >
        <view id="blue" class="scroll-view-item bc_blue"></view>
        <view id="red"  class="scroll-view-item bc_red"></view>
        <view id="yellow" class="scroll-view-item bc_yellow"></view>
        <view id="green" class="scroll-view-item bc_green"></view>
      </scroll-view>
    </view>
    <view class="page-section-btns">
      <view><button  size="mini" plain onTap="tap">next</button></view>
      <view><button  size="mini" plain onTap="tapMove">move</button></view>
      <view><button  size="mini" plain onTap="scrollToTop">scrollToTop</button></view>
      <view><button  size="mini" plain onTap="noScroll">{{isScrollText}}</button></view>
    </view>
  </view>

  <view class="page-section">
    <view class="page-section-title">horizontal scroll</view>
    <view class="page-section-demo">
      <scroll-view class="scroll-view_H" scroll-x="{{true}}" style="width: 100%" >
        <view id="blue2" class="scroll-view-item_H bc_blue"></view>
        <view id="red2"  class="scroll-view-item_H bc_red"></view>
        <view id="yellow2" class="scroll-view-item_H bc_yellow"></view>
        <view id="green2" class="scroll-view-item_H bc_green"></view>
      </scroll-view>
    </view>
  </view>
</view>
```

```javascript
const order = ['blue', 'red', 'green', 'yellow']

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    scrollY: true,
    isScrollText: '禁止滚动',
    isScroll: true,
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e.detail.scrollTop)
  },
  scrollToTop() {
    this.setData({
      scrollTop: 0,
    })
  },
  noScroll() {
    const { isScroll } = this.data
    if (isScroll) {
      this.setData({
        isScroll: false,
        isScrollText: '开启滚动',
      })
    } else {
      this.setData({
        isScroll: true,
        isScrollText: '禁止滚动',
      })
    }
    this.setData({
      scrollY: !this.data.scrollY,
    })
  },
  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        const next = (i + 1) % order.length
        this.setData({
          toView: order[next],
          scrollTop: next * 200,
        })
        break
      }
    }
  },
  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10,
    })
  },
  start() {
    console.log('start')
  },
  move() {
    console.log('move')
  },
  end() {
    console.log('end')
  },
  cancel() {
    console.log('cancel')
  },
})
```
## Tips:

- scroll-into-view 的优先级高于 scroll-top
- 在滚动 scroll-view 时会阻止页面回弹，所以在 scroll-view 中滚动，是无法触发 onPullDownRefresh
