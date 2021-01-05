# AmountInput 金额输入

金额输入框。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/qZmlRHhFariKmpfXMsTC.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| type | input 的类型，有效值：digit、number | String | number | false |
| title | 左上角标题 | String |  | false |
| extra | 左下角说明 | String |  | false |
| value | 输入框当前值 | String |  | false |
| btnText | 右下角按钮文案 | String |  | false |
| placeholder | placeholder | String | | false |
| focus | 自动获取光标 | Boolean | false | false |
| onInput | 键盘输入时触发 | (e: Object) => void | | false |
| onFocus | 获取焦点时触发 | (e: Object) => void | | false |
| onBlur | 失去焦点时触发 | (e: Object) => void | | false |
| onConfirm | 点击键盘完成时触发 | (e: Object) => void | | false |
| onClear | 点击 clear 图标触发 | () => void | | false |
| onButtonClick | 点击右下角按钮时触发 | () => void | | false |
| maxLength | 最多允许输入的字符个数 | Number | | false |
| controlled | 是否为受控组件。为 true时，value内容会完全受setData控制 | Boolean | false | false |


## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "amount-input": "mini-antui/es/amount-input/index"
  }
}
```

```html
<view>
  <amount-input
    type="digit"
    title="转入金额"
    extra="建议转入¥100以上金额"
    placeholder="输入转入金额"
    value="{{value}}"
    maxLength="5"
    focus="{{true}}"
    btnText="全部提现"
    onClear="onInputClear"
    onInput="onInput"
    onConfirm="onInputConfirm" />
</view>
```

```javascript
Page({
  data: {
    value: 200,
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputConfirm() {
    my.alert({
      content: 'confirmed',
    });
  },
  onInput(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'button clicked',
    });
  },
  onInputFocus() {},
  onInputBlur() {},
});
```
