# 引用

axml 提供两种文件引用方式 `import` 和 `include`。

## import

import 可以加载已经定义好的 `template`。

比如，在 item.axml 中定义了一个叫 `item` 的 `template`。

```html
<!-- item.axml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.axml 中引用 item.axml，就可以使用 `item` 模板。

```html
<import src="./item.axml" /> <template is="item" data="{{text: 'forbar'}}" />
```

import 有作用域的概念，只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。

比如，C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 中定义的 template。

```html
<!-- a.axml -->
<template name="A">
  <text> A template </text>
</template>
```

```html
<!-- b.axml -->
<import src="./a.axml" />
<template name="B">
  <text> B template </text>
</template>
```

```html
<!-- c.axml -->
<import src="./b.axml" />
<template is="A" />
<!-- 注意：不能使用 import A -->
<template is="B" />
```

注意 template 的子节点只能是一个，例如：

**允许的示例：**

```html
<template name="x">
  <view />
</template>
```

**不允许的示例：**

```html
<template name="x">
  <view />
  <view />
</template>
```

## include

include 可以将目标文件除 `<template/>` 外整个代码引入，相当于是拷贝到 include 位置。

代码示例：

```html
<!-- index.axml -->
<include src="./header.axml" />
<view> body </view>
<include src="./footer.axml" />
```

```html
<!-- header.axml -->
<view> header </view>
```

```html
<!-- footer.axml -->
<view> footer </view>
```

## 引入路径

模板引入路径支持相对路径、绝对路径，也支持从 node_modules 目录载入第三方模块。

```html
<import src="./a.axml" />
<!-- 相对路径 -->
<import src="/a.axml" />
<!-- 项目绝对路径 -->
<import src="third-party/x.axml" />
<!-- 第三方 npm 包路径 -->
```
