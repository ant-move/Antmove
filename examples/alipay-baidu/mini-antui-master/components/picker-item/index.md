## PickerItem 选择输入

文本输入。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/HoUOLnPEOaymuHlbeyqR.jpeg" width="154" height="190" />

选择输入。

| 属性名 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| className | 自定义的class | String|  |
| labelCls | 自定义label的class | String | |
| pickerCls | 自定义选择区域的class | String | |
| last| 是否最后一行 | Boolean | false |
| value| 初始内容 | String | |
| name| 组件名字，用于表单提交获取数据 | String | |
| placeholder | 占位符 | String | |
| onPickerTap | 点击pickeritem时触发 | (e: Object) => void | |

## slots

| slotname | 说明 |
| ---- | ---- |
| extra | 可选，用于渲染picker-item项右边说明 |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "picker-item": "mini-antui/es/picker-item/index",
    "input-item": "mini-antui/es/input-item/index"
  }
}
```

```axml
<view>
  <list>
    <input-item
      data-field="password"
      placeholder="密码"
      password
    >
      密码
    </input-item>
    <picker-item
      data-field="bank"
      placeholder="选择发卡银行"
      value="{{bank}}"
      onPickerTap="onSelect"
    >
      发卡银行
    </picker-item>
  </list>
</view>
```

```javascript
const banks = ['网商银行', '建设银行', '工商银行', '浦发银行'];

Page({
  data: {
    bank: '',
  },
  onSelect() {
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