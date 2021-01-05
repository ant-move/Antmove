## InputItem 文本输入

文本输入。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/HoUOLnPEOaymuHlbeyqR.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 |
| ---- |----|----|----|
| className | 自定义的class | String| '' |
| labelCls | 自定义label的class | String | '' |
| inputCls | 自定义input的class | String | '' |
| last | 是否最后一行 | Boolean | false |
| value | 初始内容 | String | '' |
| name | 组件名字，用于表单提交获取数据 | String | '' |
| type | input 的类型，有效值：`text`, `number`, `idcard`, `digit` | String | text |
| password | 是否是密码类型 | Boolean | false |
| placeholder | 占位符 | String | '' |
| placeholderStyle | 指定 placeholder 的样式 | String | '' |
| placeholderClass | 指定 placeholder 的样式类 | String | '' |
| disabled | 是否禁用 | Boolean | false |
| maxlength | 最大长度 | Number | 140 |
| focus | 获取焦点 | Boolean | false |
| clear | 是否带清除功能，仅disabled为false才生效 | Boolean | false |
| onInput | 键盘输入时触发input事件 | (e: Object) => void |  |
| onConfirm | 点击键盘完成时触发 | (e: Object) => void |  |
| onFocus | 聚焦时触发 | (e: Object) => void |  |
| onBlur | 失去焦点时触发 | (e: Object) => void |  |
| onClear | 点击清除icon时触发 | () => void |  |

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染input-item项右边说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "input-item": "mini-antui/es/input-item/index",
    "picker-item": "mini-antui/es/picker-item/index"
  }
}
```

```axml
<view>
  <view style="margin-top: 10px;" />
  <list>
    <input-item
      data-field="cardNo"
      clear="{{true}}"
      value="{{cardNo}}"
      className="dadada"
      placeholder="银行卡号"
      focus="{{inputFocus}}"
      onInput="onItemInput"
      onFocus="onItemFocus"
      onBlur="onItemBlur"
      onConfirm="onItemConfirm"
      onClear="onClear"
    >
      卡号
      <view slot="extra" class="extra" onTap="onExtraTap"></view>
    </input-item>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onPickerTap"
    >
      发卡银行
    </picker-item>
    <input-item
      data-field="name"
      placeholder="姓名"
      type="text"
      value="{{name}}"
      clear="{{true}}"
      onInput="onItemInput"
      onClear="onClear"
    >
      姓名
    </input-item>
    <input-item
      data-field="password"
      placeholder="密码"
      password
    >
      密码
    </input-item>
    <input-item
      data-field="remark"
      placeholder="备注"
      last="{{true}}"
    />
  </list>
  <view style="margin: 10px;">
    <button type="primary" onTap="onAutoFocus">聚焦</button>
  <view>
</view>
```

```javascript
const banks = ['网商银行', '建设银行', '工商银行', '浦发银行'];

Page({
  data: {
    cardNo: '1234****',
    inputFocus: true,
    bank: '',
    name: '',
  },
  onAutoFocus() {
    this.setData({
      inputFocus: true,
    });
  },
  onExtraTap() {
    my.alert({
      content: 'extra tapped',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {
    this.setData({
      inputFocus: false,
    });
  },
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onPickerTap() {
    my.showActionSheet({
      title: '选择发卡银行',
      items: banks,
      success: (res) => {
        this.setData({
          bank: banks[res.index],
        });
      },
    });
  },
});
```

```css
.extra {
  background-image: url('https://gw.alipayobjects.com/zos/rmsportal/dOfSJfWQvYdvsZiJStvg.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.2;
  height: 20px;
  width: 20px;
  padding-left: 10px;
}
```
