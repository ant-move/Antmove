# 小程序页面介绍

**Page** 代表应用的一个页面，负责页面展示和交互。每个页面对应一个子目录，一般有多少个页面，就有多少个子目录。它也是一个构造函数，用来生成页面实例。

每个小程序页面一般包含四个文件。

- `[pageName].js`：页面逻辑
- `[pageName].axml`：页面结构
- `[pageName].acss`：页面样式（可选）
- `[pageName].json`：页面配置（可选）

页面初始化时，提供数据。

```javascript
Page({
  data: {
    title: 'amap',
    array: [{user: 'li'}, {user: 'zhao'}],
  },
});
```

根据以上提供的数据，渲染页面内容。

```html
<view>{{title}}</view>
<view>{{array[0].user}}</view>
```

定义交互行为时，需要指定响应函数。

```html
<view onTap="handleTap">click me</view>
```

以上代码指定用户触摸按钮时，调用 `handleTap` 方法。

```javascript
Page({
  handleTap() {
    console.log('yo! view tap!');
  },
});
```

页面重新渲染，需要在页面脚本里面调用 `this.setData` 方法。

```html
<view>{{text}}</view>
<button onTap="changeText"> Change normal data </button>
```

以上代码指定用户触摸按钮时，调用 `changeText` 方法。

```javascript
Page({
  data: {
    text: 'init data',
  },
  changeText() {
    this.setData({
      text: 'changed data',
    });
  },
});
```

上面代码中，`changeText` 方法里面调用 `this.setData` 方法，会导致页面重新渲染。
