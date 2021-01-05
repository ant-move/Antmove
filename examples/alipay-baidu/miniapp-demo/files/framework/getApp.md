# getApp 方法

小程序提供了全局的 `getApp()` 方法，可获取当前小程序实例，一般用于在子页面中获取顶层应用。

```javascript
var app = getApp();
console.log(app.globalData); // 获取 globalData
```

使用过程中，请注意以下几点：

- `App()` 函数中不可以调用 `getApp()`，可使用 `this` 可以获取当前小程序实例。
- 通过 `getApp()` 获取实例后，请勿私自调用生命周期回调函数。
- 请区分全局变量及页面局部变量，比如：
```javascript
// a.js

// localValue 只在 a.js 有效
var localValue = 'a';
// 获取 app 实例
var app = getApp();
// 拿到全局数据，并改变它
app.globalData++;
```

```javascript
// b.js

// localValue 只在 b.js 有效
var localValue = 'b';
// 如果 a.js 先运行，globalData 会返回 2
console.log(getApp().globalData);
```


`a.js` 和 `b.js` 两个文件中都声明了变量 `localValue`，但并不会互相影响，因为各个文件声明的局部变量和函数只在当前文件下有效。
