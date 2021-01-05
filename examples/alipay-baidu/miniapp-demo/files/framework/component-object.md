# 组件对象

## Component 构造器

### 参数说明

| 参数       | 类型     | 是否必填 | 说明                                             | 最低版本 |
| ---------- | -------- | -------- | ------------------------------------------------ | -------- |
| data       | Object   | 否       | 组件内部状态                                     |    v8.90.0      |
| props      | Object   | 否       | 为外部传入的数据设置默认值                       |   v8.90.0       |
| didMount   | Function | 否       | 组件生命周期函数，组件创建完毕时触发             |     v8.90.0     |
| didUpdate  | Function | 否       | 组件生命周期函数，组件更新完毕时触发             |    v8.90.0      |
| didUnmount | Function | 否       | 组件生命周期函数，组件删除时触发                 |    v8.90.0      |
| mixins     | Array    | 否       | 组件间代码复用机制                               |    v8.90.0      |
| methods    | Object   | 否       | 组件的方法，可以是事件响应函数或任意的自定义方法 |   v8.90.0       |

以下为一个简单示例：

```javascript
// /components/index/index.js
Component({
  mixins: [{ didMount() {} }],
  data: { y: 2 },
  props: { x: 1 },
  didUpdate(prevProps, prevData) {},
  didUnmount() {},
  methods: {
    onMyClick(ev) {
      my.alert({})
      this.props.onXX({ ...ev, e2: 1 })
    },
  },
})
```

### methods

自定义组件不仅可以渲染静态数据，也可以响应用户点击事件，进而处理并触发自定义组件重新渲染。methods 中可以定义任意自定义方法。

**注意：** 与 Page 不同，自定义组件需要将事件处理函数定义在 methods 中。

```html
<!-- /components/index/index.axml -->
<view>{{counter}}</view>
<button onTap="plusOne">+1</button>
```

```javascript
// /components/index/index.js
Component({
  data: { counter: 0 },
  methods: {
    plusOne(e) {
      console.log(e)
      this.setData({ counter: this.data.counter + 1 })
    },
  },
})
```

页面会渲染一个按钮，每次点击它页面的数字都会加 1。

<a name="props"></a>

### props

自定义组件可以接受外界的输入，做完处理之后，还可以通知外界说：我做完了。这些都可以通过 props 实现。

**注意：**

- props 为外部传过来的属性，可指定默认属性，不能在自定义组件内部代码中修改。
- 自定义组件的 axml 中可以直接引用 props 属性。
- 自定义组件的 axml 中的事件只能由自定义组件的 js 的 methods 中的方法来响应， 如果需要调用父组件传递过来的函数，可以在 methods 中通过 `this.props` 调用.

```javascript
// /components/index/index.js
Component({
  data: { counter: 0 },
  // 设置默认属性
  props: {
    onCounterPlusOne: (data) => console.log(data),
    extra: 'default extra',
  },
  methods: {
    plusOne(e) {
      console.log(e)
      const counter = this.data.counter + 1
      this.setData({ counter })
      this.props.onCounterPlusOne(counter) // axml中的事件只能由methods中的方法响应
    },
  },
})
```

以上代码中 props 设置默认属性，然后在事件处理函数中通过 `this.props` 获取这些属性。

```html
<!-- /components/index/index.axml -->
<view>{{counter}}</view>
<view>extra: {{extra}}</view>
<button onTap="plusOne">+1</button>
```

#### 外部使用不传递 props

```html
<!-- /pages/index/index.axml -->
<my-component />
```

页面输出：

```
0
extra: default extra
+1
```

此时并未传递参数，所以页面会显示组件 js 中 props 设定的默认值。

#### 外部使用传递 props

**注意：** 外部使用自定义组件时，如果传递参数是函数，一定要以 `on` 为前缀，否则会将其处理为字符串。

```javascript
// /pages/index/index.js
Page({
  onCounterPlusOne(data) {
    console.log(data)
  },
})
```

```html
<!-- /pages/index/index.axml -->
<my-component extra="external extra" onCounterPlusOne="onCounterPlusOne" />
```

页面输出：

```
0
extra: external extra
+1
```

此时传递了参数，所以页面会显示外部传递的 extra 值 `external extra` 。

## 组件实例属性

| 属性名 | 类型   | 说明                                |
| ------ | ------ | ----------------------------------- |
| data   | Object | 组件内部数据                        |
| props  | Object | 传入组件的属性                      |
| is     | String | 组件路径                            |
| \$page | Object | 组件所属页面实例                    |
| \$id   | Number | 组件 id，可直接在组件 axml 中渲染值 |

以下为一个简单示例：

```javascript
// /components/index/index.js
Component({
  didMount() {
    this.$page.xxCom = this // 通过此操作可以将组件实例挂载到所属页面实例上
    console.log(this.is)
    console.log(this.$page)
    console.log(this.$id)
  },
})
```

```html
<!-- /components/index/index.axml 组件 id 可直接在组件 axml 中渲染值 -->
<view>{{$id}}</view>
```

```javascript
// /pages/index/index.js
Page({
  onReady() {
    console.log(this.xxCom) // 可以访问当前页面所挂载的组件
  },
})
```

当组件在页面上渲染后，执行 didMount 回调，控制台输出如下：

```
/components/index/index
{$viewId: 51, route: "pages/index/index"}
1
```

## 组件实例方法

| 方法名       | 参数   | 说明                   | 最低版本 |
| ------------ | ------ | ---------------------- | -------- |
| setData      | Object | 设置 data 触发视图渲染 |          |
| \$spliceData | Object | 设置 data 触发视图渲染 |          |

具体使用方式同 [页面](quick-start/page-js-register)
