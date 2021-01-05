# Filter 筛选

用作标签卡筛选。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/CGpZwarBxYgOdUWtiVyC.jpeg" width="154" height="190" />

## filter

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| show | 是否显示 可选值 `show` `hide` | String | hide | false |
| max | 可选数量最大值，1为单选 | Number | 10000 | false |
| onChange | 多选时提交选中回调 | (e: Object) => void | | false |

## filter-item

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| className | 自定义样式 | String | | false |
| value | 值 | String | | true |
| id | 自定义标识符 | String | | false |
| selected | 默认选中 | Boolean | false | false |
| onChange | 单选时提交选中回调 | (e: Object) => void | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "filter": "mini-antui/es/filter/index",
    "filter-item": "mini-antui/es/filter/filter-item/index"
  }
}
```

```html
<filter show="{{show}}" max="{{5}}" onChange="handleCallBack">
  <block a:for="{{items}}">
    <filter-item value="{{item.value}}" id="{{item.id}}" selected="{{item.selected}}"/>
  </block>
</filter>
```

```javascript
Page({
  data: {
    show: true,
    items: [
      { id: 1, value: '衣服', selected: true },
      { id: 1, value: '橱柜' },
      { id: 1, value: '衣架' },
      { id: 3, value: '数码产品' },
      { id: 4, value: '防盗门' },
      { id: 5, value: '椅子' },
      { id: 7, value: '显示器' },
      { id: 6, value: '某最新款电子产品' },
      { id: 8, value: '某某某某某牌电视游戏底座' },
    ]
  },
  handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  }
});
```
