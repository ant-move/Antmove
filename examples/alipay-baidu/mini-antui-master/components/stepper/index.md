# Stepper 步进器

用作增加或者减少当前数值。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/TGdJemwrVBJGZgCvUzJF.jpeg" width="154" height="190" />


| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| min | 最小值 | Number | 0 | true |
| max | 最大值 | Number | 10000 | true |
| value | 初始值 | Number | 10 | true |
| step | 每次改变步数，可以为小数 | Number | 1 | false |
| onChange | 变化时回调函数 | (value: Number) => void | | false |
| disabled | 禁用 | Boolean | false | false |
| readOnly | input 只读 | Boolean | false | false |
| showNumber | 是否显示数值，默认不显示 | Boolean | false | false |



## 示例

```json
{
  "defaultTitle": "Stepper",
  "usingComponents":{
    "stepper": "mini-antui/es/stepper/index",
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index"
  }
}
```

```html
<list>
  <list-item disabled="{{true}}">
    Show number value
    <view slot="extra">
      <stepper onChange="callBackFn" step="{{1}}" showNumber readOnly="{{false}}" value="{{value}}" min="{{2}}" max="{{12}}" />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Do not show number value
    <view slot="extra">
      <stepper onChange="callBackFn" step="{{1}}" readOnly="{{false}}" value="{{value}}" min="{{2}}" max="{{12}}" />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Disabled
    <view slot="extra">
      <stepper onChange="callBackFn" showNumber value="{{11}}" min="{{2}}" max="{{12}}" disabled />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    readOnly
    <view slot="extra">
      <stepper onChange="callBackFn" showNumber value="{{11}}" min="{{2}}" max="{{12}}" readOnly />
    </view>
  </list-item>
  <list-item>
    <button onTap="modifyValue">修改setper初始值</button>
  </list-item>
</list>
```

```javascript
Page({
  data: {
    value: 8,
  },
  callBackFn(value){
   console.log(value);
  },
  modifyValue() {
    this.setData({
      value: this.data.value + 1,
    });
  }
});
```