# 小程序全局配置介绍

`App()` 代表顶层应用，管理所有页面和全局数据，以及提供生命周期回调等。它也是一个构造方法，生成 App 实例。

一个小程序就是一个 App 实例。

每个小程序顶层一般包含三个文件。

- app.json：应用配置
- app.js：应用逻辑
- app.acss：应用样式（可选）

## 简单示例

一个简单的 app.json 代码如下：

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window": {
    "defaultTitle": "Demo"
  }
}
```

这段代码配置指定小程序包含两个页面（index 和 logs），以及应用窗口的默认标题设置为 “Demo”。

一个简单的 app.js 代码如下：

```javascript
App({
  onLaunch(options) {
    // 第一次打开
  },
  onShow(options) {
    // 小程序启动，或从后台被重新打开
  },
  onHide() {
    // 小程序从前台进入后台
  },
  onError(msg) {
    // 小程序发生脚本错误或 API 调用出现报错
    console.log(msg);
  },
  globalData: {
	// 全局数据
    name: 'amap',
  },
});
```
