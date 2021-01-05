# app.js 注册小程序

## App(object: Object)

`App()` 用于注册小程序，接受一个 Object 作为属性，用来配置小程序的生命周期等。<br />
`App()` 必须在 app.js 中调用，必须调用且只能调用一次。

## object 属性说明
| 属性 | 类型 | 描述 | 触发时机 |
| --- | --- | --- | --- |
| onLaunch | Function | 生命周期回调：监听小程序初始化 | 当小程序初始化完成时触发，全局只触发一次 |
| onShow | Function | 生命周期回调：监听小程序显示 | 当小程序启动，或从后台进入前台显示时触发 |
| onHide | Function | 生命周期回调：监听小程序隐藏 | 当小程序从前台进入后台时触发 |
| onError | Function | 监听小程序错误 | 当小程序发生 js 错误时触发 |
| onShareAppMessage | Function | 全局分享配置 |  |


**前台/后台定义：**

- 小程序用户点击右上角关闭，或者按下设备 Home 键离开高德时，小程序并不会直接销毁，而是进入后台。
- 当用户再次进入高德或再次打开小程序时，小程序会从后台进入前台。
- 只有当小程序进入后台一定时间，或占用系统资源过高，才会被真正销毁。

### onLaunch(object: Object) 及 onShow(object: Object)

object 属性说明：

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| query | Object | 当前小程序的 query，从启动参数的 query 字段解析而来 |
| path | String | 当前小程序的页面地址，从启动参数 page 字段解析而来，page 忽略时默认为首页 |
| referrerInfo | Object | 来源信息 |


比如，启动小程序的 schema url 如下:

```
amapuri://applets/platformapi/startapp?appId=1999&query=number%3D1&page=x%2Fy%2Fz
```

参数解析如下:

```javascript
query = decodeURIComponent('number%3D1');
// number=1
path = decodeURIComponent('x%2Fy%2Fz');
// x/y/z
```

- 小程序首次启动时，`onLaunch` 方法可获取 `query`、`path` 属性值。
- 小程序在后台被用 schema 打开，也可从 `onShow` 方法中获取 `query`、`path` 属性值。

```javascript
App({
  onLaunch(options) {
    // 第一次打开
    console.log(options.query);
    // {number:1}
    console.log(options.path);
    // x/y/z
  },
  onShow(options) {
    // 从后台被 schema 重新打开
    console.log(options.query);
    // {number:1}
    console.log(options.path);
    // x/y/z
  },
});
```

referrerInfo 子属性说明：

| 属性 | 类型 | 描述 | 兼容性 |
| --- | --- | --- | --- |
| appId | string | 来源小程序 | v8.90.0 |
| extraData | Object | 来源小程序传过来的数据。 | v8.90.0 |


**注意：**

- 不要在 `onShow` 中进行 `redirectTo` 或`navigateTo` 等操作页面栈的行为。
- 不要在 `onLaunch` 里调用 [`getCurrentPages()`](getCurrentPages)，因为此时 page 还未生成。

### onHide()

小程序从前台进入后台时触发 `onHide()` 。

示例代码：

```javascript
App({
  onHide() {
    // 进入后台时
    console.log('app hide');
  },
});
```

### onError(error: String)

小程序发生脚本错误或 API 调用报错时触发。

```javascript
App({
  onError(error) {
    // 小程序执行出错时
    console.log(error);
  },
});
```

### onShareAppMessage(object: Object)

全局分享配置。当页面未设置 `page.onShareAppMessage` 时，调用分享会执行全局的分享设置，具体见[分享](../api/customShare)

## globalData 全局数据

`App()` 中可以设置全局数据 `globalData`。

下面是一个例子：

```javascript
// app.js
App({
  globalData: 1
});
```
