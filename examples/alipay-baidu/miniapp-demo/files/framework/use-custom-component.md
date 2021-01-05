# 使用自定义组件

**注意：**自定义组件的事件（如 onTap 等），并不是每个自定义组件默认支持的，需要自定义组件本身明确支持才能使用。自定义组件支持事件具体方法请参见 component 构造器一节。

自定义组件的使用和基础组件类似。

1. 在页面 JSON 文件中指定使用的自定义组件。

```javascript
// /pages/index/index.json
{
  "usingComponents": {
    "my-component": "/components/index/index"
  }
}
```

2. 在页面的 AXML 文件中使用自定义组件，与使用基础组件类似。

```html
<!-- /pages/index/index.axml -->
<view>
  <!-- 给自定义组件传递 属性name与属性age -->
  <my-component name="tom" age="{{23}}" />
</view>
```

**注意：**<br />1. 使用自定义组件时，给自定义组件传递的属性可以在自定义组件内通过 this.props 获取，参见 [props](component-object#props)。<br />2. 自定义组件只能在 page 自身的 AXML 文件和组件自身的 AXML 文件中使用，不能通过  import 或 include 使用。

**正确示例:**

```html
<!-- /pages/index/index.axml -->
<my-component />
```

**错误示例:**

```html
<!-- /pages/index/index.axml -->
<include src="./template.axml" />

<!-- /pages/index/template.axml -->
<view>
  HI, template
</view>
```

## 引用自定义组件

```json
// 在 /pages/index/index.json 中配置（不是 app.json ）
{
  "usingComponents": {
    "your-custom-component": "mini-antui/es/list/index",
    "your-custom-component2": "/components/card/index",
    "your-custom-component3": "./result/index",
    "your-custom-component4": "../result/index"
  }
}

// 项目绝对路径以 / 开头，相对路径以 ./ 或者 ../ 开头
```

[](#y3drio)<br />
