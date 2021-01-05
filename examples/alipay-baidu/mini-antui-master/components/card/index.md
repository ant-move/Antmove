# Card 卡片

卡片。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/XptnMtDkEbMxinQIPGwL.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| thumb | Card缩略图地址 | String |  | false |
| title | Card标题 | String | | true |
| subTitle | Card副标题 | String |  | false |
| footer | footer文字 | String |  | false |
| footerImg | footer图片地址 | String | | false |
| onCardClick | Card点击的回调 | (info: Object) => void | | false |
| info | 用于点击卡片时往外传递数据 | String | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "card": "mini-antui/es/card/index"
  }
}
```

```html
<card
  thumb="{{thumb}}"
  title="卡片标题"
  subTitle="副标题非必填"
  onClick="onCardClick"
  footer="描述文字"
  footerImg="{{footerImg}}"
  info="dadadadadada"
/>
```

```javascript
Page({
  data: {
    tagData: [
      { date: '2018-05-14', tag: '还房贷', tagColor: 5 },
      { date: '2018-05-28', tag: '公积金', tagColor: 2 },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
});
```