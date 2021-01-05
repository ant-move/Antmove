# 列表渲染

## a:for

在组件上使用 `a:for` 属性可以绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

数组当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`。

```html
<view a:for="{{array}}">
  {{index}}: {{item.message}}
</view>
```

```javascript
Page({
  data: {
    array: [
      {
        message: 'foo',
      },
      {
        message: 'bar',
      },
    ],
  },
})
```

使用 `a:for-item` 可以指定数组当前元素的变量名。使用 `a:for-index` 可以指定数组当前下标的变量名。

```html
<view a:for="{{array}}" a:for-index="idx" a:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

`a:for` 支持嵌套。<br />
以下是九九乘法表的嵌套示例代码。

```html
<view a:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" a:for-item="i">
  <view a:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" a:for-item="j">
    <view a:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

## block a:for

与 `block a:if` 类似，可以将 `a:for` 用在 `<block/>` 标签上，以渲染一个包含多节点的结构块。

```html
<block a:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

## a:key

如果列表项位置会动态改变或者有新项目添加到列表中，同时希望列表项保持特征和状态（比如 `<input/>` 中的输入内容，`<switch/>` 的选中状态），需要使用 `a:key` 来指定列表项的唯一标识。

`a:key` 的值以两种形式来提供：

- 字符串：代表列表项某个属性，属性值需要是列表中唯一的字符串或数字，比如 ID，并且不能动态改变。
- 保留关键字 `*this`，代表列表项本身，并且它是唯一的字符串或者数字，比如当数据改变触发重新渲染时，会校正带有 `key` 的组件，框架会确保他们重新被排序，而不是重新创建，这可以使组件保持自身状态，提高列表渲染效率。

**注意：**

- 如不提供 `a:key`，会报一个 warning。
- 如果明确知道列表是静态，或者不用关注其顺序，则可以忽略。

下面是示例代码：

```html
<view class="container">
  <view a:for="{{list}}" a:key="*this">
    <view onTap="bringToFront" data-value="{{item}}">
      {{item}}: click to bring to front
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    list: ['1', '2', '3', '4'],
  },
  bringToFront(e) {
    const { value } = e.target.dataset
    const list = this.data.list.concat()
    const index = list.indexOf(value)
    if (index !== -1) {
      list.splice(index, 1)
      list.unshift(value)
      this.setData({ list })
    }
  },
})
```

## key

`key` 是比 `a:key` 更通用的写法，里面可以填充任意表达式和字符串。

**注意**: `key` 不能设置在 block 上。

下面是示例代码：

```html
<view class="container">
  <view a:for="{{list}}" key="{{item}}">
    <view onTap="bringToFront" data-value="{{item}}">
      {{item}}: click to bring to front
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    list: ['1', '2', '3', '4'],
  },
  bringToFront(e) {
    const { value } = e.target.dataset
    const list = this.data.list.concat()
    const index = list.indexOf(value)
    if (index !== -1) {
      list.splice(index, 1)
      list.unshift(value)
      this.setData({ list })
    }
  },
})
```
