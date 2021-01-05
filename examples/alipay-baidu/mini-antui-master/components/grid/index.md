# Grid 宫格

宫格。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ebqnVPiuCCoOKXwioUUH.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| list | 宫格数据 | Array<icon, text> | [] | true |
| onGridItemClick | 点击宫格项回调 | (index: Number) => void | | false |
| columnNum | 每行显示几列 | `2`、`3`、`4`、`5` | `3` | false |
| circular | 是否圆角 | Boolean | `false` | false |
| hasLine | 是否有边框 | Boolean | `true` | false |

## slot

> 可以自定义Grid中的展示内容，在slot根元素上使用 `slot-scope` 属性获取传给`slot`的`list`中的各项数据，如下代码中：`slot-scope="props"`，这样在模板中使用`props.item`即可访问`list`中的数据。使用`props.item.xx`访问`item`中的数据，参考以下代码：

```html
<view slot-scope="props">
  <image src="{{props.item.icon}}" />
  <view>
    <text>{{props.item.text}}</text>
    <text>{{props.item.desc}}</text>
  </view>
</view>
```

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "grid": "mini-antui/es/grid/index"
  }
}
```

```html
<grid onGridItemClick="onItemClick" columnNum="{{3}}" list="{{list3}}" />
```

```javascript
Page({
  data: {
    list3: [
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/VBqNBOiGYkCjqocXjdUj.png',
        text: '标题文字',
        desc: '描述信息',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});
```