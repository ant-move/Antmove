# vtabs 纵向选项卡

用于让用户在不同的视图中进行切换。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/iYBdHWcyPaNUDTQaNznG.jpeg" width="154" height="190" />

## vtabs

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| activeTab | 当前激活Tab索引 | number |  | true |
| tabs | tab数据，其中包括选项标题`title`，列表唯一锚点值，以及徽标类型`badgeType`，分为圆点`dot`和文本`text`，不设置`badgeType`则不显示徽标。徽标文本`badgeText`在`badgeType`为`text`时生效 | Array<title, anchor> |  | true |
| animated | 是否开启动画 | Boolean| | false |
| swipeable | 是否可滑动切换 | Boolean| | true |
| tabBarActiveBgColor | tabBar激活状态背景色 | String | | false |
| tabBarInactiveBgColor | tabBar非激活状态背景色 | String | | false |
| tabBarActiveTextColor | tabBar激活Tab文字颜色 | String | | false |
| tabBarInactiveTextColor | tabBar非激活Tab文字颜色 | String | | false |
| tabBarlineColor | tabBar侧划线颜色 | String | | false |
| onTabClick | tab 被点击的回调 | (index: Number) => void | | false |
| onChange | vtab-content变化时触发 | (index: Number) => void | | false |

## vtab-content

视图内容

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| anchor | 列表唯一锚点值 | String | | true|

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "vtabs": "mini-antui/es/vtabs/index",
    "vtab-content": "mini-antui/es/vtabs/vtab-content/index"
  }
}
```

```html
<view>
  <vtabs
    tabs="{{tabs}}"
    onTabClick="handleChange"
    onChange="onChange"
    activeTab="{{activeTab}}"
  >
    <block a:for="{{tabs}}">
      <vtab-content anchor="{{item.anchor}}">
        <view style="border: 1px solid #eee; height: 800px; box-sizing: border-box">
          <text>content of {{item.title}}</text>
        </view>
      </vtab-content>
    </block>
  </vtabs>
</view>
```

```javascript
Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: '选项二', anchor: 'a', badgeType: 'dot' },
      { title: '选项', anchor: 'b', badgeType: 'text', badgeText: '新' },
      { title: '不超过五字', anchor: 'c' },
      { title: '选项四', anchor: 'd' },
      { title: '选项五', anchor: 'e' },
      { title: '选项六', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    console.log('onChange', index);
    this.setData({
      activeTab: index,
    });
  },
});
```
