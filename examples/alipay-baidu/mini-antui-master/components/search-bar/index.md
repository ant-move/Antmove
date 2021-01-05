# SearchBar 搜索栏

搜索栏。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/VtRSLehBBvvrKgQSjOvZ.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| value | 搜索框的当前值 | String |  | false |
| placeholder | placeholder | String | | false |
| focus | 自动获取光标 | Boolean | false | false |
| onInput | 键盘输入时触发 | (value: String) => void | | false |
| onClear | 点击 clear 图标触发 | (val: String) => void | | false |
| onFocus | 获取焦点时触发 | () => void | | false |
| onBlur | 失去焦点时触发 | () => void | | false |
| onCancel | 点击取消时触发 | () => void | | false |
| onSubmit | 点击键盘的 enter 时触发 | (val: String) => void | | false |
| disabled | 设置禁用 | Boolean | | false |
| maxLength | 最多允许输入的字符个数 | Number | | false |
| showCancelButton | 是否一直显示取消按钮 | Boolean | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "search-bar": "mini-antui/es/search-bar/index"
  }
}
```

```html
<view>
  <search-bar
    value="{{value}}"
    placeholder="搜索"
    onInput="handleInput"
    onClear="handleClear"
    onFocus="handleFocus"
    onBlur="handleBlur"
    onCancel="handleCancel"
    onSubmit="handleSubmit"
    showCancelButton="{{false}}" />
</view>
```

```javascript
Page({
  data: {
    value: '美食',
  },
  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear(value) {
    this.setData({
      value: '',
    });
  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
});
```
