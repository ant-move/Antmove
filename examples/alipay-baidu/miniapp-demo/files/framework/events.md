# 事件介绍

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发条件，就会执行逻辑层中对应的事件函数。
- 事件对象可以携带额外信息，如 id、dataset、touches。

## 使用方式

若要在组件中绑定一个事件处理函数,如 `onTap`，则需要在该页面的 .js 文件中的 `Page` 里定义`onTap`对应的事件处理函数。

```html
<view id="tapTest" data-hi="Amap" onTap="tapName">
  <view id="tapTestInner" data-hi="AmapInner">
    Click me!
  </view>
</view>
```

在相应的 `Page` 中定义相应的事件处理函数 `tapName`,参数为事件对象 event。

```javascript
Page({
  tapName(event) {
    console.log(event)
  },
})
```

控制台输出 event 信息如下所示:

```json
{
  "type": "tap",
  "timeStamp": 1550561469952,
  "target": {
    "id": "tapTestInner",
    "dataset": {
      "hi": "Amap"
    },
    "targetDataset": {
      "hi": "AmapInner"
    }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": {
      "hi": "Amap"
    }
  }
}
```

使用组件（基础组件、扩展组件和自定义组件）时，组件里有哪些可用的事件取决于组件本身是否支持，支持的事件会在具体组件的文档里明确列出。

## 事件类型

事件分为冒泡事件和非冒泡事件：

- 冒泡事件：以关键字 `on` 为前缀，当组件上的事件被触发，该事件会向父节点传递。
- 非冒泡事件：以关键字 `catch` 为前缀，当组件上的事件被触发，该事件不会向父节点传递。

事件绑定的写法同组件的属性，以 key、value 的形式。

- key 以 `on` 或 `catch` 开头，然后跟上事件的类型，如 `onTap`、`catchTap`。
- value 是一个字符串，对应 Page 中定义的函数名，不存在时触发事件会报错。

```html
<view id="outter" onTap="handleTap1">
  view1
  <view id="middle" catchTap="handleTap2">
    view2
    <view id="inner" onTap="handleTap3">
      view3
    </view>
  </view>
</view>
```

上面代码中，点击 view3 会先后触发 handleTap3 和 handleTap2（因为 tap 事件会冒泡到 view2，而 view2 阻止了 tap 事件冒泡，不再向父节点传递），点击 view2 会触发 handleTap2，点击 view1 会触发 handleTap1。

所有会发生冒泡的事件：

| 类型        | 触发条件                         |
| ----------- | -------------------------------- |
| touchStart  | 触摸动作开始                     |
| touchMove   | 触摸后移动                       |
| touchEnd    | 触摸动作结束                     |
| touchCancel | 触摸动作被打断，如来电提醒，弹窗 |
| tap         | 触摸后马上离开                   |
| longTap     | 触摸后，超过 500ms 再离开        |
