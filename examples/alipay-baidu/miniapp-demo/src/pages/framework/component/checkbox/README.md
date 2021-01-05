# CheckBox

扫码体验：

![checkbox.png](https://cache.amap.com/ecology/tool/miniapp/1563519216807.png)

## checkbox-group
多项选择器组。

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |
| onChange | EventHandle |  | 中选中项发生改变时触发，detail = {value: 选中的checkbox项value的值} | v8.90.0 |

## checkbox
多选项目。

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| value | String |  | 组件值，选中时 change 事件会携带的 value | v8.90.0 |
| checked | Boolean | false | 当前是否选中，可用来设置默认选中 | v8.90.0 |
| disabled | Boolean | false | 是否禁用 |  |
| onChange | EventHandle |  | 组件发生改变时触发，detail = {value: 该 checkbox 是否 checked} | v8.90.0 |
| color | Color |  | checkbox的颜色 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/VpNrLvuCScrfwfepVAch.png#align=left&display=inline&height=835&originHeight=839&originWidth=750&status=done&width=746)

### 示例

```html
<view class="page">
  <view class="page-description">复选框</view>
  <form onSubmit="onSubmit" onReset="onReset">
    <view class="page-section">
      <view class="page-section-title">选择你用过的框架：</view>
      <view class="page-section-demo">
        <checkbox-group onChange="onChange" name="libs">
          <label class="checkbox" a:for="{{items}}" key="label-{{index}}">
            <checkbox value="{{item.name}}" color="red" checked="{{item.checked}}" disabled="{{item.disabled}}" onChange="change"/>
            <text class="checkbox-text">{{item.value}}</text>
          </label>
        </checkbox-group>
      </view>
      <view class="page-section-btns">
        <view><button size="mini" type="default" formType="reset">reset</button></view>
        <view><button size="mini" type="default" formType="submit">submit</button></view>
      </view>
    </view>
  </form>
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
      content: `你选择的框架是 ${e.detail.value.libs.join(', ')}`,
    })
  },
  onReset() {
    my.alert({
      content: '重置',
    })
  },
  onChange(e) {
    console.log(e)
  },
  change() {
    console.log('change')
  },
})
```
