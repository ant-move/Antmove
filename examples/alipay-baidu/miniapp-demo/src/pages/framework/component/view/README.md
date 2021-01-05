# view

视图容器。相当于 web 的 div 或者 react-native 的 View。如果需要使用滚动视图，请使用 `<scroll-view />`

扫码体验：

![](https://cache.amap.com/ecology/tool/miniapp/1563508621780.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| disable-scroll | Boolean | false | 是否阻止区域内滚动页面 | v8.90.0 |
| hover-class | String |  | 点击时添加的样式类 | v8.90.0 |
| hover-start-time | Number |  | 按住多久后出现点击状态，单位毫秒 | v8.90.0 |
| hover-stay-time | Number |  | 松开后点击状态保留时间，单位毫秒 | v8.90.0 |
| hidden | boolean | false | 是否隐藏 | v8.90.0 |
| class | String |  | 自定义样式名 | v8.90.0 |
| style | String |  | 内联样式 | v8.90.0 |
| animation |  |  | 用于动画，详见 [my.createAnimation](../api/createAnimation) | v8.90.0 |
| onTap | EventHandle |  | 点击 | v8.90.0 |
| onTouchStart | EventHandle |  | 触摸动作开始 | v8.90.0 |
| onTouchMove | EventHandle |  | 触摸后移动 | v8.90.0 |
| onTouchEnd | EventHandle |  | 触摸动作结束 | v8.90.0 |
| onTouchCancel | EventHandle |  | 触摸动作被打断，如来电提醒，弹窗 | v8.90.0 |
| onLongTap | EventHandle |  | 长按 500ms 之后触发，触发了长按事件后进行移动将不会触发屏幕的滚动 | v8.90.0 |
| onTransitionEnd | EventHandle |  | 过渡结束时触发 | v8.90.0 |
| onAnimationStart | EventHandle |  | 动画开始时触发 | v8.90.0 |
| onAnimationIteration | EventHandle |  | 每开启一次新的动画过程时触发。（第一次不触发） | v8.90.0 |
| onAnimationEnd | EventHandle |  | 动画结束时触发 | v8.90.0 |
| onAppear | EventHandle |  | 当前元素可见时触发。 | v8.90.0 |
| onDisappear | EventHandle |  | 当前元素从可见变为不可见时触发。 | v8.90.0 |
| onFirstAppear | EventHandle |  | 当前元素首次可见时触发。 | v8.90.0 |
| hover-stop-propagation | Boolean | false | 是否阻止当前元素的祖先元素出现点击态 | v8.90.0 |


### 示例

```html
<view class="page">
  <view>
    <button a:if="{{returnIndex}}" onTap="returnIndex">回到首页</button>
  </view>
  <view class="page-description">基础视图</view>
  <view class="page-section" disable-scroll="true">
    <view class="page-section-title">相当于 web 的 div 或者 react-native 的 View。</view>
    <view class="page-section-demo">
      <view class="stream">
        <view class="post">
          <view class="postUser">
            <view class="postUser__name">Chris</view>
          </view>
          <view class="postBody">
            <view class="postBody__content">
              欢迎使用高德小程序！！！
            </view>
            <view class="postBody__date">
              May 20
            </view>
          </view>
        </view>

        <view class="post">
          <view class="postUser">
            <view class="postUser__name">Jack</view>
          </view>
          <view class="postBody">
            <view class="postBody__content">
              @Chris 我该如何上手？
            </view>
            <view class="postBody__date">
              May 21
            </view>
          </view>
        </view>

        <view class="post">
          <view class="postUser">
            <view class="postUser__name">Chris</view>
          </view>
          <view class="postBody">
            <view class="postBody__content">
              你可以查看 Demo，对小程序有一个简单的了解；然后下载我们的 IDE 进行开发。
            </view>
            <view class="postBody__date">
              May 22
            </view>
          </view>
        </view>

        <view class="post">
          <view class="postUser">
            <view class="postUser__name">Jessie</view>
          </view>
          <!-- hover red -->
          <view class="postBody" hover-class="red" >
            <view class="postBody__content">
              赞!
            </view>
            <view class="postBody__date" hidden>
              June 1
            </view>
          </view>
        </view>

        <view class="post" 
          onTouchStart="touchStart"
          onTouchMove="touchMove"
          onTouchEnd="touchEnd"
          onTouchCancel="touchCancel"
          onLongTap="onLongTap"
          onTransitionEnd="transitionEnd"
          onAppear="appear"
          onFirstAppear="firstAppear"
          onDisappear="disappear"
          hidden="{{hidden}}"
        >
          <view class="postUser">
            <view class="postUser__name" hover-class="active" hover-stop-propagation="true" hover-start-time="5000" hover-stay-time="5000">Jessie1</view>
          </view>
          <view class="postBody">
            <view class="postBody__content">
              赞! +1
            </view>
            <view class="postBody__date">
              June 1
            </view>
          </view>
        </view>
        <button type="primary" onTap="toHidden">{{btnText}}</button>
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    pageName: 'component/view',
    hidden: false,
    btnText: '隐藏',
  },
  onLoad(options) {
    console.log(options)    
    this.setData({
      returnIndex: getCurrentPages().length === 1,
    })
  },
  returnIndex() {
    my.switchTab({ url: '/pages/tab-bar/page-components/index' })
  },
  touchStart() {
    console.log('touchStart')
  },
  touchMove() {
    console.log('touchMove')
  },
  touchEnd() {
    console.log('touchEnd')
  },
  touchCancel() {
    console.log('touchCancel')
  },
  onLongTap() {
    console.log('onLongTap')
  },
  transitionEnd() {
    console.log('transitionEnd')
  },
  appear() {
    console.log('appear')
  },
  disappear() {
    console.log('disappear')
  },
  firstAppear() {
    console.log('firstAppear')
  },
  toHidden() {
    if (this.data.hidden) {
      this.setData({
        hidden: false,
        btnText: '隐藏',
      })
    } else {
      this.setData({
        hidden: true,
        btnText: '显示',
      })
    }
  },
})
```

```css
.stream {
  display: flex;
  flex-direction: column;
  padding: 10rpx;
}
.post + .post {
  margin-top: 10rpx;
}
.post {
  display: flex;
}
.postUser {
  flex: 0 1 auto;
  padding-bottom: 20rpx;
}
.postUser__name {
  width: 180rpx;
  color: #57727C;
  font-size: 24rpx;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  margin-top: 60rpx;
}
.postBody {
  flex: 1 1 0%;
  position: relative;
  padding: 30rpx;
  border: 2rpx solid #CAD0D2;
  border-radius: 8rpx;
}
.postBody:after,
.postBody:before {
  right: 100%;
  top: 70rpx;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.postBody:after {
  border-color: transparent;
  border-right-color: #ffffff;
  border-width: 16rpx;
  margin-top: -16rpx;
}
.postBody:before {
  border-color: transparent;
  border-right-color: #CAD0D2;
  border-width: 18rpx;
  margin-top: -18rpx;
}
.postBody__content {
  color: #57727C;
  font-size: 24rpx;
}
.postBody__date {
  margin-top: 10rpx;
  color: #86969C;
  font-size: 20rpx;
  text-transform: uppercase;
  letter-spacing: 2rpx;
}
.red {
  background: red;
}
.active {
  background: skyblue;
}
```
