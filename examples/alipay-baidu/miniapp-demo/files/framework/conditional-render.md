# 条件渲染

## a:if

在框架中，使用 `a:if="{{condition}}"` 来判断是否需要渲染该代码块。

```html
<view a:if="{{condition}}"> True </view>
```

也可以使用 `a:elif` 和 `a:else` 添加一个 **else** 块。

```html
<view a:if="{{length > 5}}"> 1 </view>
<view a:elif="{{length > 2}}"> 2 </view>
<view a:else> 3 </view>
```

## block a:if

因为 `a:if` 是控制属性，需要在标签中使用。如果要一次性判断多个组件标签，可以使用 `<block/>` 标签包装多个组件，并使用`a:if` 来控制属性。

```html
<block a:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

**说明：** `<block/>` 并不是一个组件，只是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

## 对比 a:if 与 hidden

- `a:if` 中的模板可能包含数据绑定，所以当 `a:if` 的条件值切换时，框架有局部渲染的过程，用于确保条件块在切换时销毁或重新渲染。此外， `a:if` 在初始渲染条件为 false 时，不触发任何渲染动作，当条件第一次变成 true 时才开始局部渲染。
- `hidden` 控制显示与隐藏，组件始终会被渲染。

一般来说，`a:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，在需要频繁切换的情景下，用 `hidden` 更好。如果在运行时条件改变不多则 `a:if` 较好。
