# 模板

axml 提供模板 `template`，可以在模板中定义代码片段，然后在不同地方调用。<br />
建议使用 `template` 方式引入模版片段，因为 `template` 会指定其作用域，只使用 data 传入的数据，如果 `template` 的 `data` 没有改变，该片段 UI 不会重新渲染。

## 定义模板

使用 name 属性申明模板名，然后在 `<template/>` 内定义代码片段。

```html
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

## 使用模板

使用 **is** 属性，声明需要的模板，然后将需要的 **data** 传入，比如：

```html
<template is="msgItem" data="{{...item}}" />
```

```javascript
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-04-19',
    },
  },
})
```

`is` 属性可以使用 Mustache 语法，来动态决定具体渲染哪个模板。

```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block a:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}" />
</block>
```

## 模板作用域

模板有其作用域，只能使用 data 传入的数据。除了直接由 data 传入数据外，也可以通过 onXX 事件绑定页面逻辑进行函数处理。如下代码所示：

```html
<!-- templ.axml -->
<template name="msgItem">
  <view>
    <view>
      <text> {{index}}: {{msg}} </text>
      <text> Time: {{time}} </text>
    </view>
    <button onTap="onClickButton">onTap</button>
  </view>
</template>
```

```html
<!-- index.axml -->
<import src="./templ.axml" />
<template is="msgItem" data="{{...item}}" />
```

```javascript
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-04-22',
    },
  },
  onClickButton(e) {
    console.log('button clicked', e)
  },
})
```
