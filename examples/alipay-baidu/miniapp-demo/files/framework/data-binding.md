# 数据绑定

AXML 中的动态数据与对应的 `Page` 中 `data` 内容绑定。

## 简单绑定

数据绑定使用 [Mustache](http://mustache.github.io/) 语法将变量用两对大括号（{{}}）封装，可以在多种语法场景下使用。

### 内容

```html
<view> {{ message }} </view>
```

```javascript
Page({
  data: {
    message: 'Hello amap!',
  },
})
```

### 组件属性

组件属性需使用双引号（""）封装。

```html
<view id="item-{{id}}"> </view>
```

```javascript
Page({
  data: {
    id: 0,
  },
})
```

### 控制属性

控制属性需使用双引号（""）封装。

```html
<view a:if="{{condition}}"> </view>
```

```javascript
Page({
  data: {
    condition: true,
  },
})
```

### 关键字

关键字需使用双引号封装（""）。

- true：boolean 类型的 true，代表真值。
- false： boolean 类型的 false，代表假值。

```html
<checkbox checked="{{false}}"> </checkbox>
```

**注意**: 不要直接写 `checked="false"`，计算结果是一个字符串，转成布尔值类型后代表真值。

## 运算

可用两对大括号（{{}}） 封装简单的运算。支持如下几种方式：

### 三元运算

```html
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

### 算数运算

```html
<view> {{a + b}} + {{c}} + d </view>
```

```javascript
Page({
  data: {
    a: 1,
    b: 2,
    c: 3,
  },
})
```

页面输出内容为 `3 + 3 + d`

### 逻辑判断

```html
<view a:if="{{length > 5}}"> </view>
```

### 字符串运算

```html
<view>{{"hello" + name}}</view>
```

```javascript
Page({
  data: {
    name: 'amap',
  },
})
```

### 数据路径运算

```html
<view>{{object.key}} {{array[0]}}</view>
```

```javascript
Page({
  data: {
    object: {
      key: 'Hello ',
    },
    array: ['amap'],
  },
})
```

## 组合

可在 Mustache 语法内直接进行组合，构成新的对象或者数组。

### 数组

```html
<view a:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
```

```javascript
Page({
  data: {
    zero: 0,
  },
})
```

最终组合成数组 `[0, 1, 2, 3, 4]`。

### 对象

```html
<template is="objectCombine" data="{{foo: a, bar: b}}"></template>
```

```javascript
Page({
  data: {
    a: 1,
    b: 2,
  },
})
```

最终组合成的对象是 `{foo: 1, bar: 2}`。

也可用解构运算符 `...` 来将一个对象展开：

```html
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
```

```javascript
Page({
  data: {
    obj1: {
      a: 1,
      b: 2,
    },
    obj2: {
      c: 3,
      d: 4,
    },
  },
})
```

最终组合成的对象是 `{a: 1, b: 2, c: 3, d: 4, e: 5}`。

如果对象 key 和 value 相同，也可以间接地表达：

```html
<template is="objectCombine" data="{{foo, bar}}"></template>
```

```javascript
Page({
  data: {
    foo: 'my-foo',
    bar: 'my-bar',
  },
})
```

最终组合成的对象是 `{foo: 'my-foo', bar:'my-bar'}`。

**注意：**上面的方式可以随意组合，但是变量名相同时，后边的变量会覆盖前面的变量，比如：

```html
<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>
```

```javascript
Page({
  data: {
    obj1: {
      a: 1,
      b: 2,
    },
    obj2: {
      b: 3,
      c: 4,
    },
    a: 5,
  },
})
```

最终组合成的对象是 `{a: 5, b: 3, c: 6}`。
