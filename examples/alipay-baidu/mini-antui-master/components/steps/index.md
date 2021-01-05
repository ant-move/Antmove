# steps 步骤进度条

根据步骤显示的进度条。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/yTQSJcsYUNRmaVAqbwkM.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 最外层覆盖样式 | String | | false |
| activeIndex | 当前激活步骤 | Number | 1 | true |
| failIndex | 当前失败步骤(只在vertical模式下生效) | Number | 0 | false |
| direction | 显示方向，可选值：`vertical`、`horizontal` | String | horizontal | false |
| size | 统一的icon大小，单位为px | Number | 0 | false |
| items | 步骤详情 | Array[{title, description, icon, activeIcon, size}] | [] | true |

items属性详细描述

| 属性名 | 描述 | 类型 | 默认值 | 必须 |
| ---- | ---- | ---- | ---- | ---- |
| items.title | 步骤详情标题 | String |  | true |
| items.description | 步骤详情描述 | String |  | true |
| items.icon | 尚未到达步骤的icon(只在vertical模式下生效) | String |  | true |
| items.activeIcon | 已到达步骤的icon(只在vertical模式下生效) | String |  | true |
| items.size | 已到达步骤icon的图标大小，单位为px(只在vertical模式下生效) | Number | | true |


## 示例

```json
{
  "usingComponents": {
    "steps": "mini-antui/es/steps/index"
  }
}
```

```html
<steps 
  activeIndex="{{activeIndex}}"
  items="{{items}}"
></steps>
```

```javascript
Page({
  data: {
    activeIndex: 1,
    items: [{
      title: '步骤1',
      description: '这是步骤1',
    }, {
      title: '步骤2',
      description: '这是步骤2',
    }, {
      title: '步骤3',
      description: '这是步骤3',
    }]
  }
});
```