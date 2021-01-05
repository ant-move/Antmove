# 性能优化建议

## 运行原理

与传统的 H5 应用不同，小程序运行架构分为 webview 和 worker 两个部分。webview 负责渲染，worker 则负责存储数据和执行业务逻辑。

1. webview 和 worker 之间的通信是异步的。这意味着当我们调用 setData 时，我们的数据并不会立即渲染，而是需要从 worker 异步传输到 webview。
2. 数据传输时需要序列化为字符串，然后通过 evaluateJavascript 方式传输，数据大小会影响性能。

## 优化首屏

首屏有多种定义，这里的首屏是指业务角度第一次有意义的渲染。比如: 对于列表页，首屏就是列表第一次渲染出的内容。

### 控制小程序资源包大小

当用户访问一个小程序时，高德客户端会首先从 CDN 下载小程序资源包，所以资源包的大小会影响小程序启动性能。

**优化建议**

- 及时删除无用图片资源，因为所有图片资源都会默认打包进去
- 控制图片大小，避免使用大图，大图建议从 CDN 渠道上传
- 及时清理无用代码

### 将数据请求提前至 onLoad

- 小程序运行时，先触发页面的 onLoad 生命周期函数，再将页面初始数据（Page data）从 worker 传递到 webview 进行一次初始渲染
- 页面初始渲染完成，从 webview 发出通知到 worker，触发 onReady 生命周期函数。

部分小程序会在 onReady 中发出请求，导致首屏渲染延缓。

**优化建议**<br />
将数据请求提前到 onLoad 中。

### 控制首屏一次性渲染节点数量

业务请求返回后，通常会调用 setData 触发页面重新渲染。执行过程如下:

1. 数据从 worker 传递到 webview
2. webview 上根据传过来的数据构造虚拟 DOM，并与之前做差异比较（从根节点开始），然后渲染。

由于 worker 与 webview 通信时，数据需要序列化，然后到了 webview 需要执行 evaluateJavascript，因此如果一次性传输数据太大，会影响首屏渲染性能。

另外，如果 webview 上构造节点过多，层级嵌套太深，例如有的小程序列表页面一次性渲染超过 100 个列表项，每个列表项又有嵌套内容，而实际上整个屏幕可能只是显示不到 10 个， 会导致差异比较时间较长，同时由于是首屏渲染，会一次性构造很多 DOM，影响首屏渲染性能。

**优化建议**

- setData 数据量不宜过大，避免一次性传递过长的列表。
- 首屏请勿一次性构造太多节点，服务端可能一次请求传递大量数据，请勿一次性 setData，可先 setData 一部分数据，然后等待一段时间（比如 400ms，具体需要业务调节）再调用 \$spliceData 将其他数据传输过去。

## 优化 setData 逻辑

任何页面变化都会触发 setData，同一时间可能会有多个 setData 触发页面进行重新渲染。如下四个接口都会触发 webview 页面重新渲染。

- **Page.prototype.setData**: 触发整个页面做差异比较
- **Page.prototype.\$spliceData**: 针对长列表做优化，避免每次传递整个列表，触发整个页面做差异比较
- **Component.prototype.setData**: 只会从对应组件节点开始做差异比较
- **Component.prototype.\$spliceData**: 针对长列表做优化，避免每次传递整个列表，只会从对应组件节点开始做差异比较

**优化建议**

- 避免频繁触发 setData 或者 \$spliceData，不管是页面级别还是组件级别。在我们分析的案例中，有些页面有倒计时逻辑，但是有的倒计时过于频繁触发（ms 级别的触发）。
- 需要频繁触发重新渲染时，避免使用页面级别的 setData 和 $spliceData， 将这一块封装成自定义组件，然后使用组件级别的 setData 或 $spliceData 触发组件重新渲染。
- 长列表数据触发渲染时，使用 \$spliceData 多次追加数据，而不用传递整个列表。
- 复杂页面建议封装成自定义组件，减少页面级别的 setData

**优化案例**

推荐指定路径设置数据：

```javascript
this.setData({
  'array[0]': 1,
  'obj.x': 2,
})
```

不推荐如下用法（虽然拷贝了 this.data, 仍然直接更改了其属性）:

```javascript
const array = this.data.array.concat()
array[0] = 1
const obj = { ...this.data.obj }
obj.x = 2
this.setData({ array, obj })
```

更不推荐直接更改 this.data（违反不可变数据原则）:

```javascript
this.data.array[0] = 1
this.data.obj.x = 2
this.setData(this.data)
```

长列表使用 \$spliceData

```javascript
this.$spliceData({ 'a.b': [1, 0, 5, 6] })
```

**注意**

有时业务逻辑封装到了组件中，当组件 UI 需要重新渲染时，只需在组件内部调用 setData。但有时需要从页面触发组件重新渲染，比如在页面上监听了 onPageScroll 事件，当事件触发时，需要通知对应组件重新渲染，此时的处理措施如下所示：

```javascript
// /pages/index/index.js
Page({
  onPageScroll(e) {
    if (this.xxcomponent) {
      this.xxcomponent.setData({
        scrollTop: e.scrollTop,
      })
    }
  },
})
```

```javascript
// /components/index/index.js
Component({
  didMount() {
    this.$page.xxcomponent = this
  },
})
```

可在组件的 didMount 中将组件挂载到对应的页面上，即可在页面中调用组件级别的 setData 只触发组件重新渲染。

## 使用 key 参数

在 for 中使用 key 来提高性能。 注意 key 不能设置在 block 上。

示例代码：

```html
<view a:for="{{array}}" key="{{item.id}}"></view>
<block a:for="{{array}}"><view key="{{item.id}}"></view></block>
```
