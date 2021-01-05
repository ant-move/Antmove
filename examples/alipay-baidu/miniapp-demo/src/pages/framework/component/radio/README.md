# radio

扫码体验：

![radio.png](https://cache.amap.com/ecology/tool/miniapp/1563519120908.png)

## radio-group
单项选择器组。

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| onChange | EventHandle |  | 选中项发生变化时触发，event.detail = {value: 选中项radio的value} | v8.90.0 |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |

## radio
单选项目。

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | String |  | 组件值，选中时 change 事件会携带的 value | v8.90.0 |
| checked | Boolean | false | 当前是否选中 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 | v8.90.0 |
| color | Color |  | radio的颜色 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/YdMovutkafGtVRhZMsRm.png#align=left&display=inline&height=324&originHeight=643&originWidth=750&status=done&width=378)

### 示例

```html
<view class="page">
  <view class="page-description">单选框</view>
  <view class="page-section">
    <view class="section section_gap">
      <form onSubmit="onSubmit" onReset="onReset">
        <view class="page-section-demo">
          <radio-group class="radio-group" onChange="radioChange" name="lib">
            <label class="radio" a:for="{{items}}" key="label-{{index}}">
              <radio value="{{item.name}}" color="red" checked="{{item.checked}}" disabled="{{item.disabled}}" />
              <text class="radio-text">{{item.value}}</text>
            </label>
          </radio-group>
        </view>
        <view class="page-section-btns">
          <view><button size="mini" type="default" formType="reset">reset</button></view>
          <view><button size="mini" type="default" formType="submit">submit</button></view>
        </view>
      </form>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    items: [
      { name: 'angular', value: 'AngularJS' },
      { name: 'react', value: 'React', checked: true },
      { name: 'polymer', value: 'Polymer' },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: e.detail.value.lib,
    })
  },
  onReset() {
    my.alert({
      content: '重置',
    })
  },
  radioChange(e) {
    console.log('你选择的框架是：', e.detail.value)
  },
})
```
