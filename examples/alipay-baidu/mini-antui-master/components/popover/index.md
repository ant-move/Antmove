# Popover 气泡

气泡。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/fiqtYDYDruVwbWnspKwQ.jpeg" width="154" height="190" />


## popover

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 最外层覆盖样式 | String | | false |
| show | 气泡是否展示 | Boolean | false | true |
| showMask | 蒙层是否展示 | Boolean | true | false |
| position | 气泡位置可选值：`top`、`topRight`、`topLeft`、`bottom`、`bottomLeft`、`bottomRight`、`right`、`rightTop`、`rightBottom`、`left`、`leftBottom`、 `leftTop`  | String | bottomRight | false |

## popover-item

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ----|
| className | 单项样式 | String | | false |
| onItemClick | 单项点击事件 | () => void | | false |

## 示例

```json
{  
  "usingComponents": {
    "popover": "mini-antui/es/popover/index",
    "popover-item": "mini-antui/es/popover/popover-item/index"
  }
}
```

```html
<popover
  position="{{position}}"
  show="{{show}}"
  showMask="{{showMask}}"
  onMaskClick="onMaskClick"
>
  <view onTap="onShowPopoverTap">点击显示</view>
  <view slot="items">
    <popover-item onItemClick="itemTap1">
      <text>line1</text>
    </popover-item>
    <popover-item>
      <text>line2</text>
    </popover-item>
  </view>
</popover>
```

```javascript
Page({
  data: {
    position: 'bottomRight',
    show: false,
    showMask: true,
  },
  onMaskClick() {
    this.setData({
      show: false,
    });
  },
  onShowPopoverTap() {
    this.setData({
      show: true,
    });
  },
  itemTap1() {
    my.alert({
      content: '点击1',
    });
  },
});
```