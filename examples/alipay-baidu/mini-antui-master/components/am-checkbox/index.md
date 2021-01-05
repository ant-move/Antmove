# AMCheckBox 复选框

复选框。

扫码体验：

<img src="https://gw.alipayobjects.com/zos/rmsportal/ttsOmZZOgOesoeoxJZgw.jpeg" width="154" height="190" />

| 属性名 | 描述 | 类型 | 默认值 | 必选 |
| ---- | ---- | ---- | ---- | ---- |
| value | 组件值，选中时 change 事件会携带的 value | String |  | false |
| checked | 当前是否选中，可用来设置默认选中 | Boolean | false | false |
| disabled | 是否禁用 | Boolean | false | false |
| onChange | change 事件触发的回调函数 | (e: Object) => void |  | false |
| id | 与label组件的for属性组合使用 | String | | false |

## 示例

```json
{
  "defaultTitle": "小程序AntUI组件库",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "am-checkbox": "mini-antui/es/am-checkbox/index"
  }
}
```

```html
<list>
  <view slot="header">
    列表+复选框
  </view>
  <block a:for="{{items}}">
    <list-item
      thumb=""
      arrow="{{false}}"
      index="{{index}}"
      key="items-{{index}}"
      last="{{index === (items.length - 1)}}"
    >
      <view slot="prefix" style="display: flex; align-items: center;">
        <am-checkbox id="{{item.id}}" data-name="{{item.value}}" disabled="{{item.disabled}}" checked="{{item.checked}}" onChange="onChange" />
      </view>
      <label for="{{item.id}}">{{item.title}}</label>
    </list-item>
  </block>
</list>
<view style="padding: 16px;">
  <view style="color: #888; font-size: 14px;">
    协议
  </view>
  <view style="margin-top: 10px;">
    <label style="display: flex; line-height: 24px;">
      <am-checkbox />
      <text style="text-indent: 8px; color: #888">同意 《信用支付服务合同》</text>
    </label>
  </view>
</view>
<view style="padding: 16px; background-color: #fff;">
  <form onSubmit="onSubmit" onReset="onReset">
    <view>
      <view style="color: #666; font-size: 14px; margin-bottom: 5px;">选择你用过的框架：</view>
      <view>
        <checkbox-group name="libs">
          <label a:for="{{items2}}" style="display: flex; align-items: center; height: 30px;">
            <am-checkbox value="{{item.name}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
            <text style="color: #888; font-size: 14px; margin-left: 8px;">{{item.value}}</text>
          </label>
        </checkbox-group>
      </view>
      <view style="margin-top: 10px;">
        <button type="primary" size="mini" formType="submit">submit</button>
      </view>
    </view>
  </form>
</view>
```

```javascript
Page({
  data: {
    items: [
      { checked: true, disabled: false, value: 'a', title: '复选框-默认选中', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', title: '复选框-默认未选中', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: '复选框-默认选中disabled', id: 'checkbox3' },
      { checked: false, disabled: true, value: 'd', title: '复选框-默认未选中disabled', id: 'checkbox4' },
    ],
    items2: [
      { name: 'react', value: 'React', checked: true },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: `你选择的框架是 ${e.detail.value.libs.join(', ')}`,
    });
  },
  onReset() {},
  onChange(e) { console.log(e); },
});
```