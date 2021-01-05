# swiper

滑块视图容器。其中，只可放置  `<swiper-item />`  组件，否则会导致未定义的行为。<br />扫码体验：<br />![swiper.png](https://cache.amap.com/ecology/tool/miniapp/1563518499111.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| indicator-dots | Boolean | false | 是否显示指示点 | v8.90.0 |
| indicator-color | Color | rgba(0, 0, 0, .3) | 指示点颜色 | v8.90.0 |
| indicator-active-color | Color | #000 | 当前选中的指示点颜色 | v8.90.0 |
| active-class | String | | swiper-item 可见时的 class | v9.10.0 |
| changing-class | String |  | acceleration 设置为 {{true}} 时且处于滑动过程中，中间若干屏处于可见时的class | v9.10.0 |
| autoplay | Boolean | false | 是否自动切换 | v8.90.0 |
| current | Number | 0 | 当前页面的 index | v8.90.0 |
| duration | Number | 500(ms) | 滑动动画时长 | v8.90.0 |
| interval | Number | 5000(ms) | 自动切换时间间隔 | v8.90.0 |
| circular | Boolean | false | 是否启用无限滑动 | v8.90.0 |
| vertical | Boolean | false | 滑动方向是否为纵向 | v8.90.0 |
| onChange | Function | 否 | current 改变时会触发，event.detail = {current: current} | v8.90.0 |
| previous-margin | String | '0px' | 前边距，单位px，暂时只支持水平方向 | v8.90.0 |
| next-margin | String | '0px' | 后边距，单位px，暂时只支持水平方向 | v8.90.0 |
| acceleration | Boolean | false | 当开启时，会根据滑动速度，连续滑动多屏	| v8.90.0 |
| onTransition | EventHandle |  | swiper 中 swiper-item 的位置发生改变时会触发 transition 事件。 | v9.10.0 |
| onAnimationEnd | EventHandle |  | 动画结束时会触发 animationEnd 事件，event.detail = {current, source}，其中 source 的值有 autoplay 和 touch | v9.10.0 |
| disable-touch | Boolean | false | 是否禁止用户 touch 操作(ios不支持) | v9.10.0 |

### swiper-item
仅可放置在组件中，宽高自动设置为100%

### Sceenshot

![](https://zos.alipayobjects.com/rmsportal/VPdDdvxbkrQVNOxXUuqR.png#align=left&display=inline&height=359&originHeight=359&originWidth=682&status=done&width=682)

### 示例代码：

```html
<view class="page">
  <view class="page-description">滑动视图</view>
  <view class="page-section">
    <view class="page-section-demo">
      <swiper 
        style="height:150px"
        class="demo-swiper"
        previousMargin="10px"
        nextMargin="10px"
        indicator-dots="{{indicatorDots}}"
        indicator-color="skyblue"
        indicator-active-color="red"
        current="{{current}}"
        previous-margin="20px"
        next-margin="20px"
        autoplay="{{autoplay}}"
        vertical="{{vertical}}"
        interval="{{interval}}"
        circular="{{circular}}"
        onChange="change"
        active-class="activeClass"
        changing-class="changeClass"
        acceleration="true"
        onTransition="transition"
        onAnimationEnd="end"
      >
        <block a:for="{{background}}">
          <swiper-item key="swiper-item-{{index}}">
            <view class="swiper-item bc_{{item}}"></view>
          </swiper-item>
        </block>
      </swiper>
      <view class="margin-t">
        <slider onChange="intervalChange" value="{{interval}}" show-value min="500" max="2000"/>
        <view>interval</view>
      </view>
    </view>
    <view class="page-section-btns">
      <view><button size="mini" plain type="primary" onTap="changeIndicatorDots">indicator-dots</button></view>
      <view><button size="mini" plain type="primary" onTap="changeAutoplay">autoplay</button></view>
      <view><button size="mini" plain type="primary" onTap="changeVertical">vertical</button></view>
    </view>
    <view class="page-section-btns">
      <view><button size="mini" plain type="primary" onTap="changeCircular">circular</button></view>
      <view><button size="mini" plain type="primary" onTap="disableSwitch">切换到第三张</button></view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    background: ['blue', 'red', 'yellow'],
    indicatorDots: true,
    autoplay: false,
    vertical: false,
    interval: 1000,
    circular: false,
    current: 1,
  },
  onLoad() {
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    })
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    })
  },
  changeCircular() {
    this.setData({
      circular: !this.data.circular,
    })
  },
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay,
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    })
  },
  change(e) {
    this.setData({
      current: e.detail.current,
    })
    console.log('change')
  },
  transition() {
    console.log('transition')
  },
  end() {
    console.log('end')
  },
  disableSwitch() {
    this.setData({
      current: 2,
    })
  },
})
```
