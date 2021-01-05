# 动画

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563935768700.png)

## my.createAnimation

创建动画实例 [animation](createAnimation)。调用实例的方法来描述动画，最后通过动画实例的`export`方法将动画数据导出并传递给组件的`animation`属性。
> 注意: `export` 方法调用后会清掉之前的动画操作

### 入参
| 参数 | 类型 | 必填 | 说明 | 版本 |
| :--- | :--- | :--- | :--- | :--- |
| duration | Integer | 否 | 动画的持续时间，单位 ms，默认值 400 | v8.90.0 |
| timeFunction | String | 否 | 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end" | v8.90.0 |
| delay | Integer | 否 | 动画延迟时间，单位 ms，默认值 0 | v8.90.0 |
| transformOrigin | String | 否 | 设置transform-origin，默认值 "50% 50% 0" | v8.90.0 |

```javascript
const animation = my.createAnimation({
  transformOrigin: "top right",
  duration: 3000,
  timeFunction: "ease-in-out",
  delay: 100,
})
```

### animation
动画实例可以调用以下方法来描述动画，调用结束后会返回实例本身，支持链式调用的写法。<br />样式：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| opacity | value | 透明度，参数范围 0~1 |
| backgroundColor | color | 颜色值 |
| width | length | 长度值，如果传入数字则默认单位为 px ，可传入其他自定义单位的长度值 |
| height | length | 同上 |
| top | length | 同上 |
| left | length | 同上 |
| bottom | length | 同上 |
| right | length | 同上 |

旋转：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| rotate | deg | deg 范围 -180 ~ 180，从原点顺时针旋转一个 deg 角度 |
| rotateX | deg | deg 范围 -180 ~ 180，在 X 轴旋转一个 deg 角度 |
| rotateY | deg | deg 范围 -180 ~ 180，在 Y 轴旋转一个 deg 角度 |
| rotateZ | deg | deg 范围 -180 ~ 180，在 Z 轴旋转一个deg角度 |
| rotate3d | (x, y , z, deg) | 同 [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d) |

缩放：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| scale | sx,[sy] | 只有一个参数时，表示在 X 轴、Y 轴同时缩放 sx 倍；两个参数时表示在 X 轴缩放 sx 倍，在 Y 轴缩放 sy 倍 |
| scaleX | sx | 在 X 轴缩放 sx 倍 |
| scaleY | sy | 在 Y 轴缩放 sy 倍 |
| scaleZ | sz | 在 Z 轴缩放 sy 倍 |
| scale3d | (sx,sy,sz) | 在 X 轴缩放 sx 倍，在 Y 轴缩放sy 倍，在 Z 轴缩放 sz 倍 |

偏移：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| translate | tx,[ty] | 只有一个参数时，表示在 X 轴偏移 tx；两个参数时，表示在 X 轴偏移 tx，在 Y 轴偏移 ty，单位均为 px。 |
| translateX | tx | 在 X 轴偏移 tx，单位 px |
| translateY | ty | 在 Y 轴偏移 tx，单位 px |
| translateZ | tz | 在 Z 轴偏移 tx，单位 px |
| translate3d | (tx,ty,tz) | 在 X 轴偏移 tx，在 Y 轴偏移t y，在Z轴偏移 tz，单位 px |

倾斜：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| skew | ax,[ay] | 参数范围 -180 ~ 180。只有一个参数时，Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax 度；两个参数时，分别在 X 轴倾斜 ax 度，在 Y 轴倾斜 ay 度 |
| skewX | ax | 参数范围 -180 ~ 180。Y 轴坐标不变，X 轴坐标延顺时针倾斜 ax度 |
| skewY | ay | 参数范围 -180~180。X 轴坐标不变，Y 轴坐标延顺时针倾斜 ay 度 |

矩阵变形：

| 方法 | 参数 | 说明 |
| :--- | :--- | :--- |
| matrix | (a,b,c,d,tx,ty) | [同transform-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix) |
| matrix3d |  | [同transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d) |

### 动画队列

调用动画操作方法后需要要调用 `step()` 来表示一组动画完成，在一组动画中可以调用任意多个动画方法，一组动画中的所有动画会同时开始，当一组动画完成后才会进行下一组动画。`step()` 可以传入一个跟 `my.createAnimation()` 一样的配置参数用于指定当前组动画的配置。

### 代码示例
```html
<view class="page">
  <view class="page-description">创建动画</view>
  <view class="page-section">
    <view class="page-section-title">createAnimation</view>
    <view class="page-section-demo">
      <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="rotate">旋转</button></view>
      <view><button type="primay" plain onTap="scale">缩放</button></view>
      <view><button type="primay" plain onTap="translate">移动</button></view>
    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="skew">倾斜</button></view>
      <view><button type="primay" plain onTap="rotateAndScale">旋转并缩放</button></view>
      <view><button type="primay" plain onTap="rotateThenScale">旋转后缩放</button></view>
    </view>
    <view class="page-section-btns">
      <view><button type="primay" plain onTap="all">同时展示全部</button></view>
      <view><button type="primay" plain onTap="allInQueue">顺序展示全部</button></view>
      <view><button type="primay" plain onTap="reset">还原</button></view>
    </view>
  </view>
</view>
```

```javascript
Page({
  onReady() {
    this.animation = my.createAnimation({
      transformOrigin: 'top right',
      duration: 3000,
      timeFunction: 'ease-in-out',
      delay: 100,
    })
  },
  rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale() {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  translate() {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew() {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  rotateAndScale() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  rotateThenScale() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  all() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  allInQueue() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step()
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  reset() {
    this.animation.rotate3d(0, 0, 0, 0)
      .rotateX(0)
      .rotateY(0)
      .rotateZ(0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({
        duration: 0,
      })
    this.setData({ animation: this.animation.export() })
  },
})
```
