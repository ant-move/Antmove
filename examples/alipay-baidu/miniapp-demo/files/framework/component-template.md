# 组件模板和样式

与页面类似，自定义组件可以有自己的 axml 模板和 acss 样式。

## axml

axml 是自定义组件必选部分。

```html
<!-- /components/index/index.axml -->
<view onTap="onMyClick" id="c-{{$id}}" />
```

```javascript
// /components/index/index.js
Component({
  methods: {
    onMyClick(e) {
      console.log(this.is, this.$id)
    },
  },
})
```

**注意：** 与页面不同，用户自定义事件需要放到 methods 里面。

### 插槽 slot

通过在组件 js 中支持 props，自定义组件可以和外部调用者交互，接受外部调用者传来的数据，同时可以调用外部调用者传来的函数，通知外部调用者组件内部的变化。

但是这样还不够，自定义组件还不够灵活。除了数据的处理与通知，小程序提供的 slot 使得自定义组件的 axml 结构可以使用外部调用者传来的 axml 组装。外部调用者可以传递 axml 给自定义组件，自定义组件使用其组装出最终的组件 axml 结构。

#### 默认插槽 default slot

**示例代码：**

```html
<!-- /components/index/index.axml -->
<view>
  <slot>
    <view>default slot & default value</view>
  </slot>
  <view>other</view>
</view>
```

**调用者不传递 axml**

```javascript
// /pages/index/index.json
{
   "usingComponents": {
     "my-component": "/components/index/index"
   }
}
```

```html
<!-- /pages/index/index.axml -->
<my-component />
```

**页面输出：**

```
default slot & default value
other
```

**调用者传递 axml**

```html
<!-- /pages/index/index.axml -->
<my-component>
  <view>header</view>
  <view>footer</view>
</my-component>
```

**页面输出：**

```
header
footer
other
```

可以将 slot 理解为插槽，default slot 就是默认插槽，如果调用者在组件标签 `<my-component>` 之间不传递 axml，则渲染的是默认插槽。而如果调用者在组件标签 `<my-component>` 之间传递有 axml，则使用其替代默认插槽，进而组装出最终的 axml 以供渲染。

#### 具名插槽 named slot

default slot 只能传递一份 axml。复杂的组件需要在不同位置渲染不同的 axml，即需要传递多个 axml。此时需要 named slot。使用具名插槽后，外部调用者可以在自定义组件标签的子标签中指定要将哪一部分的 axml 放入到自定义组件的哪个具名插槽中。而自定义组件标签的子标签中没有指定具名插槽的部分则会放入到默认插槽上。如果仅仅传递了具名插槽，则默认插槽不会被覆盖。

**示例代码：**

```html
<!-- /components/index/index.axml -->
<view>
  <slot>
    <view>default slot & default value</view>
  </slot>
  <slot name="header" />
  <view>body</view>
  <slot name="footer" />
</view>
```

**只传递具名插槽**

```html
<!-- /pages/index/index.axml -->
<my-component>
  <view slot="header">header</view>
  <view slot="footer">footer</view>
</my-component>
```

页面输出

```
default slot & default value
header
body
footer
```

**传递具名插槽与默认插槽**

```html
<!-- /pages/index/index.axml -->
<my-component>
  <view>this is to default slot</view>
  <view slot="header">header</view>
  <view slot="footer">footer</view>
</my-component>
```

**页面输出**

```
this is to default slot
header
body
footer
```

#### 作用域插槽 slot-scope

通过使用 named slot ，自定义组件的 axml 要么使用自定义组件的 axml，要么使用外部调用者（比如页面）的 axml。<br />
使用自定义组件的 axml，可以访问组件内部的数据，同时通过 props 属性，可以访问外部调用者的数据。

**示例：**

```javascript
// /components/index/index.js
Component({
  data: {
    x: 1,
  },
  props: {
    y: '',
  },
})
```

```html
<!-- /components/index/index.axml -->
<view>component data: {{x}}</view>
<view>page data: {{y}}</view>
```

```javascript
// /pages/index/index.js
Page({
  data: { y: 2 },
})
```

```html
<!-- /pages/index/index.axml -->
<my-component y="{{y}}" />
```

页面输出：

```
component data: 1
page data: 2
```

自定义组件通过 slot 使用外部调用者（比如页面）的 axml 时，却只能访问外部调用者的数据。

**示例代码：**

```html
<!-- /components/index/index.axml -->
<view>
  <slot>
    <view>default slot & default value</view>
  </slot>
  <view>body</view>
</view>
```

```javascript
// /pages/index/index.js
Page({
  data: { y: 2 },
})
```

```html
<!-- /pages/index/index.axml -->
<my-component>
  <view>page data: {{y}}</view>
</my-component>
```

页面输出：

```
page data: 2
body
```

slot scope 使得插槽内容可以访问到组件内部的数据。

**示例代码：**

```javascript
// /components/index/index.js
Component({
  data: {
    x: 1,
  },
})
```

```html
<!-- /components/index/index.axml -->
<view>
  <slot x="{{x}}">
    <view>default slot & default value</view>
  </slot>
  <view>body</view>
</view>
```

```javascript
// /pages/index/index.js
Page({
  data: { y: 2 },
})
```

```html
<!-- /pages/index/index.axml -->
<my-component>
  <view slot-scope="props">
    <view>component data: {{props.x}}</view>
    <view>page data: {{y}}</view>
  </view>
</my-component>
```

页面输出：

```
component data: 1
page data: 2
body
```

如上所示，自定义组件通过定义 slot 属性的方式暴露组件内部数据，页面使用组件时，通过 slot-scope 申明为作用域插槽，属性值定义临时变量名 props，即可访问到组件内部数据。

## acss

和页面一样，自定义组件也可以定义自己的 acss 样式。acss 会自动被引入使用组件的页面，不需要页面手动引入。详见 [acss 语法](/acss)。
