## SwipeAction 可滑动单元格

可滑动单元格

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/AJKkYtCpuwuoaKTQijUB.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义class | String| |
| right | 滑动选项，最多两项 | Array[Object{type: `edit`/`delete`, text: string}]| [] |
| onRightItemClick | 点击滑动选项 | ({index, detail, extra, done}) => void | 调用done从而使swipe-action合上 |
| restore | 还原组件到初始状态，当有多个swipe-action组件时，当滑动其中一个时，需要将其他的组件的`restore`属性设置为`true`，避免一个页面同时存在多个swipeAction处于活动状态。 | Boolean | false |
| onSwipeStart | 开始滑动回调 | (e: Object) => void |  |
| extra | 附属信息，会在onRightItemClick回调中获取 | any | |

## 示例

```json
{
  "defaultTitle": "SwipeAction",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "swipe-action": "mini-antui/es/swipe-action/index"
  }
}
```

```html
<view>
  <list>
    <view a:for="{{list}}" key="{{item.content}}">
      <swipe-action
        index="{{index}}"
        restore="{{swipeIndex === null || swipeIndex !== index}}"
        right="{{item.right}}"
        onRightItemClick="onRightItemClick"
        onSwipeStart="onSwipeStart"
        extra="item{{index}}"
      >
        <list-item
          arrow="horizontal"
          index="{{index}}"
          key="items-{{index}}"
          onClick="onItemClick"
          last="{{index === list.length - 1}}"
        >
          {{item.content}}
        </list-item>
      </swipe-action>
    </view>
  </list>
</view>
```

```javascript
Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: '删除' }], content: 'AAA' },
      { right: [{ type: 'edit', text: '取消收藏' }, { type: 'delete', text: '删除' }], content: 'BBB' },
      { right: [{ type: 'delete', text: '删除' }], content: 'CCC' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: [...list],
            });
          }

          my.showToast({
            content: '确定 => 执行滑动删除还原',
          });
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
```
