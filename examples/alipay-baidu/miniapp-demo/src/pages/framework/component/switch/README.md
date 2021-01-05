# switch

单选项目。

扫码体验：

![switch.png](https://cache.amap.com/ecology/tool/miniapp/1563519479615.png)

| 属性名 | 类型 | 默认值 | 描述 | 最低版本 |
| :--- | :--- | :--- | :--- | :--- |
| name | String |  | 组件名字，用于表单提交获取数据 | v8.90.0 |
| checked | Boolean |  | 是否选中 | v8.90.0 |
| disabled | Boolean |  | 是否禁用 | v8.90.0 |
| color | String |  | 组件颜色 | v8.90.0 |
| onChange | EventHandle |  | checked 改变时触发，event.detail={ value:checked} | v8.90.0 |
| controlled | Boolean | false | 是否为受控组件，为true时，checked会完全受setData控制 | v8.90.0 |

### Screenshot

![](https://zos.alipayobjects.com/rmsportal/ilvTMrUIYeUIBZvCFePM.png#align=left&display=inline&height=434&originHeight=436&originWidth=750&status=done&width=746)

### 示例

```html
<view class="page">
  <view class="page-description">开关</view>
  <view class="page-section">
    <view class="page-section-demo switch-list">
      <view class="switch-item">
        <switch checked="{{checked}}" controlled="true" onChange="switch1Change" name="switch"/>
      </view>
      <view class="switch-item">
        <switch onChange="switch2Change"/>
      </view>
      <view class="switch-item">
        <switch color="red" disabled checked />
      </view>
    </view>
  </view>
</view>
```

```javascript
Page({
  data: {
    switch1: true,
    checked: true,
  },
  switch1Change(e) {
    console.log(e)
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    this.setData({
      switch1: e.detail.value,
      checked: !this.data.checked,
    })
  },
  switch2Change(e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  },
})
```
