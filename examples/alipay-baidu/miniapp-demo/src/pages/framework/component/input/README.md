# input

输入框。

扫码体验：

![input.png](https://cache.amap.com/ecology/tool/miniapp/1563518620095.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | String |  | 初始内容 | v8.90.0 |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |
| class | String |  | 外部样式名 | v8.90.0 |
| style | String |  | 内联样式 | v8.90.0 |
| type | String | text | input 的类型，有效值：`text`、 `number`、 `idcard`、 `digit` | v8.90.0 |
| password | Boolean | false | 是否是密码类型 | v8.90.0 |
| placeholder | String |  | 占位符 | v8.90.0 |
| placeholder-style | String |  | 指定 placeholder 的样式 | v8.90.0 |
| placeholder-class | String |  | 指定 placeholder 的样式类 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 | v8.90.0 |
| maxlength | Number | 140 | 最大长度 | v8.90.0 |
| focus | Boolean | false | 获取焦点 | ios:v9.10<br/>android:v10.00 |
| confirm-type | String | done | 设置键盘右下角按钮的文字，有效值：`done`（显示“完成”）、`go`（显示“前往”）、`next`（显示“下一个”）、`search`（显示“搜索”）、`send`（显示“发送”），平台不同显示的文字略有差异.<br />注意只有在 type=text 时有效 | v9.0.5 |
| confirm-hold | Boolean | false | 点击键盘右下角按钮时是否保持键盘不收起状态 | v9.0.5 |
| selection-start | Number | -1 | 获取光标时，选中文本对应的焦点光标起始位置，需要和selection-end配合使用 | v8.90.0 |
| selection-end | Number | -1 | 获取光标时，选中文本对应的焦点光标结束位置，需要和selection-start配合使用 | v8.90.0 |
| onInput | EventHandle |  | 键盘输入时触发input事件，event.detail = {value: value} | v8.90.0 |
| onConfirm | EventHandle |  | 点击键盘完成时触发，event.detail = {value: value} | v8.90.0 |
| onFocus | EventHandle |  | 聚焦时触发，event.detail = {value: value} | v8.90.0 |
| onBlur | EventHandle |  | 失去焦点时触发，event.detail = {value: value} | v8.90.0 |
| randomNumber | Boolean | false | 当`type`为`number`、`digit`、`idcard`数字键盘是否随机排列 | v9.10.0 |
| controlled | Boolean | false | 是否为受控组件。为 true时，value内容会完全受setData控制 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/vQYrPjIpKffmGxBmsPSE.png#align=left&display=inline&height=321&originHeight=603&originWidth=1400&status=done&width=746)

### 示例

```html
<input placeholder="此处只有在点击下方按钮时才聚焦" focus="{{focus}}" />
<button size="mini" onTap="bindButtonTap">聚焦</button>
<input maxlength="10" placeholder="最大输入长度10" />
<input onInput="bindKeyInput" placeholder="输入同步到view中"/>
<input type="number" placeholder="这是一个数字输入框" />
<input password type="text" placeholder="这是一个密码输入框" />
<input type="digit" placeholder="带小数点的数字键盘"/>
<input type="idcard" placeholder="身份证输入键盘" />
```

```javascript
Page({
  data: {
    focus: false,
    inputValue: '',
  },
  bindButtonTap() {
    this.setData({
      focus: true,
    });
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
});
```
