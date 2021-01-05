# Footer 页脚

显示页面页脚。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/EdfgZYAQrrlpnqQKGMqa.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| copyright | 版权信息 | String |  | false |
| links | 页脚链接 | Array<text, url> |  | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents":{
    "footer": "mini-antui/es/footer/index"
  }
}
```

```html
<view>
  <footer
    copyright="{{copyright}}"
    links="{{links}}" />
</view>
```

```javascript
Page({
 data: {
    copyright: '© 2004-2017 Alipay.com. All rights reserved.',
    links: [
      { text: '底部链接', url: '../../list/demo/index' },
      { text: '底部链接', url: '../../card/demo/index' },
    ],
 },
});
```
