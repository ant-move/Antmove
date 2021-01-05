# 页面注册

## Page(object: Object)

在 `/pages` 目录的 .js 文件中，定义 `Page()`，用于注册一个小程序页面，接受一个 object 作为属性，用来指定页面的初始数据、生命周期回调、事件处理等。

以下为一个基本的页面代码：

```javascript
// pages/index/index.js
Page({
  data: {
    title: "amap",
  },
  onLoad(query) {
    // 页面加载
  },
  onShow() {
    // 页面显示
  },
  onReady() {
    // 页面加载完成
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
   // 返回自定义分享信息
  },
  // 自定义事件处理函数
  viewTap() {
    this.setData({
      text: 'Set data for update.',
    });
  },
  // 自定义事件处理函数
  go() {
    // 带参数的跳转，从 page/ui/index 的 onLoad 函数的 query 中读取 type
    my.navigateTo({url:'/page/ui/index?type=mini'});
  },
  // 自定义数据对象
  customData: {
    name: 'alipay',
  },
});
```

## 页面生命周期

下图说明了页面 Page 对象的生命周期。

小程序主要靠视图线程（Webview）和应用服务线程（Worker）来控制管理。视图线程和应用服务线程同时运行。

- 应用服务线程启动后运行 app.onLauch 和 app.onShow 以完成 App 创建，再运行 page.onLoad 和 page.onShow 以完成 Page 创建，此时等待视图线程初始化完成通知。
- 视图线程初始化完成通知应用服务线程，应用服务线程将初始化数据发送给视图线程进行渲染，此时视图线程完成第一次数据渲染。
- 第一次渲染完成后视图线程进入就绪状态并通知应用服务线程，应用服务线程调用 page.onReady 函数并进入活动状态。
- 应用线程进入活动状态后每次数据修改将会通知视图线程进行渲染。当切换页面进入后台，应用线程调用page.onHide 函数后，进入存活状态；页面返回到前台将调用 page.onShow 函数，进入活动状态；当调用返回或重定向页面后将调用 page.onUnload 函数，进行页面销毁。

![](https://intranetproxy.alipay.com/skylark/lark/0/2019/png/235/1548399638470-48548e20-c4f1-4fac-b4cd-b31788fcf3fd.png#alt=page%20lifecycle&width=300)

## object 属性说明
| 属性 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| data | Object &#124; Function | 初始数据或返回初始化数据的函数。 |  |
| onLoad | Function(query: Object) | 页面加载时触发 | v8.90.0 |
| onShow | Function | 页面显示时触发 | v8.90.0 |
| onReady | Function | 页面初次渲染完成时触发 | v8.90.0 |
| onHide | Function | 页面隐藏时触发 | v8.90.0 |
| onUnload | Function | 页面卸载时触发 | v8.90.0 |
| onShareAppMessage | Function(options: Object) | 点击右上角分享时触发 | v8.90.0 |
| onTitleClick | Function | 点击标题触发 | v8.90.0 |
| onOptionMenuClick | Function | 点击导航栏额外图标触发 |  v10.00.0 |
| onPullDownRefresh | Function({from: `manual`&#124;`code`}) | 页面下拉时触发 | v8.90.0 |
| onTabItemTap | Function | 点击`tabItem`时触发 | v8.90.0 |
| onPageScroll | Function({scrollTop}) | 页面滚动时触发 | v8.90.0 |
| onReachBottom | Function | 上拉触底时触发 | v8.90.0 |
| 其他 | Any | 开发者可以添加任意的函数或属性到 `object` 中，在页面的函数中可以用 `this` 来访问 | v8.90.0 |


## 页面数据对象 data

通过设置 `data` 指定页面的初始数据。当 `data` 为对象时，被所有页面共享。即：当该页面回退后再次进入该页面时，会显示上次页面的数据，而非初始数据。这种情况，可以通过设置 `data` 为不可变数据或者变更 `data` 为页面独有数据两种方式来解决。

**设置为不可变数据**

```javascript
Page({
 data: { arr:[] },
 doIt() {
   this.setData({arr: [...this.data.arr, 1]});
 },
});
```

**设置页面独有数据（不推荐）**

```javascript
Page({
 data() { return { arr:[] }; },
 doIt() {
   this.setData({arr: [1, 2, 3]});
 },
});
```

**注意：**不要直接修改 `this.data`，无法改变页面的状态，还会造成数据不一致。

比如：

```javascript
Page({
 data: { arr:[] },
 doIt() {
   this.data.arr.push(1); // 不要这么写！
   this.setData({arr: this.data.arr});
 }
});
```

## 生命周期函数

### onLoad(query: Object)

页面加载时触发。一个页面只会调用一次。`query` 为 `my.navigateTo` 和 `my.redirectTo` 中传递的 query 对象。

| 属性 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| query | Object | 打开当前页面路径中的参数 | v8.90.0 |


### onShow()

页面显示/切入前台时触发。

### onReady()

页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。<br />
对界面的设置，如 `my.setNavigationBar` 请在 `onReady` 之后设置。

### onHide()

页面隐藏/切入后台时触发。如 `my.navigateTo` 到其他页面或底部 tab 切换等。

### onUnload()

页面卸载时触发。如 `my.redirectTo` 或 `my.navigateBack` 到其他页面等。

## 页面事件处理函数

### onShareAppMessage(options: Object)

点击右上角通用菜单中的分享按钮时或点击页面内分享按钮时触发。详见[分享](../api/customShare)。

### onTitleClick()

点击标题触发。

### onOptionMenuClick()

点击右上角菜单按钮时触发。

### onPullDownRefresh({from: `manual`|`code`})

下拉刷新时触发。需要先在 [`app.json`](app-json-config) 的 `window`  选项中开启 `pullRefresh` 。当处理完数据刷新后，`my.stopPullDownRefresh` 可以停止当前页面的下拉刷新。

### onTabItemTap(object: Object)

点击`tabItem`时触发。

| 属性 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| from | String | 点击来源 | v8.90.0 |
| pagePath | String | 被点击tabItem的页面路径 | v8.90.0 |
| text | String | 被点击tabItem的按钮文字 | v8.90.0 |
| index | Number | 被点击tabItem的序号，从0开始 | v8.90.0 |


### onPageScroll({scrollTop})

页面滚动时触发。`scrollTop` 为页面滚动距离。

### onReachBottom()

上拉触底时触发。


## Page.prototype.setData(data: Object, callback: Function)

`setData` 会将数据从逻辑层发送到视图层，同时改变对应的 `this.data` 的值。

参数说明：

| 事件 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| data | Object | 待改变的数据 | v8.90.0 |
| callback | Function | 回调函数，在页面渲染更新完成之后执行。 | 使用 `my.canIUse('page.setData.callback')` 做兼容性处理。详见 [兼容](../framework/compatibility) |


`Object` 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`。其中 `key` 可以非常灵活，以数据路径的形式给出，如 `array[2].message`、`a.b.c.d`，可以不需要在 `this.data` 中预先定义。

使用过程中，需要注意以下几点：

1. 直接修改 `this.data` 无效，无法改变页面的状态，还会造成数据不一致。
2. 仅支持设置可 JSON 化的数据。
3. 请尽量避免一次设置过多的数据。
4. 请不要把 data 中任何一项的 value 设为 undefined ，否则这一项将不被设置并可能遗留一些潜在问题。

下面是示例代码：

```html
<view>{{text}}</view>
<button onTap="changeTitle"> Change normal data </button>
<view>{{array[0].text}}</view>
<button onTap="changeArray"> Change Array data </button>
<view>{{object.text}}</view>
<button onTap="changePlanetColor"> Change Object data </button>
<view>{{newField.text}}</view>
<button onTap="addNewKey"> Add new data </button>
<view>hello: {{name}}</view>
<button onTap="changeName"> Change name </button>
```

```javascript
Page({
  data: {
    text: 'test',
    array: [{text: 'a'}],
    object: {
      text: 'blue',
    },
	name: 'taobao',
  },
  changeTitle() {
    // 错误！不要直接去修改 data 里的数据
    // this.data.text = 'changed data'  

    // 正确
    this.setData({
      text: 'ha',
    });
  },
  changeArray() {
    // 可以直接使用数据路径来修改数据
    this.setData({
      'array[0].text': 'b',
    });
  },
  changePlanetColor(){
    this.setData({
      'object.text': 'red',
    });
  },
  addNewKey() {
    this.setData({
      'newField.text': 'c',
    });
  },
  changeName() {
    this.setData({
      name: 'alipay',
    }, () => { // 接受传递回调函数
      console.log(this); // this 当前页面实例
      this.setData({ name: this.data.name + ', ' + 'welcome!'});
    });
  },
});
```

## Page.prototype.$spliceData(data: Object, callback: Function)

`spliceData` 同样用于将数据从逻辑层发送到视图层，但是相比于 `setData`，在处理长列表的时候，其具有更高的性能。

参数说明：

| 事件 | 类型 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- |
| data | Object | 待改变的数据 | v8.90.0 |
| callback | Function | 回调函数，在页面渲染更新完成之后执行。 | v8.90.0 |


`Object` 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`。其中 `key` 可以非常灵活，以数据路径的形式给出，如 `array[2].message`、`a.b.c.d`，可以不需要在 `this.data` 中预先定义。`value` 为一个数组（格式：[start, deleteCount, ...items]）, 数组的第一个元素为操作的起始位置，第二个元素为删除的元素的个数，剩余的元素均为插入的数据。对应 `es5` 中数组的 `splice` 方法

下面是示例代码：

```html
<!-- pages/index/index.axml -->
<view class="spliceData">
  <view a:for="{{a.b}}" key="{{item}}" style="border:1px solid red">
    {{item}}
  </view>
</view>
```

```javascript
// pages/index/index.js
Page({
  data: {
    a: {
      b: [1,2,3,4],
    },
  },
  onLoad(){
    this.$spliceData({ 'a.b': [1, 0, 5, 6] });
  },
});
```

页面输出：

```
1
5
6
2
3
4
```

<a name="Page.route"></a>
## Page.route

`Page` 路径，对应 app.json 中配置的路径值，类型为 `String`。

> 这是一个只读属性


```javascript
Page({
  onShow() {
    // 对应 app.json 中配置的路径值
    console.log(this.route)
  }
})
```
