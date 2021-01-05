# 事件对象

组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

[]()<a name="462c8570"></a>

## BaseEvent 基础事件

BaseEvent 基础事件对象属性列表：

| 属性      | 类型    | 描述                       |
| --------- | ------- | -------------------------- |
| type      | String  | 事件类型                   |
| timeStamp | Integer | 事件生成时的时间戳         |
| target    | Object  | 触发事件的组件的属性值集合 |

<a name="type"></a>

### type

事件的类型。

<a name="timeStamp"></a>

### timeStamp

事件生成时的时间戳。

<a name="target"></a>

### target

触发事件的源组件对象，属性列表如下：

| 属性          | 类型   | 描述                                                    |
| ------------- | ------ | ------------------------------------------------------- |
| id            | String | 事件源组件的 id                                         |
| tagName       | String | 当前组件的类型                                          |
| dataset       | Object | 绑定事件的组件上由 **data-** 开头的自定义属性的集合     |
| targetDataset | Object | 实际触发事件的组件上由 **data-** 开头的自定义属性的集合 |

`dataset` 在组件中可以定义数据，这些数据将会通过事件传递给逻辑层。以 `data-`开头，由连字符 `-` 连接多个单词，所有字母必须小写(大写字母自动转成小写字母)，如 `data-element-type`，最终会在 `event.target.dataset`中会将连字符转成驼峰 `elementType`。

示例代码：

```html
<view data-alpha-beta="1" data-alphaBeta="2" onTap="bindViewTap">
  DataSet Test
</view>
```

```javascript
Page({
  bindViewTap: function(event) {
    event.target.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.target.dataset.alphabeta === 2 // 大写字母会转为小写字母
  },
})
```

[]()<a name="650b5b26"></a>

## CustomEvent 自定义事件对象

CustomEvent 自定义事件对象（继承自 BaseEvent），属性列表如下：

| 属性   | 类型   | 描述       |
| ------ | ------ | ---------- |
| detail | Object | 额外的信息 |

<a name="detail"></a>

### detail

自定义事件所携带的数据。表单组件事件会携带用户的输入信息，如 switch 组件 onChange 触发时可通过 `event.detail.value` 获取用户选择的状态值，媒体的错误事件会携带错误信息，更多信息请参见各组件文档事件说明。

[]()<a name="5c5441b7"></a>

## TouchEvent 触摸事件对象

TouchEvent 触摸事件对象（继承自 BaseEvent），属性列表：

| 属性           | 类型  | 描述                               |
| -------------- | ----- | ---------------------------------- |
| touches        | Array | 当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array | 当前变化的触摸点信息的数组         |

touches 是一个数组，每个元素为一个 Touch 对象（ canvas 触摸事件中携带的 touches 是 CanvasTouch 的数组），表示当前停留在屏幕上的触摸点。

changedTouches 数据格式同 touches。 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel）。

### Touch 对象

| 属性             | 类型   | 描述                                                                                 |
| ---------------- | ------ | ------------------------------------------------------------------------------------ |
| identifier       | Number | 触摸点的标识符                                                                       |
| pageX, pageY     | Number | 距离文档左上角的距离，左上角为原点 ，横向为 X 轴，纵向为 Y 轴                        |
| clientX, clientY | Number | 距离页面可显示的区域（屏幕除去导航条）的距离，左上角为原点，横向为 X 轴，纵向为 Y 轴 |

### CanvasTouch 对象

| 属性       | 类型   | 描述                                                                       |
| ---------- | ------ | -------------------------------------------------------------------------- |
| identifier | Number | 触摸点的标识符                                                             |
| x, y       | Number | 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴 |

### 示例

如  `touchmove`   事件，当用户触摸下例的组件。

```html
<view class="move-view" onTouchMove="touchMoveHandle"> </view>
```

页面中响应事件的处理函数 `touchMoveHandle` 会被调用，TouchEvent 触摸事件对象将作为参数传入。

```javascript
Page({
  touchMoveHandle(e) {
    console.log(e)
  },
})
```

下面是打印的 TouchEvent 对象的信息：

```json
{
  "type": "touchMove",
  "timeStamp": 1562241425847,
  "target": {
    "targetDataset": {},
    "tagName": "view",
    "dataset": {},
    "offsetLeft": 0,
    "offsetTop": 0
  },
  "currentTarget": {
    "tagName": "view",
    "dataset": {},
    "offsetLeft": 0,
    "offsetTop": 0
  },
  "touches": [
    {
      "clientX": 49.69140625,
      "clientY": 54.1640625,
      "identifier": 0,
      "pageX": 49.69140625,
      "pageY": 54.1640625
    }
  ],
  "changedTouches": [
    {
      "clientX": 49.69140625,
      "clientY": 54.1640625,
      "identifier": 0,
      "pageX": 49.69140625,
      "pageY": 54.1640625
    }
  ]
}
```
