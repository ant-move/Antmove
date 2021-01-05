# SJS 介绍

SJS（safe/subset javascript）是小程序一套自定义脚本语言，可以在  AXML  中使用其构建页面结构。
sjs 是 JavaScript 语言的子集，与 JavaScript 是不同的语言，其语法并不与 JavaScript 一致，请勿将其等同于 JavaScript。

注意：目前高德小程序并不支持 sjs 文件中的 console.log

## 使用方式

在 `.sjs` 文件中定义 SJS：

```javascript
// pages/index/index.sjs
const message = 'hello amap'
const getMsg = (x) => x
export default {
  message,
  getMsg,
}
```

```javascript
// pages/index/index.js
Page({
  data: {
    msg: 'hello alipay',
  },
})
```

```html
<!-- pages/index/index.axml -->
<import-sjs name="m1" from="./index.sjs" />
<view>{{m1.message}}</view>
<view>{{m1.getMsg(msg)}}</view>
```

页面输出：

```
hello amap
hello alipay
```

**注意**：

- sjs 只能定义在  `.sjs`  文件中。然后在 axml 中使用  `<import-sjs>`  标签引入，不支持在`<import-js>`里直接引入sjs代码
- sjs 可以调用其他 sjs 文件中定义的函数。
- sjs 是 JavaScript 语言的子集，请勿将其等同于 JavaScript。
- sjs 的运行环境和其他 JavaScript 代码是隔离的， sjs 中不能调用其他 JavaScript 文件中定义的函数，也不能调用小程序提供的 API。
- sjs 函数不能作为组件事件回调。
- sjs 不依赖于基础库版本，可以在所有版本小程序中运行。
- sjs里不支持console.log

## import-sjs 标签

| 属性 | 类型   | 是否必填 | 说明                               |
| ---- | ------ | -------- | ---------------------------------- |
| name | String | 是       | 当前 `<import-sjs>` 标签的模块名。 |
| from | String | 是       | 引用 .sjs 文件的相对路径。         |

**说明**：

name 属性指定当前 `<import-sjs>` 标签的模块名。在单个 AXML 文件内，建议将 name 值设为唯一。若有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同  AXML  文件之间的 `<import-sjs>` 模块名不会相互覆盖。

name 属性可使用一个字符串表示默认模块名，也可使用  `{x}`  表示命名模块的导出。

示例代码：

```javascript
// pages/index/index.js
Page({
  data: {
    msg: 'hello amap',
  },
})
```

```javascript
// pages/index/index.sjs
function bar(prefix) {
  return prefix
}
export default {
  foo: 'foo',
  bar: bar,
}
```

```javascript
// pages/index/namedExport.sjs
export const x = 3
export const y = 4
```

```html
<!-- pages/index/index.axml -->
<import-sjs from="./index.sjs" name="test"></import-sjs>
<!-- 也可以直接使用单标签闭合的写法
<import-sjs from="./index.sjs" name="test" />
-->

<!-- 调用 test 模块里面的 bar 函数，且参数为 test 模块里面的 foo -->
<view> {{test.bar(test.foo)}} </view>
<!-- 调用 test 模块里面的 bar 函数，且参数为 page.js 里面的 msg -->
<view> {{test.bar(msg)}} </view>

<!-- 支持命名导出（named export） -->
<import-sjs from="./namedExport.sjs" name="{x, y: z}" />
<view>{{x}}</view>
<view>{{z}}</view>
```

页面输出：

```
foo
hello amap
3
4
```

**注意**：

- 引用时务必使用 “.sjs” 文件后缀。
- 若定义了一个 .sjs 模块，但从未引用，则该模块不会被解析与运行。
