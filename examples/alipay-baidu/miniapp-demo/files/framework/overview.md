# 框架概述

## 文件结构

小程序分为 `app` 和 `page` 两层。`app` 用来描述整个应用，`page` 用来描述各个页面。

`app` 由三个文件组成，必须放在项目的根目录。

| 文件     | 必填 | 作用             |
| -------- | ---- | ---------------- |
| app.js   | 是   | 小程序逻辑       |
| app.json | 是   | 小程序全局设置   |
| app.acss | 否   | 小程序全局样式表 |

`page` 由四个文件组成，分别是：

| 文件类型 | 必填 | 作用       |
| -------- | ---- | ---------- |
| js       | 是   | 页面逻辑   |
| axml     | 是   | 页面结构   |
| acss     | 否   | 页面样式表 |
| json     | 否   | 页面配置   |

**注意：** 为了方便开发者，我们规定这四个文件必须具有相同的路径与文件名。

开发者写的所有代码最终将会打包成一份 JavaScript 脚本，在小程序启动的时候运行，在小程序结束运行时销毁。

## 逻辑结构

小程序的核心是一个响应式的数据绑定系统，分为视图层和逻辑层。这两层始终保持同步，只要在逻辑层修改数据，视图层就会相应的更新。

请看下面这个简单的例子。

```html
<!-- 视图层 -->
<view> Hello {{name}}! </view>
<button onTap="changeName">Click me!</button>
```

```javascript
// 逻辑层
var initialData = {
  name: 'alipay',
}

// 注册一个页面
Page({
  data: initialData,
  changeName(e) {
    // 改变数据
    this.setData({
      name: 'amap',
    })
  },
})
```

上面代码中，框架自动将逻辑层数据中的 `name` 与视图层的 `name` 进行了绑定，所以在页面一打开的时候会显示 `Hello taobao!`。

用户点击按钮的时候，视图层会发送 `changeName` 的事件给逻辑层，逻辑层找到对应的事件处理函数。逻辑层执行了 `setData` 的操作，将 `name` 从 `alipay` 变为 `amap` ，因为该数据和视图层已经绑定了，从而视图层会自动改变为 `Hello alipay!`。

**注意：** 由于框架并非运行在浏览器中，所以 JavaScript 在 web 中的一些能力都无法使用，如 `document`、`window`等对象。

逻辑层 js 可以用 es2015 模块化语法组织代码：

```javascript
import util from './util' // 载入相对路径
import absolute from '/absolute' // 载入项目根路径文件
```

### 模块名的保留字

小程序中将浏览器部分内置对象名（如 window、document）作 `保留字` 使用，以应对未来的不时之需。<br />
保留字有：**globalThis**、**global**、**AlipayJSBridge**、**fetch**、**self**、**window**、**document**、**location**、**XMLHttpRequest**。请不要使用这些保留字做模块名，否则会出现无法正常访问模块的现象。如：

```javascript
import { window } from './myWindow'
console.log(window) // undefined
```

上述代码中，因为使用了保留字做模块名，使得引入的模块变成了 undefined 。正确的方法是不使用这些保留字命名模块，或者在引入模块的时候使用 as 关键字给模块重新命名，例如：

```javascript
import { window as myWindow } from './myWindow'
console.log(myWindow)
```

## 第三方 NPM 模块

小程序支持引入第三方模块，需先在小程序根目录下执行如下命令安装该模块:

```bash
$ npm install query-string --save
```

引入后即可在逻辑层中直接使用：

```javascript
import queryString from 'query-string' // 载入第三方 npm 模块
```

**注意：** 由于 node_modules 里第三方模块代码不会经过转换器，为了确保各个终端兼容，node_modules 下的代码需要转成 es5 格式再引用，模块格式推荐使用 es2015 的 import/export。同时，浏览器相关 web 能力同样无法使用。
