# movable-view

扫码体验：

![movable-view.png](https://cache.amap.com/ecology/tool/miniapp/1563509328237.png)

`movable-view` 的可移动区域<br />注意：movable-area 必须设置`width`和`height`属性，不设置默认为`10px`

# movable-view
可移动的视图容器，在页面中可以拖拽滑动

| 属性名 | 类型 | 默认值 | 说明 | 兼容 |
| :--- | :--- | :--- | :--- | :--- |
| direction | String | none | movable-view的移动方向，属性值有`all`、`vertical`、`horizontal`、`none` | v8.90.0 |
| x | Number | 0 | 定义x轴方向的偏移，会换算为`left`属性，如果x的值不在可移动范围内，会自动移动到可移动范围 | v8.90.0 |
| y | Number | 0 | 定义y轴方向的偏移，会换算为`top`属性，如果y的值不在可移动范围内，会自动移动到可移动范围 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 |  |
| onTouchStart | EventHandle |  | 触摸动作开始 | v8.90.0 |
| onTouchMove | EventHandle |  | 触摸后移动 | v8.90.0 |
| onTouchEnd | EventHandle |  | 触摸动作结束 | v8.90.0 |
| onTouchCancel | EventHandle |  | 触摸动作被打断，如来电提醒，弹窗 | v8.90.0 |
| onChange | EventHandle |  | 拖动过程中触发的事件，event.detail = {x: x, y: y, source: source}，其中source表示产生移动的原因，值可为touch（拖动） | v8.90.0 |
| onChangeEnd | EventHandle |  | 拖动结束触发的事件，event.detail = {x: x, y: y} | v8.90.0 |

### tips:

- `movable-view` 必须设置width和height属性，不设置默认为10px
- `movable-view` 默认为绝对定位(请不要修改)，top和left属性为0px
- 当`movable-view`小于`movable-area`时，`movable-view`的移动范围是在`movable-area`内；当`movable-view`大于`movable-area`时，`movable-view`的移动范围必须包含`movable-area`（x轴方向和y轴方向分开考虑）
- `movable-view`必须在`<movable-area/>`组件中，并且必须是直接子节点，否则不能移动。

## 示例代码：

```html
<view class="page">
  <view class="page-description">可移动视图</view>
  <view class="page-section">
    <view class="page-section-title">movable-view区域小于movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view
          x="{{x}}"
          y="{{y}}"
          direction="all"
          onChange="change"
          onChangeEnd="changeEnd"
          onTouchStart="start"
          onTouchMove="move"
          onTouchEnd="end"
          onTouchCancel="cancel"
        >movable-view</movable-view>
      </movable-area>
    <button type="primary" onTap="onButtonTap">点击移动到 (30px, 30px)</button>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">movable-view区域大于movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view class="max" direction="all">movable-view</movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">只可以横向移动</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="horizontal">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">只可以纵向移动</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="vertical">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    x: 0,
    y: 0,
  },
  onButtonTap() {
    const { x, y } = this.data
    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1,
      })
    } else {
      this.setData({
        x: 30,
        y: 30,
      })
    }
  },
  change() {
    console.log('change')
  },
  changeEnd() {
    console.log('changeEnd')
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
