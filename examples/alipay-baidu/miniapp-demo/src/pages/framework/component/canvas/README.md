# canvas

画布

扫码体验：

![canvas.png](https://cache.amap.com/ecology/tool/miniapp/1563520876388.png)

| 属性名 | 类型 | 默认值 | 说明 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| id | String |  | 组件唯一标识符 | v8.90.0 |
| style | String |  |  | v8.90.0 |
| class | String |  |  | v8.90.0 |
| width | String | canvas width attribute |  | v8.90.0 |
| height | String | canvas height attribute |  | v8.90.0 |
| disable-scroll | Boolean | false | 禁止屏幕滚动以及下拉刷新 | v8.90.0 |
| onTap | EventHandle |  | 点击 | v8.90.0 |
| onTouchStart | EventHandle |  | 触摸动作开始 | v8.90.0 |
| onTouchMove | EventHandle |  | 触摸后移动 | v8.90.0 |
| onTouchEnd | EventHandle |  | 触摸动作结束 | v8.90.0 |
| onTouchCancel | EventHandle |  | 触摸动作被打断，如来电提醒，弹窗 | v8.90.0 |
| onLongTap | EventHandle |  | 长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动 | v8.90.0 |

注：

- `canvas` 标签默认宽度 `300px`、高度 `225px`
- 同一页面中的  `id` 不可重复
- 如果需要在高 dpr 下取得更细腻的显示，需要先将 `canvas` 用属性设置放大，用样式缩小，例如
```
<!-- getSystemInfoSync().pixelRatio === 2 -->
<canvas width="200" height="200" style="width:100px;height:100px;"/>
```

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/CHemqKHDowJarOdCBdvN.gif#align=left&display=inline&height=331&originHeight=331&originWidth=332&status=done&width=332)

### 示例

```html
<view class="page">
  <view class="page-description">画布</view>
    <view class="canvas-view">
      <canvas 
        id="canvas"
        width="610"
        height="610"
        class="canvas"
        onTouchStart="log"
        onTouchMove="log"
        onTouchEnd="log"
        onTouchCancel="cancel"
        onTap="tap"
        onLongTap="longTap"
        disable-scroll="true"
      />
    </view>
</view>
```

```javascript
Page({
  onReady() {
    this.point = {
      x: Math.random() * 590,
      y: Math.random() * 590,
      dx: Math.random() * 10,
      dy: Math.random() * 10,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
      b: Math.round(Math.random() * 255 | 0),
    }

    this.interval = setInterval(this.draw.bind(this), 17)
    this.ctx = my.createCanvasContext('canvas')
  },

  draw() {
    const { ctx } = this
    ctx.setFillStyle('#FFF')
    ctx.fillRect(0, 0, 610, 610)

    ctx.beginPath()
    ctx.arc(this.point.x, this.point.y, 20, 0, 2 * Math.PI)
    ctx.setFillStyle(`rgb(${this.point.r}, ${this.point.g}, ${this.point.b})`)
    ctx.fill()
    ctx.draw()

    this.point.x += this.point.dx
    this.point.y += this.point.dy
    if (this.point.x <= 10 || this.point.x >= 590) {
      this.point.dx = -this.point.dx
      this.point.r = Math.round(Math.random() * 255 | 0)
      this.point.g = Math.round(Math.random() * 255 | 0)
      this.point.b = Math.round(Math.random() * 255 | 0)
    }

    if (this.point.y <= 10 || this.point.y >= 590) {
      this.point.dy = -this.point.dy
      this.point.r = Math.round(Math.random() * 255 | 0)
      this.point.g = Math.round(Math.random() * 255 | 0)
      this.point.b = Math.round(Math.random() * 255 | 0)
    }
  },
  drawBall() {

  },
  log(e) {
    if (e.touches && e.touches[0]) {
      console.log(e.type, e.touches[0].x, e.touches[0].y)
    } else {
      console.log(e.type)
    }
  },
  onUnload() {
    clearInterval(this.interval)
  },
  tap() {
    console.log('tap')
  },
  longTap() {
    console.log('longTap')
  },
})
```

```css
.canvas-view {
  display: flex;
  justify-content: center;
}
.canvas {
  width: 305px;
  height: 305px;
  background-color: #fff;
}
```